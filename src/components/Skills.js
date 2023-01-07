import React from 'react'

function Skills() {
  return (
    <div>
        <div className=' bg-slate-100 w-full p-10'>
            <div className='flex flex-col gap-10'>
                <h1 className=' text-blue-800 font-extrabold text-4xl text-center '>SKILLS</h1>
                <div className='grid md:grid-cols-4 gap-8 mx-auto py-4'>
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[100px] h-[100px]'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='/'></img>
                    </div>
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[100px] h-[100px]'  src='https://miro.medium.com/max/500/1*AbiX4LwtSNozoyfypcKvEg.png' alt='/'></img>
                    </div> 
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[100px] h-[100px]'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='/'></img>
                    </div>
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[100px] h-[100px]'  src='https://cdn.iconscout.com/icon/free/png-256/github-170-1175028.png' alt='/'></img>
                    </div>
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[120px] h-[100px]'  src='https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg' alt='/'></img>
                    </div>
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[120px] h-[100px]'  src='https://download.logo.wine/logo/Solidity/Solidity-Logo.wine.png' alt='/'></img>
                    </div> 
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[100px] h-[100px]'  src='https://cdn.worldvectorlogo.com/logos/c-1.svg' alt='/'></img>
                    </div>
                    <div className='bg-white p-8 shadow-2xl rounded-lg mx-auto'>
                        <img className='w-[100px] h-[100px]'  src='https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png' alt='/'></img>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills; 