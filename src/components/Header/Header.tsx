import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${styles.container}`}>
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <Link href="/">
              <Image src="/CTK_LOGO.svg" alt="logo" width={120} height={120} />
            </Link>
          </div>
          <nav className={styles.header__menu}>
            <ul className={styles["header__menu-list"]}>
              <li className={styles["header__menu-item"]}>
                <a href="#" className={styles["header__menu-link"]}>
                  О нас
                </a>
              </li>
              <li className={styles["header__menu-item"]}>
                <Link href="/courses" className={styles["header__menu-link"]}>
                  Курсы
                </Link>
              </li>
              <li className={styles["header__menu-item"]}>
                <Link
                  href="/teaching-methods"
                  className={styles["header__menu-link"]}
                >
                  Методы преподавания
                </Link>
              </li>
              <li className={styles["header__menu-item"]}>
                <Link href="/teachers" className={styles["header__menu-link"]}>
                  Преподаватели
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__buttons}>
          <button
            className={`${styles.header__button} ${styles["header__button--signup"]}`}
          >
            Записаться
          </button>
          <button
            className={`${styles.header__button} ${styles["header__button--contact"]}`}
          >
            Связаться
          </button>
        </div>
      </div>
    </header>
  );
}
