import QuoteForm from '@/components/CommonComponents/GetQuote'
import ContactUs from '@/components/Contact'
import Values from '@/components/CommonComponents/Values'
import Features from '@/components/Features'
import Partners from '@/components/Partners'
import React from 'react'

const CallBackRequest = () => {
  return (
    <>
        <QuoteForm/>
        <Features/>
        <Values/>
        <Partners/>
        <ContactUs/>
    </>
  )
}

export default CallBackRequest