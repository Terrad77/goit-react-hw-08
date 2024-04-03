import { useSelector } from 'react-redux';
// import css from './Login.module.css';
import ContactForm from '../../ContactForm/ContactForm';
import SearchBox from '../../SearchBox/SearchBox';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import ContactList from '../../ContactList/ContactList';

export default function Contacts() {
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);
  return (
    <>
      <ContactForm />
      <SearchBox />
      {error && <Error errorMessage={`${error}`}> Error message: </Error>}
      {loading && <Loader>Loading contacts</Loader>}
      <ContactList />
    </>
  );
}
