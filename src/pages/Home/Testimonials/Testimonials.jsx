import React from 'react';
import styles from './Testimonials.module.css';
import quotesImg from '../../../assets/icons/quote.svg';
import userImg from '../../../assets/images/people1.png';

const TESTIMONIAL_DATA = [
  {
    name: 'Winson Herry',
    from: 'California',
    picture: userImg,
    description:
      'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
  },
  {
    name: 'Winson Herry',
    from: 'California',
    picture: userImg,
    description:
      'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
  },
  {
    name: 'Winson Herry',
    from: 'California',
    picture: userImg,
    description:
      'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
  },
];

const Testimonials = () => {
  return (
    <section className={`${styles.testimonials} | container flow`}>
      <div className={styles.header}>
        <div className={`${styles.titles} | flow`}>
          <h2 className="title-primary">testimonials</h2>
          <p className="title-secondary">What Our Patients Says</p>
        </div>
        <img src={quotesImg} alt="" />
      </div>
      <div className={styles.grid}>
        {TESTIMONIAL_DATA.map((data, index) => (
          <div className={styles.card} key={index}>
            <p>{data.description}</p>
            <div className={styles.user}>
              <img src={data.picture} alt={data.name} />
              <div>
                <p className={styles.username}>{data.name}</p>
                <p>{data.from}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
