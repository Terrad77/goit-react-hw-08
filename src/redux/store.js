import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
// Імпорт редюсера контактів
import contactsReducer from './contacts/slice';
// Імпорт редюсера фільтрів
import filtersReducer from './filters/slice';
// Імпорт редюсера авторізації
import authReducer from './auth/slice';

const authPersistConfig = {
  key: 'authSlice', // Ключ, під яким дані будуть збережені у сховищі
  storage, //сховище для зберігання
  whitelist: ['token'], // Поля, які потрібно зберегти
};

// Обгортка редюсера авторизації для можливості зберігання
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Збереження конфігурації з використанням обгорнутого редюсера авторизації
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створення persistor для маніпуляції локальним сховищем
export const persistor = persistStore(store);
