import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function Login() {
  return (
    <div className={css.container}>
      <PageTitle>Login</PageTitle>
      <LoginForm />
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}
