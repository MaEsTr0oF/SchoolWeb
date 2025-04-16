'use client';

import React, { useState } from 'react';
import styles from './Card.module.css';
import CourseModal from '../CourseModal/CourseModal';

interface CardProps {
  courseId: number;
  title: string;
  items: string[];
  buttonText: string;
  duration: string;
  employment: string;
  description: string;
  bgImage?: string;
}

const Card: React.FC<CardProps> = ({
  courseId,
  title,
  items,
  buttonText,
  duration,
  employment,
  description,
  bgImage
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundImage: bgImage ? `url(${bgImage})` : undefined,
  };

  return (
    <>
      <div
        className={`${styles.card} ${isHovered ? styles.card__hovered : ''}`}
        style={cardStyle}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.card__content}>
          <div className={styles.card__category}>Профессия</div>
          
          <div className={styles.card__info}>
            <h3 className={styles.card__title}>{title}</h3>
            
            <div className={styles.card__meta}>
              <span className={styles.card__duration}>{duration}</span>
              {employment && (
                <>
                  •
                  <span className={styles.card__employment}>{employment}</span>
                </>
              )}
            </div>
            
            <p className={styles.card__description}>
              {description}
            </p>
          </div>
        </div>
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