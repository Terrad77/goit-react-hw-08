import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <b>Sorry! Not found page!</b>
      <Link to="/"> Back to home page</Link>
    </div>
  );
}
