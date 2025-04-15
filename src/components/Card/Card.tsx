'use client';

import React, { useState } from 'react';
import styles from './Card.module.css';
import CourseModal from '../CourseModal/CourseModal';

interface CardProps {
  courseId: number;
  title: string;
  items: string[];
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ courseId, title, items, buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Чтобы кнопка не вызывала открытие модального окна
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Останавливаем всплытие события
    // Здесь можно реализовать отдельную логику для кнопки записи
    console.log(`Записаться на курс: ${title}`);
  };

  return (
    <>
      <div className={styles.card} onClick={handleCardClick}>
        <h3 className={styles.card__title}>{title}</h3>
        <ul className={styles.card__list}>
          {items.map((item, index) => (
            <li key={index} className={styles.card__item}>{item}</li>
          ))}
        </ul>
        <button 
          className={styles.card__button} 
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
   
      <CourseModal
        courseId={courseId}
        title={title}
        items={items}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Card; 