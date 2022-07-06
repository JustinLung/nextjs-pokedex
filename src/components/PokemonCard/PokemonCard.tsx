import styles from './PokemonCard.module.css'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion'

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.5 } },
  hidden: { opacity: 0, y: 100 }
}

interface Props {
  pokemonId?: number
  pokemonName?: string
  pokemonImage?: string
}

export function PokemonCard({ pokemonId, pokemonName, pokemonImage }: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.article className={styles.pokemon} animate={control} initial="hidden" variants={variant} ref={ref}>
        <img src={pokemonImage} alt={pokemonName} className={styles['pokemon__image']} loading="lazy" />
        <h2 className={styles['pokemon__name']}>{pokemonName}</h2>
        <span className={styles['pokemon__number']}>N° {pokemonId}</span>
      </motion.article>
    </>
  )
}

export default PokemonCard