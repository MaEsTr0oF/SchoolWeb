"use client";

import React, { useState } from "react";
import styles from "./Collaboration.module.css";

export default function Collaboration() {
  // Состояние для активной вкладки
  const [activeTab, setActiveTab] = useState("discounts");

  // Определение контента для каждой вкладки
  const tabContent = {
    discounts: {
      title: "Скидки для друзей",
      description: "Приводите друзей и получайте скидки на обучение",
      content: (
        <>
          <p>
            Мы ценим ваши рекомендации! Программа "Скидки для друзей" — это возможность сэкономить 
            на обучении как для вас, так и для ваших знакомых.
          </p>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🎓</div>
              <div className={styles.benefitText}>
                <h4>5% скидка</h4>
                <p>За каждого приведенного друга</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🎁</div>
              <div className={styles.benefitText}>
                <h4>10% скидка</h4>
                <p>Для вашего друга на первый курс</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>⭐</div>
              <div className={styles.benefitText}>
                <h4>До 30% скидка</h4>
                <p>При приведении 5+ друзей</p>
              </div>
            </div>
          </div>
          <button className={styles.actionButton}>Получить реферальную ссылку</button>
        </>
      ),
    },
    partners: {
      title: "Партнерская программа",
      description: "Зарабатывайте, рекомендуя наши курсы",
      content: (
        <>
          <p>
            Партнерская программа — это возможность зарабатывать, рекомендуя наши курсы своей аудитории.
            Особенно подходит для блогеров, образовательных проектов и экспертов в сфере IT.
          </p>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>💰</div>
              <div className={styles.benefitText}>
                <h4>15% от стоимости курса</h4>
                <p>Вознаграждение за каждую успешную продажу</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>📊</div>
              <div className={styles.benefitText}>
                <h4>Личный кабинет партнера</h4>
                <p>Отслеживание статистики и платежей</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🔄</div>
              <div className={styles.benefitText}>
                <h4>Регулярные выплаты</h4>
                <p>Получение вознаграждения каждый месяц</p>
              </div>
            </div>
          </div>
          <button className={styles.actionButton}>Стать партнером</button>
        </>
      ),
    },
    corporate: {
      title: "Корпоративным клиентам",
      description: "Обучение сотрудников вашей компании",
      content: (
        <>
          <p>
            Мы предлагаем специальные условия для компаний, которые хотят организовать обучение для своих сотрудников.
            Программы обучения могут быть адаптированы под конкретные потребности вашего бизнеса.
          </p>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>👥</div>
              <div className={styles.benefitText}>
                <h4>Групповые скидки</h4>
                <p>До 40% при обучении от 5 сотрудников</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🛠️</div>
              <div className={styles.benefitText}>
                <h4>Индивидуальные программы</h4>
                <p>Разработка курсов под потребности компании</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>📈</div>
              <div className={styles.benefitText}>
                <h4>Отчеты о прогрессе</h4>
                <p>Мониторинг успеваемости сотрудников</p>
              </div>
            </div>
          </div>
          <button className={styles.actionButton}>Получить коммерческое предложение</button>
        </>
      ),
    },
    employers: {
      title: "Работодателям",
      description: "Подбор квалифицированных специалистов из числа наших выпускников",
      content: (
        <>
          <p>
            Мы помогаем компаниям находить талантливых специалистов среди выпускников наших курсов.
            Сотрудничество с нами — это доступ к базе мотивированных кандидатов с актуальными навыками.
          </p>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🔍</div>
              <div className={styles.benefitText}>
                <h4>Подбор кандидатов</h4>
                <p>По вашим требованиям и критериям</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>📝</div>
              <div className={styles.benefitText}>
                <h4>Тестовые задания</h4>
                <p>Возможность дать кандидатам тестовое задание</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🤝</div>
              <div className={styles.benefitText}>
                <h4>Без комиссии</h4>
                <p>При трудоустройстве наших выпускников</p>
              </div>
            </div>
          </div>
          <button className={styles.actionButton}>Оставить заявку на подбор</button>
        </>
      ),
    },
  };

  return (
    <div className={styles.collaboration} id="collaboration">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Сотрудничество</h2>
        
        <div className={styles.tabsContainer}>
          <div className={styles.tabsNav}>
            <button 
              className={`${styles.tabButton} ${activeTab === "discounts" ? styles.active : ""}`}
              onClick={() => setActiveTab("discounts")}
              id="discounts"
            >
              Скидки для друзей
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === "partners" ? styles.active : ""}`}
              onClick={() => setActiveTab("partners")}
              id="partners"
            >
              Партнерская программа
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === "corporate" ? styles.active : ""}`}
              onClick={() => setActiveTab("corporate")}
              id="corporate"
            >
              Корпоративным клиентам
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === "employers" ? styles.active : ""}`}
              onClick={() => setActiveTab("employers")}
              id="employers"
            >
              Работодателям
            </button>
          </div>
          
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>{tabContent[activeTab as keyof typeof tabContent].title}</h3>
            <p className={styles.tabDescription}>{tabContent[activeTab as keyof typeof tabContent].description}</p>
            <div className={styles.tabContentInner}>
              {tabContent[activeTab as keyof typeof tabContent].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 