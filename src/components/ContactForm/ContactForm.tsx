'use client'
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    // Здесь можно добавить логику отправки данных
    
    // Сброс формы
    setFormData({
      name: '',
      phone: '',
      email: ''
    });
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ещё не определились?</h2>
        <p className={styles.subtitle}>Наши менеджеры помогут вам и ответят на все ваши вопросы</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            placeholder="Имя" 
            className={styles.input}
            required
          />
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            placeholder="+7 (999) 999-99-99" 
            className={styles.input}
            required
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            placeholder="Электронная почта" 
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Получить консультацию
          </button>
        </form>
      </div>
    </div>
  );
} 