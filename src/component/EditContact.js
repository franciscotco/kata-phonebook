import React from 'react';
import { withRouter } from "react-router-dom";

// Component
import FillFormContact from './FillFormContact';

// constant
import { URI, UPDATE_CONTACT, PUT, DELETE, ID_OPT, DELETE_CONTACT, ROOT } from '../constant';

// Style
import './EditContact.css'

function EditContact(props) {
   const { history, match } = props;
   const { firstName, lastName, phoneNumber, id } = match.params;

   const handleOnClick = () => {
      fetch(URI + DELETE_CONTACT, {
            method: DELETE,
            body: ID_OPT + id,
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
         })
         .then(() => history.push(ROOT))
         .catch(err => console.error(err))
   }

   return (
      <>
         <FillFormContact id={id} firstName={firstName} lastName={lastName} phoneNumber={phoneNumber} link={URI + UPDATE_CONTACT} method={PUT} textInfo={"Edit contact"}/>
         <div onClick={handleOnClick} className="button-edit-contact">
            Delete
         </div>
      </>
   )
}

export default withRouter(EditContact);