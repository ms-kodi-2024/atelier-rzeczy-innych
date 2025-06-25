import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Fail.module.scss';
import Button from '../../components/Button/Button';
import { FiChevronLeft, FiRefreshCcw } from 'react-icons/fi';

const Fail = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/zamowienie');
  };

  const handleBackToCart = () => {
    navigate('/koszyk');
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Błąd podczas składania zamówienia</h1>
      <p className={styles.info}>
        Niestety nie udało się zakończyć procesu składania zamówienia. Spróbuj ponownie lub wróć do koszyka.
      </p>
      <div className={styles.actions}>
        <Button onClick={handleBackToCart} icon={FiChevronLeft}>
          Powrót do koszyka
        </Button>
        <Button onClick={handleRetry} icon={FiRefreshCcw}>
          Spróbuj ponownie
        </Button>
      </div>
    </div>
  );
};

export default Fail;
