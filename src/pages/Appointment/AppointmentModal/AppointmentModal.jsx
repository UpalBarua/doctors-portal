import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import AppointmentForm from '../../Shared/Forms/AppointmentForm';
import styles from './AppointmentModal.module.css';

const AppointmentModal = ({ onToggle, selectedData }) => {
  const { selectedService, selectedDate, selectedSlot } = selectedData;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>{selectedService}</h3>
          <button className={styles.toggle} onClick={onToggle}>
            <AiOutlineClose />
          </button>
        </div>
        <AppointmentForm
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
        />
      </div>
    </div>
  );
};

export default AppointmentModal;
