import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import css from './ContactEditor.module.css';
import toast from 'react-hot-toast';
import { useState } from 'react'; // Import useState hook

export default function ContactEditor() {
  const dispatch = useDispatch();
  const [name, setName] = useState(''); // State for name input
  const [number, setNumber] = useState(''); // State for number input

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      // Check if either field is empty
      toast.error('Name and number cannot be empty. Enter some text!');
      return;
    }
    const editedContact = { name, number }; // Create object with updated contact info
    dispatch(updateContact(editedContact)); // Dispatch updateContact action
    toast.success('Contact updated successfully'); // Show success toast
    setName(''); // Clear input fields after submission
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
