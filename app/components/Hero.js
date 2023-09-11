import React from 'react'
import { font } from './font/font'

const Hero = () => {
  return (
    <section className={`${font.className}  min-h-screen flex flex-wrap justify-start flex-1 items-center`}>
        <div className='text-7xl flex-wrap font-bold px-4'>
            <p className='text-sky-700'>Asset Insurance</p>
            <div className='xl:justify-start xl:items-start'>
                <span className='text-lg text-gray-400'>
                    We offer you asset Insurance random text here and here and here and here.
                </span>
            </div>
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className='justify-end items-end flex flex-wrap'>
            <img src='/assets/images/robo-hand.png' className=''/>
        </div>
    </section>
  )
}

export default Hero