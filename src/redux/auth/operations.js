import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

/* register - для реєстрації нового користувача
 * POST @ /users/signup
 * body: { name, email, password }
 *
 * After successful registration, add the token to the HTTP header
 */
export const register = createAsyncThunk(
  //Базовий тип екшену "auth/register"
  'auth/register',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* login - для логіну існуючого користувача.
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
export const logIn = createAsyncThunk(
  //Базовий тип екшену "auth/login"
  'auth/login',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* logout - для виходу з додатка.
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk(
  //Базовий тип екшену "auth/logout"
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* refreshUser - оновлення користувача за токеном
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  //Базовий тип екшену "auth/refresh"
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;

    // Add it to the HTTP header and perform the request
    setAuthHeader(savedToken);
    const response = await axios.get('/users/current');

    return response.data;
  },
  {
    condition: (_, { getState }) => {
      // Reading the token from the state via getState()
      const reduxState = getState();
      const savedToken = reduxState.auth.token;

      // If there is no token, exit without performing any request
      return savedToken !== null;
    },
  }
);
