'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CommentSlider.module.css';

interface Comment {
  id: number;
  userName: string;
  text: string;
  avatarUrl: string;
  rating?: number;
}

// Пример данных комментариев с большим количеством записей
const commentsData: Comment[] = [
  {
    id: 1,
    userName: 'Иван Иванов',
    text: 'Отличная школа! Преподаватели всегда отвечают на вопросы, материал подан очень доступно. За несколько месяцев обучения уже создал свой первый проект.',
    avatarUrl: '/placeholder-avatar1.png',
    rating: 5
  },
  {
    id: 2,
    userName: 'Мария Петрова',
    text: 'Очень нравится формат обучения. Материалы структурированы и понятны даже новичку.',
    avatarUrl: '/placeholder-avatar2.png',
    rating: 4
  },
  {
    id: 3,
    userName: 'Николай Павлов',
    text: 'Рекомендую всем, кто хочет быстро освоить востребованную профессию. Курсы актуальные и практичные.',
    avatarUrl: '/placeholder-avatar3.png',
    rating: 5
  },
  {
    id: 4,
    userName: 'Елена Смирнова',
    text: 'Преподаватели - настоящие профессионалы! Всегда на связи и готовы помочь.',
    avatarUrl: '/placeholder-avatar4.png',
    rating: 5
  },
  {
    id: 5,
    userName: 'Александр Козлов',
    text: 'Благодаря обучению в этой школе я смог сменить профессию и найти работу мечты.',
    avatarUrl: '/placeholder-avatar5.png',
    rating: 5
  },
  {
    id: 6,
    userName: 'Ольга Соколова',
    text: 'Удобная платформа для обучения, всё интуитивно понятно. Задания интересные и познавательные.',
    avatarUrl: '/placeholder-avatar6.png',
    rating: 4
  },
  {
    id: 7,
    userName: 'Дмитрий Волков',
    text: 'Учусь не первый месяц, и каждый раз узнаю что-то новое и применимое в работе.',
    avatarUrl: '/placeholder-avatar7.png',
    rating: 5
  },
  {
    id: 8,
    userName: 'Анна Морозова',
    text: 'Отлично структурированный материал. Всегда понятно, что и для чего нужно делать.',
    avatarUrl: '/placeholder-avatar8.png',
    rating: 4
  },
  {
    id: 9,
    userName: 'Сергей Лебедев',
    text: 'Прохожу курс по веб-разработке, очень доволен качеством материалов и поддержкой.',
    avatarUrl: '/placeholder-avatar9.png',
    rating: 5
  },
];

const CommentSlider: React.FC = () => {
  // Состояние для хранения текущего расположения комментариев в сетке
  const [commentsGrid, setCommentsGrid] = useState<Comment[]>([]);
  
  // Инициализация и периодическое обновление сетки комментариев
  useEffect(() => {
    // Начальная инициализация сетки
    shuffleComments();
    
    // Автоматическое перемешивание комментариев каждые 5 секунд
    const intervalId = setInterval(() => {
      shuffleComments();
    }, 7000);
    
    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);
  
  // Функция для перемешивания комментариев
  const shuffleComments = () => {
    // Создаем копию массива и перемешиваем
    const shuffled = [...commentsData].sort(() => Math.random() - 0.5);
    setCommentsGrid(shuffled.slice(0, 6)); // Берем только 6 комментариев для сетки 3x2
  };
  
  // Функция для отображения звездочек рейтинга
  const renderRating = (rating: number = 5) => {
    return (
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>★</span>
        ))}
      </div>
    );
  };

  // Если сетка еще не инициализирована, возвращаем загрузку
  if (commentsGrid.length === 0) {
    return <div className={styles.commentSlider}>Загрузка отзывов...</div>;
  }

  return (
    <div className={styles.commentSlider}>
      <h2 className={styles.sliderTitle}>Отзывы наших учеников</h2>
      
      <div className={styles.commentsGrid}>
        {commentsGrid.map((comment, index) => (
          <div 
            key={comment.id} 
            className={`${styles.commentCard} ${index === 0 ? styles.commentCardFeatured : ''}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.avatarContainer}>
                <Image 
                  src={comment.avatarUrl}
                  alt={`Аватар ${comment.userName}`}
                  width={index === 0 ? 80 : 50} 
                  height={index === 0 ? 80 : 50}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{comment.userName}</span>
                {renderRating(comment.rating)}
              </div>
            </div>
            <p className={styles.commentText}>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSlider; 