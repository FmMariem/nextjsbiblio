import CarouselHome from '@/components/client/CarouselHome'
import Footer from '@/components/client/Footer'
import MainGridsHome from '@/components/client/mainGridsHome'
import React from 'react'

const page = () => {
  return (
    <div>
      <CarouselHome/>
      <MainGridsHome/>
      <Footer/>
    </div>
  )
}

export default page
