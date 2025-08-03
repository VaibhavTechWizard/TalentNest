import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './button'


const category=[
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphics Designer",
    "FulStack Developer"
]
const CategoryCarouser = () => {
  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-20">
            <CarouselContent>
                {
                    category.map((cat,index)=>(
                 <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
                    <Button variant="outline" className="rounded-full">{cat}</Button>
                </CarouselItem>
                    ))
                }

            </CarouselContent>
            <CarouselPrevious>

            </CarouselPrevious>

            <CarouselNext>

            </CarouselNext>
        </Carousel>

    </div>
  )
}

export default CategoryCarouser