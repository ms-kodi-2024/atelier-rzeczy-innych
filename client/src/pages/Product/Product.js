import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';
import { addToCart } from '../../features/cart/cartSlice';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { isValidIntegerInRange } from '../../utils/validationIntNumber';
import Toast from '../../components/Toast/Toast';
import Button from '../../components/Button/Button';
import styles from './Product.module.scss';

const fallbackImage = '/images/fallback.jpg';

const Product = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const qtyRef = useRef(null);

  const { items: products, loading } = useSelector((state) => state.products);
  const [mainImage, setMainImage] = useState(null);
  const [activeThumb, setActiveThumb] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  const product = products.find((p) => p.slug === slug);
  const isOutOfStock = product && product.quantity === 0;

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setActiveThumb(0);
    }
  }, [product]);

  const handleImageChange = (img, idx) => {
    setMainImage(img);
    setActiveThumb(idx);
  };

  const handleAddToCart = () => {
    if (!isValidIntegerInRange(quantity, 1, product.quantity)) return;
    dispatch(addToCart({ product, quantity: parseInt(quantity) }));
    setShowToast(true);
  };

  const handleInputChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddToCart();
    }
  };

  if (loading || !product) {
    return <p className={styles.loading}>Ładowanie produktu...</p>;
  }

  return (
    <>
      {showToast && (
        <Toast
          productName={product.name}
          onClose={() => setShowToast(false)}
        />
      )}

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.mainImage}>
            <img
              key={mainImage}
              src={mainImage}
              alt={product.name}
              className={styles.fade}
              onError={(e) => (e.target.src = fallbackImage)}
            />
          </div>
          <div className={styles.thumbnails}>
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                onClick={() => handleImageChange(img, idx)}
                className={idx === activeThumb ? styles.active : ''}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${fallbackImage}?t=${Date.now()}`;
                }}
              />
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{product.price.toFixed(2)} zł</p>
          <p className={styles.description}>{product.description}</p>

          {!isOutOfStock ? (
            <p className={styles.notice}>Dostępna ilość: {product.quantity} szt.</p>
          ) : (
            <p className={styles.unavailable}>PRODUKT AKTUALNIE NIEDOSTĘPNY</p>
          )}

          {!isOutOfStock && (
            <div className={styles.cartRow}>
              <input
                type="number"
                min={1}
                max={product.quantity}
                value={quantity}
                ref={qtyRef}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={styles.qty}
              />
              <Button
                onClick={handleAddToCart}
                icon={FiChevronRight}
              >
                Dodaj do koszyka
              </Button>
            </div>
          )}

          <Button onClick={() => navigate(-1)} icon={FiChevronLeft}>
            Powrót do listy produktów
          </Button>
        </div>
      </div>
    </>
  );
};

export default Product;
