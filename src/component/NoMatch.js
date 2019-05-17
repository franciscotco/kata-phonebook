import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
   return (
      <div>
         NoMatch
         <br />
         <Link to="/">
            Back to Home
         </Link>
      </div>
   )
}