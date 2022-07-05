import styles from './ScrollToTop.module.css'

export function ScrollToTop() {
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<button onClick={scrollToTop} className={styles['scroll-to-top']}>
			<img src="/assets/icons/scroll-icon.png" alt="Scroll To Top" />
		</button>
	)
}