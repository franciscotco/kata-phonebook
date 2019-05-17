import React from 'react';
import { withRouter } from 'react-router-dom';

// Utils
import { checkName, checkPhoneNumber } from './utils';

// Style
import './FillFormContact.css';

// constant
import { FIRST_NAME_OPT, LAST_NAME_OPT, PHONE_NUMBER_OPT, SEPARATOR_OPT, ID_OPT, ROOT} from '../constant';

const WRONG_FIRSTNAME = "Incorrect first name";
const WRONG_LASTNAME = "Incorrect last name";
const WRONG_PHONENUMBER = "Incorrect phone number ie : '+33 66 123456'";


const setColorInputs = (inputs) => inputs.forEach(input => input.current.style.borderColor = "rgb(155, 46, 59)");

function FillFormContact({firstName = "", lastName = "", phoneNumber = "", link, method, id = "", history, textInfo = "" }) {
   const inputFirstName = React.useRef(null);
   const inputLastName = React.useRef(null);
   const inputPhoneNumber = React.useRef(null);
   const [firstNameValue, setFirstNameValue] = React.useState(firstName);
   const [lastNameValue, setLastNameValue] = React.useState(lastName);
   const [phoneNumberValue, setPhoneNumberValue] = React.useState(phoneNumber);

   const [ errorMessages, setErrorMessages ] = React.useState([]);

   const handleOnChange = (setValue) => (event) => setValue(event.target.value);

   function checkInput(input, message, callback) {
      if (!input) return;
      const { value } = input.current;
   
      input.current.style.borderColor = "rgb(51, 51, 51)";
      console.log("CALLBACK")
      if (callback(value))
         return true;
      console.log("ERROR :", errorMessages);
      console.log("Message :", message);
      if (message === WRONG_FIRSTNAME || message === WRONG_LASTNAME)
         setErrorMessages([...errorMessages, message]);
      console.log("ERROR :", errorMessages);
      setColorInputs([input]);
      return false;
   }

   const checkParameters = () => {
      if (!inputFirstName && !inputLastName && !inputPhoneNumber) return true;
      
      let wrongInput = false;
      if (!checkInput(inputFirstName, WRONG_FIRSTNAME, checkName))
         wrongInput = true;
      if (!checkInput(inputLastName, WRONG_LASTNAME, checkName))
         wrongInput = true;
      if (!checkInput(inputPhoneNumber, WRONG_PHONENUMBER, checkPhoneNumber))
         wrongInput = true;
      return wrongInput;
   }

   const handleOnClick = () => {
      setErrorMessages([]);
      if(checkParameters()) return;
      const encodeFirstName = firstNameValue;
      const encodeLastName = lastNameValue;
      const encodePhoneNumber = phoneNumberValue.replace('+', '%2B', phoneNumberValue);

      fetch(link, {
            method,
            body: FIRST_NAME_OPT + encodeFirstName + SEPARATOR_OPT + LAST_NAME_OPT + encodeLastName + SEPARATOR_OPT + PHONE_NUMBER_OPT + encodePhoneNumber + SEPARATOR_OPT + ID_OPT + id,
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
         })
         .then(res => {
            if(res.ok)
               return history.push(ROOT)
            setColorInputs([inputFirstName, inputLastName, inputPhoneNumber])
            setErrorMessages([...errorMessages, "Contact already exist"])
         })
         .catch(err => console.error(err.message))
   }

   return(
      <div className="container-fill-form-contact">
         {textInfo}
            <div className="rouge-hermes-fill-form-contact">
               {errorMessages.map(message => message)}
            </div>
            <div className="container-input-field-fill-form-contact">
               <div className="text-fill-form-contact">First Name:</div>
               <input ref={inputFirstName} placeholder="Jean" type="text" value={firstNameValue} onChange={handleOnChange(setFirstNameValue)} className="input-fill-form-contact"/>
            </div>
            <div className="container-input-field-fill-form-contact">
               <div className="text-fill-form-contact">Last Name:</div>
               <input ref={inputLastName} placeholder="Neige" type="text" value={lastNameValue} onChange={handleOnChange(setLastNameValue)} className="input-fill-form-contact" />
            </div>
            <div className="container-input-field-fill-form-contact">
               <div className="text-fill-form-contact">Phone Number:</div>
               <input ref={inputPhoneNumber} placeholder="+49 56 123456" type="text" value={phoneNumberValue} onChange={handleOnChange(setPhoneNumberValue)} className="input-fill-form-contact"/>
            </div>
            <div onClick={handleOnClick} className="button-fill-form-contact">
               Submit
            </div>
      </div>
   )
}

export default withRouter(FillFormContact);