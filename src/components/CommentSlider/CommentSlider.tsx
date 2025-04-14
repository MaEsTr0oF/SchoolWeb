'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CommentSlider.module.css';

interface Comment {
  id: number;
  userName: string;
  text: string;
  avatarUrl: string;
}

// Пример данных комментариев
const commentsData: Comment[] = [
  {
    id: 1,
    userName: 'Иван Иванов',
    text: 'Первый комментарий. Очень интересный курс!',
    avatarUrl: '/placeholder-avatar1.png', // Замените на реальные пути или используйте placeholder
  },
  {
    id: 2,
    userName: 'Мария Петрова',
    text: 'Отличный материал, все понятно объяснили.',
    avatarUrl: '/placeholder-avatar2.png',
  },
  {
    id: 3,
    userName: 'Николай Павлов',
    text: 'Очень полезный курс! Рекомендую.',
    avatarUrl: '/placeholder-avatar3.png',
  },
    {
    id: 4,
    userName: 'Елена Смирнова',
    text: 'Преподаватель супер! Много практики.',
    avatarUrl: '/placeholder-avatar4.png',
  },
];

const CommentSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? commentsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === commentsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentComment = commentsData[currentIndex];

  return (
    <div className={styles.commentSlider}>
        <h2 className={styles.sliderTitle}>Комментарии</h2>
        <div className={styles.sliderViewport}>
            <div className={styles.commentCard}>
                {/* Кнопки навигации */}
                <button onClick={prevSlide} className={`${styles.arrowButton} ${styles.prevButton}`}>←</button>
                
                {/* Содержимое карточки */}
                <div className={styles.cardHeader}>
                    <Image 
                        src={currentComment.avatarUrl}
                        // alt={`Avatar of ${currentComment.userName}`}
								alt='avatar'
                        width={150} // Размер аватара
                        height={150}
                        className={styles.avatar}
                    />
                    <span className={styles.userName}>{currentComment.userName}</span>
                </div>
                <p className={styles.commentText}>{currentComment.text}</p>

                <button onClick={nextSlide} className={`${styles.arrowButton} ${styles.nextButton}`}>→</button>
            </div>
        </div>
    </div>
  );
};

export default CommentSlider; 