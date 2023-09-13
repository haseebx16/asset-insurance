import React from 'react';
import { font2 } from './font/poppins';

const Hero = () => {
  return (
    <section className={`${font2.className} xs:mt-24 max-w-9xl sm:mt-12 sm:mt-12 min-h-screen flex flex-wrap justify-center sm:justify-center xs:justify-center items-center`}>
      <div className='text-7xl sm:text-6xl flex-wrap sm:px-6 font-bold px-4'>
        <p className='text-sky-500 mb-0'>Asset Insurance</p> {/* Remove margin-bottom (mb-0) */}
        <div style={{ maxWidth: '65%' }} className={`xl:justify-center xl:items-center`}>
          <span className='text-sm text-gray-400' style={{ margin: '0' }}> {/* Remove margin (margin: '0') */}
            We offer you asset Insurance random text here and here and here and here.
          </span>
        </div>
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className='justify-end items-end flex flex-wrap'>
        <img src='/assets/images/robo-hand.png' className='' />
      </div>
    </section>
  );
};

export default Hero;
