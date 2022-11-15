import React from 'react';
import styles from './Services.module.css';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const SERVICES_DATA = [
  {
    img: fluoride,
    title: 'Fluoride Treatment',
    text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
  },
  {
    img: cavity,
    title: 'Cavity Filling',
    text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
  },
  {
    img: whitening,
    title: 'Teeth Whitening',
    text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
  },
];

const Services = () => {
  const servicesCards = SERVICES_DATA.map((data, index) => {
    return (
      <div className={`${styles.card} | flow`} key={index}>
        <img src={data.img} alt="" />
        <h3 className={styles.title}>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    );
  });

  return (
    <section className={`${styles.services} | container flow`}>
      <h2 className="title-primary">our services</h2>
      <p className="title-secondary">services we provide</p>
      <div className={styles.grid}>{servicesCards}</div>
    </section>
  );
};

export default Services;
