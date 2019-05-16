import React from 'react';

export default function useApiContact(search_entry) {
   const [contact, setContact] = React.useState([]);

   React.useEffect(() => {
      if ( === "") return setCategories([]);
      fetch(URL + OPTION + search_term)
         .then(res => res.json())
         .then(dataList => setCategories(dataList))
         .catch(err => {console.error(err); setCategories([])})
   }, [search_term])

   return categories;
}