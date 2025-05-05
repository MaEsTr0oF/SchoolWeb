"use client";
import { useState, useEffect, useCallback } from "react";
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
    avatarUrl: "/placeholder-avatar1.png",
    rating: 5,
  },
  {
    id: 2,
    userName: "Андрей Малаков",
    course: "Курс Web-разработчика",
    text: "Очень нравится формат обучения. Материалы структурированы и понятны даже новичку.",
    avatarUrl: "/placeholder-avatar2.png",
    rating: 5,
  },
  {
    id: 3,
    userName: "Ева Кущенко",
    course: "Курс Тестирования",
    text: "Рекомендую всем, кто хочет быстро освоить востребованную профессию. Курсы актуальные и практичные.",
    avatarUrl: "/placeholder-avatar3.png",
    rating: 5,
  },
  {
    id: 4,
    userName: "Максим Петров",
    course: "Курс UX/UI дизайна",
    text: "Преподаватели - настоящие профессионалы! Всегда на связи и готовы помочь.",
    avatarUrl: "/placeholder-avatar4.png",
    rating: 5,
  },
  {
    id: 5,
    userName: "Ольга Смирнова",
    course: "Курс Data Science",
    text: "Благодаря обучению в этой школе я смогла сменить профессию и найти работу мечты.",
    avatarUrl: "/placeholder-avatar5.png",
    rating: 5,
  },
];

const CommentSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  // Получаем индексы для видимых комментариев
  const getVisibleCards = () => {
    const total = commentsData.length;
    // Создаем массив из трех индексов для видимых карточек
    return [
      (currentIndex - 1 + total) % total, // Предыдущий
      currentIndex, // Текущий (центральный)
      (currentIndex + 1) % total, // Следующий
    ];
  };

  // Функция перехода к предыдущему слайду с анимацией
  const prevSlide = useCallback(() => {
    if (isAnimating) return; // Предотвращаем быстрые множественные клики

    setIsAnimating(true);
    setDirection("left");

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? commentsData.length - 1 : prev - 1
      );

      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 400);
    }, 100);
  }, [isAnimating]);

  // Функция перехода к следующему слайду с анимацией
  const nextSlide = useCallback(() => {
    if (isAnimating) return; // Предотвращаем быстрые множественные клики

    setIsAnimating(true);
    setDirection("right");

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === commentsData.length - 1 ? 0 : prev + 1
      );

      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 400);
    }, 100);
  }, [isAnimating]);

  // Устанавливаем автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000); // Смена каждые 5 секунд

    return () => clearInterval(interval);
  }, [nextSlide, isAnimating]);

  // Функция для отображения звездочек рейтинга
  const renderRating = (rating: number) => {
    return (
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? styles.starFilled : styles.starEmpty}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Получаем текущие видимые карточки
  const visibleCardIndexes = getVisibleCards();

  return (
    <div className={styles.sliderSection}>
      <h2 className={styles.sliderTitle}>Отзывы наших учеников</h2>

      <div className={styles.sliderContainer}>
        {/* Кнопка "Предыдущий" */}
        <button
          onClick={prevSlide}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Предыдущий отзыв"
          disabled={isAnimating}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Контейнер с комментариями */}
        <div
          className={`${styles.commentsRow} ${
            direction ? styles[`slide-${direction}`] : ""
          }`}
        >
          {visibleCardIndexes.map((commentIndex, position) => {
            const comment = commentsData[commentIndex];
            return (
              <div
                key={`card-${comment.id}-${position}`}
                className={`
                  ${styles.commentCard} 
                  ${position === 0 ? styles.leftPosition : ""}
                  ${position === 1 ? styles.centerPosition : ""}
                  ${position === 2 ? styles.rightPosition : ""}
                `}
                style={{
                  zIndex: position === 1 ? 10 : 5,
                  transition: isAnimating ? "all 0.5s ease" : "all 0.3s ease",
                }}
              >
                <div className={styles.commentHeader}>
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={comment.avatarUrl}
                      alt={`Фото ${comment.userName}`}
                      width={position === 1 ? 100 : 70}
                      height={position === 1 ? 100 : 70}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{comment.userName}</h3>
                    {renderRating(comment.rating)}
                    <p className={styles.courseInfo}>{comment.course}</p>
                  </div>
                </div>

                <div className={styles.commentBody}>
                  <p className={styles.commentText}>{comment.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Следующий отзыв"
          disabled={isAnimating}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Индикаторы текущего слайда */}
      <div className={styles.dotsContainer}>
        {commentsData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.activeDot : ""
            }`}
            onClick={() => {
              if (!isAnimating && currentIndex !== index) {
                setDirection(index > currentIndex ? "right" : "left");
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setTimeout(() => {
                    setIsAnimating(false);
                    setDirection(null);
                  }, 400);
                }, 100);
              }
            }}
            aria-label={`Перейти к отзыву ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSlider;
