// import './Nav.css'
import { useEffect, useState, useRef } from 'react'
import logo from '../../assets/image/logo.png'
import search from '../../assets/image/search.png'
import bell from '../../assets/image/bell.png'
import DropDownMenu from '../DropDownMenu'
import BellNotification from '../../BellNotification'

const Nav = () => {

    const [show, setShow] = useState(false);

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 800);
    const [prevIsLargeScreen, setPrevIsLargeScreen] = useState(isLargeScreen);

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMenuOpenOnMenu, setMenuOpenOnMenu] = useState(false);
  
    const [isMenuOpenBell, setMenuOpenBell] = useState(false);
    const [isMenuOpenOnMenuBell, setMenuOpenOnMenuBell] = useState(false);



    const toggleMenuEnter = () => {
        setMenuOpen(true);
        // setMenuOpenOnMenu(true)
    }
    const toggleMenuLeave = () => {
        setTimeout(() => {
            setMenuOpen(false) 
        }, 500);
    }
    const handleMenuMouseEnter = () => {
        // اگر ماوس روی منو قرار گرفته است، منو باز بماند
        setMenuOpenOnMenu(true);
    }

    const handleMenuMouseLeave = () => {
        // اگر ماوس از منو خارج شد، منو ببند
        setTimeout(() => {
            setMenuOpenOnMenu(false);
        }, 500);
    }
    const toggleMenuEnterBell = () => {
        setMenuOpenBell(true);
        // setMenuOpenOnMenu(true)
    }
    const toggleMenuLeaveBell = () => {
        setTimeout(() => {
            setMenuOpenBell(false) 
        }, 500);
    }
    const handleMenuMouseEnterBell = () => {
        // اگر ماوس روی منو قرار گرفته است، منو باز بماند
        setMenuOpenOnMenuBell(true);
    }

    const handleMenuMouseLeaveBell = () => {
        // اگر ماوس از منو خارج شد، منو ببند
        setTimeout(() => {
            setMenuOpenOnMenuBell(false);
        }, 500);
    }
    


    useEffect(() => {
        const handleResize = () => {
            const newIsLargeScreen = window.innerWidth >= 800;
            setIsLargeScreen(newIsLargeScreen);

            if (newIsLargeScreen) {
                setPrevIsLargeScreen(isLargeScreen);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isLargeScreen]);




    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false)
            }
        })
    }, [])

    return (
        <div className={`fixed top-0 h-16 w-full items-center  z-10 flex ease-in transition-all ${show ? 'bg-black' : 'bg-gradient-to-t from-transparent to-zinc-900'}`} >
            <div className="w-1/5 flex items-center">
                <img src={logo} alt="" className="" />
            </div>

            {isLargeScreen ? (
                <div className=" w-4/6 h-16 flex justify-between align-middle items-center">
                    <button className='text-xs md:text-xs lg:text-sm xl:text-md text-white ml-2' >Home</button>
                    <button className='text-xs md:text-xs lg:text-sm xl:text-sm text-white' >TV Shows</button>
                    <button className='text-xs md:text-xs lg:text-sm xl:text-sm text-white' >Movies</button>
                    <button className='text-xs md:text-xs lg:text-sm xl:text-sm text-white' >New & Papular</button>
                    <button className='text-xs md:text-xs lg:text-sm xl:text-sm text-white' >My List</button>
                    <button className='text-xs md:text-xs lg:text-sm xl:text-sm text-white' >Browse by Languages</button>
                </div>) :
                <div className='w-4/6 h-16 flex justify-between align-middle items-center cursor-pointer'>
                    <div className='flex' onMouseEnter={toggleMenuEnter} onMouseLeave={toggleMenuLeave} >
                        <p className='text-white pl-3 text-xs'>Browse</p>
                        <svg className='fill-white pl-2 pb-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" /></svg>
                    </div>
                    

                </div>}
                {isMenuOpen || isMenuOpenOnMenu ? (
                    <DropDownMenu onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} />
                ) : ''}
                
            <div className="flex justify-end w-2/5 h-full  items-center">
                <div className=' w-16  items-center flex cursor-pointer'><img className='w-full h-full px-4' src={search} alt="" /></div>
                <div onMouseEnter={toggleMenuEnterBell} onMouseLeave={toggleMenuLeaveBell} className=' w-16  items-center flex cursor-pointer'><img className='h-3/4 px-4 ' src={bell} alt="bell" /></div>
            </div>
            {isMenuOpenBell || isMenuOpenOnMenuBell ? (
                <BellNotification onMouseEnterBell={handleMenuMouseEnterBell} onMouseLeaveBell={handleMenuMouseLeaveBell} />
            ) : '' }

        </div>);
}

export default Nav;