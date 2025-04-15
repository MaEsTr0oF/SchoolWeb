'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './TeacherModal.module.css';

interface TeacherModalProps {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const TeacherModal: React.FC<TeacherModalProps> = ({ id, name, bio, imageUrl, isOpen, onClose }) => {
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
          <div className={styles.teacherImageWrapper}>
            <Image 
              src={imageUrl}
              alt={name}
              width={120}
              height={120}
              className={styles.teacherImage}
            />
          </div>
          <h2 className={styles.title}>{name}</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>О преподавателе</h3>
            <p className={styles.text}>{bio}</p>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Опыт и квалификация</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Опыт преподавания более 5 лет</li>
              <li className={styles.listItem}>Степень магистра в соответствующей области</li>
              <li className={styles.listItem}>Участие в международных конференциях</li>
              <li className={styles.listItem}>Автор учебных материалов</li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Курсы преподавателя</h3>
            <ul className={styles.coursesList}>
              <li className={styles.coursesListItem}>Базовый курс</li>
              <li className={styles.coursesListItem}>Продвинутый уровень</li>
              <li className={styles.coursesListItem}>Специализированный курс</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footer}>
          <button className={styles.contactButton}>Связаться с преподавателем</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherModal; 