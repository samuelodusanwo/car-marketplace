import React from 'react'
import carList from '../Shared/FakeData';
import CarItem from '../CarItem/CarItem.component';

// shadcn
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


function MostSearchedCar() {
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Car</h2>
        <Carousel>
            <CarouselContent>
                    {
                        carList.map((car, index) => (
                            <CarouselItem className="basis-1/4">
                                <CarItem key={index} car={car} />
                            </CarouselItem>
                        ))
                    }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default MostSearchedCar;
