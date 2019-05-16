const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');

const app = express();
const contacts = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

function add_contact(contact) {
  return contacts.find(element => {
    return element.firstName === contact.firstName && element.lastName === contact.lastName && element.phoneNumber === contact.phoneNumber
  })
}

function create_contact(firstName, lastName, phoneNumber) {
  const contact = {
    firstName,
    lastName,
    phoneNumber
  }
  // console.log("add :", add_contact(contact))
  if (add_contact(contact)) return false;
  contacts.push(contact);
  return true;
}

app.post('/createcontact', (req, res) => {
  const { firstName, lastName, phoneNumber } = req.query;
  const isCreate = create_contact(firstName, lastName, phoneNumber);
  if(isCreate) return res.send("CREATE CONTACT");
  else return res.status(422).send({
    message: 'Contact already exist'
 });
  // console.log("BODY :", req.body);
  // console.log("QUERY :", req.query);
  // console.log("NAME :", firstName, lastName, phoneNumber);
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
