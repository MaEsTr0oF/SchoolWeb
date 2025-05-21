import React, { useState, useEffect, useRef } from "react";
import styles from "./RegistrationModal.module.css";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Course {
  value: string;
  label: string;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  const courses: Course[] = [
    { value: "", label: "Выберите курс" },
    { value: "programming", label: "Программирование" },
    { value: "design", label: "Дизайн" },
    { value: "marketing", label: "Маркетинг" }
  ];

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
  const selectRef = useRef<HTMLDivElement>(null);

  // Закрываем селект при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelectOpen(!isSelectOpen);
  };

  const handleSelectOption = (course: Course) => {
    setSelectedCourse(course);
    setIsSelectOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена", selectedCourse);
    // Здесь будет логика обработки оплаты
    // После успешной обработки закрываем модальное окно
    // onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Онлайн запись</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.formLabel}>
              ФИО <span className={styles.requiredField}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className={styles.formInput}
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
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
            />
            <p className={styles.infoText}>
              *Информация по выбранному курсу придет вам на почту.
            </p>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.customSelect} ref={selectRef}>
              <div 
                className={`${styles.selectControl} ${isSelectOpen ? styles.active : ''}`} 
                onClick={toggleSelect}
              >
                <span className={selectedCourse.value === "" ? styles.placeholder : ""}>
                  {selectedCourse.label}
                </span>
                <span className={`${styles.selectArrow} ${isSelectOpen ? styles.open : ''}`}>
                  ▼
                </span>
              </div>
              {isSelectOpen && (
                <div className={styles.selectOptions}>
                  {courses.map((course, index) => (
                    course.value !== "" && (
                      <div
                        key={index}
                        className={`${styles.selectOption} ${selectedCourse.value === course.value ? styles.selected : ''}`}
                        onClick={() => handleSelectOption(course)}
                      >
                        {course.label}
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Перейти к оплате
          </button>
        </form>
      </div>
    </div>
  );
} 