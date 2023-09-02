import React, { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import Header from './homepage/Header'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='pt-3 px-6 grid grid-cols-3 align-center items-center relative w-full max-w-[1600px]'>
            <div className='col-start-2'>
                <h2 className='font-os font-semibold text-3xl text-white text-center xl:text-4xl'>heya.</h2>
            </div>
            <div className='flex justify-end'>
                { !isMenuOpen 
                    ? <HiOutlineMenuAlt3 className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] text-white' onClick={() => handleToggleMenu()}/>
                    : ''
                }
            </div>
        </div>
        <nav className={`${isMenuOpen ? '': 'hidden'} fixed top-0 w-full h-screen bg-slate-100 font-os text-2xl flex items-center justify-center`}>
            <div className='relative h-full w-full max-w-[1600px]'>
                <div className='absolute w-full flex justify-end pt-3 px-6 z-20'>
                    <HiOutlineX className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' onClick={() => handleToggleMenu()}/>
                </div>
                <ul className='absolute top-0 w-full h-screen flex flex-col justify-center items-center gap-5 z-10'>
                    <li className='underline underline-offset-4'>Home</li>
                    <li>Landings</li>
                    <li>Pages</li>
                    <li>Docs</li>
                    <li>Help</li>
                    <li>
                        <button className='py-2 px-4 border-[3px] border-slate-700 rounded-xl'>Get it now</button>
                    </li>
                
                </ul>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar