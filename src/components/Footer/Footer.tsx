"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Plane,
  Linkedin,
  ChevronRight,
} from "lucide-react";

interface FooterProps {
  form?: boolean;
}

export default function Footer({ form = false }: FooterProps) {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const openRegistrationModal = () => setIsRegistrationModalOpen(true);
  const closeRegistrationModal = () => setIsRegistrationModalOpen(false);

  // Скрываем ContactForm и блокируем скролл при открытой модалке
  useEffect(() => {
    const selectors = [
      '[class*="ContactForm_formSection"]',
      ".formSection",
      '[class*="formSection"]',
    ];

    let contactForm: HTMLElement | null = null;
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el) {
        contactForm = el as HTMLElement;
        break;
      }
    }

    if (contactForm) {
      contactForm.style.display = isRegistrationModalOpen ? "none" : "block";
    }

    if (isRegistrationModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      if (contactForm) contactForm.style.display = "block";
    };
  }, [isRegistrationModalOpen]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь может быть вызов API — пока просто лог
    console.log("Подписка на рассылку:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <>
      <footer
        className="bg-[#0f1720] text-white pt-[80px] pb-[40px] relative z-[5] -mt-[50px] sm:-mt-[30px]"
        style={{ paddingTop: form ? "0px" : undefined }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Top grid: 4 columns on lg, 2 on md, 1 on sm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-10">
            {/* Column: Brand + description */}
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 no-underline"
              >
                {/* Replace with your logo if available */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center">
                  <span className="font-bold text-white">К</span>
                </div>
                <span className="text-xl font-nekstregular font-semibold text-white">
                  Код к знаниям
                </span>
              </Link>
              <p className="text-[#c7ced6] font-nekstregular  text-sm max-w-[260px]">
                Мы предлагаем профессиональные образовательные программы по
                Python, Roblox, Scratch и Minecraft. Живые занятия с
                преподавателями, проверенные учебные программы и персональная
                поддержка.
              </p>
              {/* обязательно экранировать кавычки */}

              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center gap-2 text-[#c7ced6] text-sm">
                  <MapPin className="w-4 h-4 text-[#9aa6b2]" />
                  <span className="font-nekstregular">
                    г. Москва, ул. Планерная, 10
                  </span>
                </div>
              </div>
            </div>

            {/* Column: Курсы */}
            <div>
              <h4 className="text-[16px] font-semibold mb-4 text-white">
                Курсы
              </h4>
              <ul className="space-y-3 text-[#c7ced6] text-sm">
                <li>
                  <Link
                    href="/courses/1"
                    className="hover:text-white flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-[#6b7280] " />
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/2"
                    className="hover:text-white flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-[#6b7280]" />
                    Roblox
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/3"
                    className="hover:text-white flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-[#6b7280]" />
                    Scratch
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/4"
                    className="hover:text-white flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-[#6b7280]" />
                    Minecraft
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column: Ресурсы / Компания */}
            <div className="">
              <h4 className="text-[16px] font-semibold mb-4 text-white">
                О проекте
              </h4>
              <ul className="space-y-3 text-[#c7ced6] text-sm">
                <li>
                  <Link
                    href="/#about-us"
                    className="hover:text-white font-nekstregular"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teaching-methods"
                    className="hover:text-white font-nekstregular"
                  >
                    Методы преподавания
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teachers"
                    className="hover:text-white font-nekstregular"
                  >
                    Преподаватели
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#reviews"
                    className="hover:text-white font-nekstregular"
                  >
                    Отзывы
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openRegistrationModal();
                    }}
                    className="hover:text-white font-nekstregular"
                  >
                    Оплата
                  </a>
                </li>
              </ul>
            </div>

            {/* Column: Контакты + соцсети + часы */}
            <div className="space-y-4">
              <h4 className="text-[16px] font-semibold mb-2 text-white">
                Контакты
              </h4>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#0b1220]">
                  <Phone className="w-5 h-5 text-[#9fb6c9] " />
                </div>
                <div>
                  <a
                    href="tel:+79999999999 "
                    className="text-white font-nekstregular no-underline"
                  >
                    +7 (999) 999-99-99
                  </a>
                  <p className="text-[#9aa6b2] text-sm mt-1 font-nekstregular">
                    Звонки с 9:00 до 20:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#0b1220]">
                  <Mail className="w-5 h-5 text-[#9fb6c9]" />
                </div>
                <div>
                  <a
                    href="mailto:email@mail.ru"
                    className="text-white no-underline font-nekstregular"
                  >
                    email@mail.ru
                  </a>
                  <p className="text-[#9aa6b2] text-sm mt-1 font-nekstregular">
                    Отвечаем в течение 24 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-[#0b1220]">
                  <Clock className="w-5 h-5 text-[#9fb6c9]" />
                </div>
                <div>
                  <p className="text-white font-nekstregular">
                    Пн–Пт: 09:00 — 20:00
                  </p>
                  <p className="text-[#9aa6b2] text-sm mt-1 font-nekstregular">
                    Сб–Вс: 10:00 — 16:00
                  </p>
                </div>
              </div>

              <div>
                <h5 className="text-[14px] font-nekstmedium text-white mb-2">
                  Мы в соцсетях
                </h5>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="VK"
                    className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition"
                  >
                    <Facebook className="w-4 h-4 text-[#cbd5e1]" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition"
                  >
                    <Instagram className="w-4 h-4 text-[#cbd5e1]" />
                  </a>
                  <a
                    href="#"
                    aria-label="Telegram"
                    className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition"
                  >
                    <Plane className="w-4 h-4 text-[#cbd5e1]" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#1f2937] transition"
                  >
                    <Linkedin className="w-4 h-4 text-[#cbd5e1]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter + small links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-[#172021] pt-6">
            <div className="flex-1 hidden">
              <h4 className="text-[16px] font-semibold text-white mb-2">
                Подписка на новости
              </h4>
              <p className="text-[#9aa6b2] text-sm mb-3 max-w-[520px]">
                Получайте полезные материалы, расписание акций и новости курсов
                прямо на почту.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex gap-3 max-w-[520px]"
              >
                <input
                  type="email"
                  placeholder="Ваш email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-lg bg-[#0b1220] border border-[#23303a] placeholder:text-[#7f8a92] text-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#06b6d4] to-[#4f46e5] text-black px-4 py-2 rounded-lg font-medium hover:opacity-95 transition"
                >
                  Подписаться
                </button>
              </form>
            </div>

            <div className="flex-shrink-0 text-sm text-[#9aa6b2] flex flex-col md:flex-row md:items-center gap-4 ">
              <div className="font-nekstregular">
                © {new Date().getFullYear()} Код к знаниям
              </div>
              <div>
                <Link
                  href="/privacy"
                  className="hover:text-white font-nekstregular"
                >
                  Политика конфиденциальности
                </Link>
              </div>
              <div>
                <Link
                  href="/terms"
                  className="hover:text-white font-nekstregular"
                >
                  Условия использования
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
      />
    </>
  );
}
