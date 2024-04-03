import css from './ContactsPage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//імпорт копонентів
import PageTitle from '../../components/PageTitle/PageTitle';
import Contacts from '../../components/App/Contacts/Contacts';
// import ContactList from '../../components/ContactList/ContactList';
// import Loader from '../../components/Loader/Loader';
// import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
  // Отримання функції dispatch з Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // запит (dispatch action) на сервер для отримання контактів.
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <PageTitle>
        <b>Phonebook</b>
      </PageTitle>
      <Contacts />
    </div>
  );
}
