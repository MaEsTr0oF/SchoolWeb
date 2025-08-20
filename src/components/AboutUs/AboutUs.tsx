import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div className={styles.aboutUs} id="about-us">
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__content}>
            <div className={styles.aboutUs__cards}>
              <div className={styles.aboutUs__card}>
                <p className="font-nekstregular">
                  Обучение через практику Каждый урок — это шаг к собственному
                  проекту: игре, приложению или веб-сайту.
                </p>
              </div>
              <div className={styles.aboutUs__card}>
                <p className="font-nekstregular">
                  Наши преподаватели — специалисты из IT-сферы, умеющие доступно
                  объяснять сложные вещи.
                </p>
              </div>
              <div className={styles.aboutUs__card}>
                <p className="font-nekstregular">
                  Маленькие группы и персональное внимание к каждому ученику.
                </p>
              </div>
              <div className={styles.aboutUs__card}>
                <p className="font-nekstregular">
                  Онлайн-формат позволяет учиться из любой точки мира — в
                  комфортном темпе и графике.
                </p>
              </div>
            </div>
            <div className={styles["aboutUs__main-content"]}>
              <div className={styles["aboutUs__main-content-logo"]}>
                <h2>О нас</h2>
              </div>

              <p className="font-nekstregular">
                Мы — онлайн-школа программирования для детей, где обучение
                превращается в увлекательное приключение! Наши курсы разработаны
                специально для учеников от 7 до 17 лет — с учётом возраста,
                интересов и уровня подготовки. Мы учим создавать игры, сайты,
                приложения и анимации, помогая ребятам не просто изучать
                материал, а применять знания на практике. Наша миссия — развить
                у детей логическое мышление, креативность и уверенность в
                цифровом будущем.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
