import React from 'react'
import Hero from '../Components/ReUse/Hero'
// import AboutPage from './AboutPage'

interface iProps {
    count: string
}
const HomePage: React.FC<iProps> = ({ count }) => {
  return (
    <div>
      <Hero />
      {/* <AboutPage counted={count}/> */}
    </div>
  )
}

export default HomePage
