import React from 'react'
import {appleImg} from '../utils';
import {navLists} from '../constants'
import { RiAccountBoxFill } from "react-icons/ri";


const Navbar = () => {
 

  return (
    <div>
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="Apple" width={14} height={18} />

                <div  className='flex flex-1 justify-center max-sm:hidden'>
                        
                    {navLists.map((nav)=> (
                        <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                            {nav} 
                        </div>
                    ))}
                </div>

                <a href='https://reactsignuppage-rho.vercel.app/'>   <div className="cursor-pointer flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
               <RiAccountBoxFill className='w-18 mr-4 h-18'/>
                </div></a>
               
            </nav>
        </header>
       
    </div>
  )
}

export default Navbar