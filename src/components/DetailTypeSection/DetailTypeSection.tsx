import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function DetailTypeSection({ children }: Props) {
    return (
        <section style={{ marginTop: "1rem" }}>
            <h2>Types</h2>
            {children}
        </section>
    )
}