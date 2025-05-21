import styles from './AboutUs.module.css';
import Image from 'next/image';

export default function AboutUs() {
	return (
		<div>
			<div className={styles.aboutUs}>
				<div className={styles.aboutUs__container}>
					<div className={styles.aboutUs__content}>
						<div className={styles.aboutUs__cards}>
							<div className={styles.aboutUs__card}>
								<p>Наша школа предлагает курсы, которые помогут вам освоить новые навыки и стать профессионалом в своей области.</p>
							</div>
							<div className={styles.aboutUs__card}>
								<p>Наши преподаватели - это эксперты с многолетним опытом работы и страстью к обучению.</p>
							</div>
							<div className={styles.aboutUs__card}>
								<p>Вы можете учиться в любое время и из любой точки мира благодаря нашим онлайн курсам.</p>
							</div>
							<div className={styles.aboutUs__card}>
								<p>Получайте знания в удобном для вас темпе с помощью наших адаптивных курсов и материалов.</p>
							</div>
						</div>
						<div className={styles['aboutUs__main-content']}>
							<div className={styles['aboutUs__main-content-logo']}>
							<h2>О нас</h2></div>
							
							<p>Мы - онлайн школа, которая предоставляет доступ к качественному образованию для всех желающих. Наша миссия - помочь каждому ученику достичь своих целей и стать успешным профессионалом в выбранной сфере. Мы гордимся нашими инновационными курсами и поддержкой учеников на протяжении всего процесса обучения.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
