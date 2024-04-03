import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

export default function Login() {
  return (
    <div className={css.container}>
      <LoginForm />
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}
