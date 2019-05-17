// ------------------
// ----- Models -----
// ------------------
export const SEARCH = "search"
export const FIRST_NAME = "firstName";
export const LAST_NAME = "lastName";
export const PHONE_NUMBER = "phoneNumber";
export const ID = "id";


// ---------------
// ----- URL -----
// ---------------
export const URL = "http://localhost:3000";

// Path
export const ROOT = "/";
export const HOME = "/";
export const ADD_CONTACT = "/add-contact";
export const EDIT_CONTACT = "/edit-contact";
export const EDIT_CONTACT_LINK = EDIT_CONTACT + "/:firstName/:lastName/:phoneNumber/:id";


// ---------------
// ----- URI -----
// ---------------
export const URI = "http://localhost:3001";

// Path
export const CREATE_CONTACT = "/create-contact";
export const GET_CONTACT = "/get-contact";
export const UPDATE_CONTACT = "/update-contact";
export const DELETE_CONTACT = "/delete-contact";

// Parameters Options
export const SEARCH_OPT = SEARCH + "=";
export const FIRST_NAME_OPT = FIRST_NAME + "=";
export const LAST_NAME_OPT = LAST_NAME + "=";
export const PHONE_NUMBER_OPT = PHONE_NUMBER + "=";
export const ID_OPT = ID + "=";
export const SEPARATOR_OPT = "&";
export const SEPARATOR_QUERY = "?";

// Request Method
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";

// -------------------------
// ----- Error Message -----
// -------------------------

export const CONTACT_ALREADY_EXIST = "Contact already exist";
export const CONTACT_UPDATED = "Contact Updated";
export const CONTACT_REMOVED = "Contact Removed";
export const CONTACT_CREATED = "Contact Created";

// ---------------------
// ----- DATA FILE -----
// ---------------------

export const SAVE_FILE = "persistant_data.txt";