import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phonebookReducer from "./phonebook/contacts-reducer";

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
