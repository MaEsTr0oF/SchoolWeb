'use client';

import React, { useEffect } from 'react';
import styles from './CourseModal.module.css';

interface CourseModalProps {
  courseId: number;
  title: string;
  items: string[];
  isOpen: boolean;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ courseId, title, items, isOpen, onClose }) => {
  // Предотвращаем прокрутку body при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Не рендерим ничего, если модальное окно закрыто
  if (!isOpen) return null;

  // Предотвращаем всплытие клика по контенту
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleContentClick}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Паспорт курса: {title}</h2>
          <div className={styles.courseId}>ID: {courseId}</div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>План курса:</h3>
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={index} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Дополнительная информация</h3>
            <p className={styles.text}>
              Этот курс предназначен для тех, кто хочет углубить свои знания в данной области. 
              Квалифицированные преподаватели сделают процесс обучения увлекательным и эффективным.
            </p>
          </div>
        </div>
        
        <div className={styles.footer}>
          <button className={styles.enrollButton}>Записаться на курс</button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal; 