import { useEffect, useRef, useState } from 'react'

import type RsvpFormInterface from './interface'

import RichContent from '../../modules/RichContent'

import styles from './styles.module.scss'

export default function RsvpForm({
  title,
  text,
  successMessage,
}: RsvpFormInterface) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitType, setSubmitType] = useState<string>('')

  useEffect(() => {
    const { current } = formRef
    if (!current) return

    const handleSubmit = (event: any) => {
      event.preventDefault()
      if (!current) return

      setIsSubmitting(true)

      const formData: any = new FormData(current)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setIsSubmitting(false)
          setSubmitType('success')
        })
        .catch(error => {
          setSubmitType('failure')
        })
    }

    current.addEventListener('submit', handleSubmit)

    return () => {
      current.removeEventListener('submit', handleSubmit)
    }
  })

  return (
    <form
      action=""
      ref={formRef}
      data-netlify="true"
      netlify-honeypot="bot-field"
      name="rsvp"
      className={styles['rsvp-form']}
    >
      <fieldset className={styles['rsvp-form__fieldset']}>
        <legend className={styles['rsvp-form__title']}>{title}</legend>
        <RichContent>{text}</RichContent>

        <input type="hidden" name="form-name" value="rsvp" />

        <div className={styles['rsvp-form__fields']}>
          <div className={styles['rsvp-form__item']}>
            <label htmlFor="first-name">Voornaam</label>
            <input type="text" name="first-name" />
          </div>

          <div className={styles['rsvp-form__item']}>
            <label htmlFor="last-name">Achternaam</label>
            <input type="text" name="last-name" />
          </div>

          <div className={styles['rsvp-form__item']}>
            <label htmlFor="amount">Hoeveel personen</label>
            <input type="number" name="amount" />
          </div>
        </div>

        <button className={styles['rsvp-form__submit']}>Verstuur</button>

        <div className={styles['success-message']} data-visible={submitType}>
          <h2 className={styles['success-message__title']}>{successMessage}</h2>
        </div>
        <div className={styles['failure-message']} data-visible={submitType}>
          <h2 className={styles['failure-message__title']}>
            Er is iets fout gegaan, bel ons even.
          </h2>
        </div>
      </fieldset>
    </form>
  )
}
