'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './TeacherSlider.module.css';
import TeacherModal from '../TeacherModal/TeacherModal';

// Типизация данных преподавателя
interface Teacher {
  id: number;
  name: string;
  bio: string;
  position: string;
  experience: string;
  imageUrl: string;
}

// Данные преподавателей
const teachersData: Teacher[] = [
  {
    id: 1,
    name: 'Антон Курмаев',
    bio: 'Преподавал информатику в гимназии, ведёт курсы по веб-разработке и программированию, организовывал квесты и круглые столы, а в 22 года занял руководящую должность.',
    position: 'Преподаватель веб-разработки',
    experience: '5 лет опыта',
    imageUrl: '/images/teachers/teacher1.jpg',
  },
  {
    id: 2,
    name: 'Елена Смирнова',
    bio: 'Сертифицированный педагог с опытом преподавания в языковой школе. Специализируется на интерактивных методиках преподавания и индивидуальном подходе к ученикам.',
    position: 'Преподаватель английского',
    experience: '7 лет опыта',
    imageUrl: '/images/teachers/teacher2.jpg',
  },
  {
    id: 3,
    name: 'Сергей Иванов',
    bio: 'Опытный разработчик, работавший в крупных IT-компаниях. Ведет курсы по Python и Data Science, помогает ученикам с трудоустройством в ведущие компании.',
    position: 'Python-разработчик',
    experience: '8 лет опыта',
    imageUrl: '/images/teachers/teacher3.jpg',
  },
];

const TeacherSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openTeacherModal = () => {
    setIsModalOpen(true);
  };

  const closeTeacherModal = () => {
    setIsModalOpen(false);
  };

  // Предотвращаем всплытие клика с кнопок на родительский элемент
  const handleButtonClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  const currentTeacher = teachersData[currentIndex];

  return (
    <div className={styles.wrapper}>
      <div className={styles.teacherSection}>
        <div className={styles.teacherContainer}>
          <div className={styles.leftBlock}>
            <div className={styles.teacherCard} onClick={openTeacherModal}>
              <div className={styles.teacherImageContainer}>
                <Image 
                  src={currentTeacher.imageUrl}
                  alt={currentTeacher.name}
                  width={100}
                  height={100}
                  className={styles.teacherImage}
                />
              </div>
              
              <div className={styles.teacherInfo}>
                <h3 className={styles.teacherName}>{currentTeacher.name}</h3>
                <div className={styles.statusDot}></div>
                <p className={styles.teacherBio}>{currentTeacher.bio}</p>
              </div>
              
              <div className={styles.navigationControls}>
                <button 
                  onClick={(e) => handleButtonClick(e, prevSlide)} 
                  className={`${styles.navButton} ${styles.prevButton}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={(e) => handleButtonClick(e, nextSlide)} 
                  className={`${styles.navButton} ${styles.nextButton}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.rightBlock}>
            <div className={styles.titleBlock}>
              <h2 className={styles.mainTitle}>
                Преподаватели на связи <span className={styles.number}>01</span><br />
                и вне уроков!
              </h2>
              <p className={styles.description}>
                Преподаватели и кураторы доступны и вне уроков. 
                Если возникнут вопросы или сложности, ребенок всегда
                сможет обратиться за помощью, и мы обязательно поможем
                решить любую проблему!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Модальное окно с информацией о преподавателе */}
      <TeacherModal
        id={currentTeacher.id}
        name={currentTeacher.name}
        bio={currentTeacher.bio}
        imageUrl={currentTeacher.imageUrl}
        isOpen={isModalOpen}
        onClose={closeTeacherModal}
      />
    </div>
  );
};

export default TeacherSlider; 