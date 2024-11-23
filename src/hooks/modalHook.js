import { useState } from 'react';

// Кастомний хук для управління модалками
const useModal = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = modalName => {
    setActiveModal(modalName); // Встановити активну модалку
  };

  const closeModal = () => {
    setActiveModal(null); // Закрити всі модалки
  };

  const isModalOpen = modalName => activeModal === modalName;

  return { openModal, closeModal, isModalOpen };
};

export default useModal;
