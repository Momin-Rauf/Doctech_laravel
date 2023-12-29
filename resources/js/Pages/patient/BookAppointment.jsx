import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import DoctorCard from './DoctorCard'
  

const BookAppointment = ({doctorData}) => {
    
  return (
    <>
        
        <Carousel className="flex flex-col w-[100%] p-4 justify-center items-center" >
  <CarouselPrevious className="absolute top-[50%] z-10 left-[10%] "  />
  <CarouselContent>
    {doctorData.map((D,index)=><CarouselItem index className="h-96 w-44  text-white " ><DoctorCard Data={D} /></CarouselItem>
    )}
    
  </CarouselContent>
  <CarouselNext   className="absolute  top-[50%] right-[10%] "  />
</Carousel>


    </>
  )
}

export default BookAppointment;