import React, { useState } from 'react';
import AppointmentHero from './AppointmentHero/AppointmentHero';
import AppointmentCards from './AppointmentCards/AppointmentCards';
import AppointmentModal from './AppointmentModal/AppointmentModal';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalToggle = () => {
    setIsModalVisible(prevIsModalVisible => !prevIsModalVisible);
    document.body.style.overflow = isModalVisible ? 'unset' : 'hidden';
  };

  const style = {
    display: 'grid',
    gap: 'calc(var(--spacing-900) * 1.5)',
  };

  return (
    <main style={style}>
      <AppointmentHero
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AppointmentCards
        selectedDate={selectedDate}
        setSelectedSlot={setSelectedSlot}
        setSelectedService={setSelectedService}
        onModalToggle={handleModalToggle}
      />
      {isModalVisible && (
        <AppointmentModal
          selectedData={{ selectedDate, selectedSlot, selectedService }}
          onToggle={handleModalToggle}
        />
      )}
    </main>
  );
};

export default Appointment;
