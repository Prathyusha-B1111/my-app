"use client";

import React, {useState} from 'react';
import Image from 'next/image';

const NavBar = () => {
    const [arrowClicked, setArrowClicked] = useState(false);

    const arrowClick = () => {
        setArrowClicked((prev) => !prev)
    }
  return (
    <div className='w-[200px] h-[90%] m-[20px] bg-[#3B3B41] flex flex-col items-start gap-[10px] rounded-xl p-[10px]'>
      <h1 className='text-center flex items-start justify-center text-white text-base font-medium'>Otis Admin Pro</h1>
        <hr className='w-[90%] mx-auto'/>
        <div className='text-sm font-normal flex items-start justify-center gap-[10px] '>
            <Image 
            src=""
            alt='My img'
            width={30}
            height={30}/>
            <p className='text-white '>Profile Name</p>
            <span onClick={arrowClick} className='font-bold text-white'>^</span>
        </div>
        {
            arrowClicked ? (

                <div>hello</div>
            ) : ""
        }
        <hr className='w-[90%] mx-auto'/>
        <div className='w-full flex gap-[10px] flex items-start justify-center'>
            <span>icon</span>
            <p className='text-white text-sm font-normal leading-normal'>Dashboards</p>
            <span onClick={arrowClick} className='font-bold text-white'>^</span>
        </div>
        <h2 className='flex text-white text-sm font-bold uppercase'>pages</h2>
        <div className='w-full flex gap-[10px] flex items-start justify-center'>
             <span>icon</span>
            <p className='text-white text-sm font-normal leading-normal'>Pages</p>
            <span onClick={arrowClick} className='font-bold text-white'>^</span>
        </div>
         <div className='w-full flex gap-[10px] flex items-start justify-center'>
             <span>icon</span>
            <p className='text-white text-sm font-normal leading-normal'>Apps</p>
            <span onClick={arrowClick} className='font-bold text-white'>^</span>
        </div>
         <div className='w-full flex gap-[10px] flex items-start justify-center'>
             <span>icon</span>
            <p className='text-white text-sm font-normal leading-normal'>Ecommerce</p>
            <span onClick={arrowClick} className='font-bold text-white'>^</span>
        </div>
    </div>
  )
}

export default NavBar
