'use client';

import React, { useState } from "react";
import Image from 'next/image';
import styles from './TeacherModal.module.css';

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacher?: {
    name: string;
    rating: number;
    description: string;
    image: string;
    education?: string[];
    courses?: string[];
  };
}

export default function TeacherModal({ isOpen, onClose, teacher }: TeacherModalProps) {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(true);

  if (!isOpen || !teacher) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleEducation = () => {
    setIsEducationOpen(!isEducationOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={styles.star}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <div className={styles.teacherProfile}>
          <div className={styles.teacherPhoto}>
            <img src={teacher.image} alt={teacher.name} />
          </div>
          
          <div className={styles.teacherInfo}>
            <h2 className={styles.teacherName}>{teacher.name}</h2>
            
            <div className={styles.teacherRating}>
              <div className={styles.ratingText}>Рейтинг</div>
              <div className={styles.ratingStars}>
                {renderStars()}
                <span className={styles.ratingValue}>{teacher.rating}</span>
              </div>
            </div>
            
            <p className={styles.teacherDescription}>{teacher.description}</p>
          </div>
        </div>
        
        <div className={styles.accordionSection}>
          <div 
            className={`${styles.accordionHeader} ${isEducationOpen ? styles.open : ''}`}
            onClick={toggleEducation}
          >
            <span>Образование и квалификация</span>
            <span className={styles.accordionIcon}>{isEducationOpen ? '-' : '+'}</span>
          </div>
          
          {isEducationOpen && (
            <div className={styles.accordionContent}>
              <ul className={styles.educationList}>
                {teacher.education?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || <p>Информация об образовании отсутствует</p>}
              </ul>
            </div>
          )}
        </div>
        
        <div className={styles.accordionSection}>
          <div 
            className={`${styles.accordionHeader} ${isCoursesOpen ? styles.open : ''}`}
            onClick={toggleCourses}
          >
            <span>Преподаваемые курсы</span>
            <span className={styles.accordionIcon}>{isCoursesOpen ? '-' : '+'}</span>
          </div>
          
          {isCoursesOpen && (
            <div className={`${styles.accordionContent} ${styles.coursesContent}`}>
              <div className={styles.courseButtonsContainer}>
                {teacher.courses?.map((course, index) => (
                  <div key={index} className={styles.courseButton}>
                    {course}
                  </div>
                )) || <p>Информация о курсах отсутствует</p>}
              </div>
            </div>
          )}
        </div>
        
        <button className={styles.contactButton}>
          Связаться с преподавателем
        </button>
      </div>
    </div>
  );
} 