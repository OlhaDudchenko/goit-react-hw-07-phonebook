import { createAction } from "@reduxjs/toolkit";
// 1)first loading contacts on page:
//pending
export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
//fulfilled
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
//rejected
export const fetchContactsError = createAction("contacts/fetchContactsError");

// 2)add contacts:
// export const add = createAction("phonebook/add");
//pending
export const postContactsRequest = createAction("contacts/postContactsRequest");
//fulfilled
export const postContactsSuccess = createAction("contacts/postContactsSuccess");
//rejected
export const postContactsError = createAction("contacts/postContactsError");

// 3)delete contacts:
// export const add = createAction("phonebook/add");
//pending
export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
//fulfilled
export const deleteContactsSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
//rejected
export const deleteContactsError = createAction("contacts/deleteContactsError");

export const filterItems = createAction("phonebook/filter");

//Action with simple redux:
// export const add = (newContact) => ({
//         type: types.ADD,
//         payload: newContact,

// });
