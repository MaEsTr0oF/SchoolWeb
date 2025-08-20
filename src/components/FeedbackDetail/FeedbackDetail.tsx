"use client";
import { useState } from "react";
import styles from "./FeedbackDetail.module.css";

export default function FeedbackDetail() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Опытные кураторы",
    "Центр карьеры",
    "Практика и проекты",
    "Сообщество",
  ];

  return (
    <div className={styles.feedbackDetailSection} id="career-center">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>
            Поддерживаем и помогаем
            <br />
            прийти к результату!
          </h2>
        </div>
        {/*} <div className={styles.tabsWrapper}>
          <div className={styles.tabContainer}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${styles.tab} ${
                  activeTab === index ? styles.activeTab : styles.inactiveTab
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div> */}
        <div className={styles.feedbackDetailCard}>
          <div className={styles.feedbackDetailContent}>
            <div className={styles.feedbackDetailLeft}>
              <h3 className={styles.feedbackDetailTitle}>
                Даём подробную обратную связь
              </h3>
              <p className={styles.feedbackDetailDescription}>
                После каждых 4 занятий вы получаете подробную обратную связь от
                преподавателя — мы расскажем о прогрессе вашего ребёнка, его
                сильных сторонах и зонах роста. Такой подход позволяет вам быть
                в курсе успехов и сразу видеть реальные проекты своих детей.
              </p>
              {/* <button className={styles.feedbackDetailButton}>
                Примеры обратной связи
              </button> */}
            </div>
            <div className={styles.feedbackDetailRight}>
              <div className={styles.feedbackDetailImage}>
                <img
                  src="/images/feedback.png"
                  alt="Примеры обратной связи"
                  className={styles.feedbackDetailImg}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x400/E6F0F2/333333?text=Обратная+связь";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
