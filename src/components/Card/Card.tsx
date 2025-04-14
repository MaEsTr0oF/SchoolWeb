import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  items: string[];
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, items, buttonText }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      <ul className={styles.card__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.card__item}>{item}</li>
        ))}
      </ul>
      <button className={styles.card__button}>{buttonText}</button>
    </div>
  );
};

export default Card; 