import Card from '../Card/Card'; // Импортируем компонент Card
import styles from './CardHolder.module.css';

// Обновленные данные для курсов
const coursesData = [
	{ 
		id: 1, 
		title: 'Python-разработчик', 
		items: ['Основы Python', 'Работа с данными', 'Веб-разработка', 'Автоматизация'], 
		buttonText: 'Записаться',
		duration: '10 месяцев',
		employment: 'с трудоустройством',
		description: 'Вы освоите самый востребованный язык программирования, на котором пишут сайты, приложения, игры и чат-боты. Сделаете 3 проекта для портфолио, а Центр карьеры поможет найти работу',
		bgImage: '' // Используем градиент из CSS
	},
	{ 
		id: 2, 
		title: 'Бухгалтер', 
		items: ['Бухучет', 'Налогообложение', 'Финансовый анализ', '1С: Бухгалтерия'], 
		buttonText: 'Записаться',
		duration: '6 месяцев',
		employment: 'с трудоустройством',
		description: 'Освоите бухгалтерский и налоговый учёт, работу в программе 1С. Сможете вести документацию и сдавать отчётность в соответствии с законодательством.',
		bgImage: '/images/courses/accounting.jpg' // Путь к изображению
	},
	{ 
		id: 3, 
		title: 'Графический дизайнер', 
		items: ['Основы дизайна', 'Adobe Photoshop', 'Adobe Illustrator', 'Верстка'], 
		buttonText: 'Записаться',
		duration: '12 месяцев',
		employment: 'с трудоустройством',
		description: 'Научитесь создавать дизайн для цифровых и печатных материалов. Освоите профессиональные инструменты и соберете портфолио из реальных проектов.',
		bgImage: '' // Используем градиент из CSS
	},
	{ 
		id: 4, 
		title: 'Front-end разработчик', 
		items: ['HTML & CSS', 'JavaScript', 'React', 'UI/UX основы'], 
		buttonText: 'Записаться',
		duration: '8 месяцев',
		employment: 'с трудоустройством',
		description: 'Освоите современные технологии фронтенд-разработки и научитесь создавать интерактивные веб-интерфейсы. Работа с React, TypeScript и другими современными инструментами.',
		bgImage: '/images/courses/frontend.jpg'
	},
	{ 
		id: 5, 
		title: 'Data Scientist', 
		items: ['Python для анализа', 'SQL', 'Машинное обучение', 'Визуализация данных'], 
		buttonText: 'Записаться',
		duration: '10 месяцев',
		employment: 'с трудоустройством',
		description: 'Научитесь анализировать большие данные и строить предиктивные модели. Курс для тех, кто хочет освоить одну из самых востребованных профессий на рынке.',
		bgImage: '/images/courses/datascience.jpg'
	},
	{ 
		id: 6, 
		title: 'SMM-специалист', 
		items: ['Стратегия в соцсетях', 'Контент-маркетинг', 'Таргетированная реклама', 'Аналитика'], 
		buttonText: 'Записаться',
		duration: '4 месяца',
		employment: 'с трудоустройством',
		description: 'Вы научитесь создавать стратегии продвижения в социальных сетях, запускать рекламные кампании и анализировать их эффективность.',
		bgImage: '/images/courses/smm.jpg'
	},
];

export default function CardHolder() {
	return (
		<div className={styles.cardHolder}>
			<div className={styles.cardHolder__container}>
				<h2 className={styles.cardHolder__title}>Наши курсы</h2>
				<div className={styles.cardHolder__grid}>
					{coursesData.map((course, index) => (
						<Card
							key={index}
							courseId={course.id}
							title={course.title}
							items={course.items}
							buttonText={course.buttonText}
							duration={course.duration}
							employment={course.employment}
							description={course.description}
							bgImage={course.bgImage}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
