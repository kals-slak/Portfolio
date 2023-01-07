import React from 'react'
import Dev from './portfolioImg01.png';
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className='text-white grid md:grid-cols-2'>
        <div className='flex flex-col py-20 md:py-40 mx-4 md:mx-[120px] '>
            <h2 className='text-[#00df9a] text-2xl font-extrabold'>WELCOME!</h2>
            <div className='flex items-center text-2xl md:text-3xl font-semibold'>
            <h1 className='py-4 px-2' >I Am</h1>
            <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay:30,
                strings:[
                    "Web Developer",
                    "Student"
                ],
                
            }}
             />
            </div>
           <p className=''>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products</p> 
        </div>
        <div className='m-auto w-[250px] md:w-[400px] md:py-20'>
            <img  src={Dev} alt='/'></img>
        </div>
        
    </div>
  )
}

export default Hero