import type Page from '../../interfaces/Page'

import FlexibleContent from '../../components/modules/FlexibleContent'
import Seo from '../../components/partials/Seo'

import styles from './styles.module.scss'

export default function DefaultTemplate({ sections, seo }: Page) {
  return (
    <>
      <Seo {...seo} />
      <main className={styles['default']}>
        <img
          className={styles['default__leaves']}
          aria-hidden="true"
          src="/images/leaves.jpg"
          alt=""
        />
        {sections && <FlexibleContent sections={sections} />}
      </main>
    </>
  )
}
