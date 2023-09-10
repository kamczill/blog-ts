import{ useState, useEffect } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleToggleMenu: () => void = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const hideOrShowOverflow: () => void = () => {
        const body = document.querySelector('body')
        if(isMenuOpen && body){
            body.style.overflow = 'hidden'
        } else if (!isMenuOpen && body){
            body.style.overflow = ''
        }
    }


    useEffect(() => {
        hideOrShowOverflow();
    }, [isMenuOpen])
    
  return (
    <div className='w-full flex justify-center items-center fixed z-[2]'>
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
        <nav className={`${isMenuOpen ? '': 'hidden'} fixed top-0 z-30 w-full h-screen bg-slate-100 font-os text-2xl flex items-center justify-center`}>
            <div className='relative h-full w-full max-w-[1600px]'>
                <div className='absolute w-full flex justify-end pt-3 px-6 z-20'>
                    <HiOutlineX className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' onClick={() => handleToggleMenu()}/>
                </div>
                <ul className='absolute top-0 w-full h-screen flex flex-col justify-center items-center gap-5 z-10'>
                    <li className='underline underline-offset-4 cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Landings</li>
                    <li className='cursor-pointer'>Pages</li>
                    <li className='cursor-pointer'>Docs</li>
                    <li className='cursor-pointer'>Help</li>
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