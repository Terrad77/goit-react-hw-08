import PageTitle from '../../components/PageTitle/PageTitle';
import Login from '../../components/Login/Login';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.container}>
      <PageTitle>Login</PageTitle>
      <Login />
    </div>
  );
}
