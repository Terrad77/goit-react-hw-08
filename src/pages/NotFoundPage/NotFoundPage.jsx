import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <PageTitle>
        <b>Sorry! Not found page!</b>
      </PageTitle>
      <Link to="/"> Back to home page</Link>
    </div>
  );
}
