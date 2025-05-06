import Link from "next/link"; // Добавляем импорт Link
import Card from "../Card/Card"; // Импортируем компонент Card
import styles from "./CardHolder.module.css";
import React from "react";
import Image from "next/image";

const coursesData = [
  {
    id: 1,
    title: "Python-разработчик",
    items: [
      "Основы Python",
      "Работа с данными",
      "Веб-разработка",
      "Автоматизация",
    ],
    buttonText: "Записаться",
    duration: "10 месяцев",
    employment: "с трудоустройством",
    description:
      "Вы освоите самый востребованный язык программирования, на котором пишут сайты, приложения, игры и чат-боты. Сделаете 3 проекта для портфолио, а Центр карьеры поможет найти работу",
    bgImage: "", // Используем градиент из CSS
    sales: "-50%",
  },
  {
    id: 2,
    title: "Бухгалтер",
    items: [
      "Бухучет",
      "Налогообложение",
      "Финансовый анализ",
      "1С: Бухгалтерия",
    ],
    buttonText: "Записаться",
    duration: "6 месяцев",
    employment: "с трудоустройством",
    description:
      "Освоите бухгалтерский и налоговый учёт, работу в программе 1С. Сможете вести документацию и сдавать отчётность в соответствии с законодательством.",
    bgImage: "/images/courses/accounting.png", // Путь к изображению
    sales: "",
  },
  {
    id: 3,
    title: "Графический дизайнер",
    items: [
      "Основы дизайна",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Верстка",
    ],
    buttonText: "Записаться",
    duration: "12 месяцев",
    employment: "с трудоустройством",
    description:
      "Научитесь создавать дизайн для цифровых и печатных материалов. Освоите профессиональные инструменты и соберете портфолио из реальных проектов.",
    bgImage: "", // Используем градиент из CSS
    sales: "-25%",
  },
  {
    id: 4,
    title: "Front-end разработчик",
    items: ["HTML & CSS", "JavaScript", "React", "UI/UX основы"],
    buttonText: "Записаться",
    duration: "8 месяцев",
    employment: "с трудоустройством",
    description:
      "Освоите современные технологии фронтенд-разработки и научитесь создавать интерактивные веб-интерфейсы. Работа с React, TypeScript и другими современными инструментами.",
    bgImage: "/images/courses/frontend.png",
    sales: "",
  },
  {
    id: 5,
    title: "Data Scientist",
    items: [
      "Python для анализа",
      "SQL",
      "Машинное обучение",
      "Визуализация данных",
    ],
    buttonText: "Записаться",
    duration: "10 месяцев",
    employment: "с трудоустройством",
    description:
      "Научитесь анализировать большие данные и строить предиктивные модели. Курс для тех, кто хочет освоить одну из самых востребованных профессий на рынке.",
    bgImage: "/images/courses/datascience.png",
    sales: "",
  },
  {
    id: 6,
    title: "SMM-специалист",
    items: [
      "Стратегия в соцсетях",
      "Контент-маркетинг",
      "Таргетированная реклама",
      "Аналитика",
    ],
    buttonText: "Записаться",
    duration: "4 месяца",
    employment: "с трудоустройством",
    description:
      "Вы научитесь создавать стратегии продвижения в социальных сетях, запускать рекламные кампании и анализировать их эффективность.",
    bgImage: "/images/courses/smm.png",
    sales: "-40%",
  },
];

const topCoursesData = [
  {
    id: 1,
    title: "Программист",
    duration: "9 месяцев",
    salary: "ЗП от 150 тыс.",
    image: "/images/courses/programmer.png",
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 2,
    title: "Python разработчик",
    duration: "12 месяцев",
    salary: "ЗП от 100 тыс.",
    image: "/images/courses/python.png",
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 3,
    title: "Дизайнер",
    duration: "5 месяцев",
    salary: "ЗП от 80 тыс.",
    image: "/images/courses/uxui.png",
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 4,
    title: "Тестировщик",
    duration: "4 месяца",
    salary: "ЗП от 60 тыс.",
    image: "/images/courses/tester.png",
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 5,
    title: "3D-дженералист",
    duration: "9 месяцев",
    salary: "ЗП от 150 тыс.",
    image: "/images/courses/programmer.png", // Временно используем существующее изображение
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 6,
    title: "Data Scientist",
    duration: "12 месяцев",
    salary: "ЗП от 100 тыс.",
    image: "/images/courses/python.png", // Временно используем существующее изображение
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 7,
    title: "Веб-разработчик",
    duration: "5 месяцев",
    salary: "ЗП от 80 тыс.",
    image: "/images/courses/uxui.png", // Временно используем существующее изображение
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 8,
    title: "Веб-дизайнер",
    duration: "4 месяца",
    salary: "ЗП от 60 тыс.",
    image: "/images/courses/tester.png", // Временно используем существующее изображение
    profession: "Профессия",
    sales: "-50%",
  },
];

export default function CardHolder() {
  return (
    <>
      <div className={styles.topCourses}>
        <div className={styles.topCourses__container}>
          <h2 className={styles.topCourses__title}>
            Курсы по ведущим профессиям
          </h2>
          <div className={styles.topCourses__grid}>
            {topCoursesData.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className={styles.topCourses__card}
              >
                <span className={styles.topCourses__profession}>
                  {course.profession}
                </span>
                <div className={styles.topCourses__image}>
                  {course.sales && (
                    <div className={styles.topCourses__sale}>
                      <img
                        src="/sales.svg"
                        alt="Скидка"
                        width={45}
                        height={45}
                      />
                    </div>
                  )}
                  <img
                    src={course.image}
                    alt={course.title}
                    className={styles.topCourses__img}
                  />
                </div>
                <div className={styles.topCourses__info}>
                  <h3 className={styles.topCourses__cardTitle}>
                    {course.title}
                  </h3>
                  <div className={styles.topCourses__details}>
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.salary}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.topCourses__more}>
            <Link href="/courses" className={styles.topCourses__button}>
              Больше курсов →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
