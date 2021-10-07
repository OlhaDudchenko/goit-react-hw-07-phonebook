import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterItems } from "./phonebookActions";
import * as contactsActions from "./phonebookActions";

const filter = createReducer("", {
  [filterItems]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.postContactsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.postContactsRequest]: () => true,
  [contactsActions.postContactsSuccess]: () => false,
  [contactsActions.postContactsError]: () => false,

  [contactsActions.deleteContactsRequest]: () => true,
  [contactsActions.deleteContactsSuccess]: () => false,
  [contactsActions.deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});
export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});

//Reducer with simple redux:
// const items = (state = contactsList, { type, payload }) => {

//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.DELETE:
//             return state.filter(({id})=>id !== payload)

//         default:
//             return state;
//     }
// };

// const filter = (state = "", {type,payload}) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;
//         default:
//         return state;
//     }

// };
