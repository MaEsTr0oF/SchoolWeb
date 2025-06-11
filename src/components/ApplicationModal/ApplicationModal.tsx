import React, { useState } from "react";
import styles from "./ApplicationModal.module.css";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправка заявки:", { name, phone });
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Оставить заявку</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Имя <span className={styles.requiredField}>*</span>
            </label>
            <input
              type="text"
              id="name"
              className={styles.formInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>
              Телефон <span className={styles.requiredField}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className={styles.formInput}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          
          <p className={styles.infoText}>
            *Наш менеджер свяжется с вами в ближайшее время.
          </p>

          <button type="submit" className={styles.submitButton}>
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  );
} 