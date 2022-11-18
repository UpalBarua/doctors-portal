import React from 'react';
import styles from './Forms.module.css';
import { format } from 'date-fns';

const AppointmentForm = ({ selectedDate, selectedSlot }) => {
  return (
    <form className={styles.appointmentForm}>
      <input
        className={styles.input}
        type="text"
        placeholder="Appointment Date"
        value={format(selectedDate, 'PP')}
        disabled
      />
      <select
        className={styles.input}
        type="text"
        placeholder="Appointment Slot">
        {selectedSlot.map((slot, index) => (
          <option key={index} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      <input className={styles.input} type="text" placeholder="Full Name" />
      <input className={styles.input} type="text" placeholder="Phone Number" />
      <input className={styles.input} type="text" placeholder="Email Address" />
      <button className="btn-primary" type="submit">
        submit
      </button>
    </form>
  );
};

export default AppointmentForm;
