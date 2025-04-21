import Card from '../Card/Card'; // Импортируем компонент Card
import styles from './CardHolder.module.css';
import React from 'react';
import Image from 'next/image';

const coursesData = [
	{ 
		id: 1, 
		title: 'Python-разработчик', 
		items: ['Основы Python', 'Работа с данными', 'Веб-разработка', 'Автоматизация'], 
		buttonText: 'Записаться',
		duration: '10 месяцев',
		employment: 'с трудоустройством',
		description: 'Вы освоите самый востребованный язык программирования, на котором пишут сайты, приложения, игры и чат-боты. Сделаете 3 проекта для портфолио, а Центр карьеры поможет найти работу',
		bgImage: '', // Используем градиент из CSS
		sales: '-50%',
	},
	{ 
		id: 2, 
		title: 'Бухгалтер', 
		items: ['Бухучет', 'Налогообложение', 'Финансовый анализ', '1С: Бухгалтерия'], 
		buttonText: 'Записаться',
		duration: '6 месяцев',
		employment: 'с трудоустройством',
		description: 'Освоите бухгалтерский и налоговый учёт, работу в программе 1С. Сможете вести документацию и сдавать отчётность в соответствии с законодательством.',
		bgImage: '/images/courses/accounting.png', // Путь к изображению
		sales: '',
	},
	{ 
		id: 3, 
		title: 'Графический дизайнер', 
		items: ['Основы дизайна', 'Adobe Photoshop', 'Adobe Illustrator', 'Верстка'], 
		buttonText: 'Записаться',
		duration: '12 месяцев',
		employment: 'с трудоустройством',
		description: 'Научитесь создавать дизайн для цифровых и печатных материалов. Освоите профессиональные инструменты и соберете портфолио из реальных проектов.',
		bgImage: '', // Используем градиент из CSS
		sales: '-25%',
	},
	{ 
		id: 4, 
		title: 'Front-end разработчик', 
		items: ['HTML & CSS', 'JavaScript', 'React', 'UI/UX основы'], 
		buttonText: 'Записаться',
		duration: '8 месяцев',
		employment: 'с трудоустройством',
		description: 'Освоите современные технологии фронтенд-разработки и научитесь создавать интерактивные веб-интерфейсы. Работа с React, TypeScript и другими современными инструментами.',
		bgImage: '/images/courses/frontend.png',
		sales: '',
	},
	{ 
		id: 5, 
		title: 'Data Scientist', 
		items: ['Python для анализа', 'SQL', 'Машинное обучение', 'Визуализация данных'], 
		buttonText: 'Записаться',
		duration: '10 месяцев',
		employment: 'с трудоустройством',
		description: 'Научитесь анализировать большие данные и строить предиктивные модели. Курс для тех, кто хочет освоить одну из самых востребованных профессий на рынке.',
		bgImage: '/images/courses/datascience.png',
		sales: '',
	},
	{ 
		id: 6, 
		title: 'SMM-специалист', 
		items: ['Стратегия в соцсетях', 'Контент-маркетинг', 'Таргетированная реклама', 'Аналитика'], 
		buttonText: 'Записаться',
		duration: '4 месяца',
		employment: 'с трудоустройством',
		description: 'Вы научитесь создавать стратегии продвижения в социальных сетях, запускать рекламные кампании и анализировать их эффективность.',
		bgImage: '/images/courses/smm.png',
		sales: '-40%',
	},
];

const topCoursesData = [
	{
		id: 101,
		title: 'Программист',
		duration: '9 месяцев',
		salary: 'ЗП от 150 тыс.',
		image: '/images/courses/programmer.png',
		sales: '-50%',
	},
	{
		id: 102,
		title: 'Python',
		duration: '9 месяцев',
		salary: 'ЗП от 100 тыс.',
		image: '/images/courses/python.png',
		sales: '-50%',
	},
	{
		id: 103,
		title: 'UX/UI Дизайнер',
		duration: '9 месяцев',
		salary: 'ЗП от 90 тыс.',
		image: '/images/courses/uxui.png',
		sales: '-50%',
	},
	{
		id: 104,
		title: 'Тестировщик',
		duration: '9 месяцев',
		salary: 'ЗП от 80 тыс.',
		image: '/images/courses/tester.png',
		sales: '-50%',
	},
];

export default function CardHolder() {
	return (
		<>
			<div className={styles.topCourses}>
				<div className={styles.topCourses__container}>
					<h2 className={styles.topCourses__title}>Курсы по ведущим профессиям</h2>
					<div className={styles.topCourses__grid}>
						{topCoursesData.map((course) => (
							<div key={course.id} className={styles.topCourses__card}>
								<div className={styles.topCourses__image}>
									{course.sales && (
										<Image src={"/images/courses/sales.svg"} alt={course.title} className={styles.topCourses__img} width={50} height={50}/>
									)}
									<img src={course.image} alt={course.title} className={styles.topCourses__img} />
								</div>
								<div className={styles.topCourses__info}>
									<h3 className={styles.topCourses__cardTitle}>{course.title}</h3>
									<div className={styles.topCourses__details}>
										<span>{course.duration}</span>
										<span>{course.salary}</span>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className={styles.topCourses__more}>
						<button className={styles.topCourses__button}>
							Больше курсов
							<svg className={styles.topCourses__buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			
		</>
	);
}
