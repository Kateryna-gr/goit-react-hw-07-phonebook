import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://655111237d203ab6626e7f88.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ([name, number]) => {
    try {
      const response = await axios.post('/contacts', {
        name: name,
        phone: number,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
