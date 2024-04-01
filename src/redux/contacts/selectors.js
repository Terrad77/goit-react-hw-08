import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

// функція-селектор для useSelector, повертає список контактів з властивості items.
export const selectContacts = state => state.contacts.items;

// ф-ція фільтрації, використано createSelector для мемоізації
export const selectVisibleContacts = createSelector(
  // селектор для вибору усіх контактів, Перший аргумент - масив залежностей, Другий аргумент - селектор для вибору фільтра
  [selectContacts, selectNameFilter],

  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        //add search contacts by number
        contact.number.includes(filter)
    );
  }
);
