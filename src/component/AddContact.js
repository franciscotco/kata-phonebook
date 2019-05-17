import React from 'react';

// Component
import FillFormContact from './FillFormContact';

// constant
import { URI, CREATE_CONTACT, POST } from '../constant';

// Style
import './AddContact.css';

const AddContact = () => <FillFormContact method={POST} link={URI + CREATE_CONTACT} textInfo={"Add contact"}/>;

export default AddContact;