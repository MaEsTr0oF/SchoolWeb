import Card from '../Card/Card'; // Импортируем компонент Card
import styles from './CardHolder.module.css';

// Пример данных для курсов
const coursesData = [
	{ title: 'Курс 6', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ title: 'Курс 7', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ title: 'Курс 8', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ title: 'Курс 1', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ title: 'Курс 2', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ title: 'Курс 3', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ title: 'Курс 4', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ title: 'Курс 5', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
];

export default function CardHolder() {
	return (
		<div className={styles.cardHolder}>
			<div className={styles.cardHolder__container}>
				{/* Можно добавить заголовок секции, если нужно */}
				{/* <h2 className={styles.cardHolder__title}>Наши курсы</h2> */}
				<div className={styles.cardHolder__grid}>
					{coursesData.map((course, index) => (
						<Card
							key={index}
							title={course.title}
							items={course.items}
							buttonText={course.buttonText}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
