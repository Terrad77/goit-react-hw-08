import css from './Contact.module.css';
//npm install react-icons --save
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';

import { useState } from 'react';

import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState('');
  const [nameNew, setNameNew] = useState(''); // State for name input
  const [numberNew, setNumberNew] = useState(''); // State for number input

  const openDelete = () => setIsOpen('delete');
  const openEdit = () => setIsOpen('edit');
  const close = () => setIsOpen('');

  //функція обробник видалення контакту
  const handleDelete = () => {
    // Dispatch deleteContact action
    dispatch(deleteContact(id));
    close(); // Закрити модальне вікно після видалення
  };

  //функція обробник редагування контакту
  const handleEditContact = e => {
    e.preventDefault();
    // Dispatch updateContact action
    dispatch(updateContact({ id, name: nameNew, number: numberNew }));
    // Show success toast
    toast.success('New contact info is saved');

    // Clear input fields after submission
    setNameNew('');
    setNumberNew('');
    close(); // Закрити модалку після успішного оновлення
  };

  return (
    <div className={css.contactCard}>
      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <IoPersonSharp />
          {name}
        </li>
        <li className={css.contactItem}>
          <FaPhone />
          {number}
        </li>
      </ul>
      <div className={css.btnContainer}>
        <button className={css.btn} onClick={openEdit}>
          Edit
        </button>
        <button className={css.btn} onClick={openDelete}>
          Delete
        </button>
      </div>

      {/* Модальне вікно редагування контакту */}
      <Modal open={isOpen == 'edit' ? true : false} onClose={close}>
        <div>
          <form className={css.form} onSubmit={handleEditContact}>
            <label htmlFor="name">Name</label>{' '}
            <input
              name="name"
              value={nameNew}
              onChange={e => setNameNew(e.target.value)}
              className={css.input}
            />
            <label htmlFor="number">Number</label>{' '}
            <input
              name="number"
              value={numberNew}
              onChange={e => setNumberNew(e.target.value)}
              className={css.input}
            />
            <button type="submit" className={css.button}>
              Save
            </button>
          </form>
        </div>
      </Modal>
      {/* Модальне вікно видалення контакту */}
      <Modal
        open={isOpen == 'delete' ? true : false}
        onClose={close}
        aria-labelledby="modal-modal-title"
      >
        <Box className={css.box}>
          <Stack>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure to delete contact <span>{name}</span>?
            </Typography>
          </Stack>
          <Stack className={css.btnContainer}>
            <Button
              variant="contained"
              className={css.btn}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button variant="contained" className={css.btn} onClick={close}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
