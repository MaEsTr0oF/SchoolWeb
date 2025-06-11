import styles from "./CoursesContent.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";

const topCoursesData = [
  {
    id: 1,
    title: "Python",
    duration: "9 месяцев",
    salary: "ЗП от 150 тыс.",
    image: "/images/courses/python.png",
    profession: "Профессия",
    sales: "",
    cost: "paid",
    durationMonths: 9,
    hasEmployment: true,
  },
  {
    id: 2,
    title: "Roblox",
    duration: "6 месяцев",
    salary: "Создание игр",
    image: "/images/courses/roblox.png",
    profession: "Курс",
    sales: "",
    cost: "paid",
    durationMonths: 6,
    hasEmployment: false,
  },
  {
    id: 3,
    title: "Scratch",
    duration: "4 месяца",
    salary: "Основы программирования",
    image: "/images/courses/scratch.png",
    profession: "Курс",
    sales: "",
    cost: "free",
    durationMonths: 4,
    hasEmployment: false,
  },
  {
    id: 4,
    title: "Minecraft",
    duration: "5 месяцев",
    salary: "Программирование в игре",
    image: "/images/courses/minecraft.png",
    profession: "Курс",
    sales: "",
    cost: "free",
    durationMonths: 5,
    hasEmployment: false,
  },
];

export default function CoursesContent() {
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

  // Состояние для отслеживания выбранных фильтров
  const [filterState, setFilterState] = useState({
    cost: {
      anySelected: true,
      allSelected: false,
    },
    duration: {
      anySelected: true,
      allSelected: false,
    },
    employment: {
      anySelected: false,
      allSelected: false,
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

  // Обновление состояния фильтров
  useEffect(() => {
    // Проверяем, выбраны ли все или хотя бы один фильтр в каждой категории
    setFilterState({
      cost: {
        anySelected: Object.values(selectedFilters.cost).some((v) => v),
        allSelected: Object.values(selectedFilters.cost).every((v) => v),
      },
      duration: {
        anySelected: Object.values(selectedFilters.duration).some((v) => v),
        allSelected: Object.values(selectedFilters.duration).every((v) => v),
      },
      employment: {
        anySelected: Object.values(selectedFilters.employment).some((v) => v),
        allSelected: Object.values(selectedFilters.employment).every((v) => v),
      },
    });
  }, [selectedFilters]);

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
    // Проверяем, есть ли хотя бы один выбранный фильтр в каждой категории
    if (
      !filterState.cost.anySelected ||
      !filterState.duration.anySelected ||
      (!filterState.employment.anySelected &&
        Object.values(selectedFilters.employment).some((v) => v === true))
    ) {
      return false;
    }

    // Фильтрация по поиску
    if (
      searchTerm &&
      !course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Фильтрация по стоимости (если не все выбраны)
    if (!filterState.cost.allSelected) {
      if (
        (selectedFilters.cost.paid && course.cost !== "paid") ||
        (selectedFilters.cost.free && course.cost !== "free")
      ) {
        return false;
      }
    }

    // Фильтрация по длительности (если не все выбраны)
    if (!filterState.duration.allSelected) {
      const durationMonths = course.durationMonths;

      const matchesDuration =
        (selectedFilters.duration.upTo1Month && durationMonths <= 1) ||
        (selectedFilters.duration.from1To3Months &&
          durationMonths > 1 &&
          durationMonths <= 3) ||
        (selectedFilters.duration.from3To6Months &&
          durationMonths > 3 &&
          durationMonths <= 6) ||
        (selectedFilters.duration.from6To12Months &&
          durationMonths > 6 &&
          durationMonths <= 12) ||
        (selectedFilters.duration.over12Months && durationMonths > 12);

      if (!matchesDuration) {
        return false;
      }
    }

    // Фильтрация по трудоустройству (если не все выбраны и есть выбранные)
    if (
      !filterState.employment.allSelected &&
      filterState.employment.anySelected
    ) {
      const hasEmployment = course.hasEmployment;

      if (
        (selectedFilters.employment.withEmployment && !hasEmployment) ||
        (selectedFilters.employment.withoutEmployment && hasEmployment)
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <>
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

          <div className={styles.contentWrapper}>
            <div className={styles.coursesGrid}>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className={styles.courseCard}
                  >
                    <span className={styles.courseProfession}>
                      {course.profession}
                    </span>
                    <div className={styles.courseImage}>
                      <div className={styles.courseEmoji}>
                        {course.id === 1 && "🐍"}
                        {course.id === 2 && "🎮"}
                        {course.id === 3 && "🎨"}
                        {course.id === 4 && "⛏️"}
                      </div>
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
                ))
              ) : (
                <div className={styles.noCoursesMessage}>
                  <p>Нет курсов, соответствующих выбранным фильтрам</p>
                  <p>Пожалуйста, измените параметры фильтрации</p>
                </div>
              )}
            </div>

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
          </div>
        </div>
      </main>
      <div className={styles.contactFormContainer}>
        <ContactForm />
      </div>
    </>
  );
}
