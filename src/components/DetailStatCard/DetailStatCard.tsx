import styles from './DetailStatCard.module.css'

interface Props {
    stat?: number
    statName?: string
}

export function DetailStatCard({ stat, statName }: Props) {
    return (
        <>
            <section className={styles['stat']}>
                <span className={styles['stat__stat-name']}>{statName}</span>
                <span className={styles['stat__stat']}>{stat}</span>
            </section>
        </>
    )
}