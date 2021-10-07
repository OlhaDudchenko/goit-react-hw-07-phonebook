import * as contactsActions from "./phonebookActions";
import * as contactsApi from "./phonebook-api";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await contactsApi.fetchContacts();
    // console.log(contacts)
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const postContacts = (config) => async (dispatch) => {
  dispatch(contactsActions.postContactsRequest());
  try {
    const contacts = await contactsApi.postContacts(config);
    // console.log(contacts)
    dispatch(contactsActions.postContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.postContactsError(error));
  }
};

export const deleteContacts = (id) => async (dispatch) => {
  dispatch(contactsActions.deleteContactsRequest());
  try {
    const contacts = await contactsApi.deleteContacts(id);
    // console.log(contacts)
    dispatch(contactsActions.deleteContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error));
  }
};
