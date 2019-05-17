import React from 'react';
import { withRouter } from 'react-router-dom';

// constant
import { EDIT_CONTACT } from '../constant';

// Style
import './DropDownMenu.css'

function DropDownMenu(props) {
   const { list } = props;

   const handleOnClick = (element) => () => {
      const { history } = props;
      const { id, firstName, lastName, phoneNumber} = element;

      history.push(`${EDIT_CONTACT}/${firstName}/${lastName}/${phoneNumber}/${id}`);
   }

   console.log("LIST :", list);

   if (!list || !Array.isArray(list) || list.length < 1) return null;

   return (
      <div className="container-list-drop-down-menu">
         <div className="header-container-element-drop-down-menu">
            <div className="header-first-name-element-drop-down-menu">
               First Name        
            </div>
            <div className="header-last-name-element-drop-down-menu">
               Last Name
            </div>
            <div className="header-phone-number-element-drop-down-menu">
               Phone Number
            </div>
         </div>
         {list.map(element => {
            const { firstName, lastName, phoneNumber, id } = element;
            return (
               <div key={id} className="container-element-drop-down-menu" onClick={handleOnClick(element)}>
                  <div className="first-name-element-drop-down-menu">
                     {firstName}
                  </div>
                  <div className="last-name-element-drop-down-menu">
                     {lastName}
                  </div>
                  <div className="phone-number-element-drop-down-menu">
                     {phoneNumber}
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default withRouter(DropDownMenu);