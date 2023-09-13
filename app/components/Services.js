import React from "react";
import { font2 } from "./font/poppins";

const Services = () => (
  <section className={` ${ font2.className } sm:justify-end sm:mt-24 mt-24 sm:flex-row mb-12 py-4 flex flex-row flex-1 flex-wrap card-color justify-center items-center rounded-[20px] box-shadow mx-auto max-w-[80%]`}>
    <div className="flex-1 flex flex-wrap justify-evenly items-start px-6 flex-col">
      <h2 className="text-5xl font-bold flex flex-wrap flex-1 mt-6 text-gray-200">Try our service now!</h2>
      <p className={`max-w-[470px] mt-5 text-gray-200`}>
        Everything you need to get Insurance for your assets grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`flex flex-wrap flex-row justify-center items-center px-8 sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <button className='sm:mt-12 mt-6 text-black text-lg font-bold p-3 rounded-xl bg-sky-500 border-sky-500 border'>Get Started</button>
    </div>
  </section>
);

export default Services;
