import styles from './PageHead.module.scss';

type PageHeadProps = {
  title: string;
  sub?: string;
};

export function PageHead({ title, sub }: PageHeadProps) {
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>{title}</h1>
      {sub ? <p className={styles.sub}>{sub}</p> : null}
    </div>
  );
}
