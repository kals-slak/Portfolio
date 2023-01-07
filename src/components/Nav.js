import React, { useState } from 'react'

import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

function Nav() {
  const [nav,setNav] = useState(false);

  const handleNav = () =>{
      setNav(!nav);    
  }

  const copyToClipboard = () =>{
    navigator.clipboard.writeText("sundaram.kalyan369@gmail.com");
  }

  return (
    <div>
      <div className='  md:flex-row md:justify-around   md:items-center  text-white hidden md:flex'>
          <h1 className=' text-3xl font-bold text-[#00df9a] md:m-0 m-4'>KALYAN ;)</h1>
          {/* <div className='flex justify-evenly bg-purple-500'> */}
            <ul className=' flex  flex-col md:flex-row md:justify-evenly justify-start'>
                <li className='md:px-8 py-4 m-2 no-underline hover:underline'>Home</li> 
                <li className='md:px-8 py-4 m-2 no-underline hover:underline'>Projects</li>
                <li className='md:px-8 py-4 m-2 no-underline hover:underline'>Education</li>
                <li className='md:px-8 py-4 m-2 no-underline hover:underline'>Skills</li>
            </ul>
          {/* </div> */}
          <button onClick={copyToClipboard} className=' border-2 border-white hover:bg-white hover:text-black hover:text-bold focus:ring-4 focus:outline-none focus:ring-[#00df9a] px-6 py-2 md:w-auto md:block hidden'>Let's talk!</button>
      </div>
      <div className='md:hidden  text-white'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className=' text-3xl font-bold text-[#00df9a] md:m-0 m-4'>KALYAN ;)</h1>
            <div onClick={handleNav} className='md:hidden p-4'>
                {nav===true ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
        </div>
        <ul className= {nav===false ? 'hidden' : 'flex  flex-col justify-start' } >
                <li className=' py-4 m-2  border-b border-gray-700'>Home</li> 
                <li className=' py-4 m-2  border-b border-gray-700'>Projects</li>
                <li className=' py-4 m-2  border-b border-gray-700'>Education</li>
                <li className=' py-4 m-2 '>Skills</li>
            </ul>
          
          
      </div>
      
    </div>
  )

}

export default Nav