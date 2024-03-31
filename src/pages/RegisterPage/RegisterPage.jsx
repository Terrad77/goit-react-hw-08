import PageTitle from '../../components/PageTitle/PageTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

export default function Register() {
  return (
    <div className={css.container}>
      <PageTitle>Registration</PageTitle>
      <RegistrationForm />
    </div>
  );
}
