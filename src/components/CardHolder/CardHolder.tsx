import Card from '../Card/Card'; // Импортируем компонент Card
import styles from './CardHolder.module.css';

// Пример данных для курсов
const coursesData = [
	{ id: 1, title: 'Курс 1', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ id: 2, title: 'Курс 2', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ id: 3, title: 'Курс 3', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ id: 4, title: 'Курс 4', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ id: 5, title: 'Курс 5', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
	{ id: 6, title: 'Курс 6', items: ['Компонент 1', 'Компонент 2', 'Компонент 3', 'Компонент 4'], buttonText: 'Записаться' },
];

export default function CardHolder() {
	return (
		<div className={styles.cardHolder}>
			<div className={styles.cardHolder__container}>
				<div className={styles.cardHolder__grid}>
					{coursesData.map((course, index) => (
						<Card
							key={index}
							courseId={course.id}
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
