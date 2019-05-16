import React from 'react';
//import {}

// Constant
import { URL, ROOT, ADD_CONTACT } from '../Constant';

// Style
import './NavTopBar.css'

export default function NavTopBar() {

   const handleOnClick = (link) => () => {
      console.log("Click : ", link)
   }

   return (
      <div className="container-nav-top-bar">
         <a href={URL + ROOT} onClick={handleOnClick(ROOT)} className="element-nav-top-bar">
            Search entry
         </a>
         <a href={URL + ADD_CONTACT} onClick={handleOnClick(ADD_CONTACT)} className="element-nav-top-bar">
            Add entry
         </a>
      </div>
   );
}