import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items; // функція-селектор для useSelector, повертає список контактів з властивості items.

// Використовуємо createSelector для мемоізації
export const selectVisibleContacts = createSelector(
  // масив залежностей Перший аргумент - селектор для вибору усіх контактів, Другий аргумент - селектор для вибору фільтра
  [selectContacts, selectNameFilter],

  (contacts, filter) => {
    // console.log(selectVisibleContacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
