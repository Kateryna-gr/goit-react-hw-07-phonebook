import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilterName = state => state.filter.name;

export const selectFilterNumber = state => state.filter.number;

export const selectFilteredList = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, filterName, filterNumber) => {
    if (filterName) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
    } else if (filterNumber) {
      return contacts.filter(contact => contact.number.includes(filterNumber));
    } else return contacts;
  }
);
