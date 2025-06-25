import React from 'react';
import Hero from '../../components/Hero/Hero';
import Slider from '../../components/Slider/Slider';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';

const Home = () => {
  return (
    <div>
      <Slider />
      <Hero />
      <CategoryGrid />
    </div>
  );
};

export default Home;
