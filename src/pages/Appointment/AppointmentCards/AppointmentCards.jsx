import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import styles from './AppointmentCards.module.css';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const AppointmentCards = ({
  selectedDate,
  onModalToggle,
  setSelectedSlot,
  setSelectedService,
}) => {
  const [appointmentSlotsData, setAppointmentSlotsData] = useState([]);

  useEffect(() => {
    fetch('appointmentSlots.json')
      .then(response => response.json())
      .then(data => setAppointmentSlotsData(data));
  }, []);

  const handleBookAppointment = (availableSlots, selectedService) => {
    return () => {
      setSelectedSlot(availableSlots);
      setSelectedService(selectedService);
      onModalToggle();
    };
  };

  return (
    <section className="container flow">
      <p className={styles.date}>
        <span>Available Appointment on</span>
        <span>{format(selectedDate, 'PP')}</span>
      </p>
      <div className={styles.grid}>
        {appointmentSlotsData.map(data => (
          <div className={`${styles.card} | flow`} key={data._id}>
            <h3 className={styles.title}>{data.name}</h3>
            <p>
              {data.slots.length > 0
                ? data.slots[0]
                : 'no slots available today'}
            </p>
            <p>
              {data.slots.length} {data.slots.length > 1 ? 'slots' : 'slot'}
              available
            </p>
            <button
              className="btn-primary"
              onClick={handleBookAppointment(data.slots, data.name)}>
              book appointment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppointmentCards;
