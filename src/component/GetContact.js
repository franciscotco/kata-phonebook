import React from 'react';

// Utils
import { sendQuery } from './utils';

// constant
import { URI, GET_CONTACT, GET, SEARCH } from '../constant';

export default function useApiContact(search_entry) {
   const [contact, setContact] = React.useState([]);

   React.useEffect(() => {
      if (search_entry === "") return setContact([]);
      const link = sendQuery(URI + GET_CONTACT, {[SEARCH]: search_entry});

      fetch(link, {
            method: GET,
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
         })
         .then(res => res.json())
         .then(contactList => setContact(contactList))
         .catch(err => { console.error(err); setContact([]); })
   }, [search_entry])

   return contact;
}