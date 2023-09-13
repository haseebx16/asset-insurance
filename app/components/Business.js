import React from 'react'
import { font2 } from './font/poppins'

const Business = () => {
  return (
    <section className={`${font2.className} max-w-full xsm:mt-12 xl:justify-evenly xl:items-center sm:mt-12 xs:mt-24 min-h-screen flex flex-wrap justify-evenly px-4 flex-1 items-center`}>
        <div className='text-6xl xl:justify flex-wrap sm:px-6 font-bold px-4'>
            <p className='text-sky-500'>You do the Business,<br/>We'll handle the assets.</p>
            <div className=' md:w-3/5 lg:w-3/5 sm:w-5/5 xl:items-start'>
                <span className='text-sm text-gray-400'>
                    We offer you asset Insurance random text here and here and here and here.
                </span>
            </div>
                <button className='sm:mt-12 mt-6 text-black text-lg p-3 rounded-xl bg-sky-500 border-sky-700 border'>Get Started</button>
        </div>
        <div className='justify-center sm:justify-center sm:items-center mt-12 sm:mt-12 items-center xsm:mt-12 xsm:mb-24 flex flex-wrap'>
            <img src='/assets/images/business.png' className='sm:w-[550px] md:w-[400px]'/>
        </div>
    </section>
  )
}

export default Business