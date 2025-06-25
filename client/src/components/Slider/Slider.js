import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './Slider.module.scss';
import { fetchSlides } from '../../features/slider/sliderSlice';

const fallbackImage = '/images/slides/slide-fallback.jpg';

const Slider = () => {
  const dispatch = useDispatch();
  const { items: sliderImages } = useSelector((state) => state.slider);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={clsx('container-fluid px-0', styles.wrapper, styles.fixedSize)}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls
        indicators={false}
        interval={5000}
        pause={false}
        wrap
      >
        {sliderImages.map((slide, idx) => (
          <Carousel.Item key={idx} className={styles.slideItem}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={`Slajd ${idx + 1}`}
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <Link to={slide.link} className={styles.slideLink} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className={styles.customDots}>
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            className={clsx(styles.dot, { [styles.active]: idx === index })}
            onClick={() => setIndex(idx)}
            aria-label={`Pokaż slajd ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
