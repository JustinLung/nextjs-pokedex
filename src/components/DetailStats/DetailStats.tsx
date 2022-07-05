import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function DetailStats({ children }: Props) {
    return (
        <section style={{ margin: "1rem" }}>
            <h2>Stats</h2>
            {children}
        </section>
    )
}