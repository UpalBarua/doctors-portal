import React from 'react';
import Hero from './Hero/Hero';
import FeatureCards from './FeatureCards/FeatureCards';
import Services from './Services/Services';
import About from './About/About';
import Appointment from './Appointment/Appointment';

const Home = () => {
  const style = {
    display: 'grid',
    gap: 'calc(var(--spacing-900) * 1.5)',
  };

  return (
    <main style={style}>
      <Hero />
      <FeatureCards />
      <Services />
      <About />
      <Appointment />
    </main>
  );
};

export default Home;
