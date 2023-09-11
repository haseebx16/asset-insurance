import React from 'react'
import navLinks from "./data/navLinks"
import { font } from './font/font'

const Nav = () => {
  return (
    <div className='flex sticky justify-center items-center flex-wrap mt-4 '>
        <header className={` ${font.className} w-4/5 rounded-md backdrop-blur-lg bg-sky-900 top-0 flex-wrap p-4 bg-opacity-100 text-white `}>
            <nav className='items-center md:justify-between sm:justify-center px-8 lg:justify-center flex flex-wrap flex-row'>
                <div className= {`flex cursor-pointer space-x-4 md:space-x-28 sm:space-x-2 `}>
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