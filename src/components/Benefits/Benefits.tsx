'use client'
import styles from './Benefits.module.css';
import { useState } from 'react';

export default function Benefits() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    "Опытные кураторы",
    "Центр карьеры",
    "Практика и проекты",
    "Сообщество"
  ];

  const tabContent = [
    {
      title: "Даём подробную обратную связь",
      description: "Каждую вашу работу проверит куратор-эксперт. Это практикующий специалист с опытом работы от 5 лет. Он расскажет, что можно улучшить, и объяснит сложное простыми словами.",
      buttonText: "Примеры обратной связи"
    },
    {
      title: "Помогаем с трудоустройством",
      description: "Наш центр карьеры поможет составить резюме, подготовиться к собеседованию и найти работу в крупной компании. Мы сотрудничаем с ведущими работодателями в индустрии.",
      buttonText: "Партнеры центра карьеры"
    },
    {
      title: "Реализуем реальные проекты",
      description: "На наших курсах вы будете работать с реальными проектами и задачами. Мы сотрудничаем с компаниями, которые предоставляют кейсы из своей практики.",
      buttonText: "Примеры проектов"
    },
    {
      title: "Учитесь в сообществе",
      description: "У нас активное сообщество студентов и выпускников. Вы сможете общаться, обмениваться опытом, находить единомышленников и даже будущих коллег.",
      buttonText: "Присоединиться к сообществу"
    }
  ];
  
  return (
    <div className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.numberBlock}>
            <span className={styles.number}>02</span>
          </div>
          <h2 className={styles.title}>
            Поддерживаем и помогаем<br />
            прийти к результату!
          </h2>
        </div>
        
        <div className={styles.tabsWrapper}>
          <div className={styles.tabContainer}>
            {tabs.map((tab, index) => (
              <button 
                key={index}
                className={`${styles.tab} ${activeTab === index ? styles.activeTab : styles.inactiveTab}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.card}>
          <div className={styles.contentSection}>
            <div className={styles.contentLeft}>
              <h3 className={styles.subtitle}>
                {tabContent[activeTab].title}
              </h3>
              <p className={styles.description}>
                {tabContent[activeTab].description}
              </p>
              <button className={styles.button}>
                {tabContent[activeTab].buttonText}
              </button>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.feedbackBox}>
                <div className={styles.profileImage}>
                  <div className={styles.profileImageContainer}>
                    <div className={styles.profileImagePlaceholder}></div>
                  </div>
                </div>
                <div className={styles.feedbackContent}>
                  <div className={styles.feedbackImageContainer}>
                    <video 
                      src="https://cdn.skillbox.pro/wbd-front/skillbox-static/main-page-new/service/video/main-v4-1.webp"
                      poster="https://cdn.skillbox.pro/wbd-front/skillbox-static/main-page-new/service/video/main-v4-1.webp"
                      width="400"
                      height="200"
                      controlsList="nodownload"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.feedbackVideo}
                    />
                    <div className={styles.feedbackWidget}>
                      <div className={styles.widgetContent}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
