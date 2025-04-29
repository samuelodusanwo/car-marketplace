import React from 'react';
import { SignInButton } from '@clerk/clerk-react';

import { Button } from '@/components/ui/button';
import Header from '../../components/Header/Header.component';
import Hero from '../../components/Hero/Hero.component';
import Category from '../../components/Category/Category.component';
import MostSearchedCar from '../../components/MostSearchedCar/MostSearchedCar.component';
import InfoSection from '../../components/InfoSection/InfoSection';
import Footer from '../../components/Footer/Footer.component';



function Home() {

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Category */}
      <Category />

      {/* Most Searched Cars */}
      <MostSearchedCar />

      {/* Information section */}
      <InfoSection />

      {/* footer */}
      <Footer />
    </>
  )
}

export default Home;