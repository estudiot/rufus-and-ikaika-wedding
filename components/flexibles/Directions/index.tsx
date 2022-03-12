import RichContent from '../../modules/RichContent'
import type DirectionsInterface from './interface'

import styles from './styles.module.scss'

export default function Directions({ title, text }: DirectionsInterface) {
  return (
    <section className={styles['directions']}>
      <h2>{title}</h2>

      <a
        href="https://goo.gl/maps/b15c98stGgP65ntg8"
        className={styles['directions__link']}
      >
        <img
          src="/images/locatie.jpg"
          alt="Kaart van Amsterdam met een Pin op de locatie Westerliefde in het Wersterpark"
        />
      </a>

      <div className={styles['directions__explanation']}>
        <RichContent>{text}</RichContent>
      </div>
    </section>
  )
}
