import React from "react";
import Link from "next/link";
import styles from "./TeachingMethods.module.css";

const teachingMethodsData = [
  {
    id: 1,
    number: "01",
    title: "Интерактивные занятия",
    description:
      "Использование интерактивных досок и видеоуроков для вовлечения студентов в процесс обучения.",
    image: "/images/teaching-methods/interactive.png",
  },
  {
    id: 2,
    number: "02",
    title: "Групповые проекты",
    description:
      "Студенты работают в командах, что развивает навыки сотрудничества и коммуникации.",
    image: "/images/teaching-methods/group-projects.png",
  },
  {
    id: 3,
    number: "03",
    title: "Мультимедийные материалы",
    description:
      "Включение видео, аудио и игровых элементов для разнообразия и углубления понимания темы.",
    image: "/images/teaching-methods/multimedia.png",
  },
  {
    id: 4,
    number: "04",
    title: "Индивидуальный подход",
    description:
      "Персонализированные задания и обратная связь для учета потребностей каждого студента.",
    image: "/images/teaching-methods/individual.png",
  },
  {
    id: 5,
    number: "05",
    title: "Онлайн-тестирование",
    description:
      "Регулярные тесты и квизы для проверки усвоенного материала и мониторинга прогресса.",
    image: "/images/teaching-methods/testing.png",
  },
];

export default function TeachingMethods() {
  return (
    <section className={styles.teachingMethods}>
      <h2 className={styles.title}>Наши методы преподавания</h2>

      <div className={styles.methodsGrid}>
        {/* Метод 1 */}
        <div className={styles.methodItem}>
          <div className={styles.methodNumber}>
            {teachingMethodsData[0].number}
          </div>
          <div className={styles.methodContent}>
            <div className={styles.methodText}>
              <h3 className={styles.methodTitle}>
                {teachingMethodsData[0].title}
              </h3>
              <p className={styles.methodDescription}>
                {teachingMethodsData[0].description}
              </p>
              <Link href="/teaching-methods" className={styles.methodLink}>
                Подробнее
              </Link>
            </div>
            <div className={styles.methodImageWrapper}>
              <img
                src={teachingMethodsData[0].image}
                alt={teachingMethodsData[0].title}
                className={styles.methodImage}
              />
            </div>
          </div>
        </div>

        {/* Метод 2 */}
        <div className={styles.methodItem}>
          <div className={styles.methodNumber}>
            {teachingMethodsData[1].number}
          </div>
          <div className={styles.methodContent}>
            <div className={styles.methodImageWrapper}>
              <img
                src={teachingMethodsData[1].image}
                alt={teachingMethodsData[1].title}
                className={styles.methodImage}
              />
            </div>
            <div className={styles.methodText}>
              <h3 className={styles.methodTitle}>
                {teachingMethodsData[1].title}
              </h3>
              <p className={styles.methodDescription}>
                {teachingMethodsData[1].description}
              </p>
              <Link href="/teaching-methods" className={styles.methodLink}>
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Метод 3 */}
        <div className={styles.methodItem}>
          <div className={styles.methodNumber}>
            {teachingMethodsData[2].number}
          </div>
          <div className={styles.methodContent}>
            <div className={styles.methodText}>
              <h3 className={styles.methodTitle}>
                {teachingMethodsData[2].title}
              </h3>
              <p className={styles.methodDescription}>
                {teachingMethodsData[2].description}
              </p>
              <Link href="/teaching-methods" className={styles.methodLink}>
                Подробнее
              </Link>
            </div>
            <div className={styles.methodImageWrapper}>
              <img
                src={teachingMethodsData[2].image}
                alt={teachingMethodsData[2].title}
                className={styles.methodImage}
              />
            </div>
          </div>
        </div>

        {/* Метод 4 */}
        <div className={styles.methodItem}>
          <div className={styles.methodNumber}>
            {teachingMethodsData[3].number}
          </div>
          <div className={styles.methodContent}>
            <div className={styles.methodImageWrapper}>
              <img
                src={teachingMethodsData[3].image}
                alt={teachingMethodsData[3].title}
                className={styles.methodImage}
              />
            </div>
            <div className={styles.methodText}>
              <h3 className={styles.methodTitle}>
                {teachingMethodsData[3].title}
              </h3>
              <p className={styles.methodDescription}>
                {teachingMethodsData[3].description}
              </p>
              <Link href="/teaching-methods" className={styles.methodLink}>
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Метод 5 */}
        <div className={styles.methodItem}>
          <div className={styles.methodNumber}>
            {teachingMethodsData[4].number}
          </div>
          <div className={styles.methodContent}>
            <div className={styles.methodText}>
              <h3 className={styles.methodTitle}>
                {teachingMethodsData[4].title}
              </h3>
              <p className={styles.methodDescription}>
                {teachingMethodsData[4].description}
              </p>
              <Link href="/teaching-methods" className={styles.methodLink}>
                Подробнее
              </Link>
            </div>
            <div className={styles.methodImageWrapper}>
              <img
                src={teachingMethodsData[4].image}
                alt={teachingMethodsData[4].title}
                className={styles.methodImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
