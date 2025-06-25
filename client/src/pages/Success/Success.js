import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Success.module.scss';
import Button from '../../components/Button/Button';
import { FiChevronLeft } from 'react-icons/fi';
import { clearCart } from '../../features/cart/cartSlice';

const Success = () => {
  const order = useSelector((state) => state.order.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!order) {
      navigate('/blad-zamowienia');
    } else {
      dispatch(clearCart());
    }
  }, [order, navigate, dispatch]);

  if (!order) return null;

  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Zamówienie przyjęte do realizacji</h1>
      <p className={styles.subheading}>
        Dziękujemy za złożenie zamówienia. Poniżej znajdziesz jego podsumowanie.
      </p>
      <p className={styles.orderNumber}>
        Numer zamówienia: #{order.orderNumber}
      </p>

      <div className={styles.customerData}>
        <h2>Dane do wysyłki</h2>
        <ul>
          <li><strong>Imię i nazwisko:</strong> {order.name}</li>
          <li><strong>E-mail:</strong> {order.email}</li>
          <li><strong>Telefon:</strong> {order.phone}</li>
          <li><strong>Adres:</strong> {order.address}</li>
          {order.note && <li><strong>Uwagi:</strong> {order.note}</li>}
        </ul>
      </div>

      <div className={styles.summary}>
        <h2>Podsumowanie zamówienia</h2>
        <ul className={styles.list}>
          {order.items.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.productInfo}>
                <span className={styles.name}>{item.name}</span>
                {item.note && (
                  <div className={styles.itemNote}>
                    <strong>Życzenia:</strong><br />
                    {item.note}
                  </div>
                )}
              </div>
              <div className={styles.qty}>
                {item.quantity} × {item.price.toFixed(2)} zł
              </div>
              <div className={styles.value}>
                {(item.price * item.quantity).toFixed(2)} zł
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          Razem: {total.toFixed(2)} zł
        </div>
      </div>

      <Button onClick={() => navigate('/')} icon={FiChevronLeft}>
        Powrót do strony głównej
      </Button>
    </div>
  );
};

export default Success;
