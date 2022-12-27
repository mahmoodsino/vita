import React from 'react'
import About from './About'
import Features from './Features'
import Goals from './Goals'
import HomeHeader from './HomeHeader'
import HomeProducts from './HomeProducts'
import Magic from './Magic'
import Reviews from './Reviews'
import Services from './Services'

const MainSection = () => {
  return (
    <div>
      <HomeHeader />
      <About />
      <Features />
      <Goals />
      <HomeProducts />
      <Services />
      <Reviews />
      <Magic />
    </div>
  )
}

export default MainSection