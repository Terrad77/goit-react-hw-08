import css from './DocumentTitle.module.css';

export default function DocumentTitle({ children }) {
  return <h1 className={css.header}>{children}</h1>;
}
