"use client";
import React, { useState, useEffect, useRef } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Course {
  value: string;
  label: string;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  if (!isOpen) return null;

  const courses: Course[] = [
    { value: "", label: "Выберите курс" },
    { value: "programming", label: "Программирование" },
    { value: "design", label: "Дизайн" },
    { value: "marketing", label: "Маркетинг" },
  ];

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
  const selectRef = useRef<HTMLDivElement | null>(null);

  // Закрываем селект при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelectOpen((s) => !s);
  };

  const handleSelectOption = (course: Course) => {
    setSelectedCourse(course);
    setIsSelectOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена", selectedCourse);
    // здесь логика оплаты / отправки
    // onClose(); // раскомментировать после успешной отправки
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-[400px] max-w-[90%] rounded-[10px] p-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.3)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-black text-[24px] font-bold mb-[20px] text-left">
          Онлайн запись
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-[20px]">
            <label
              htmlFor="fullName"
              className="block text-[14px] mb-[5px] text-[#333]"
            >
              ФИО <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              className="w-full h-[40px] border border-[#ddd] rounded-[5px] px-3 text-[14px] focus:outline-none"
            />
          </div>

          <div className="mb-[20px]">
            <label
              htmlFor="phone"
              className="block text-[14px] mb-[5px] text-[#333]"
            >
              Телефон <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              className="w-full h-[40px] border border-[#ddd] rounded-[5px] px-3 text-[14px] focus:outline-none"
            />
          </div>

          <div className="mb-[20px]">
            <label
              htmlFor="email"
              className="block text-[14px] mb-[5px] text-[#333]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full h-[40px] border border-[#ddd] rounded-[5px] px-3 text-[14px] focus:outline-none"
            />
            <p className="text-[12px] text-[#777] mt-[6px] mb-0">
              *Информация по выбранному курсу придет вам на почту.
            </p>
          </div>

          {/* Кастомный select */}
          <div className="mb-[20px]">
            <div ref={selectRef} className="relative w-full text-black">
              <div
                className={`flex justify-between items-center w-full h-[40px] px-3 border border-[#ddd] rounded-[4px] bg-white text-[14px] cursor-pointer select-none ${
                  isSelectOpen ? "rounded-b-0 border-b-0 border-[#3175e8]" : ""
                }`}
                onClick={toggleSelect}
                role="button"
                aria-expanded={isSelectOpen}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSelect(e as any);
                  } else if (e.key === "Escape") {
                    setIsSelectOpen(false);
                  }
                }}
              >
                <span
                  className={selectedCourse.value === "" ? "text-[#777]" : ""}
                >
                  {selectedCourse.label}
                </span>
                <span
                  className={`text-[10px] text-[#777] transition-transform ${
                    isSelectOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {isSelectOpen && (
                <div className="absolute top-full left-0 w-full max-h-[200px] overflow-y-auto bg-white border border-[#ddd] border-t-0 rounded-b-[4px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] z-10">
                  {courses.map((course, index) =>
                    course.value !== "" ? (
                      <div
                        key={index}
                        className={`px-3 py-[12px] hover:bg-gray-100 cursor-pointer ${
                          selectedCourse.value === course.value
                            ? "bg-[#3175e8] text-white"
                            : ""
                        }`}
                        onClick={() => handleSelectOption(course)}
                        role="option"
                        aria-selected={selectedCourse.value === course.value}
                      >
                        {course.label}
                      </div>
                    ) : null
                  )}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="block mx-auto mt-[30px] px-[30px] py-[10px] bg-[#444] text-white rounded-[25px] text-[14px] cursor-pointer transition-all hover:bg-[#555] hover:-translate-y-[2px] hover:shadow-md"
          >
            Перейти к оплате
          </button>
        </form>
      </div>
    </div>
  );
}
