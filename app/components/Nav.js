import React from 'react'
import navLinks from "./data/navLinks"
import { font2 } from './font/poppins'

const Nav = () => {
  return (
    <div className='flex sticky justify-center items-center flex-wrap mt-4 '>
        <header className={` ${font2.className} w-4/5 bg-zinc-950 sm:rounded-md xs:rounded-none rounded-full md:rounded-full backdrop-blur-lg top-0 flex-wrap p-2 bg-opacity-100 text-gray-200 `}>
            <nav className='items-center md:justify-between sm:justify-evenly sm:space-x-8.0 px-8 lg:justify-center flex flex-wrap flex-row'>
                <div className= {`flex cursor-pointer sm:space-x-16 space-x-4 md:space-x-28`}>
                    {navLinks.map((item) => (
                        <span>{item.label}</span>
                    ))}
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Nav