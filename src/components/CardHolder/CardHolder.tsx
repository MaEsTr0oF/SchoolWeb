import Link from "next/link"; // Добавляем импорт Link
import Card from "../Card/Card"; // Импортируем компонент Card
import React from "react";
import Image from "next/image";

const coursesData = [
  {
    id: 1,
    title: "Python-разработчик",
    items: [
      "Основы Python",
      "Работа с данными",
      "Веб-разработка",
      "Автоматизация",
    ],
    buttonText: "Записаться",
    duration: "10 месяцев",
    employment: "с трудоустройством",
    description:
      "Вы освоите самый востребованный язык программирования, на котором пишут сайты, приложения, игры и чат-боты. Сделаете 3 проекта для портфолио, а Центр карьеры поможет найти работу",
    bgImage: "", // Используем градиент из CSS
    sales: "-50%",
  },
  {
    id: 2,
    title: "Бухгалтер",
    items: [
      "Бухучет",
      "Налогообложение",
      "Финансовый анализ",
      "1С: Бухгалтерия",
    ],
    buttonText: "Записаться",
    duration: "6 месяцев",
    employment: "с трудоустройством",
    description:
      "Освоите бухгалтерский и налоговый учёт, работу в программе 1С. Сможете вести документацию и сдавать отчётность в соответствии с законодательством.",
    bgImage: "/images/courses/accounting.png", // Путь к изображению
    sales: "",
  },
  {
    id: 3,
    title: "Графический дизайнер",
    items: [
      "Основы дизайна",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Верстка",
    ],
    buttonText: "Записаться",
    duration: "12 месяцев",
    employment: "с трудоустройством",
    description:
      "Научитесь создавать дизайн для цифровых и печатных материалов. Освоите профессиональные инструменты и соберете портфолио из реальных проектов.",
    bgImage: "", // Используем градиент из CSS
    sales: "-25%",
  },
  {
    id: 4,
    title: "Front-end разработчик",
    items: ["HTML & CSS", "JavaScript", "React", "UI/UX основы"],
    buttonText: "Записаться",
    duration: "8 месяцев",
    employment: "с трудоустройством",
    description:
      "Освоите современные технологии фронтенд-разработки и научитесь создавать интерактивные веб-интерфейсы. Работа с React, TypeScript и другими современными инструментами.",
    bgImage: "/images/courses/frontend.png",
    sales: "",
  },
  {
    id: 5,
    title: "Data Scientist",
    items: [
      "Python для анализа",
      "SQL",
      "Машинное обучение",
      "Визуализация данных",
    ],
    buttonText: "Записаться",
    duration: "10 месяцев",
    employment: "с трудоустройством",
    description:
      "Научитесь анализировать большие данные и строить предиктивные модели. Курс для тех, кто хочет освоить одну из самых востребованных профессий на рынке.",
    bgImage: "/images/courses/datascience.png",
    sales: "",
  },
  {
    id: 6,
    title: "SMM-специалист",
    items: [
      "Стратегия в соцсетях",
      "Контент-маркетинг",
      "Таргетированная реклама",
      "Аналитика",
    ],
    buttonText: "Записаться",
    duration: "4 месяца",
    employment: "с трудоустройством",
    description:
      "Вы научитесь создавать стратегии продвижения в социальных сетях, запускать рекламные кампании и анализировать их эффективность.",
    bgImage: "/images/courses/smm.png",
    sales: "-40%",
  },
];

const topCoursesData = [
  {
    id: 1,
    title: "Python",
    duration: "9 месяцев",
    salary: "ЗП от 150 тыс.",
    image: "/images/courses/python.png",
    profession: "Профессия",
    sales: "",
  },
  {
    id: 2,
    title: "Roblox",
    duration: "6 месяцев",
    salary: "Создание игр",
    image: "/images/courses/roblox.png",
    profession: "Курс",
    sales: "",
  },
  {
    id: 3,
    title: "Scratch",
    duration: "4 месяца",
    salary: "Основы программирования",
    image: "/images/courses/scratch.png",
    profession: "Курс",
    sales: "",
  },
  {
    id: 4,
    title: "Minecraft",
    duration: "5 месяцев",
    salary: "Программирование в игре",
    image: "/images/courses/minecraft.png",
    profession: "Курс",
    sales: "",
  },
];

function gradientForIndex(i: number) {
  switch (i) {
    case 1:
      return "linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)";
    case 2:
      return "linear-gradient(135deg, #e74c3c 0%, #ff6b35 100%)";
    case 3:
      return "linear-gradient(135deg, #ff7900 0%, #ffb347 100%)";
    case 4:
      return "linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)";
    default:
      return "transparent";
  }
}

export default function CardHolder() {
  return (
    <>
      {/* .cardHolder */}
      <div className="w-full">
        <div className="mx-auto">
          {/* .topCourses */}
          <div className="w-full">
            <div className="mx-auto">
              <h2 className="text-[36px] font-[700] mb-[40px] text-left text-[#333]">
                Наши курсы
              </h2>

              {/* .topCourses__grid (по оригиналу: 2 колонки, на мобилке 1) */}
              <div className="grid grid-cols-2 gap-[30px] mb-[30px] md:grid-cols-2 sm:grid-cols-1">
                {topCoursesData.map((course, idx) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="group relative rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] bg-white transition-transform duration-300 ease-in-out hover:-translate-y-[8px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)] cursor-pointer no-underline text-inherit h-[350px] overflow-hidden"
                  >
                    {/* .topCourses__profession */}
                    <span
                      className="absolute top-[12px] left-[12px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[26.425926208496094px] px-[14px] py-[6px] rounded-[20px] text-[13px] font-[500] z-[2] text-[#ffffff]"
                      aria-hidden
                    >
                      {course.profession}
                    </span>

                    {/* .topCourses__image */}
                    <div
                      className="absolute top-0 left-0 h-full w-full rounded-t-[15px] overflow-hidden"
                      style={{ background: gradientForIndex(idx + 1) }}
                    >
                      {/* .topCourses__emoji */}
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                        style={{
                          fontSize: 80,
                          textShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                      >
                        {course.id === 1 && "🐍"}
                        {course.id === 2 && "🎮"}
                        {course.id === 3 && "🎨"}
                        {course.id === 4 && "⛏️"}
                      </div>
                    </div>

                    {/* .topCourses__info */}
                    <div
                      className="absolute bottom-0 left-0 right-0 pt-[25px] pb-[15px] px-[20px] z-[1] text-white transform translate-y-0 transition-transform duration-300 ease-out rounded-bl-[12px] rounded-br-[12px] box-border group-hover:-translate-y-[10px]"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.6) 75%, transparent 100%)",
                      }}
                    >
                      <h3 className="text-[22px] font-[700] mb-[8px] text-white leading-[1.3]">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-[8px] text-[14px] text-[rgba(255,255,255,0.85)]">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.salary}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-[20px] text-right md:text-right sm:text-center">
                <Link
                  href="/courses"
                  className="inline-flex items-center px-[25px] py-[10px] rounded-[30px] bg-[rgba(0,0,0,0.8)] text-white text-[16px] font-[500] transition-all duration-300 hover:scale-[1.05]"
                >
                  Больше курсов →
                </Link>
              </div>
            </div>
          </div>

          {/* developmentVectors (если используешь, то соответствующие классы в JSX будут выглядеть так) */}
          {/* Пример (не включён в текущую разметку, оставлен как подсказка):
            <section className="py-[80px] bg-white">
              <div className="max-w-[1200px] mx-auto px-[15px]">
                <h2 className="text-[36px] font-[700] mb-[50px] text-center text-[#333]">...</h2>
                <div className="grid grid-cols-4 gap-[30px]">...</div>
              </div>
            </section>
          */}
        </div>
      </div>
    </>
  );
}
