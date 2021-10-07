import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import PropTypes from "prop-types";
import {
  List,
  ContactsListItem,
  ContactsListButton,
  ContactsListName,
} from "./ContactList.styled";
import * as contactsOperations from "../../redux/phonebook/phonebook-operation";

export function ContactsList() {
  const items = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <List>
      {items.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} id={id}>
            <ContactsListName>
              {name}: {number}
            </ContactsListName>
            <ContactsListButton
              onClick={() => dispatch(contactsOperations.deleteContacts(id))}
            >
              Delete
            </ContactsListButton>
          </ContactsListItem>
        );
      })}
    </List>
  );
}

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
