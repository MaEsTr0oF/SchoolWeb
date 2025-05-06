"use client";

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import styles from "./teaching-methods.module.css";

// Данные о методах преподавания
const teachingMethods = [
  {
    id: 1,
    title: "Интерактивные занятия",
    description:
      "Использование интерактивных досок и видеоуроков для вовлечения студентов в процесс обучения.",
    image: "/images/teaching-methods/interactive.jpg",
    buttonText: "Подробнее",
  },
  {
    id: 2,
    title: "Групповые проекты",
    description:
      "Студенты работают в командах, что развивает навыки сотрудничества и коммуникации.",
    image: "/images/teaching-methods/group-projects.jpg",
    buttonText: "Подробнее",
  },
  {
    id: 3,
    title: "Мультимедийные материалы",
    description:
      "Включение видео, аудио и игровых элементов для разнообразия и углубления понимания темы.",
    image: "/images/teaching-methods/multimedia.jpg",
    buttonText: "Подробнее",
  },
  {
    id: 4,
    title: "Индивидуальный подход",
    description:
      "Персонализированные задания и обратная связь для учета потребностей каждого студента.",
    image: "/images/teaching-methods/individual.jpg",
    buttonText: "Подробнее",
  },
  {
    id: 5,
    title: "Онлайн-тестирование",
    description:
      "Регулярные тесты и квизы для проверки усвоенного материала и мониторинга прогресса.",
    image: "/images/teaching-methods/testing.jpg",
    buttonText: "Подробнее",
  },
];

export default function TeachingMethods() {
  return (
    <>
      <Header />
      <main className={styles.teachingMethodsPage}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Наши методы преподавания</h1>

          <div className={styles.methodsList}>
            {/* Метод 1 */}
            <div className={styles.methodItem}>
              <div className={styles.methodNumber}>01</div>
              <div className={styles.methodContent}>
                <div className={styles.methodImageContainer}>
                  <img
                    src="/images/teaching-methods/interactive.png"
                    alt="Интерактивные занятия"
                    className={styles.methodImage}
                  />
                </div>
                <div className={styles.methodInfo}>
                  <h2 className={styles.methodTitle}>
                    {teachingMethods[0].title}
                  </h2>
                  <p className={styles.methodDescription}>
                    {teachingMethods[0].description}
                  </p>
                  <Link href="#" className={styles.methodLink}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>

            {/* Метод 2 */}
            <div className={styles.methodItem}>
              <div className={styles.methodNumber}>02</div>
              <div className={styles.methodContent}>
                <div className={styles.methodImageContainer}>
                  <img
                    src="/images/teaching-methods/group-projects.png"
                    alt="Групповые проекты"
                    className={styles.methodImage}
                  />
                </div>
                <div className={styles.methodInfo}>
                  <h2 className={styles.methodTitle}>
                    {teachingMethods[1].title}
                  </h2>
                  <p className={styles.methodDescription}>
                    {teachingMethods[1].description}
                  </p>
                  <Link href="#" className={styles.methodLink}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>

            {/* Метод 3 */}
            <div className={styles.methodItem}>
              <div className={styles.methodNumber}>03</div>
              <div className={styles.methodContent}>
                <div className={styles.methodImageContainer}>
                  <img
                    src="/images/teaching-methods/multimedia.png"
                    alt="Мультимедийные материалы"
                    className={styles.methodImage}
                  />
                </div>
                <div className={styles.methodInfo}>
                  <h2 className={styles.methodTitle}>
                    {teachingMethods[2].title}
                  </h2>
                  <p className={styles.methodDescription}>
                    {teachingMethods[2].description}
                  </p>
                  <Link href="#" className={styles.methodLink}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>

            {/* Метод 4 */}
            <div className={styles.methodItem}>
              <div className={styles.methodNumber}>04</div>
              <div className={styles.methodContent}>
                <div className={styles.methodImageContainer}>
                  <img
                    src="/images/teaching-methods/individual.png"
                    alt="Индивидуальный подход"
                    className={styles.methodImage}
                  />
                </div>
                <div className={styles.methodInfo}>
                  <h2 className={styles.methodTitle}>
                    {teachingMethods[3].title}
                  </h2>
                  <p className={styles.methodDescription}>
                    {teachingMethods[3].description}
                  </p>
                  <Link href="#" className={styles.methodLink}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>

            {/* Метод 5 */}
            <div className={styles.methodItem}>
              <div className={styles.methodNumber}>05</div>
              <div className={styles.methodContent}>
                <div className={styles.methodImageContainer}>
                  <img
                    src="/images/teaching-methods/testing.png"
                    alt="Онлайн-тестирование"
                    className={styles.methodImage}
                  />
                </div>
                <div className={styles.methodInfo}>
                  <h2 className={styles.methodTitle}>
                    {teachingMethods[4].title}
                  </h2>
                  <p className={styles.methodDescription}>
                    {teachingMethods[4].description}
                  </p>
                  <Link href="#" className={styles.methodLink}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.additionalInfo}>
            <h2 className={styles.additionalTitle}>
              Почему наши методы эффективны
            </h2>
            <p className={styles.additionalText}>
              Наш подход к обучению основан на современных педагогических
              принципах и учитывает особенности восприятия информации в цифровую
              эпоху. Мы постоянно совершенствуем методики преподавания,
              основываясь на обратной связи от студентов и последних
              исследованиях в области образования.
            </p>
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>94%</div>
                <div className={styles.statLabel}>
                  студентов успешно завершают обучение
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>82%</div>
                <div className={styles.statLabel}>
                  выпускников находят работу в течение 6 месяцев
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>4.8/5</div>
                <div className={styles.statLabel}>
                  средняя оценка наших преподавателей
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
