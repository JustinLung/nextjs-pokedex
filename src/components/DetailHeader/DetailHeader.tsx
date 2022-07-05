import styles from './DetailHeader.module.css'

interface Props {
	pokemonName?: string
	pokemonId?: number
}

export function DetailHeader({ pokemonName, pokemonId }: Props) {
	return (
		<>
			<header className={styles['pokemon-detail-header']}>
				<a href="/" className={styles['pokemon-detail-header__back']}>Back</a>
				<div className={styles['pokemon-detail-header__name-container']}>
					<h1>{pokemonName}</h1>
					<span>N° {pokemonId}</span>
				</div>
			</header>
		</>
	)
}