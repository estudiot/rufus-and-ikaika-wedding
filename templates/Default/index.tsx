import type Page from '../../interfaces/Page'

import FlexibleContent from '../../components/modules/FlexibleContent'
import Seo from '../../components/partials/Seo'

import styles from './styles.module.scss'
import { useEffect, useRef } from 'react'

export default function DefaultTemplate({ title, sections, seo }: Page) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const { current } = formRef
    if (!current) return

    const handleSubmit = (event: any) => {
      // submitting!
      event.preventDefault()
      const myForm = current.getElementById('some')
      const formData: any = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log('Form successfully submitted'))
        .catch(error => alert(error))
    }

    current.addEventListener('submit', handleSubmit)

    return () => {
      current.removeEventListener('submit', handleSubmit)
    }
  })

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
        {/* @ts-ignore */}
        <form action="" ref={formRef} netlify>
          <label htmlFor="">some</label>
          <input type="text" id="some" />

          <button>Submit!</button>
        </form>
        {sections && <FlexibleContent sections={sections} />}
      </main>
    </>
  )
}
