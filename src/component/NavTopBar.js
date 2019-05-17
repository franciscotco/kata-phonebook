import React from 'react';

// constant
import { URL, ROOT, ADD_CONTACT } from '../constant';

// Style
import './NavTopBar.css'

export default function NavTopBar() {

   return (
      <div className="container-nav-top-bar">
         <a href={URL + ROOT} className="element-nav-top-bar">
            Search entry
         </a>
         <a href={URL + ADD_CONTACT} className="element-nav-top-bar">
            Add entry
         </a>
      </div>
   );
}