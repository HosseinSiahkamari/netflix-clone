import './Nav.css'
import { useEffect, useState } from 'react'
import logo from '../../assets/image/logo.png'
import search from '../../assets/image/search.png'
import bell from '../../assets/image/bell.png'

const Nav = () => {
    const [show, setShow] = useState()

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false)
            }
        })
        // return ()=>{
        //    window.removeEventListener("scroll");
        // }
    },[])

    return (
        <div className={`nav ${show && "nav-black" } `} >
            <img src={logo} alt="" className="logo" />
            <div className="menu-container">
                <div className="menu-btn-container">
                    <button className='menu-btn' >Home</button>
                    <button className='menu-btn' >TV Shows</button>
                    <button className='menu-btn' >Movies</button>
                    <button className='menu-btn' >New & Papular</button>
                    <button className='menu-btn' >My List</button>
                    <button className='menu-btn' >Browse by Languages</button>
                </div>
                <div className="icon-container">
                    <img className='search-icon' src={search} alt="" />
                    <img className='bell-icon' src={bell} alt="" />
                </div>
            </div>
        </div>);
}

export default Nav;