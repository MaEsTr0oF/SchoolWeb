"use client";

import React from "react";
import styles from "./BackgroundDecorations.module.css";

const BackgroundDecorations: React.FC = () => {
  return (
    <div className={styles.backgroundDecorations}>
      {/* Звездочки */}
      <div className={`${styles.decoration} ${styles.star1}`}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
            fill="#FFD700"
          />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.star2}`}>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
            fill="#FF69B4"
          />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.star3}`}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
            fill="#87CEEB"
          />
        </svg>
      </div>

      {/* Сердечки */}
      <div className={`${styles.decoration} ${styles.heart1}`}>
        <svg width="32" height="30" viewBox="0 0 24 22" fill="none">
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill="#FF1493"
          />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.heart2}`}>
        <svg width="26" height="24" viewBox="0 0 24 22" fill="none">
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill="#FF69B4"
          />
        </svg>
      </div>

      {/* Облачка */}
      <div className={`${styles.decoration} ${styles.cloud1}`}>
        <svg width="45" height="30" viewBox="0 0 24 16" fill="none">
          <path
            d="M18 6C18 4.9 17.1 4 16 4C15.78 2.84 14.68 2 13.5 2C12.03 2 10.85 3.28 11.05 4.8C9.9 5.24 9 6.32 9 7.5C9 9.43 10.57 11 12.5 11H16C17.1 11 18 10.1 18 9S17.1 6 18 6Z"
            fill="#E6F3FF"
          />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.cloud2}`}>
        <svg width="38" height="25" viewBox="0 0 24 16" fill="none">
          <path
            d="M18 6C18 4.9 17.1 4 16 4C15.78 2.84 14.68 2 13.5 2C12.03 2 10.85 3.28 11.05 4.8C9.9 5.24 9 6.32 9 7.5C9 9.43 10.57 11 12.5 11H16C17.1 11 18 10.1 18 9S17.1 6 18 6Z"
            fill="#F0F8FF"
          />
        </svg>
      </div>

      {/* Треугольники */}
      <div className={`${styles.decoration} ${styles.triangle1}`}>
        <svg width="30" height="28" viewBox="0 0 24 20" fill="none">
          <path d="M12 2L22 20H2L12 2Z" fill="#32CD32" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.triangle2}`}>
        <svg width="25" height="23" viewBox="0 0 24 20" fill="none">
          <path d="M12 2L22 20H2L12 2Z" fill="#FFB347" />
        </svg>
      </div>

      {/* Круги */}
      <div className={`${styles.decoration} ${styles.circle1}`}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6B6B" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.circle2}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#4ECDC4" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.circle3}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FFE66D" />
        </svg>
      </div>

      {/* Карандаши */}
      <div className={`${styles.decoration} ${styles.pencil1}`}>
        <svg width="12" height="35" viewBox="0 0 8 32" fill="none">
          <rect x="2" y="0" width="4" height="6" fill="#FFD700" />
          <rect x="1" y="6" width="6" height="20" fill="#8B4513" />
          <polygon points="1,26 4,32 7,26" fill="#FF69B4" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.pencil2}`}>
        <svg width="12" height="35" viewBox="0 0 8 32" fill="none">
          <rect x="2" y="0" width="4" height="6" fill="#FFD700" />
          <rect x="1" y="6" width="6" height="20" fill="#8B4513" />
          <polygon points="1,26 4,32 7,26" fill="#32CD32" />
        </svg>
      </div>

      {/* Книжки */}
      <div className={`${styles.decoration} ${styles.book1}`}>
        <svg width="30" height="25" viewBox="0 0 24 18" fill="none">
          <rect x="2" y="2" width="20" height="14" fill="#FF69B4" />
          <rect x="3" y="3" width="18" height="12" fill="#FFF" />
          <line x1="5" y1="6" x2="19" y2="6" stroke="#333" strokeWidth="0.5" />
          <line x1="5" y1="9" x2="19" y2="9" stroke="#333" strokeWidth="0.5" />
          <line
            x1="5"
            y1="12"
            x2="15"
            y2="12"
            stroke="#333"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.book2}`}>
        <svg width="28" height="23" viewBox="0 0 24 18" fill="none">
          <rect x="2" y="2" width="20" height="14" fill="#4ECDC4" />
          <rect x="3" y="3" width="18" height="12" fill="#FFF" />
          <line x1="5" y1="6" x2="19" y2="6" stroke="#333" strokeWidth="0.5" />
          <line x1="5" y1="9" x2="19" y2="9" stroke="#333" strokeWidth="0.5" />
          <line
            x1="5"
            y1="12"
            x2="15"
            y2="12"
            stroke="#333"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Буквы */}
      <div className={`${styles.decoration} ${styles.letter1}`}>
        <svg width="24" height="28" viewBox="0 0 16 20" fill="none">
          <text
            x="8"
            y="15"
            textAnchor="middle"
            fill="#FF6B6B"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            A
          </text>
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.letter2}`}>
        <svg width="24" height="28" viewBox="0 0 16 20" fill="none">
          <text
            x="8"
            y="15"
            textAnchor="middle"
            fill="#4ECDC4"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            B
          </text>
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.letter3}`}>
        <svg width="24" height="28" viewBox="0 0 16 20" fill="none">
          <text
            x="8"
            y="15"
            textAnchor="middle"
            fill="#FFE66D"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            C
          </text>
        </svg>
      </div>

      {/* Цифры */}
      <div className={`${styles.decoration} ${styles.number1}`}>
        <svg width="24" height="28" viewBox="0 0 16 20" fill="none">
          <text
            x="8"
            y="15"
            textAnchor="middle"
            fill="#9B59B6"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            1
          </text>
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.number2}`}>
        <svg width="24" height="28" viewBox="0 0 16 20" fill="none">
          <text
            x="8"
            y="15"
            textAnchor="middle"
            fill="#E67E22"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial"
          >
            2
          </text>
        </svg>
      </div>

      {/* Ластик */}
      <div className={`${styles.decoration} ${styles.eraser1}`}>
        <svg width="18" height="30" viewBox="0 0 12 24" fill="none">
          <rect x="2" y="2" width="8" height="20" fill="#FF69B4" rx="2" />
          <rect x="3" y="18" width="6" height="4" fill="#FFF" rx="1" />
        </svg>
      </div>

      {/* Линейка */}
      <div className={`${styles.decoration} ${styles.ruler1}`}>
        <svg width="35" height="10" viewBox="0 0 30 8" fill="none">
          <rect x="0" y="1" width="30" height="6" fill="#FFD700" />
          <line x1="5" y1="1" x2="5" y2="4" stroke="#333" strokeWidth="0.5" />
          <line x1="10" y1="1" x2="10" y2="7" stroke="#333" strokeWidth="0.5" />
          <line x1="15" y1="1" x2="15" y2="4" stroke="#333" strokeWidth="0.5" />
          <line x1="20" y1="1" x2="20" y2="7" stroke="#333" strokeWidth="0.5" />
          <line x1="25" y1="1" x2="25" y2="4" stroke="#333" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Лампочка идеи */}
      <div className={`${styles.decoration} ${styles.bulb1}`}>
        <svg width="24" height="30" viewBox="0 0 16 24" fill="none">
          <ellipse cx="8" cy="10" rx="6" ry="8" fill="#FFD700" />
          <rect x="6" y="16" width="4" height="2" fill="#666" />
          <rect x="5" y="18" width="6" height="1" fill="#666" />
          <line x1="8" y1="2" x2="8" y2="4" stroke="#FFD700" strokeWidth="1" />
          <line x1="2" y1="8" x2="4" y2="8" stroke="#FFD700" strokeWidth="1" />
          <line
            x1="12"
            y1="8"
            x2="14"
            y2="8"
            stroke="#FFD700"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Калькулятор */}
      <div className={`${styles.decoration} ${styles.calculator1}`}>
        <svg width="24" height="30" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" fill="#333" rx="2" />
          <rect x="2" y="2" width="12" height="4" fill="#4ECDC4" />
          <rect x="3" y="8" width="2" height="2" fill="#666" />
          <rect x="6" y="8" width="2" height="2" fill="#666" />
          <rect x="9" y="8" width="2" height="2" fill="#666" />
          <rect x="12" y="8" width="2" height="2" fill="#666" />
        </svg>
      </div>

      {/* Глобус */}
      <div className={`${styles.decoration} ${styles.globe1}`}>
        <svg width="30" height="32" viewBox="0 0 20 24" fill="none">
          <circle cx="10" cy="10" r="8" fill="#87CEEB" />
          <path
            d="M2 10 Q10 6 18 10"
            stroke="#32CD32"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M2 10 Q10 14 18 10"
            stroke="#32CD32"
            strokeWidth="1"
            fill="none"
          />
          <line
            x1="10"
            y1="2"
            x2="10"
            y2="18"
            stroke="#32CD32"
            strokeWidth="1"
          />
          <rect x="8" y="18" width="4" height="4" fill="#8B4513" />
        </svg>
      </div>

      {/* НЛО */}
      <div className={`${styles.decoration} ${styles.ufo1}`}>
        <svg width="35" height="25" viewBox="0 0 40 30" fill="none">
          <ellipse cx="20" cy="20" rx="18" ry="6" fill="#C0C0C0" />
          <ellipse cx="20" cy="15" rx="12" ry="8" fill="#87CEEB" />
          <circle cx="15" cy="15" r="2" fill="#FFD700" />
          <circle cx="20" cy="13" r="2" fill="#FFD700" />
          <circle cx="25" cy="15" r="2" fill="#FFD700" />
          <circle cx="12" cy="24" r="1" fill="#FF69B4" />
          <circle cx="20" cy="26" r="1" fill="#FF69B4" />
          <circle cx="28" cy="24" r="1" fill="#FF69B4" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.ufo2}`}>
        <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
          <ellipse cx="20" cy="20" rx="18" ry="6" fill="#B8860B" />
          <ellipse cx="20" cy="15" rx="12" ry="8" fill="#98FB98" />
          <circle cx="15" cy="15" r="2" fill="#FF6347" />
          <circle cx="20" cy="13" r="2" fill="#FF6347" />
          <circle cx="25" cy="15" r="2" fill="#FF6347" />
          <circle cx="12" cy="24" r="1" fill="#00BFFF" />
          <circle cx="20" cy="26" r="1" fill="#00BFFF" />
          <circle cx="28" cy="24" r="1" fill="#00BFFF" />
        </svg>
      </div>

      {/* Больше карандашей */}
      <div className={`${styles.decoration} ${styles.pencil3}`}>
        <svg width="12" height="35" viewBox="0 0 12 40" fill="none">
          <rect x="3" y="0" width="6" height="8" fill="#FFD700" />
          <rect x="2" y="8" width="8" height="26" fill="#FF6347" />
          <polygon points="2,34 6,40 10,34" fill="#32CD32" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.pencil4}`}>
        <svg width="12" height="35" viewBox="0 0 12 40" fill="none">
          <rect x="3" y="0" width="6" height="8" fill="#FFD700" />
          <rect x="2" y="8" width="8" height="26" fill="#4169E1" />
          <polygon points="2,34 6,40 10,34" fill="#FF1493" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.pencil5}`}>
        <svg width="12" height="35" viewBox="0 0 12 40" fill="none">
          <rect x="3" y="0" width="6" height="8" fill="#FFD700" />
          <rect x="2" y="8" width="8" height="26" fill="#9370DB" />
          <polygon points="2,34 6,40 10,34" fill="#FFA500" />
        </svg>
      </div>

      {/* Ракеты */}
      <div className={`${styles.decoration} ${styles.rocket1}`}>
        <svg width="20" height="40" viewBox="0 0 20 45" fill="none">
          <polygon points="10,0 6,15 14,15" fill="#FF6347" />
          <rect x="6" y="15" width="8" height="20" fill="#C0C0C0" />
          <circle cx="10" cy="20" r="2" fill="#4169E1" />
          <circle cx="10" cy="27" r="2" fill="#4169E1" />
          <polygon points="4,35 6,40 6,35" fill="#FFD700" />
          <polygon points="16,35 14,40 14,35" fill="#FFD700" />
          <polygon points="8,35 10,42 12,35" fill="#FFD700" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.rocket2}`}>
        <svg width="18" height="35" viewBox="0 0 18 40" fill="none">
          <polygon points="9,0 5,12 13,12" fill="#32CD32" />
          <rect x="5" y="12" width="8" height="18" fill="#FFD700" />
          <circle cx="9" cy="17" r="1.5" fill="#FF1493" />
          <circle cx="9" cy="23" r="1.5" fill="#FF1493" />
          <polygon points="3,30 5,35 5,30" fill="#FF6347" />
          <polygon points="15,30 13,35 13,30" fill="#FF6347" />
          <polygon points="7,30 9,37 11,30" fill="#FF6347" />
        </svg>
      </div>

      {/* Роботы */}
      <div className={`${styles.decoration} ${styles.robot1}`}>
        <svg width="25" height="30" viewBox="0 0 25 35" fill="none">
          <rect x="7" y="5" width="11" height="12" fill="#C0C0C0" rx="2" />
          <circle cx="10" cy="10" r="1.5" fill="#FF6347" />
          <circle cx="15" cy="10" r="1.5" fill="#FF6347" />
          <rect x="11" y="13" width="3" height="2" fill="#333" />
          <rect x="5" y="17" width="15" height="10" fill="#87CEEB" rx="2" />
          <rect x="8" y="20" width="2" height="4" fill="#FFD700" />
          <rect x="15" y="20" width="2" height="4" fill="#FFD700" />
          <rect x="10" y="27" width="2" height="8" fill="#333" />
          <rect x="13" y="27" width="2" height="8" fill="#333" />
          <circle cx="6" cy="8" r="1" fill="#32CD32" />
          <circle cx="19" cy="8" r="1" fill="#32CD32" />
        </svg>
      </div>

      {/* Планеты */}
      <div className={`${styles.decoration} ${styles.planet1}`}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="12" fill="#FF6347" />
          <ellipse
            cx="15"
            cy="15"
            rx="16"
            ry="4"
            fill="none"
            stroke="#FFD700"
            strokeWidth="2"
          />
          <circle cx="10" cy="12" r="2" fill="#8B0000" />
          <circle cx="18" cy="10" r="1.5" fill="#8B0000" />
          <circle cx="12" cy="18" r="1" fill="#8B0000" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.planet2}`}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <circle cx="12.5" cy="12.5" r="10" fill="#4169E1" />
          <circle cx="8" cy="10" r="2" fill="#191970" />
          <circle cx="15" cy="8" r="1.5" fill="#191970" />
          <circle cx="10" cy="16" r="1" fill="#191970" />
          <circle cx="17" cy="15" r="1.5" fill="#191970" />
        </svg>
      </div>

      {/* Кометы */}
      <div className={`${styles.decoration} ${styles.comet1}`}>
        <svg width="35" height="15" viewBox="0 0 35 15" fill="none">
          <circle cx="28" cy="7.5" r="4" fill="#FFD700" />
          <path
            d="M24 7.5 Q15 5 5 2 Q15 7.5 5 13 Q15 10 24 7.5"
            fill="#FFA500"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Воздушные шары */}
      <div className={`${styles.decoration} ${styles.balloon1}`}>
        <svg width="20" height="35" viewBox="0 0 20 40" fill="none">
          <ellipse cx="10" cy="12" rx="8" ry="12" fill="#FF69B4" />
          <rect x="9.5" y="24" width="1" height="10" fill="#333" />
          <rect x="7" y="34" width="6" height="3" fill="#8B4513" />
          <circle cx="10" cy="8" r="2" fill="#FFB6C1" opacity="0.6" />
        </svg>
      </div>

      <div className={`${styles.decoration} ${styles.balloon2}`}>
        <svg width="18" height="30" viewBox="0 0 18 35" fill="none">
          <ellipse cx="9" cy="10" rx="7" ry="10" fill="#32CD32" />
          <rect x="8.5" y="20" width="1" height="8" fill="#333" />
          <rect x="6" y="28" width="6" height="3" fill="#8B4513" />
          <circle cx="9" cy="7" r="1.5" fill="#90EE90" opacity="0.6" />
        </svg>
      </div>

      {/* Солнце */}
      <div className={`${styles.decoration} ${styles.sun1}`}>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <circle cx="17.5" cy="17.5" r="8" fill="#FFD700" />
          <g stroke="#FFA500" strokeWidth="2">
            <line x1="17.5" y1="2" x2="17.5" y2="6" />
            <line x1="17.5" y1="29" x2="17.5" y2="33" />
            <line x1="2" y1="17.5" x2="6" y2="17.5" />
            <line x1="29" y1="17.5" x2="33" y2="17.5" />
            <line x1="6.7" y1="6.7" x2="9.5" y2="9.5" />
            <line x1="25.5" y1="25.5" x2="28.3" y2="28.3" />
            <line x1="6.7" y1="28.3" x2="9.5" y2="25.5" />
            <line x1="25.5" y1="9.5" x2="28.3" y2="6.7" />
          </g>
          <circle cx="15" cy="15" r="1" fill="#FF6347" />
          <circle cx="20" cy="15" r="1" fill="#FF6347" />
          <path
            d="M15 19 Q17.5 21 20 19"
            stroke="#FF6347"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Луна */}
      <div className={`${styles.decoration} ${styles.moon1}`}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <circle cx="12.5" cy="12.5" r="10" fill="#E6E6FA" />
          <circle cx="8" cy="8" r="1.5" fill="#D3D3D3" />
          <circle cx="15" cy="10" r="1" fill="#D3D3D3" />
          <circle cx="10" cy="15" r="2" fill="#D3D3D3" />
          <circle cx="16" cy="17" r="1.5" fill="#D3D3D3" />
        </svg>
      </div>

      {/* Радуга */}
      <div className={`${styles.decoration} ${styles.rainbow1}`}>
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
          <path
            d="M5 15 Q20 0 35 15"
            stroke="#FF0000"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M6 16 Q20 2 34 16"
            stroke="#FF8C00"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M7 17 Q20 4 33 17"
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 18 Q20 6 32 18"
            stroke="#32CD32"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M9 19 Q20 8 31 19"
            stroke="#1E90FF"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10 20 Q20 10 30 20"
            stroke="#8A2BE2"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Бабочки */}
      <div className={`${styles.decoration} ${styles.butterfly1}`}>
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none">
          <ellipse cx="8" cy="8" rx="6" ry="4" fill="#FF69B4" />
          <ellipse cx="17" cy="8" rx="6" ry="4" fill="#FF1493" />
          <ellipse cx="8" cy="12" rx="5" ry="3" fill="#FFB6C1" />
          <ellipse cx="17" cy="12" rx="5" ry="3" fill="#FF69B4" />
          <rect x="12" y="5" width="1" height="10" fill="#333" />
          <circle cx="12.5" cy="4" r="1" fill="#333" />
          <line x1="11" y1="3" x2="9" y2="1" stroke="#333" strokeWidth="0.5" />
          <line x1="14" y1="3" x2="16" y2="1" stroke="#333" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundDecorations;
