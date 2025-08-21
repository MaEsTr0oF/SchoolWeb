"use client";
import React from "react";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-[80px] pt-[95px]">
      <div className=" mx-auto px-0">
        <div className="flex flex-col md:flex-row-reverse gap-[40px] items-center text-black">
          {/* Cards (правее на десктопе) */}
          <div className="flex-1 grid grid-cols-2 gap-5">
            {[
              "Обучение через практику — каждый урок — это шаг к собственному проекту: игре, приложению или веб-сайту.",
              "Наши преподаватели — специалисты из IT-сферы, умеющие доступно объяснять сложные вещи.",
              "Маленькие группы и персональное внимание к каждому ученику.",
              "Онлайн-формат позволяет учиться из любой точки мира — в комфортном темпе и графике.",
            ].map((text, i) => (
              <div
                key={i}
                className="group w-full rounded-[30px] overflow-hidden cursor-pointer
                           bg-[linear-gradient(257.25deg,#0092cc_0%,#51c791_99.29%)]
                           text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]
                           transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                           hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
              >
                <p
                  className="p-[25px] m-0 text-[1.1rem] leading-[1.5] transform
                             transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                             group-hover:scale-[1.05] group-hover:-rotate-[5deg]"
                  aria-hidden={false}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Main content (слева на десктопе) */}
          <div className="flex-1 flex flex-col items-start z-0">
            <div className="flex items-center justify-start gap-5 w-full mb-13">
              <h2 className="text-[52px] leading-[1] font-extrabold text-black">
                О нас
              </h2>
            </div>

            <p className="text-[23px] text-[#00000099] leading-[39.13px]">
              Мы — онлайн-школа программирования для детей, где обучение
              превращается в увлекательное приключение! Наши курсы разработаны
              специально для учеников от 7 до 17 лет — с учётом возраста,
              интересов и уровня подготовки. Мы учим создавать игры, сайты,
              приложения и анимации, помогая ребятам не просто изучать материал,
              а применять знания на практике. Наша миссия — развить у детей
              логическое мышление, креативность и уверенность в цифровом
              будущем.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
