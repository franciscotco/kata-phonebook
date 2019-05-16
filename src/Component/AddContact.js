import React from 'react';

// Utils
import { checkName, checkPhoneNumber } from './utils';

// Constant
import { URI, CREATE_CONTACT, FIRST_NAME, LAST_NAME, PHONE_NUMBER, SEPARATOR } from '../Constant';

// Style
import './AddContact.css';

const WRONG_FIRSTNAME = "Incorrect first name";
const WRONG_LASTNAME = "Incorrect last name";
const WRONG_PHONENUMBER = "Icorrect phone number ie : '+33 66 123456'";

function setColorInput(input) {
   if (!input) return;
   input.current.style.borderColor = "red";
}

function checkInput(input, message, callback, setError) {
   if (!input) return;
   const { value } = input.current;

   input.current.style.borderColor = "black";
   if (!callback(value)) {
      setError(message);
      setColorInput(input);
      return false;
   }
   console.log("MESSAGE:", message)
   return true;
}

export default function AddContact() {
   const firstName = React.useRef(null);
   const lastName = React.useRef(null);
   const phoneNumber = React.useRef(null);
   const [ errorMessage, setErrorMessage ] = React.useState("");

   const checkParameters = () => {
      if (!firstName && !lastName && !phoneNumber) return true;
      let wrongInput = false;
      
      if (checkInput(firstName, WRONG_FIRSTNAME, checkName, setErrorMessage) === false)
         wrongInput = true;
      if (checkInput(lastName, WRONG_LASTNAME, checkName, setErrorMessage) === false)
         wrongInput = true;
      if (checkInput(phoneNumber, WRONG_PHONENUMBER, checkPhoneNumber, setErrorMessage) === false)
         wrongInput = true;
      return wrongInput;
   }

   const handleOnClick = () => {
      if(checkParameters() === true) return;
      const firstNameValue = JSON.stringify(firstName.current.value)
      const lastNameValue = JSON.stringify(lastName.current.value)
      const phoneNumberValue = JSON.stringify(phoneNumber.current.value)
      // console.log("NAME :", firstNameValue);
      // console.log(" URI :", (URI + CREATE_CONTACT + FIRST_NAME + firstNameValue))
      console.log("REQ : ", URI + CREATE_CONTACT + FIRST_NAME + firstNameValue + SEPARATOR + LAST_NAME + lastNameValue + SEPARATOR + PHONE_NUMBER + phoneNumberValue)
      fetch(URI + CREATE_CONTACT + FIRST_NAME + firstNameValue + SEPARATOR + LAST_NAME + lastNameValue + SEPARATOR + PHONE_NUMBER + phoneNumberValue, {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         }})
         // .then(res => res.json())
         .then(res => {console.log(res); if (res.ok === false){
            setColorInput(firstName);
            setColorInput(lastName);
            setColorInput(phoneNumber);}})
         .catch(err => console.error(err))
   }

   return(
      <div>
         AddContact
         {/* <form method="post"> */}
            <div>
               {errorMessage}
            </div>
            <div>
               {/* <label for="firstName">Enter your first name: </label> */}
               firstName : 
               <input ref={firstName} type="text" name="firstName" id="firstName" required />
            </div>
            <div>
               {/* <label for="firstName">Enter your last name: </label> */}
               lastName : 
               <input ref={lastName} type="text" name="lastName" id="lastName" required />
            </div>
            <div>
               {/* <label for="firstName">Enter your phone number: </label> */}
               phone number : 
               <input ref={phoneNumber} type="text" name="phoneNumber" id="phoneNumber" required />
            </div>
            <div onClick={handleOnClick}>
               Submit
            </div>
         {/* </form> */}
      </div>
   )
}