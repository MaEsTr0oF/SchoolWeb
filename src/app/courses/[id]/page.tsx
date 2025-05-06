"use client";

import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import styles from "./course.module.css";
import { useParams } from "next/navigation";

// Данные о курсах (можно вынести в отдельный файл)
const coursesData = [
  {
    id: 1,
    title: "Программист",
    duration: "9 месяцев",
    salary: "ЗП от 150 тыс.",
    image: "/images/courses/programmer.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Курс программиста обычно охватывает основы алгоритмизации, структуры данных и разработку программного обеспечения. Учащиеся знакомятся с несколькими языками программирования, такими как Java, Python или C++. Изучают принципы объектно-ориентированного программирования, работу с базами данных и разработку веб-приложений. На финальных занятиях студенты работают над реальными проектами, чтобы собрать портфолио.",
    startDate: "25 апреля в 16:00",
    price: "15000₽",
    teacher: {
      name: "Иван Карпов",
      rating: 4.96,
      image: "/teacher.jpg",
    },
    skills: [
      "Основы алгоритмизации",
      "Java",
      "Python",
      "Базы данных",
      "Веб-разработка",
    ],
  },
  {
    id: 2,
    title: "Python разработчик",
    duration: "12 месяцев",
    salary: "ЗП от 100 тыс.",
    image: "/images/courses/python.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Вы освоите самый востребованный язык программирования, на котором пишут сайты, приложения, игры и чат-боты. Научитесь работать с базами данных, фреймворками Django и Flask, освоите принципы объектно-ориентированного программирования. Сделаете 3 проекта для портфолио, а Центр карьеры поможет найти работу.",
    startDate: "10 мая в 18:30",
    price: "20000₽",
    teacher: {
      name: "Анна Петрова",
      rating: 4.85,
      image: "/teacher.jpg",
    },
    skills: ["Python", "Django", "Flask", "БД SQL", "ООП"],
  },
  {
    id: 3,
    title: "Дизайнер",
    duration: "5 месяцев",
    salary: "ЗП от 80 тыс.",
    image: "/images/courses/uxui.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Освоите принципы визуального дизайна и юзабилити. Научитесь создавать интерфейсы, которые решают задачи пользователей. Изучите работу в Figma, освоите прототипирование и создание пользовательских сценариев. Создадите несколько проектов для портфолио, которые помогут вам найти работу.",
    startDate: "15 апреля в 19:00",
    price: "18000₽",
    teacher: {
      name: "Мария Сидорова",
      rating: 4.92,
      image: "/teacher.jpg",
    },
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Прототипирование",
      "UX/UI дизайн",
      "Тестирование",
    ],
  },
  {
    id: 4,
    title: "Тестировщик",
    duration: "4 месяца",
    salary: "ЗП от 60 тыс.",
    image: "/images/courses/tester.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Научитесь находить и исправлять баги в программном обеспечении. Освоите ручное и автоматизированное тестирование, научитесь составлять тест-кейсы и чек-листы. Изучите инструменты для автоматизации тестирования, такие как Selenium и TestNG. Получите опыт работы с системами отслеживания ошибок.",
    startDate: "5 мая в 17:00",
    price: "14000₽",
    teacher: {
      name: "Алексей Смирнов",
      rating: 4.87,
      image: "/teacher.jpg",
    },
    skills: [
      "Ручное тестирование",
      "Автоматизация",
      "Selenium",
      "TestNG",
      "JIRA",
    ],
  },
  {
    id: 5,
    title: "3D-дженералист",
    duration: "9 месяцев",
    salary: "ЗП от 150 тыс.",
    image: "/images/courses/programmer.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Научитесь создавать трехмерные модели, текстуры, освещение и анимацию. Освоите работу в Blender, Maya или 3Ds Max. Изучите принципы моделирования, текстурирования, освещения и анимации. Создадите портфолио из нескольких проектов, которые помогут вам найти работу в игровой индустрии, анимации или визуализации.",
    startDate: "20 апреля в 15:00",
    price: "22000₽",
    teacher: {
      name: "Дмитрий Волков",
      rating: 4.9,
      image: "/teacher.jpg",
    },
    skills: ["Blender", "Maya", "Моделирование", "Текстурирование", "Анимация"],
  },
  {
    id: 6,
    title: "Data Scientist",
    duration: "12 месяцев",
    salary: "ЗП от 100 тыс.",
    image: "/images/courses/python.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Освоите анализ данных и машинное обучение. Научитесь работать с библиотеками Python для анализа данных, такими как NumPy, Pandas и Matplotlib. Изучите алгоритмы машинного обучения, включая регрессию, классификацию и кластеризацию. Создадите несколько проектов для портфолио, которые помогут вам найти работу в области анализа данных.",
    startDate: "8 мая в 18:00",
    price: "25000₽",
    teacher: {
      name: "Елена Козлова",
      rating: 4.95,
      image: "/teacher.jpg",
    },
    skills: [
      "Python",
      "NumPy, Pandas",
      "Matplotlib",
      "Машинное обучение",
      "SQL",
    ],
  },
  {
    id: 7,
    title: "Веб-разработчик",
    duration: "5 месяцев",
    salary: "ЗП от 80 тыс.",
    image: "/images/courses/uxui.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Научитесь создавать современные веб-сайты и приложения. Освоите HTML, CSS и JavaScript, а также фреймворки React и Node.js. Изучите работу с API, базами данных и серверной частью приложений. Создадите несколько проектов для портфолио, которые помогут вам найти работу в области веб-разработки.",
    startDate: "12 апреля в 19:30",
    price: "19000₽",
    teacher: {
      name: "Сергей Николаев",
      rating: 4.88,
      image: "/teacher.jpg",
    },
    skills: ["HTML, CSS", "JavaScript", "React", "Node.js", "API"],
  },
  {
    id: 8,
    title: "Веб-дизайнер",
    duration: "4 месяца",
    salary: "ЗП от 60 тыс.",
    image: "/images/courses/tester.png",
    profession: "Профессия",
    sales: "-50%",
    description:
      "Курс веб-дизайнера обычно охватывает основы проектирования интерфейсов, цветовой теории, типографики и композиции. Учащиеся знакомятся с инструментами, такими как Adobe XD, Figma или Sketch. Также важны навыки работы с HTML и CSS для понимания внедрения дизайнов. На финальных занятиях студенты обычно работают над реальными проектами, чтобы собрать портфолио.",
    startDate: "25 апреля в 16:00",
    price: "15000₽",
    teacher: {
      name: "Иван Карпов",
      rating: 4.96,
      image: "/teacher.jpg",
    },
    skills: ["Adobe XD", "Figma", "Sketch", "HTML и CSS", "UI/UX основы"],
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
    <>
      <Header />
      <main className={styles.coursePage}>
        <div className={styles.container}>
          {/* Хлебные крошки */}
          <div className={styles.breadcrumbs}>
            <Link href="/">Главная</Link> / <Link href="/courses">Курсы</Link> /{" "}
            <span>{course.title}</span>
          </div>

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
            <div className={styles.courseImageContainer}>
              <img
                src={course.image}
                alt={course.title}
                className={styles.courseImage}
              />
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
                    <div className={styles.relatedCourseImage}>
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                      />
                      {relatedCourse.sales && (
                        <div className={styles.relatedCourseSale}>
                          <img
                            src="/sales.svg"
                            alt="Скидка"
                            width={20}
                            height={20}
                          />
                        </div>
                      )}
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
    </>
  );
}
