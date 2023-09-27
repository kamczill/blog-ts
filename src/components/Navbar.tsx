import{ useState, useEffect, useRef } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom';

interface NavlinkProps {
    to: string;
    name: string;
    handleSetActiveNavlink: (isActive: boolean) => string;
    onClick: () => void;
}

const NavlinkItem = ({to, name, handleSetActiveNavlink, onClick}: NavlinkProps) => {
    return (
        <li className='cursor-pointer'>
        <NavLink onClick={onClick} to={to} className={({isActive}) => handleSetActiveNavlink(isActive)}>
            {name}
        </NavLink>
    </li>
    )
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    const handleSetActiveNavLink = (isActive: boolean, isHome: boolean = false): string => isActive && !isHome ? "navlink--active" : ""
    const handleHideMenu = (): void => setIsMenuOpen(false);

    const handleToggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen)
    }

    const hideOrShowOverflow = (): void => {
        const body = document.querySelector('body')
        if(isMenuOpen && body){
            body.style.overflow = 'hidden'
        } else if (!isMenuOpen && body){
            body.style.overflow = ''
        }
    }

    const setNavbarBackground = ():void => {
        const navbar = navbarRef.current;
        const scrollPosition = window.scrollY
        const classes = ['backdrop-blur', 'backdrop-brightness-[.7]', 'border-b-2', 'shadow-lg']
        
        if(scrollPosition > 100 && navbar){
            if(!classes.some(el => navbar.classList.contains(el))){
                navbar.classList.add(...classes)
            }
        } else if (navbar) {
            navbar.classList.remove(...classes)
        }

    }
    
    useEffect(() => {

        window.addEventListener('scroll', setNavbarBackground)
        return () => {
            window.removeEventListener('scroll', setNavbarBackground)
        }
    }, [])


    useEffect(() => {
        hideOrShowOverflow();
    }, [isMenuOpen])
    
  return (
    <div ref={navbarRef} id='navbar' className='w-full flex justify-center items-center fixed z-[20] pb-3 transition-all'>
        <div className='pt-3 px-6 grid grid-cols-3 align-center items-center relative w-full max-w-[1600px]'>
            <div className='col-start-2'>
                <h2 className='font-os font-semibold text-3xl text-white text-center xl:text-4xl'>
                    <Link to='/'>
                        heya.
                    </Link>
                </h2>
            </div>
            <div className='flex justify-end'>
                { !isMenuOpen 
                    ? <HiOutlineMenuAlt3 className='w-[30px] h-[30px] cursor-pointer lg:w-[40px] lg:h-[40px] text-white' onClick={() => handleToggleMenu()}/>
                    : ''
                }
            </div>
        </div>
        <nav className={`${isMenuOpen ? '': 'hidden'} fixed top-0 z-30 w-full h-screen bg-slate-100 font-os text-2xl flex items-center justify-center`}>
            <div className='relative h-full w-full max-w-[1600px]'>
                <div className='absolute w-full flex align-center justify-center pt-3 px-6 z-20'>
                    <h2 className='font-os font-semibold text-3xl text-black text-center xl:text-4xl'>
                        <Link to='/'>
                            heya.
                        </Link>
                    </h2>
                </div>
                <div className='absolute w-full flex justify-end pt-3 px-6 z-20'>
                    <HiOutlineX className='w-[30px] h-[30px] cursor-pointer lg:w-[40px] lg:h-[40px]' onClick={() => handleToggleMenu()}/>
                </div>
                <ul className='absolute top-0 w-full h-screen flex flex-col justify-center items-center gap-5 z-10'>
                    <NavlinkItem
                        to='/'
                        name="Home"
                        handleSetActiveNavlink={handleSetActiveNavLink}
                        onClick={handleHideMenu}
                    />
                    <NavlinkItem
                        to='categories/casestudies'
                        name="Case Studies"
                        handleSetActiveNavlink={handleSetActiveNavLink}
                        onClick={handleHideMenu}

                    />
                    <NavlinkItem
                        to='categories/popular'
                        name="Popular"
                        handleSetActiveNavlink={handleSetActiveNavLink}
                        onClick={handleHideMenu}

                    />
                    <NavlinkItem
                        to='categories/recent'
                        name="Recent"
                        handleSetActiveNavlink={handleSetActiveNavLink}
                        onClick={handleHideMenu}

                    />
                    <NavlinkItem
                        to='/home#newsletter'
                        name="Newsletter"
                        handleSetActiveNavlink={(isActive) => handleSetActiveNavLink(isActive, true)}
                        onClick={handleHideMenu}

                    />
                    <li>
                        <button className='py-2 px-4 border-[3px] border-slate-700 rounded-xl'>
                            <NavLink onClick={handleHideMenu} to='/#footer'>
                                Contact
                            </NavLink>
                        </button>
                    </li>
                
                </ul>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar