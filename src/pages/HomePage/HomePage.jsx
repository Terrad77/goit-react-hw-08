import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <PageTitle>
        <span role="img" aria-label="Phone icon">
          ☎
        </span>{' '}
        Phonebook welcome page
      </PageTitle>
    </div>
  );
}
