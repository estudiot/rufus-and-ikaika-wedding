import type GalleryInterface from './interface'

import RichContent from '../../modules/RichContent'

import styles from './styles.module.scss'

export default function Gallery({ title, images, text }: GalleryInterface) {
  return (
    <section className={styles['gallery']}>
      <div className={styles['gallery__inner']}>
        <div className={styles['gallery__inner-inner']}>
          <h2>{title}</h2>

          <RichContent>{text}</RichContent>
        </div>
      </div>

      <figure className={styles['gallery__image-container']}>
        {images.map((image, index) => (
          <img
            key={`${image.alt}-${image.image}-${index}`}
            className={styles['gallery__image']}
            src={image.image}
            alt={image.alt}
          />
        ))}
      </figure>
    </section>
  )
}
