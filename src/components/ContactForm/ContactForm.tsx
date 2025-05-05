"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь можно добавить логику отправки данных

    // Сброс формы
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.formContent}>
        <h2>Ещё не определились?</h2>
        <p>
          Оставьте заявку на бесплатную консультацию, наши менеджеры помогут вам
          и ответят на все ваши вопросы
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputsWrapper}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 999-99-99"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Электронная почта"
              required
            />
            <button type="submit">Получить консультацию</button>
          </div>
        </form>
      </div>
    </div>
  );
}
