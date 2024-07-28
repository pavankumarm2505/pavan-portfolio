import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
            Endorsements from
            <span className="text-purple"> Software Engineering Interns</span>
        </h1>
        <div className="flex flex-wrap items-center max-lg:mt-10">
            
                <InfiniteMovingCards 
            items = {testimonials}
            direction = "right"
            speed="slow"
            />
            
           
            
        </div>
        </div>
  )
}

export default Clients