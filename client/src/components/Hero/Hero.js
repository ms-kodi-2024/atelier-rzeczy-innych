import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h5 className={styles.subtitle}>Przez oczy do serca</h5>
      <h3 className={styles.title}>Stworzymy dla Ciebie rzeczy nieco inne</h3>
    </section>
  );
};

export default Hero;
