import { useState } from "react";
import styles from "./Teachers.module.css";
import TeacherModal from "../TeacherModal/TeacherModal";

// Расширенные данные о преподавателях
const teachersData = [
  {
    id: 1,
    name: "Валерий Миланюк",
    rating: 5.0,
    description:
      "Преподаватель с 5-летним опытом онлайн-обучения. Специализируюсь на предмет, применяю современные технологии для эффективного обучения.",
    image: "/images/teachers/2.png",
    skills: [
      "Графический дизайн",
      "Аналитик",
      "3D-дженералист",
      "Программирование",
    ],
    education: [
      "Высшее образование в сфере информационных технологий",
      "Сертифицированный специалист по графическому дизайну",
      "Курсы повышения квалификации по 3D-моделированию",
    ],
    courses: [
      "Графический дизайн",
      "UX/UI Дизайнер",
      "Программирование",
      "3D-дженералист",
    ],
  },
  {
    id: 2,
    name: "Олег Нечипоренко",
    rating: 5.0,
    description:
      "Преподаватель с 5-летним опытом онлайн-обучения. Специализируюсь на предмет, применяю современные технологии для эффективного обучения.",
    image: "/images/teachers/3.png",
    skills: [
      "Программирование",
      "3D-дженералист",
      "UX/UI Дизайнер",
      "Аналитик",
    ],
    education: [
      "Магистр компьютерных наук",
      "Сертифицированный разработчик программного обеспечения",
      "Диплом в области пользовательского интерфейса",
    ],
    courses: [
      "Графический дизайн",
      "UX/UI Дизайнер",
      "Программирование",
      "3D-дженералист",
    ],
  },
  {
    id: 3,
    name: "Евгений Онегин",
    rating: 5.0,
    description:
      "Преподаватель с 5-летним опытом онлайн-обучения. Специализируюсь на предмет, применяю современные технологии для эффективного обучения.",
    image: "/images/teachers/4.png",
    skills: [
      "Python разработчик",
      "Веб-дизайнер",
      "Тестировщик",
      "UX/UI Дизайнер",
    ],
    education: [
      "Бакалавр в области веб-технологий",
      "Курсы по Python-разработке",
      "Сертификат по тестированию программного обеспечения",
    ],
    courses: [
      "Графический дизайн",
      "UX/UI Дизайнер",
      "Программирование",
      "3D-дженералист",
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
  { id: 1, name: "Python", count: 36, checked: false },
  { id: 2, name: "Roblox", count: 258, checked: true },
  { id: 3, name: "Scratch", count: 258, checked: false },
  { id: 4, name: "Minecraft", count: 258, checked: false },
];
export default function Teachers() {
  // Состояние для фильтров
  const [filters, setFilters] = useState<Course[]>(coursesData);
  const [selectedTeacher, setSelectedTeacher] = useState<
    (typeof teachersData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для изменения состояния чекбокса
  const handleFilterChange = (id: number) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  const openTeacherModal = (teacher: (typeof teachersData)[0]) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const closeTeacherModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.teachersPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Наши преподаватели</h1>

        <div className={styles.teachersContent}>
          <div className={styles.teachersList}>
            {teachersData.map((teacher) => (
              <div
                key={teacher.id}
                className={styles.teacherItem}
                onClick={() => openTeacherModal(teacher)}
              >
                <div className={styles.teacherCard}>
                  <div className={styles.teacherPhoto}>
                    <img src={teacher.image} alt={teacher.name} />
                  </div>
                  <div className={styles.teacherInfo}>
                    <div className={styles.teacherInfoLeft}>
                      <div className={styles.teacherInfoTop}>
                        <h2 className={styles.teacherName}>{teacher.name}</h2>
                        <div className={styles.teacherRating}>
                          5.0 <img src="/images/star.png" alt="star" />
                        </div>
                      </div>
                      <p className={styles.teacherDescription}>
                        {teacher.description}
                      </p>
                    </div>
                    <div className={styles.teacherSkills}>
                      {teacher.skills.map((skill, index) => (
                        <span key={index} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
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

      {selectedTeacher && (
        <TeacherModal
          isOpen={isModalOpen}
          onClose={closeTeacherModal}
          teacher={selectedTeacher}
        />
      )}
    </div>
  );
}
