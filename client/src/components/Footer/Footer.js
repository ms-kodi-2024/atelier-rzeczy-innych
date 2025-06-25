import React from 'react';
import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <Link to="/404">O nas</Link>
      <Link to="/404">Idea</Link>
      <Link to="/404">Blog</Link>
      <Link to="/404">Polityka prywatności</Link>
      <Link to="/404">Regulamin</Link>
      <Link to="/404">Zwroty i reklamacje</Link>
      <Link to="/404">Czas dostawy i płatności</Link>
    </nav>
    <div className={styles.social}>
      <a href="https://www.instagram.com/atelier.rzeczy.innych/" target='blank'><FaInstagram /></a>
      <a href="https://www.facebook.com/profile.php?id=100068277893123" target='blank'><FaFacebookF /></a>
      <a href="/404"><FaPinterestP /></a>
    </div>
    <p className={styles.email}><em>atelier.rzeczy.innych@gmail.com</em></p>
  </footer>
);

export default Footer;
