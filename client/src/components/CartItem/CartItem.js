import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { FiX, FiCornerUpLeft } from 'react-icons/fi';
import styles from './CartItem.module.scss';
import { isValidIntegerInRange } from '../../utils/validationIntNumber';
import Button from '../Button/Button';

const CartItem = forwardRef(({ item, onRemove, markedForRemoval }, ref) => {
  const { product, quantity, note } = item;
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const [localNote, setLocalNote] = useState(note || '');

  useImperativeHandle(ref, () => ({
    getData: () => {
      const valid = isValidIntegerInRange(localQuantity, 1, product.quantity);
      return valid
        ? { productId: product.id, quantity: localQuantity, note: localNote }
        : null;
    },
  }));

  const handleToggleRemove = () => {
    onRemove(product.id, markedForRemoval);
  };

  return (
    <>
      {markedForRemoval && (
        <div className={styles.undoRowMobile}>
          <Button onClick={() => onRemove(product.id, true)} small muted>
            Cofnij usunięcie
          </Button>
        </div>
      )}

      <div className={`${styles.row} ${markedForRemoval ? styles.toRemove : ''}`}>
        <button className={styles.remove} onClick={handleToggleRemove}>
          {markedForRemoval ? <FiCornerUpLeft /> : <FiX />}
        </button>

        <div className={styles.product}>
          <img src={product.images[0]} alt={product.name} />
          <div className={styles.details}>
            <div className={styles.name}>{product.name}</div>
            <textarea
              id={`note-${product.id}`}
              name={`note-${product.id}`}
              className={styles.note}
              value={localNote}
              placeholder="Treść życzeń"
              onChange={(e) => setLocalNote(e.target.value)}
              disabled={markedForRemoval}
            />
          </div>
        </div>

        <div className={styles.price}>{product.price.toFixed(2)} zł</div>

        <div className={styles.qty}>
          <input
            type="number"
            min="1"
            max={product.quantity}
            value={localQuantity}
            onChange={(e) => setLocalQuantity(parseInt(e.target.value))}
            disabled={markedForRemoval}
          />
        </div>

        <div className={styles.total}>{(product.price * quantity).toFixed(2)} zł</div>

        <div className={styles.info}>
          <span className={styles.label}>Cena:</span>
          <span className={styles.value}>{product.price.toFixed(2)} zł</span>

          <span className={styles.label}>Ilość:</span>
          <input
            type="number"
            min="1"
            max={product.quantity}
            value={localQuantity}
            onChange={(e) => setLocalQuantity(parseInt(e.target.value))}
            disabled={markedForRemoval}
          />

          <span className={styles.label}>Wartość:</span>
          <span className={styles.value}>{(product.price * quantity).toFixed(2)} zł</span>
        </div>
      </div>
    </>
  );
});

export default CartItem;
