import React from 'react';
import styles from './Appointment.module.css';
import appointmentImg from '../../../assets/images/doctor-small.png';

const Appointment = () => {
  return (
    <section className={styles.appointment}>
      <div className={`${styles.grid} | container`}>
        <div className={styles.column}>
          <img className={styles.img} src={appointmentImg} alt="" />
        </div>
        <div className={`${styles.column} | flow`}>
          <h2 className="title-primary">appointment</h2>
          <p className="title-secondary">Make an appointment Today</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn-primary">get started</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
