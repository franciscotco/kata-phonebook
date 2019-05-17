import fs from 'fs';

import { FIRST_NAME, LAST_NAME, PHONE_NUMBER, ID, SAVE_FILE } from '../src/constant';

export const GenerateID = () => '_' + Math.random().toString(36).substr(2, 9);

export function findField(field, search_entry) {
   if (field && field.toLowerCase().indexOf(search_entry.toLowerCase()) !== -1)
     return true;
   return false;
}


export const filterBySearch = (search_entry, contacts) => 
   contacts.filter(contact => 
      findField(contact[FIRST_NAME], search_entry) || 
      findField(contact[LAST_NAME], search_entry) ||
      findField(contact[PHONE_NUMBER], search_entry))

export function find_contacts(search_entry, contacts) {
   const filteredContacts = filterBySearch(search_entry, contacts);

   if (!filteredContacts)
      return [];
   else if (!Array.isArray(filteredContacts))
      return [filteredContacts];
   else
      return filteredContacts;
}

export const findByContact = (contact, contacts) => contacts.find( element => 
   element[FIRST_NAME] === contact[FIRST_NAME] && element[LAST_NAME] === contact[LAST_NAME] && element[PHONE_NUMBER] === contact[PHONE_NUMBER]
)

export function create_contact(firstName, lastName, phoneNumber, contacts) {
   const contact = {
      [FIRST_NAME]: firstName,
      [LAST_NAME]: lastName,
      [PHONE_NUMBER]: phoneNumber,
      [ID]: GenerateID()
   }

   if (findByContact(contact, contacts))
      return null;
   contacts.push(contact);
   return true;
}


export const filterById = (id, contacts) => contacts.filter(element => element.id !== id);

export const findById = (id, contacts) => contacts.find(element => element.id === id);

export const remove_contact = (id, contacts) => {
  const filteredContacts = filterById(id, contacts);

  if (!filteredContacts)
    return [];
  else if (!Array.isArray(filteredContacts))
    return [filteredContacts];
  else
    return filteredContacts;
}

export const update_contact = (contact, contacts) => [...contacts, contact];

export const write_contacts = (contacts) => 
fs.writeFile(SAVE_FILE, JSON.stringify(contacts), (err) => {
   if (err) console.log(err);
      console.log("Successfully Written to File.");
});