import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './HomePage.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <DocumentTitle>
        <span role="img" aria-label="Phone icon">
          ☎
        </span>{' '}
        Phonebook welcome page
      </DocumentTitle>
    </div>
  );
}
