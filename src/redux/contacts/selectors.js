import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

// функція-селектор для useSelector, повертає список контактів з властивості items.
export const selectContacts = state => state.contacts.items;

// ф-ція фільтрації, використовуємо createSelector для мемоізації
export const selectVisibleContacts = createSelector(
  // селектор для вибору усіх контактів, Перший аргумент - масив залежностей, Другий аргумент - селектор для вибору фільтра
  [selectContacts, selectNameFilter],

  (contacts, filter) => {
    //умова на перевірку наявності фільтра
    // if (!filter) {
    //   return contacts;
    // }
    //     return contacts.filter(
    //       contact =>
    //         (contact.name && filter
    //           ? contact.name.toLowerCase().includes(filter.toLowerCase())
    //           : false) ||
    //         //пошук контактів за номером телефону
    //         contact.number.includes(filter)
    //     );
    //   }
    // );
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        //пошук контактів за номером телефону
        contact.number.includes(filter)
    );
  }
);
