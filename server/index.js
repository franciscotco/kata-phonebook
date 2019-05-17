import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';

// Utils
import { find_contacts, create_contact, remove_contact, update_contact, findByContact, write_contacts } from './utils';

// constant
import { 
  FIRST_NAME, LAST_NAME, PHONE_NUMBER, ID, 
  GET_CONTACT, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, 
  ALREADY_EXIST, CONTACT_CREATED, CONTACT_UPDATED, CONTACT_REMOVED,
  SAVE_FILE
} from '../src/constant';

// Run express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var contacts = [];

fs.readFile(SAVE_FILE, (err, buf) => {if (buf) contacts = JSON.parse(buf.toString())});

app.get(GET_CONTACT, (req, res) => {
  const { search } = req.query;

  res.send(find_contacts(search, contacts));
})

app.post(CREATE_CONTACT, (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;

  if (create_contact(firstName, lastName, phoneNumber, contacts)) {
    write_contacts(contacts);
    return res.send(CONTACT_CREATED);
  }
  else
    return res.status(422).send({ message: ALREADY_EXIST });
})

app.put(UPDATE_CONTACT, (req, res) => {
  const { firstName, lastName, phoneNumber, id } = req.body;
  const contact = {
    [FIRST_NAME]: firstName,
    [LAST_NAME]: lastName,
    [PHONE_NUMBER]: phoneNumber,
    [ID]: id
  };

  if (findByContact(contact, contacts))
    return res.status(422).send({ message: ALREADY_EXIST });
  contacts = remove_contact(id, contacts);
  contacts = update_contact(contact, contacts)
  write_contacts(contacts);
  return res.send(CONTACT_UPDATED);
})

app.delete(DELETE_CONTACT, (req, res) => {
  const { id } = req.body;

  contacts = remove_contact(id, contacts);
  write_contacts(contacts);  
  return res.send(CONTACT_REMOVED);
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
