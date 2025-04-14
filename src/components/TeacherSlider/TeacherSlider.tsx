'use client'
import { useState } from 'react';
import Image from 'next/image'; // Используем next/image для оптимизации
import styles from './TeacherSlider.module.css';

// Типизация данных преподавателя
interface Teacher {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
}

// Пример данных
const teachersData: Teacher[] = [
  {
    id: 1,
    name: 'Teacher Name 1',
    bio: 'Short bio of Teacher 1, covering teaching experience and expertise in the subject.',
    imageUrl: '/placeholder-teacher1.jpg', // Замените на реальные пути к изображениям
  },
  {
    id: 2,
    name: 'Teacher Name 2',
    bio: 'Another teacher bio, highlighting different skills and background.',
    imageUrl: '/placeholder-teacher2.jpg',
  },
  {
    id: 3,
    name: 'Teacher Name 3',
    bio: 'Third teacher description, focusing on approachability and student success.',
    imageUrl: '/placeholder-teacher3.jpg',
  },
];

const TeacherSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? teachersData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === teachersData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTeacher = teachersData[currentIndex];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderCard}>
        <button onClick={prevSlide} className={`${styles.arrowButton} ${styles.leftArrow}`}>‹</button>
        
        <div className={styles.slideContent}>
          <div className={styles.teacherImageContainer}>
            <Image 
              src={currentTeacher.imageUrl}
              alt={currentTeacher.name}
              width={150} // Задайте нужную ширину
              height={150} // Задайте нужную высоту
              className={styles.teacherImage}
            />
          </div>
          <h3 className={styles.teacherName}>{currentTeacher.name}</h3>
          <p className={styles.teacherBio}>{currentTeacher.bio}</p>
        </div>

        <button onClick={nextSlide} className={`${styles.arrowButton} ${styles.rightArrow}`}>›</button>
      </div>
    </div>
  );
};

export default TeacherSlider; 