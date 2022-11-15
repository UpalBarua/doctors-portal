import React from 'react';
import styles from './About.module.css';
import aboutImg from '../../../assets/images/treatment.png';

const About = () => {
  return (
    <section className={`${styles.about} | container`}>
      <img className={styles.img} src={aboutImg} alt="" />
      <div className={`${styles.column} | flow`}>
        <h2 className="title-secondary">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn-primary">get started</button>
      </div>
    </section>
  );
};

export default About;
