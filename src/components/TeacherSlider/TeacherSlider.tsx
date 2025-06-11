'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './TeacherSlider.module.css';
import TeacherModal from '../TeacherModal/TeacherModal';

// Типизация данных преподавателя
interface Teacher {
  id: number;
  name: string;
  description: string;
  position: string;
  experience: string;
  image: string;
  rating: number;
  education: string[];
  courses: string[];
}

// Данные преподавателей
const teachersData: Teacher[] = [
  {
    id: 1,
    name: 'Антон Курмаев',
    description: 'Преподаватель с 5-летним опытом онлайн-обучения. Специализируюсь на предмет, применяю современные технологии для эффективного обучения.',
    position: 'Преподаватель веб-разработки',
    experience: '5 лет опыта',
    image: '/images/teachers/1.png',
    rating: 5.0,
    education: [
      'Высшее образование в сфере информационных технологий',
      'Сертификат разработчика Frontend',
      'Курсы повышения квалификации по методикам обучения'
    ],
    courses: [
      'Графический дизайн',
      'UX/UI Дизайнер',
      'Программирование',
      '3D-дженералист'
    ]
  },
  {
    id: 2,
    name: 'Елена Смирнова',
    description: 'Преподаватель с 7-летним опытом онлайн-обучения. Специализируюсь на интерактивных методиках преподавания английского языка.',
    position: 'Преподаватель английского',
    experience: '7 лет опыта',
    image: '/images/teachers/teacher2.jpg',
    rating: 5.0,
    education: [
      'Лингвистический университет, факультет иностранных языков',
      'Сертификат TESOL для преподавания английского',
      'Курсы по методике интерактивного обучения'
    ],
    courses: [
      'Графический дизайн',
      'UX/UI Дизайнер',
      'Программирование',
      '3D-дженералист'
    ]
  },
  {
    id: 3,
    name: 'Сергей Иванов',
    description: 'Преподаватель с 8-летним опытом онлайн-обучения. Специализируюсь на Python и Data Science, помогаю ученикам с трудоустройством.',
    position: 'Python-разработчик',
    experience: '8 лет опыта',
    image: '/images/teachers/teacher3.jpg',
    rating: 5.0,
    education: [
      'Магистр компьютерных наук',
      'Сертифицированный специалист по Data Science',
      'Курсы по машинному обучению и аналитике данных'
    ],
    courses: [
      'Программирование',
      'UX/UI Дизайнер',
      'Графический дизайн',
      '3D-дженералист'
    ]
  },
];

const TeacherSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

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

  const openTeacherModal = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
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
          
          
          <div className={styles.rightBlock}>
            <div className={styles.titleBlock}>
              <h2 className={styles.mainTitle}>
                Преподаватели на связи <br />
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
			 <div className={styles.leftBlock}>
            <div className={styles.teacherCard} onClick={() => openTeacherModal(currentTeacher)}>
              <div className={styles.teacherImageContainer}>
                <Image 
                  src={currentTeacher.image}
                  alt={currentTeacher.name}
                  width={120}
                  height={120}
                  className={styles.teacherImage}
                />
              </div>
              
              <div className={styles.teacherInfo}>
                <h3 className={styles.teacherName}>{currentTeacher.name}</h3>
                <div className={styles.statusDot}></div>
                <p className={styles.teacherBio}>{currentTeacher.description}</p>
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
        </div>
      </div>
      {selectedTeacher && (
        <TeacherModal
          isOpen={isModalOpen}
          onClose={closeTeacherModal}
          teacher={{
            name: selectedTeacher.name,
            rating: selectedTeacher.rating,
            description: selectedTeacher.description,
            image: selectedTeacher.image,
            education: selectedTeacher.education,
            courses: selectedTeacher.courses
          }}
        />
      )}
    </div>
  );
};

export default TeacherSlider; 