import React from 'react'
import FeatureHero from './FeatureHero'
import Navbar from '../components/Navbar'
import Trusted from '../components/Trusted'

const Features = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-[#0D0D12]'>
        <Navbar />
        <FeatureHero />
      </div>
      <Trusted />
    </div>
  )
}

export default Features