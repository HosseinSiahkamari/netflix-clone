import { useState } from "react";

const DropDownMenu = ({onMouseEnter, onMouseLeave}) => {


    return (  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  className="flex flex-col bg-zinc-900 bg-opacity-95 border-t-2 rounded-sm fixed w-64 h-fit top-16 left-12 z-50">
        <button className='w-64 h-12 text-white hover:bg-zinc-800 transition-all' >Home</button>
        <button className='w-64 h-12 text-white hover:bg-zinc-800 transition-all' >TV Shows</button>
        <button className='w-64 h-12 text-white hover:bg-zinc-800 transition-all' >Movies</button>
        <button className='w-64 h-12 text-white hover:bg-zinc-800 transition-all' >New & Papular</button>
        <button className='w-64 h-12 text-white hover:bg-zinc-800 transition-all' >My List</button>
        <button className='w-64 h-12 text-white hover:bg-zinc-800 transition-all' >Browse by Languages</button>
    
    </div>
       
    );
}

export default DropDownMenu;