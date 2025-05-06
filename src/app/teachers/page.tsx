"use client";

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./teachers.module.css";

// Данные о преподавателях
const teachersData = [
  {
    id: 1,
    name: "Валерий Миланюк",
    rating: 5.0,
    description: "Преподавал информатику в гимназии...",
    image: "/images/teachers/teacher1.jpg",
    skills: [
      "Графический дизайн",
      "Аналитик",
      "3D-дженералист",
      "Программирование",
    ],
  },
  {
    id: 2,
    name: "Олег Нечипоренко",
    rating: 5.0,
    description: "Преподавал информатику в гимназии...",
    image: "/images/teachers/teacher2.jpg",
    skills: [
      "Программирование",
      "3D-дженералист",
      "UX/UI Дизайнер",
      "Аналитик",
    ],
  },
  {
    id: 3,
    name: "Евгений Онегин",
    rating: 5.0,
    description: "Преподавал информатику в гимназии...",
    image: "/images/teachers/teacher3.jpg",
    skills: [
      "Python разработчик",
      "Веб-дизайнер",
      "Тестировщик",
      "UX/UI Дизайнер",
    ],
  },
];

// Тип для курса
interface Course {
  id: number;
  name: string;
  count: number;
  checked: boolean;
}

// Данные о курсах для фильтрации
const coursesData: Course[] = [
  { id: 1, name: "Программирование", count: 36, checked: false },
  { id: 2, name: "UX/UI Дизайн", count: 258, checked: true },
  { id: 3, name: "Тестировщик", count: 258, checked: false },
  { id: 4, name: "Аналитик", count: 258, checked: false },
];

export default function Teachers() {
  // Состояние для фильтров
  const [filters, setFilters] = useState<Course[]>(coursesData);

  // Функция для изменения состояния чекбокса
  const handleFilterChange = (id: number) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  return (
    <>
      <Header />
      <main className={styles.teachersPage}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Наши преподаватели</h1>

          <div className={styles.teachersContent}>
            <div className={styles.teachersList}>
              {teachersData.map((teacher) => (
                <div key={teacher.id} className={styles.teacherItem}>
                  <div className={styles.teacherPhoto}>
                    <img src={teacher.image} alt={teacher.name} />
                  </div>
                  <div className={styles.teacherInfo}>
                    <div className={styles.teacherHeader}>
                      <h2 className={styles.teacherName}>{teacher.name}</h2>
                      <div className={styles.teacherRating}>
                        {teacher.rating}{" "}
                        <span className={styles.ratingIcon}>★</span>
                      </div>
                    </div>
                    <p className={styles.teacherDescription}>
                      {teacher.description}
                    </p>
                    <div className={styles.teacherSkills}>
                      {teacher.skills.map((skill, index) => (
                        <span key={index} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.filterSidebar}>
              <h3 className={styles.filterTitle}>Курс</h3>
              <div className={styles.courseFilter}>
                {filters.map((course) => (
                  <label key={course.id} className={styles.filterItem}>
                    <input
                      type="checkbox"
                      checked={course.checked}
                      onChange={() => handleFilterChange(course.id)}
                    />
                    <span className={styles.filterName}>{course.name}</span>
                    <span className={styles.filterCount}>({course.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
