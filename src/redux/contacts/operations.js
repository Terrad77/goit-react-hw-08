import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// отримання масиву контактів, GET @/contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      toast.success('fetchContacts fulfilled', {
        icon: '👍',
        style: { gap: '5px' },
      });

      return response.data;
    } catch (error) {
      toast.error(`fetchContacts rejected: ${error.message}`);
      //обробка помилок та надання резервного значення
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  додавання нового контакту, POST @/contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      toast.success('Contact is added', {
        icon: '👍',
        style: { gap: '5px' },
      });
      return response.data;
    } catch (error) {
      toast.error(`Contact is not saved: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// видалення контакту за ID, DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact was deleted', {
        icon: '👍',
        style: { gap: '5px' },
      });
      return contactId; // Повертаємо ID видаленого контакту
    } catch (error) {
      toast.error(`Contact is not deleted: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// оновлення контакту по ID, PATCH   @ /contacts/:id
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, number, name }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        number,
        name,
      });
      toast.success('Contact was updated', {
        icon: '👍',
        style: { gap: '5px' },
      });
      return response.data;
    } catch (error) {
      toast.error(`Contact is not updated: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
