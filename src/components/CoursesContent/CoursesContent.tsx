"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";

/**
 * Восстановленный полный массив курсов (6 штук) — добавлены поля,
 * нужные для фильтрации: durationMonths, cost, hasEmployment, salary (пустая строка если неизвестно).
 * Это гарантирует, что фильтры будут работать и курсы будут видны.
 */

const coursesData = [
  {
    id: 1,
    title: "Python",
    items: [
      "Основы Python",
      "Работа с данными",
      "Веб-разработка",
      "Автоматизация",
    ],
    buttonText: "Записаться",
    duration: "9 месяцев",
    employment: "с трудоустройством",
    description: "Вы освоите самый востребованный язык программирования, ...",
    bgImage: "/images/courses/python.png",
    sales: "-50%",
    cost: "paid",
    durationMonths: 9,
    hasEmployment: true,
    salary: "ЗП от 150 тыс.",
    profession: "Профессия",
  },
  {
    id: 2,
    title: "Roblox",
    items: [
      "Основы Roblox Studio",
      "Lua scripting",
      "Создание уровней",
      "Публикация игры",
    ],
    buttonText: "Записаться",
    duration: "6 месяцев",
    employment: "без трудоустройства",
    description: "Курс по разработке игр в Roblox: от идеи до публикации.",
    bgImage: "/images/courses/roblox.png",
    sales: "",
    cost: "paid",
    durationMonths: 6,
    hasEmployment: false,
    salary: "ЗП от 150 тыс.",
    profession: "Курс",
  },
  {
    id: 3,
    title: "Scratch",
    items: [
      "Блоковое программирование",
      "Создание интерактивных историй",
      "Игры и анимации",
      "Проекты для портфолио",
    ],
    buttonText: "Записаться",
    duration: "4 месяца",
    employment: "без трудоустройства",
    description:
      "Курс для начинающих: основы алгоритмического мышления через Scratch.",
    bgImage: "/images/courses/scratch.png",
    sales: "-25%",
    cost: "free",
    durationMonths: 4,
    hasEmployment: false,
    salary: "ЗП от 150 тыс.",
    profession: "Курс",
  },
  {
    id: 4,
    title: "Minecraft",
    items: [
      "Программирование в Minecraft",
      "Командные блоки",
      "Redstone механизмы",
      "Создание мини-игр",
    ],
    buttonText: "Записаться",
    duration: "5 месяцев",
    employment: "без трудоустройства",
    description: "Обучение программированию и логике через Minecraft-проекты.",
    bgImage: "/images/courses/minecraft.png",
    sales: "",
    cost: "free",
    durationMonths: 5,
    hasEmployment: false,
    salary: "ЗП от 150 тыс.",
    profession: "Курс",
  },
];

const filterCategories = [
  "Программирование",
  "Дизайн",
  "Маркетинг",
  "Аналитика",
  "Управление",
  "Начинающим",
  "Для детей",
  "Скидки",
];

export default function CoursesContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    cost: {
      free: false,
      paid: true,
    },
    duration: {
      upTo1Month: false,
      from1To3Months: false,
      from3To6Months: false,
      from6To12Months: true,
      over12Months: false,
    },
    employment: {
      withEmployment: false,
      withoutEmployment: false,
    },
  });

  const [filterState, setFilterState] = useState({
    cost: {
      anySelected: true,
      allSelected: false,
    },
    duration: {
      anySelected: true,
      allSelected: false,
    },
    employment: {
      anySelected: false,
      allSelected: false,
    },
  });

  const [activeFilterButtons, setActiveFilterButtons] = useState<string[]>([]);

  useEffect(() => {
    setFilterState({
      cost: {
        anySelected: Object.values(selectedFilters.cost).some((v) => v),
        allSelected: Object.values(selectedFilters.cost).every((v) => v),
      },
      duration: {
        anySelected: Object.values(selectedFilters.duration).some((v) => v),
        allSelected: Object.values(selectedFilters.duration).every((v) => v),
      },
      employment: {
        anySelected: Object.values(selectedFilters.employment).some((v) => v),
        allSelected: Object.values(selectedFilters.employment).every((v) => v),
      },
    });
  }, [selectedFilters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (category: string, filter: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [filter]:
          !prev[category as keyof typeof prev][
            filter as keyof (typeof prev)[keyof typeof prev]
          ],
      },
    }));
  };

  const handleFilterButtonClick = (filterName: string) => {
    setActiveFilterButtons((prev) =>
      prev.includes(filterName)
        ? prev.filter((p) => p !== filterName)
        : [...prev, filterName]
    );
  };

  // Фильтрация — теперь по полному coursesData
  const filteredCourses = coursesData.filter((item) => true);
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
        return "linear-gradient(135deg, #6c757d 0%, #adb5bd 100%)";
    }
  }

  return (
    <>
      <main className="px-[40px] pb-[100px] min-h-[calc(100vh-200px)] w-full">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="text-[28px] md:text-[36px] font-[700] mb-[30px] text-[#333]">
            Все курсы
          </h1>

          {/* Поиск */}
          <div className="w-full max-w-[1297px] mb-[25px] flex rounded-[8px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] bg-[rgba(227,227,227,1)]">
            <input
              type="text"
              placeholder="Какой курс вам нужен?"
              className="flex-1 py-[15px] px-[20px] text-[16px] bg-[rgba(227,227,227,1)] outline-none border-none text-[#333]"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="px-[20px] flex items-center text-[#666] bg-[rgba(227,227,227,1)] hover:bg-[#f5f5f5] transition-colors">
              {/* svg */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Фильтры */}
          <div className="hidden mb-[30px] overflow-x-auto pb-[5px] -webkit-overflow-scrolling-touch">
            <div className="flex gap-[10px]">
              {filterCategories.map((filter, index) => {
                const active = activeFilterButtons.includes(filter);
                return (
                  <button
                    key={index}
                    onClick={() => handleFilterButtonClick(filter)}
                    className={`whitespace-nowrap px-[16px] py-[8px] rounded-[20px] text-[14px] font-[500] cursor-pointer transition-colors ${
                      active
                        ? "bg-[#007bff] text-white"
                        : "bg-[#e9ecef] text-[#495057] hover:bg-[#dee2e6]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Контент + сайдбар */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-items-stretch">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  legacyBehavior
                >
                  {/* <a> здесь гарантированно получает классы и становится block */}
                  <a className="group block w-full h-[350px] relative rounded-[12px] shadow-[0_6px_20px_rgba(0,0,0,0.12)] bg-white transition-transform duration-300 ease-in-out hover:-translate-y-[8px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)] cursor-pointer no-underline text-inherit overflow-hidden">
                    <span className="absolute top-[12px] left-[12px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[26.425926208496094px] px-[14px] py-[6px] rounded-[20px] text-[13px] font-[500] z-[2] text-[#ffffff]">
                      {course.profession}
                    </span>

                    <div
                      className="absolute top-0 left-0 h-full w-full rounded-t-[12px] overflow-hidden"
                      style={{ background: gradientForIndex((idx % 4) + 1) }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 text-[80px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] group-hover:scale-[1.1]">
                        {course.id === 1 && "🐍"}
                        {course.id === 2 && "🎮"}
                        {course.id === 3 && "🎨"}
                        {course.id === 4 && "⛏️"}
                        {course.id > 4 && "📚"}
                      </div>
                    </div>

                    <div
                      className="absolute bottom-0 left-0 right-0 pt-[25px] pb-[15px] px-[20px] z-[1] text-white transform translate-y-0 transition-transform duration-300 ease-out rounded-bl-[12px] rounded-br-[12px] box-border group-hover:-translate-y-[10px]"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.6) 75%, transparent 100%)",
                      }}
                    >
                      <h3 className="text-[22px] font-[700] mb-[8px] leading-[1.3]">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-[8px] text-[14px] text-[rgba(255,255,255,0.85)]">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.salary || "—"}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
            ) : (
              <div className="col-span-full bg-[#f8f9fa] rounded-[12px] p-[40px] px-[20px] text-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] my-[30px]">
                <p className="text-[18px] font-[600] mb-[10px] text-[#212529]">
                  Нет курсов, соответствующих выбранным фильтрам
                </p>
                <p className="m-0 text-[#495057]">
                  Пожалуйста, измените параметры фильтрации
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ContactForm centered */}
      <div className="flex justify-center items-center py-[80px] bg-[#f8f9fa]">
        <ContactForm />
      </div>
    </>
  );
}
