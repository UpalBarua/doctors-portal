import React from 'react';
import styles from './FeatureCards.module.css';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { BsTelephoneOutbound } from 'react-icons/bs';

const CARDS_DATA = [
  {
    title: 'Opening Hours',
    text: 'Lorem Ipsum is simply dummy text of the pri',
    icon: <AiOutlineClockCircle className={styles.icon} />,
  },
  {
    title: 'Visit our location',
    text: 'Brooklyn, NY 10036, United States',
    icon: <IoLocationSharp className={styles.icon} />,
  },
  {
    title: 'Contact us now',
    text: '+000 123 456789',
    icon: <BsTelephoneOutbound className={styles.icon} />,
  },
];

const FeatureCards = () => {
  return (
    <section className={`${styles.grid} | container`}>
      {CARDS_DATA.map((data, index) => (
        <div className={styles.card} key={index}>
          {data.icon}
          <div>
            <h2 className={styles.title}>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureCards;
