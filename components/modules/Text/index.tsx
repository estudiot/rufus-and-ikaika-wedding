import type TextInterface from './interface'

import styles from './styles.module.scss'

export default function Text({
  title,
  alignment,
  children,
  headingType = 'h2',
}: TextInterface) {
  return (
    <section className={styles['text']} data-alignment={alignment}>
      <div className={styles['text__inner']}>
        {headingType === 'h1' && <h1>{title}</h1>}
        {headingType === 'h2' && <h2>{title}</h2>}

        {children}
      </div>
    </section>
  )
}
