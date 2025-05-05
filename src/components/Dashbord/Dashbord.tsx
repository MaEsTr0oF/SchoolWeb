"use client";
import styles from "./Dashbord.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Dashbord() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className={styles.dashbord}>
      <div className={styles.dashbord__container}>
        <div className={styles.dashbord__content}>
          <div className={styles.dashbord__textBlock}>
            <h1 className={styles.dashbord__title}>
              Учитесь
              <br />
              Создавайте
              <br />
              Кодируйте будущее!
            </h1>
            <p className={styles.dashbord__subtitle}>
              Овладейте навыками, которые изменят ваш мир.
            </p>
            <div className={styles.dashbord__buttons}>
              <button className={styles.dashbord__primaryButton}>
                Подобрать курс
              </button>
              <button className={styles.dashbord__secondaryButton}>
                Заказать консультацию
              </button>
            </div>

            <div className={styles.dashbord__students}>
              <div className={styles.dashbord__avatars}>
                <div className={styles.dashbord__avatar}></div>
                <div className={styles.dashbord__avatar}></div>
                <div className={styles.dashbord__avatar}></div>
              </div>
              <p className={styles.dashbord__studentsText}>
                100+ выпустившихся учеников!
              </p>
            </div>
          </div>

          <div className={styles.dashbord__imageBlock}>
            <div className={styles.dashbord__laptopWrapper}>
              {imageError ? (
                <div className={styles.dashbord__placeholderLaptop}>
                  <div className={styles.dashbord__screen}>
                    <div className={styles.dashbord__code}></div>
                  </div>
                  <div className={styles.dashbord__keyboard}></div>
                </div>
              ) : (
                <Image
                  src="/images/laptop-code.png"
                  alt="Ноутбук с кодом"
                  width={600}
                  height={400}
                  className={styles.dashbord__laptop}
                  priority
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
