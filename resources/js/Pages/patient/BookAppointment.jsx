import React from 'react';
import Tilt from 'react-parallax-tilt';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import DoctorCard from './DoctorCard'
  

const BookAppointment = ({doctorData,doctor}) => {
    
  return (
    <>
        
        <Carousel  className="flex flex-col w-[100%] p-4 justify-center items-center" >
  <CarouselPrevious className="absolute top-[50%] z-10 left-[10%] "  />
  <CarouselContent>
    {doctorData.map((D,index)=><CarouselItem key={index}  className="h-96 w-96 py-12 px-16    text-white " ><Tilt><DoctorCard doctor={doctor} Data={D} /></Tilt></CarouselItem>
    )}
    
  </CarouselContent>
  <CarouselNext   className="absolute  top-[50%] right-[10%] "  />
</Carousel>


    </>
  )
}

export default BookAppointment;