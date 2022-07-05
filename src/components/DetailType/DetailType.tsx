import styles from './DetailType.module.css'

interface Props {
    type?: string
}


export function DetailType({ type }: Props) {
    return (
        <span className={styles['type']}>{type}</span>
    )
}