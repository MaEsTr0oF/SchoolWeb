"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import styles from "./CommentSlider.module.css";

interface Comment {
  id: number;
  userName: string;
  course: string;
  text: string;
  avatarUrl: string;
  rating: number;
}

// Данные комментариев
const commentsData: Comment[] = [
  {
    id: 1,
    userName: "Анна Волкова",
    course: "Курс Python-разработчика",
    text: "Отличная школа! Преподаватели всегда отвечают на вопросы, материал подан очень доступно. За несколько месяцев обучения уже создала свой первый проект.",
    avatarUrl: "/images/comment/1.png",
    rating: 5,
  },
  {
    id: 2,
    userName: "Андрей Маляров",
    course: "Курс Веб-разработка",
    text: "Очень нравится формат обучения. Материалы структурированы и понятны даже новичку.",
    avatarUrl: "/images/comment/2.png",
    rating: 5,
  },
  {
    id: 3,
    userName: "Ева Кущенко",
    course: "Курс Тестировщик",
    text: "Рекомендую всем, кто хочет быстро освоить востребованную профессию. Курсы актуальные и практичные.",
    avatarUrl: "/images/comment/3.png",
    rating: 5,
  },

];

const CARD_WIDTH_CENTER = 420; // Ширина центральной карточки из CSS
const CARD_WIDTH_SIDE = 300;   // Ширина боковой карточки из CSS
const CARD_MARGIN = 15;        // Отступ между карточками из CSS

const CommentSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const commentsRowRef = useRef<HTMLDivElement>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? commentsData.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === commentsData.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Увеличил интервал для автопрокрутки
    return () => clearInterval(interval);
  }, [nextSlide]);

  const renderRating = (rating: number) => {
    return (
      <div className={styles.ratingContainer}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={styles.star}>
            <Image src="/images/star.png" alt="star" width={20} height={20} />
          </span>
        ))}
      </div>
    );
  };

  // Определяем индексы для отображения: текущий, предыдущий, следующий
  // и еще по одному с каждой стороны для плавного зацикливания
  const getDisplayedIndices = () => {
    const N = commentsData.length;
    return [
      (currentIndex - 2 + N) % N,
      (currentIndex - 1 + N) % N,
      currentIndex,
      (currentIndex + 1) % N,
      (currentIndex + 2 + N) % N,
    ];
  };

  const displayedIndices = getDisplayedIndices();

 
  
  const calculateTransform = () => {
    
    const offset = 
        (CARD_WIDTH_SIDE + CARD_MARGIN * 2) * 2  // Две боковые карточки слева от центральной
         - (CARD_WIDTH_CENTER / 2) + (CARD_WIDTH_SIDE / 2); // Коррекция, чтобы центр карточки совпал с центром viewport
    
    const centralCardPosition = 
        (CARD_WIDTH_SIDE + CARD_MARGIN * 2) + // Первая карточка (currentIndex - 2)
        (CARD_WIDTH_SIDE + CARD_MARGIN * 2);  // Вторая карточка (currentIndex - 1)

    
    let transformX = 0;
    
    const sideCardFullWidth = CARD_WIDTH_SIDE + CARD_MARGIN * 2;
    
    if (commentsRowRef.current) {
        
        const positionOfCenterCardStart = (CARD_WIDTH_SIDE + CARD_MARGIN) * 2 + CARD_MARGIN; 
        
        const desiredCenterCardStartInViewport = (commentsRowRef.current.parentElement!.offsetWidth / 2) - (CARD_WIDTH_CENTER / 2);
        transformX = desiredCenterCardStartInViewport - positionOfCenterCardStart;
    }
    

    return transformX; 
  };

  return (
    <div className={styles.sliderSection} id='reviews'>
      <h2 className={styles.sliderTitle}>Отзывы наших учеников</h2>
      <div className={styles.sliderOuterContainer}>
        <div className={styles.sliderViewPort}>
          <div 
            className={styles.commentsRow}
            ref={commentsRowRef}
            // style={{ transform: `translateX(${calculateTransform()}px)` }} // Пока убираем translateX, полагаемся на CSS центрирование и размеры
          >
            {/* Рендерим 3 карточки: предыдущую, текущую, следующую */} 
            {[ (currentIndex - 1 + commentsData.length) % commentsData.length, 
               currentIndex, 
               (currentIndex + 1) % commentsData.length 
            ].map((commentIdx, displayOrder) => {
              const comment = commentsData[commentIdx];
              let cardStyle = styles.commentCard;
              if (displayOrder === 1) { // Центральная карточка
                cardStyle = `${styles.commentCard} ${styles.centerCard}`;
              }

              return (
                <div key={`${comment.id}-${commentIdx}`} className={cardStyle}>
                  <div className={styles.cardHeader}>
                    <div className={styles.avatarContainer}>
                      <Image
                        src={comment.avatarUrl}
                        alt={`Фото ${comment.userName}`}
                        width={displayOrder === 1 ? 170 : 80} // Динамический размер аватара
                        height={displayOrder === 1 ? 170 : 80}
                        className={styles.avatar}
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <h3 className={styles.userName}>{comment.userName}</h3>
							 <div className={styles.userNameAndRating}>
									{renderRating(comment.rating)}
									<p className={styles.courseName}>{comment.course}</p>
							 </div>
							 {displayOrder === 1 ? (
                                <p className={styles.commentText}>{comment.text}</p>
                              ) : (
                                <p className={styles.commentText}>Комментарий</p>
                              )}
                    </div>
						  
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.navControls}>
          <button
            onClick={prevSlide}
            className={styles.navButton}
            aria-label="Предыдущий отзыв"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className={styles.navButton}
            aria-label="Следующий отзыв"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSlider;
