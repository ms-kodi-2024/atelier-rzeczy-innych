import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import styles from './CategoryGrid.module.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const fallbackImage = '/images/categories/category-fallback.jpg';

const CategoryGrid = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link to={`/kategoria/${cat.slug}`} key={cat.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  onError={(e) => (e.target.src = fallbackImage)}
                />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.title}>{cat.title}</h3>
                </div>
                <p className={styles.description}>{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryGrid;
