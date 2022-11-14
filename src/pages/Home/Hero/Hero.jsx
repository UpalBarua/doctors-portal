import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../../assets/images/chair.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.grid} | container`}>
        <img src={heroImg} alt="" />
        <div className={`${styles.column} | flow`}>
          <h1 className="title-secondary">Your New Smile Starts Here</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn-primary">get started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
