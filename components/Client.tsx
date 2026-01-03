import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data/data'

const Client = () => {
  return (
    <div className="py-20" id="client">
      <h1 className="heading text-4xl md:ml-100">
        Kind words from  {" "}
        <span className="text-purple-400"> satisfied clients</span>
      </h1>
      <div className="flex flec-col items-center">
        <div className=' className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"'>
        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
        />
        </div>
    </div>
    </div>
  )
}

export default Client
