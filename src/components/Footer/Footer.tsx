"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

interface FooterProps {
  form?: boolean;
}

export default function Footer({ form = false }: FooterProps) {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  
  const openRegistrationModal = () => setIsRegistrationModalOpen(true);
  const closeRegistrationModal = () => setIsRegistrationModalOpen(false);

  // Скрыть форму ContactForm при открытии модального окна
  useEffect(() => {
    // Используем несколько селекторов для надежности
    const selectors = [
      '[class*="ContactForm_formSection"]',
      '.formSection',
      '[class*="formSection"]'
    ];
    
    // Пытаемся найти форму по разным селекторам
    let contactForm: HTMLElement | null = null;
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        contactForm = element as HTMLElement;
        break;
      }
    }
    
    // Если нашли форму, управляем ее отображением
    if (contactForm) {
      if (isRegistrationModalOpen) {
        contactForm.style.display = 'none';
      } else {
        contactForm.style.display = 'block';
      }
    }
    
    // Блокировка скролла при открытом модальном окне
    if (isRegistrationModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      if (contactForm) {
        contactForm.style.display = 'block';
      }
    };
  }, [isRegistrationModalOpen]);

  return (
    <footer className={styles.footer} style={{paddingTop: form ? "0px" : "80px"}}>
      <div className={styles.container}>
        <div className={styles.sections}>
          {/* Курсы - левая колонка */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Курсы</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/courses/1" className={styles.link}>
                  Программист
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/2" className={styles.link}>
                  Python разработчик
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/3" className={styles.link}>
                  Дизайнер
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/4" className={styles.link}>
                  Тестировщик
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/5" className={styles.link}>
                  3D-дженералист
                </Link>
              </li>
            </ul>
          </div>

          {/* Курсы - правая колонка */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>&nbsp;</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/courses/6" className={styles.link}>
                  Data Scientist
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/7" className={styles.link}>
                  Веб-разработчик
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/8" className={styles.link}>
                  Веб-дизайнер
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses" className={styles.link}>
                  Все курсы
                </Link>
              </li>
            </ul>
          </div>

          {/* Код к знаниям */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Код к знаниям</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/#about-us" className={styles.link}>
                  О нас
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/teaching-methods" className={styles.link}>
                  Методы преподавания
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/teachers" className={styles.link}>
                  Преподаватели
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/#career-center" className={styles.link}>
                  Центр карьеры
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/#reviews" className={styles.link}>
                  Отзывы
                </Link>
              </li>
              <li className={styles.linkItem}>
                <a href="#" onClick={(e) => {
                  e.preventDefault(); 
                  openRegistrationModal();
                }} className={styles.link}>
                  Оплата
                </a>
              </li>
            </ul>
          </div>

          {/* Сотрудничество */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Сотрудничество</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/#discounts" className={styles.link}>
                  Скидки для друзей
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/#partners" className={styles.link}>
                  Партнерская программа
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/#corporate" className={styles.link}>
                  Корпоративным клиентам
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/#employers" className={styles.link}>
                  Работодателям
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className={styles.bottomFooter}>
          <div className={styles.contactInfo}>
            <a href="tel:+79999999999" className={styles.phoneNumber}>
              +7 (999) 999-99-99
            </a>
            <p className={styles.infoText}>
              Вопросы о покупке, оплате и содержанию курсов
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a href="mailto:email@mail.ru" className={styles.email}>
              email@mail.ru
            </a>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="ВКонтакте">
                <Image src="/vk-icon.svg" alt="VK" width={24} height={24} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Telegram">
                <Image
                  src="/telegram-icon.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <RegistrationModal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal} />
    </footer>
  );
}
