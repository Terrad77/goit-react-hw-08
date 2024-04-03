import PageTitle from '../../components/PageTitle/PageTitle';
import Registration from '../../components/Registration/Registration';

import css from './RegisterPage.module.css';

export default function Register() {
  return (
    <div className={css.container}>
      <PageTitle>Registration</PageTitle>
      <Registration />
    </div>
  );
}
