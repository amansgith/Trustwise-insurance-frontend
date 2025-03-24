"use client"
import QuoteForm from '@/components/CommonComponents/GetQuote'
import ContactUs from '@/components/homepage/ContactCard'
import Values from '@/components/CommonComponents/Values'
import Features from '@/components/homepage/Features'
import React from 'react'

const CallBackRequest = () => {
  return (
    <>
        <QuoteForm/>
        <Features/>
        <Values/>
        <ContactUs/>
    </>
  )
}

export default CallBackRequest