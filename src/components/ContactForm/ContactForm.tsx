"use client";
import { useState } from "react";

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
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div className="relative z-[10] flex items-center justify-center w-full min-h-[250px]">
      {/* Блок с абсолютным позиционированием и градиентом */}
      <div className="absolute inset-x-0 mx-auto w-full max-w-[1200px] z-50 p-6 md:p-10 bg-gradient-to-b from-[#CCDDE2] to-[#D9F1E8] rounded-[26.43px]">
        <h2 className="text-[36px] font-bold mb-4 text-[#333] text-center">
          Ещё не определились?
        </h2>

        <p className="text-[18px] mb-6 text-[#333] text-center max-w-[900px] mx-auto">
          Оставьте заявку на бесплатную консультацию, наши менеджеры помогут вам
          и ответят на все ваши вопросы
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {/* inputsWrapper:
              - на мобильных: колонка
              - на md+ : строка (nowrap)
          */}
          <div className="flex flex-col md:flex-row md:flex-nowrap gap-2.5 w-full justify-center items-center max-w-[900px] mx-auto">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              required
              className="h-[50px] px-5 border border-black rounded-full text-base flex-1 min-w-[150px] bg-transparent box-border shadow-sm placeholder-[#555] placeholder-opacity-75 focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 999-99-99"
              required
              className="h-[50px] px-5 border border-black rounded-full text-base flex-1 min-w-[150px] bg-transparent box-border shadow-sm placeholder-[#555] placeholder-opacity-75 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Электронная почта"
              required
              className="h-[50px] px-5 border border-black rounded-full text-base flex-1 min-w-[150px] bg-transparent box-border shadow-sm placeholder-[#555] placeholder-opacity-75 focus:outline-none"
            />

            <button
              type="submit"
              className="h-[50px] px-5 bg-[#2a2a2a] text-white text-base font-medium rounded-full min-w-[220px] flex-shrink-0 shadow-md hover:bg-[#444] mt-3 md:mt-0 w-full md:w-auto"
            >
              Получить консультацию
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
