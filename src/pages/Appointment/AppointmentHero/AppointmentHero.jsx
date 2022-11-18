import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from './AppointmentHero.module.css';
import heroImg from '../../../assets/images/chair.png';

const AppointmentHero = ({ selectedDate, setSelectedDate }) => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.grid} | container`}>
        <DayPicker
          className={styles.datePicker}
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default AppointmentHero;
