"use client";

import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import styles from "./course.module.css";
import { useParams } from "next/navigation";
import BackgroundDecorations from "../../../components/BackgroundDecorations/BackgroundDecorations";

// Данные о курсах (можно вынести в отдельный файл)
const coursesData = [
  {
    id: 1,
    title: "Python",
    duration: "9 месяцев",
    salary: "ЗП от 150 тыс.",
    image: "/images/courses/python.png",
    profession: "Профессия",
    sales: "",
    description:
      "Изучите самый популярный язык программирования в мире. Python используется в веб-разработке, анализе данных, машинном обучении и автоматизации. Вы освоите основы программирования, научитесь работать с данными и создадите несколько проектов для портфолио.",
    startDate: "25 апреля в 16:00",
    price: "15000₽",
    teacher: {
      name: "Иван Карпов",
      rating: 4.96,
      image: "/images/teachers/2.png",
    },
    skills: [
      "Основы Python",
      "Работа с данными",
      "Веб-разработка",
      "Автоматизация",
      "Проектная работа",
    ],
  },
  {
    id: 2,
    title: "Roblox",
    duration: "6 месяцев",
    salary: "Создание игр",
    image: "/images/courses/roblox.png",
    profession: "Курс",
    sales: "",
    description:
      "Создавайте собственные игры в популярной платформе Roblox! Изучите язык программирования Lua, освойте Roblox Studio и научитесь создавать увлекательные игровые миры. Курс подходит для начинающих и помогает развить творческое мышление.",
    startDate: "10 мая в 18:30",
    price: "12000₽",
    teacher: {
      name: "Анна Петрова",
      rating: 4.85,
      image: "/images/teachers/1.png",
    },
    skills: [
      "Roblox Studio",
      "Lua",
      "Игровой дизайн",
      "3D моделирование",
      "Логика игр",
    ],
  },
  {
    id: 3,
    title: "Scratch",
    duration: "4 месяца",
    salary: "Основы программирования",
    image: "/images/courses/scratch.png",
    profession: "Курс",
    sales: "",
    description:
      "Первые шаги в программировании с визуальным языком Scratch. Дети и подростки научатся создавать интерактивные истории, игры и анимации. Это отличный способ понять основы алгоритмического мышления без сложного кода.",
    startDate: "15 апреля в 19:00",
    price: "8000₽",
    teacher: {
      name: "Мария Сидорова",
      rating: 4.92,
      image: "/images/teachers/1.png",
    },
    skills: [
      "Scratch",
      "Алгоритмическое мышление",
      "Создание игр",
      "Анимация",
      "Логика",
    ],
  },
  {
    id: 4,
    title: "Minecraft",
    duration: "5 месяцев",
    salary: "Программирование в игре",
    image: "/images/courses/minecraft.png",
    profession: "Курс",
    sales: "",
    description:
      "Изучайте программирование через любимую игру! В Minecraft Education Edition вы освоите основы кодирования, создадите автоматические фермы и умные постройки. Курс развивает пространственное мышление и навыки решения задач.",
    startDate: "5 мая в 17:00",
    price: "10000₽",
    teacher: {
      name: "Алексей Смирнов",
      rating: 4.87,
      image: "/images/teachers/1.png",
    },
    skills: [
      "Minecraft Education",
      "Основы кодирования",
      "Логические структуры",
      "Автоматизация",
      "Творческое решение задач",
    ],
  },
];

export default function CourseDetail() {
  const params = useParams();
  const courseId = Number(params.id);

  // Находим курс по ID
  const course = coursesData.find((c) => c.id === courseId);

  // Если курс не найден
  if (!course) {
    return (
      <>
        <Header />
        <main className={styles.courseNotFound}>
          <div className={styles.container}>
            <h1>Курс не найден</h1>
            <p>Извините, запрашиваемый курс не существует.</p>
            <Link href="/courses" className={styles.backLink}>
              Вернуться к списку курсов
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <BackgroundDecorations />
      <Header />
      <main className={styles.coursePage}>
        <div className={styles.container}>
          {/* Основная информация о курсе */}
          <div className={styles.courseHeader}>
            <div className={styles.courseInfo}>
              <h1 className={styles.courseTitle}>{course.title}</h1>
              <p className={styles.courseDescription}>{course.description}</p>
              <div className={styles.courseMetaInfo}>
                <div className={styles.courseStartDate}>
                  <strong>Старт:</strong> {course.startDate}. На вашу почту
                  придёт полная информация...
                </div>
                <div className={styles.coursePrice}>
                  <span className={styles.priceLabel}>Стоимость курса</span>
                  <span className={styles.priceValue}>{course.price}</span>
                </div>
              </div>
              <button className={styles.enrollButton}>
                Записаться на курс
              </button>
            </div>
            <div
              className={`${styles.courseImageContainer} ${
                styles[`course${course.id}`]
              }`}
            >
              <div className={styles.courseEmojiContainer}>
                {course.id === 1 && (
                  <span className={styles.courseEmoji}>🐍</span>
                )}
                {course.id === 2 && (
                  <span className={styles.courseEmoji}>🎮</span>
                )}
                {course.id === 3 && (
                  <span className={styles.courseEmoji}>🎨</span>
                )}
                {course.id === 4 && (
                  <span className={styles.courseEmoji}>⛏️</span>
                )}
              </div>
            </div>
          </div>

          {/* Преподаватель */}
          <div className={styles.teacherSection}>
            <h2 className={styles.sectionTitle}>Преподаватель</h2>
            <div className={styles.teacherInfo}>
              <div className={styles.teacherAvatar}>
                <img src={course.teacher.image} alt={course.teacher.name} />
              </div>
              <div className={styles.teacherDetails}>
                <div className={styles.teacherName}>{course.teacher.name}</div>
                <div className={styles.teacherRating}>
                  <span className={styles.ratingValue}>
                    {course.teacher.rating}
                  </span>
                  <span className={styles.ratingIcon}>★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Навыки, которые получит студент */}
          <div className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>Чему вы научитесь</h2>
            <ul className={styles.skillsList}>
              {course.skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  <span className={styles.skillIcon}>✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Похожие курсы */}
          <div className={styles.relatedCoursesSection}>
            <h2 className={styles.sectionTitle}>Похожие курсы</h2>
            <div className={styles.relatedCoursesGrid}>
              {coursesData
                .filter((c) => c.id !== courseId)
                .slice(0, 3)
                .map((relatedCourse) => (
                  <Link
                    key={relatedCourse.id}
                    href={`/courses/${relatedCourse.id}`}
                    className={styles.relatedCourseCard}
                  >
                    <span className={styles.relatedCourseProfession}>
                      {relatedCourse.profession}
                    </span>
                    <div className={styles.relatedCourseImage}>
                      <div className={styles.relatedCourseEmojiContainer}>
                        {relatedCourse.id === 1 && (
                          <span className={styles.relatedCourseEmoji}>🐍</span>
                        )}
                        {relatedCourse.id === 2 && (
                          <span className={styles.relatedCourseEmoji}>🎮</span>
                        )}
                        {relatedCourse.id === 3 && (
                          <span className={styles.relatedCourseEmoji}>🎨</span>
                        )}
                        {relatedCourse.id === 4 && (
                          <span className={styles.relatedCourseEmoji}>⛏️</span>
                        )}
                      </div>
                    </div>
                    <div className={styles.relatedCourseInfo}>
                      <h3 className={styles.relatedCourseTitle}>
                        {relatedCourse.title}
                      </h3>
                      <div className={styles.relatedCourseDetails}>
                        <span>{relatedCourse.duration}</span>
                        <span>•</span>
                        <span>{relatedCourse.salary}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
