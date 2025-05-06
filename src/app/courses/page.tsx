"use client";

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./courses.module.css";
import Link from "next/link";

// Используем данные из CardHolder компонента
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
    image: "/images/courses/programmer.png",
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 6,
    title: "Data Scientist",
    duration: "12 месяцев",
    salary: "ЗП от 100 тыс.",
    image: "/images/courses/python.png",
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 7,
    title: "Веб-разработчик",
    duration: "5 месяцев",
    salary: "ЗП от 80 тыс.",
    image: "/images/courses/uxui.png",
    profession: "Профессия",
    sales: "-50%",
  },
  {
    id: 8,
    title: "Веб-дизайнер",
    duration: "4 месяца",
    salary: "ЗП от 60 тыс.",
    image: "/images/courses/tester.png",
    profession: "Профессия",
    sales: "-50%",
  },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    cost: {
      free: false,
      paid: true,
    },
    duration: {
      upTo1Month: false,
      from1To3Months: false,
      from3To6Months: false,
      from6To12Months: true,
      over12Months: false,
    },
    employment: {
      withEmployment: false,
      withoutEmployment: false,
    },
  });

  // Добавляем состояние для активных фильтров в верхнем меню
  const [activeFilterButtons, setActiveFilterButtons] = useState<string[]>([]);

  // Категории фильтров для верхнего меню
  const filterCategories = [
    "Программирование",
    "Дизайн",
    "Маркетинг",
    "Аналитика",
    "Управление",
    "Начинающим",
    "Для детей",
    "Скидки",
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (category: string, filter: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [filter]:
          !prev[category as keyof typeof prev][
            filter as keyof (typeof prev)[keyof typeof prev]
          ],
      },
    }));
  };

  // Обработчик для кнопок фильтров в верхнем меню
  const handleFilterButtonClick = (filterName: string) => {
    setActiveFilterButtons((prev) => {
      if (prev.includes(filterName)) {
        return prev.filter((item) => item !== filterName);
      } else {
        return [...prev, filterName];
      }
    });
  };

  // Фильтрация курсов
  const filteredCourses = topCoursesData.filter((course) => {
    // Фильтрация по поиску
    if (
      searchTerm &&
      !course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Фильтрация по стоимости
    const hasActiveFilters = Object.values(selectedFilters.cost).some(
      (value) => value
    );
    if (hasActiveFilters) {
      // Считаем, что курсы с ID 1, 2, 3 и 5 - платные, остальные бесплатные (для демонстрации)
      const isPaid = [1, 2, 3, 5].includes(course.id);
      if (
        (selectedFilters.cost.paid && !isPaid) ||
        (selectedFilters.cost.free && isPaid)
      ) {
        return false;
      }
    }

    // Фильтрация по длительности
    const hasDurationFilters = Object.values(selectedFilters.duration).some(
      (value) => value
    );
    if (hasDurationFilters) {
      const durationInMonths = parseInt(course.duration.split(" ")[0]);

      if (
        (selectedFilters.duration.upTo1Month && durationInMonths > 1) ||
        (selectedFilters.duration.from1To3Months &&
          (durationInMonths < 1 || durationInMonths > 3)) ||
        (selectedFilters.duration.from3To6Months &&
          (durationInMonths < 3 || durationInMonths > 6)) ||
        (selectedFilters.duration.from6To12Months &&
          (durationInMonths < 6 || durationInMonths > 12)) ||
        (selectedFilters.duration.over12Months && durationInMonths <= 12)
      ) {
        // Если курс не соответствует ни одному из выбранных фильтров по длительности
        if (Object.values(selectedFilters.duration).some((value) => value)) {
          return false;
        }
      }
    }

    const hasEmploymentFilters = Object.values(selectedFilters.employment).some(
      (value) => value
    );
    if (hasEmploymentFilters) {
      const hasEmploymentOption = course.duration.includes("месяц");

      if (
        (selectedFilters.employment.withEmployment && !hasEmploymentOption) ||
        (selectedFilters.employment.withoutEmployment && hasEmploymentOption)
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <>
      <Header />
      <main className={styles.coursesPage}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Все курсы</h1>

          {/* Поиск */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Какой курс вам нужен?"
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className={styles.searchButton}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Фильтры */}
          <div className={styles.filtersContainer}>
            <div className={styles.filterGroup}>
              {filterCategories.map((filter, index) => (
                <button
                  key={index}
                  className={`${styles.filterButton} ${
                    activeFilterButtons.includes(filter) ? styles.active : ""
                  }`}
                  onClick={() => handleFilterButtonClick(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Боковая панель фильтров */}
          <div className={styles.contentWrapper}>
            <div className={styles.sidebar}>
              <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>Стоимость</h3>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="free"
                    checked={selectedFilters.cost.free}
                    onChange={() => handleFilterChange("cost", "free")}
                  />
                  <label htmlFor="free">Бесплатное (36)</label>
                </div>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="paid"
                    checked={selectedFilters.cost.paid}
                    onChange={() => handleFilterChange("cost", "paid")}
                  />
                  <label htmlFor="paid">Платное (258)</label>
                </div>
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>Длительность</h3>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="upTo1Month"
                    checked={selectedFilters.duration.upTo1Month}
                    onChange={() =>
                      handleFilterChange("duration", "upTo1Month")
                    }
                  />
                  <label htmlFor="upTo1Month">До 1 месяца (12)</label>
                </div>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="from1To3Months"
                    checked={selectedFilters.duration.from1To3Months}
                    onChange={() =>
                      handleFilterChange("duration", "from1To3Months")
                    }
                  />
                  <label htmlFor="from1To3Months">1-3 месяца (23)</label>
                </div>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="from3To6Months"
                    checked={selectedFilters.duration.from3To6Months}
                    onChange={() =>
                      handleFilterChange("duration", "from3To6Months")
                    }
                  />
                  <label htmlFor="from3To6Months">3-6 месяцев (46)</label>
                </div>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="from6To12Months"
                    checked={selectedFilters.duration.from6To12Months}
                    onChange={() =>
                      handleFilterChange("duration", "from6To12Months")
                    }
                  />
                  <label htmlFor="from6To12Months">6-12 месяцев (87)</label>
                </div>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="over12Months"
                    checked={selectedFilters.duration.over12Months}
                    onChange={() =>
                      handleFilterChange("duration", "over12Months")
                    }
                  />
                  <label htmlFor="over12Months">Более 12 месяцев (132)</label>
                </div>
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>Трудоустройство</h3>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="withEmployment"
                    checked={selectedFilters.employment.withEmployment}
                    onChange={() =>
                      handleFilterChange("employment", "withEmployment")
                    }
                  />
                  <label htmlFor="withEmployment">
                    С трудоустройством (212)
                  </label>
                </div>
                <div className={styles.filterOption}>
                  <input
                    type="checkbox"
                    id="withoutEmployment"
                    checked={selectedFilters.employment.withoutEmployment}
                    onChange={() =>
                      handleFilterChange("employment", "withoutEmployment")
                    }
                  />
                  <label htmlFor="withoutEmployment">
                    Без трудоустройства (45)
                  </label>
                </div>
              </div>
            </div>

            {/* Грид с курсами */}
            <div className={styles.coursesGrid}>
              {filteredCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className={styles.courseCard}
                >
                  <span className={styles.courseProfession}>
                    {course.profession}
                  </span>
                  <div className={styles.courseImage}>
                    {course.sales && (
                      <div className={styles.courseSale}>
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
                      className={styles.courseImg}
                    />
                  </div>
                  <div className={styles.courseInfo}>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <div className={styles.courseDetails}>
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.salary}</span>
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
