import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterName = state => state.filter.name;

export const selectFilterNumber = state => state.filter.number;

export const selectCurrentContacts = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, filterName, filterNumber) => {
    if (filterName) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }
    if (filterNumber) {
      return contacts.filter(contact => contact.number.includes(filterNumber));
    }
    return contacts;
  }
);
