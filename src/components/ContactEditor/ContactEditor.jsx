import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import css from './ContactEditor.module.css';
import toast from 'react-hot-toast';
import { useState } from 'react'; // Import useState hook

export default function ContactEditor({ initialValues }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(''); // State for name input
  const [number, setNumber] = useState(''); // State for number input

  // отримання id from initialValues
  const { id } = initialValues;

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      // Check if either field is empty
      toast.error('Name and number cannot be empty both. Enter some value!');
      return;
    }

    // вар2 Перевірка, чи було змінено ім'я або номер
    // if (
    //   name.trim() === initialValues.name &&
    //   number.trim() === initialValues.number
    // ) {
    //   // Якщо нічого не змінилося, виведемо помилку
    //   toast.error('No changes were made. Please update at least one field.');
    //   return;
    // }
    // // Створення об'єкта з оновленими даними
    // const updatedContact = {
    //   id,
    //   name: name.trim() !== '' ? name : initialValues.name,
    //   number: number.trim() !== '' ? number : initialValues.number,
    // };

    // Dispatch updateContact action
    dispatch(updateContact({ id, name, number }));
    toast.success('New contact info is saved'); // Show success toast

    // Clear input fields after submission
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>{' '}
      <input
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        className={css.input}
      />
      <label htmlFor="number">Number</label>{' '}
      <input
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Save
      </button>
    </form>
  );
}
