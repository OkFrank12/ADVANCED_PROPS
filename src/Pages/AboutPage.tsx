import React from 'react'
import Hero from '../Components/ReUse/Hero'

interface iProps {
    counted: string
}
const AboutPage: React.FC<iProps> = ({ counted }) => {
  return (
    <div>
      <Hero />
    </div>
  )
}

export default AboutPage
