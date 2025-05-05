import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sections}>
          {/* Курсы - левая колонка */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Курсы</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Программист
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Python разработчик
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Дизайнер
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Тестировщик
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
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
                <Link href="#" className={styles.link}>
                  Data Scientist
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Веб-разработчик
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Веб-дизайнер
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
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
                <Link href="#" className={styles.link}>
                  О нас
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Методы преподавания
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Преподаватели
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Центр карьеры
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Отзывы
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  О платформе
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Оплата
                </Link>
              </li>
            </ul>
          </div>

          {/* Сотрудничество */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Сотрудничество</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Скидки для друзей
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Партнерская программа
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
                  Корпоративным клиентам
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#" className={styles.link}>
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
    </footer>
  );
}
