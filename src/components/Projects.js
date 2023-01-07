import React from 'react'
import P1 from './quote.png';

function Projects() {
  return (
    <div>
        <h1 className='text-[#00df9a] text-4xl font-extrabold text-center py-5'>PROJECTS</h1>
        <div className='bg:black grid md:grid-cols-3 text-white p-20 gap-8 mx-auto'>
        <div className='h-[350px] text-center rounded-lg shadow-lg flex flex-col justify-around bg-[#112240] '>
                <img className='h-[200px] w-[450px] mx-auto' src={P1} alt='/'></img>
                <h1 className=' text-lg font-bold'>Random Quote Generator</h1>
                <p className=' font-normal py-4'>A single page web application which shows motivational quotes, built with React.js and Tailwind CSS </p>
            </div>
            <div className='h-[350px] text-center rounded-lg shadow-lg flex flex-col justify-around bg-[#112240]'>
                <img className='h-[200px] w-[450px] mx-auto' src={P1} alt='/'></img>
                <h1 className=' text-lg font-bold'>Random Quote Generator</h1>
                <p className=' font-normal py-4'>A single page web application which shows motivational quotes, built with React.js and Tailwind CSS </p>
            </div>
            <div className='h-[350px] text-center rounded-lg shadow-lg flex flex-col justify-around bg-[#112240]'>
                <img className='h-[200px] w-[450px] mx-auto' src={P1} alt='/'></img>
                <h1 className=' text-lg font-bold'>Random Quote Generator</h1>
                <p className=' font-normal py-4'>A single page web application which shows motivational quotes, built with React.js and Tailwind CSS </p>
            </div>
            
        </div>
    </div>
  )
}

export default Projects;