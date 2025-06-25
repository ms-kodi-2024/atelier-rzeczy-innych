import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCartItems } from '../../features/cart/cartSlice';
import Button from '../../components/Button/Button';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Cart = () => {
  const originalCart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [localCart, setLocalCart] = useState(originalCart);
  const itemRefs = useRef([]);

  const handleUpdateCart = () => {
    const updatedItems = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const data = ref.getData();
        const item = localCart[index];

        if (item && !item.markedForRemoval && data) {
          updatedItems.push({
            product: item.product,
            quantity: data.quantity,
            note: data.note,
          });
        }
      }
    });

    dispatch(updateCartItems(updatedItems));
  };

  const handleRemove = (productId, undo = false) => {
    setLocalCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, markedForRemoval: undo ? false : true }
          : item
      )
    );
  };

  const handleBackToProducts = () => navigate('/produkty');

  const handleGoToCheckout = () => {
    handleUpdateCart(); 
    navigate('/zamowienie');
  };

  const totalPrice = originalCart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Twój koszyk</h1>
      {originalCart.length === 0 ? (
        <p className={styles.empty}>Koszyk jest pusty.</p>
      ) : (
        <>
          <div className={styles.table}>
            <div className={styles.headerRow}>
              <span></span>
              <span>Produkt</span>
              <span>Cena</span>
              <span>Ilość</span>
              <span>Wartość</span>
            </div>
            {originalCart.map((item, index) => (
              <CartItem
                key={item.product.id}
                item={item}
                onRemove={handleRemove}
                ref={(el) => (itemRefs.current[index] = el)}
                markedForRemoval={
                  localCart.find((i) => i.product.id === item.product.id)
                    ?.markedForRemoval || false
                }
              />
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.total}>Razem: {totalPrice.toFixed(2)} zł</div>
          </div>

          <div className={styles.actionsRight}>
            <Button onClick={handleUpdateCart}>Aktualizuj koszyk</Button>
          </div>

          <div className={styles.actionsBottom}>
            <Button onClick={handleBackToProducts} icon={FiChevronLeft}>
              Kontynuuj zakupy
            </Button>
            <Button onClick={handleGoToCheckout} icon={FiChevronRight}>
              Składam zamówienie
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
