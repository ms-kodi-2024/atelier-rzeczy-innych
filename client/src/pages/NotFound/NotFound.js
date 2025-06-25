import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Strona w budowie</h3>
      <p className={styles.text}>Pracujemy nad tą sekcją. Wróć do strony głównej lub spróbuj później.</p>
      <Link to="/" className={styles.back}>Powrót do strony głównej</Link>
    </section>
  );
};

export default NotFound;
