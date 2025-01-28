import React from 'react'
import { Button } from '../ui/button'
import newsLetterLeft from '@/assets/newsletter-left.png'
import newsLetterRight from '@/assets/newsletter-right.png'

const Newsletter = () => {
  return (
    <section className='md:mx-12 m-2 px-2 md:px-4 lg:px-12 py-16 space-y-6 text-center bg-primaryBackground relative flex flex-col gap-4 rounded-[60px] overflow-hidden  -z-20'>
  
  <img 
    src={newsLetterLeft} 
    alt="fruits image" 
    className='absolute left-0 bottom-0 -z-10 max-w-[200px] md:max-w-none opacity-30 md:opacity-100' 
  />
  <img 
    src={newsLetterRight} 
    alt="fruits image" 
    className='absolute right-0 bottom-0 -z-10 max-w-[200px] md:max-w-none opacity-30 md:opacity-100' 
  />
  
  <div className='relative z-10 space-y-6'>
    <h2 className="section-title">Deliciousness to your inbox</h2>
    <p className="text-black-60 max-w-xl mx-auto">
      Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
    </p>
    <div className='relative w-full h-20 max-w-lg mx-auto '>
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="px-6 text-sm rounded-3xl w-full h-full absolute top-0 left-0 right-0"  
      />
      <Button className="bg-primary text-white p-6 md:p-6 md:px-8 rounded-lg absolute bottom-4 right-5 z-30">
        Subscribe
      </Button>
    </div>
  </div>
</section>
  )
}

export default Newsletter