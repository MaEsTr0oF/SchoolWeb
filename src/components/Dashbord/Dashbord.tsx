import styles from './Dashbord.module.css';

export default function Dashbord() {
	return (
		<div>
			<div className={styles.dashbord}>
				<div className={styles.dashbord__container}>
					<div className={styles.dashbord__content}>
						<h1>Добро пожаловать в нашу легендарную онлайн-школу</h1>
						<p>Вступи к нам и точно захочешь остаться с нами</p>
						<div className={styles.dashbord__buttons}>
							<button className={styles.dashbord__button}>Подобрать курс</button>
							<button className={styles.dashbord__button}>Контакты</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
