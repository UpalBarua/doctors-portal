import React from 'react';
import styles from './FeatureCards.module.css';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { BsTelephoneOutbound } from 'react-icons/bs';

const FeatureCards = () => {
  return (
    <section className={`${styles.grid} | container`}>
      <div className={styles.card}>
        <AiOutlineClockCircle className={styles.icon} />
        <div>
          <h2 className={styles.title}>Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className={styles.card}>
        <IoLocationSharp className={styles.icon} />
        <div>
          <h2 className={styles.title}>Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className={styles.card}>
        <BsTelephoneOutbound className={styles.icon} />
        <div>
          <h2 className={styles.title}>Contact us now</h2>
          <p>+000 123 456789</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
