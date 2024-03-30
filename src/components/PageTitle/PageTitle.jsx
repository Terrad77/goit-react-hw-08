import css from './PageTitle.module.css';

export default function PageTitle({ children }) {
  return <h1 className={css.header}>{children}</h1>;
}
