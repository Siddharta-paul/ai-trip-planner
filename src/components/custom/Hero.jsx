import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Adventure-trip with AI:</span> Personalized Itenaries at your Fingertips</h1>
    <p className='text-xl text-gray-500 text-center'>
        Your personal trip planner and travel curater, creating custom itenaries tailored to your intrests and budget.
    </p>
    <Link to={'/create-trip'}>
    <Button> Get Started, It's Free </Button>
    </Link>
    </div>
  )
}

export default Hero
