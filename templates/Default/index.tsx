import type Page from '../../interfaces/Page'

import SiteHeader from '../../components/modules/SiteHeader'
import FlexibleContent from '../../components/modules/FlexibleContent'
import Seo from '../../components/partials/Seo'

export default function DefaultTemplate({ title, sections, seo }: Page) {
  return (
    <>
      <Seo {...seo} />
      <SiteHeader />
      <main>{sections && <FlexibleContent sections={sections} />}</main>
      <footer>Footer</footer>
    </>
  )
}
