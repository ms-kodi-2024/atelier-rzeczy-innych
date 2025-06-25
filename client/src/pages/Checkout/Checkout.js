import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.scss';
import Button from '../../components/Button/Button';
import { setOrder, createOrder } from '../../features/order/orderSlice';
import { FiChevronRight } from 'react-icons/fi';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderData = {
      ...data,
      items: cartItems.map((item) => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        note: item.note,
      })),
    };

    dispatch(setOrder(orderData));
    dispatch(createOrder(orderData))
      .unwrap()
      .then(() => navigate('/potwierdzenie'))
      .catch(() => navigate('/blad-zamowienia'));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Zamówienie</h1>
      <div className={styles.grid}>
        <div className={styles.summary}>
          <h2>Twoje produkty</h2>
          <div className={styles.table}>
            <div className={styles.headerRow}>
              <div>Produkt</div>
              <div>Ilość</div>
              <div>Cena</div>
              <div>Wartość</div>
            </div>
            {cartItems.map((item) => (
              <div key={item.product.id} className={styles.row}>
                <div className={styles.productCell}>
                  <img src={item.product.images[0]} alt={item.product.name} />
                  <div className={styles.productInfo}>
                    <div className={styles.name}>{item.product.name}</div>
                    {item.note && (
                      <div className={styles.note}>
                        <strong>Życzenia:</strong><br />
                        {item.note}
                      </div>
                    )}
                  </div>
                </div>
                <div>{item.quantity}</div>
                <div>{item.product.price.toFixed(2)} zł</div>
                <div>{(item.product.price * item.quantity).toFixed(2)} zł</div>
              </div>
            ))}
            <div className={styles.total}>
              Razem: {total.toFixed(2)} zł
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Dane do wysyłki</h2>

          <label>
            Imię i nazwisko*
            <input {...register('name', { required: 'To pole jest wymagane' })} />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </label>

          <label>
            E-mail*
            <input
              type="email"
              {...register('email', {
                required: 'To pole jest wymagane',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Nieprawidłowy format e-mail',
                },
              })}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </label>

          <label>
            Telefon*
            <input
              type="tel"
              {...register('phone', {
                required: 'To pole jest wymagane',
                pattern: {
                  value: /^\+?\d{9,15}$/,
                  message: 'Nieprawidłowy numer telefonu',
                },
              })}
              placeholder="+48123456789 lub 123456789"
            />
            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
          </label>

          <label>
            Adres dostawy*
            <textarea {...register('address', { required: 'To pole jest wymagane' })} />
            {errors.address && <span className={styles.error}>{errors.address.message}</span>}
          </label>

          <label>
            Uwagi
            <textarea {...register('note')} placeholder="Dodatkowe informacje dla sprzedawcy" />
          </label>

          <Button type="submit" icon={FiChevronRight}>
            Złóż zamówienie
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
