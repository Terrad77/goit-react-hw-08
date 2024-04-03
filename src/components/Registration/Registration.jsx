import { Link } from 'react-router-dom';
import css from './Registration.module.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

export default function Registration() {
  return (
    <div className={css.container}>
      <RegistrationForm />
      <p>
        or <Link to="/">goBack</Link>
      </p>
    </div>
  );
}
