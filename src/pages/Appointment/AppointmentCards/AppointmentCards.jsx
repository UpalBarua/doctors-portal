import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import styles from './AppointmentCards.module.css';

const AppointmentCards = ({
  selectedDate,
  onModalToggle,
  setSelectedSlot,
  setSelectedService,
}) => {
  // TODO : replaced with react query
  // const [appointmentSlotsData, setAppointmentSlotsData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/appointment-slots')
  //     .then((response) => response.json())
  //     .then((data) => setAppointmentSlotsData(data));
  // }, []);

  const { data: appointmentSlotsData = [] } = useQuery({
    queryKey: ['appointmentSlotsData'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/appointment-slots');
      const data = await response.json();
      return data;
    },
  });

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
        {appointmentSlotsData.map((data) => (
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
