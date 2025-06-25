import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductList.module.scss';

const fallbackImage = '/images/categories/category-fallback.jpg';

const ProductList = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <Link to={`/produkt/${product.slug}`} key={product.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src={product.images[0]}
              alt={product.name}
              className={styles.primaryImage}
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <img
              src={product.images[1]}
              alt={product.name}
              className={styles.secondaryImage}
              onError={(e) => (e.target.src = fallbackImage)}
            />
          </div>
          <h3>{product.name}</h3>
          <p className={styles.price}>{product.price.toFixed(2)} zł</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
