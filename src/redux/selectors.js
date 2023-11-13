import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterName = state => state.filter.name;

export const selectCurrentContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filterName) => {
    if (!filterName) return contacts;
    else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }
  }
);
