"use client"

import React, { useState } from 'react'
import Menuitem from './menuitem/page'
import { IoMdSearch } from "react-icons/io";
import { VscTriangleDown } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import NavSlide from '../NavSlide/page';
import TranslationLanguage from './TranslationLanguage/page';
import { LiaTimesSolid } from "react-icons/lia";

 

const Header = () => {
    const [toggleopen,settoggleopen]=useState(false)
    const [searchdropdowns,setsearchdropdown]=useState(false)
    const [languagedropdowns,setlanguagedropdown]=useState(false)
    const handleToggle = () => {
        settoggleopen(!toggleopen); // Toggle the nav visibility
      };

      const closeNavSlide = () => {
    settoggleopen(false); // This will hide the nav
      }

      const searchdropdown = () =>{
         setsearchdropdown(!searchdropdowns)
      }
  return (
    <div className='flex  bg-black px-4 items-center justify-center sm:justify-center relative sm:px-5 h-[55px] gap-[5px] w-full'>

      <div className=" flex gap-3 md:flex-row-reverse  items-center">
      
       <div onClick={handleToggle} className="flex gap-2 px-4 font-bold py-1 justify-center cursor-pointer rounded-md text-[14px] hover:bg-[#1b1b1bcc] text-white items-center">
       <RxHamburgerMenu    size={20} />
       <h3 className='hidden sm:flex'>Menu</h3>
       </div>
       <Menuitem  title='IMdB' address='/' />
      </div>
       
      <form className={`${searchdropdowns ? 'top-0':''} left-0 absolute transition-[500] -top-[55px] w-full rounded-sm h-[55px] sm:relative md:top-auto text-white sm:w-[50%] pl-3 sm:h-[35px] bg-white sm:rounded-[7px] flex items-center`} action="">
        <label className='flex border-r h-full items-center ' htmlFor="button">
            <button className='flex items-center  font-bold text-sm text-black text-nowrap pr-1 gap-2' type='button'>
                <p>All</p>
                <VscTriangleDown />
            </button>
        </label>
        
      <label   htmlFor='search' className={` w-[93%]   pr-3   h-full relative flex item-center justify-between`}> 
       <input className='w-full h-[100%] pl-3 outline-none border-none  ' type="search" name="search" id="search" placeholder='Search imdb' />
       <IoMdSearch className='mt-2 hidden text-gray-400 text-[20px] md:flex cursor-pointer' />
       <LiaTimesSolid onClick={()=>setsearchdropdown(false)}   className={` mt-4 flex text-gray-400 md:hidden text-[20px] cursor-pointer`}></LiaTimesSolid>
       </label>
      </form>
      
     <div className=" hidden md:flex font-extrabold  cursor-pointer items-center px-4 border-r  text-white">
        <h3 className=' rounded-md px-4 py-1 hover:bg-[#1b1b1bcc]' >IMdb<span className='text-blue-500'>Pro</span> </h3>
     </div>
     
     <div className="hidden md:flex    font-semibold  cursor-pointer text-sm items-center px-2  text-white">
        <h3 className=' rounded-md px-4 py-1 flex  gap-2 items-center hover:bg-[#1b1b1bcc]' >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="currentColor"></path></svg>
            <span className=''>WatchList</span> </h3>
     </div>
     
     <div onClick={searchdropdown} className='ml-[135px] p-4 md:hidden '>
     <IoMdSearch size={20} className='  text-gray-400    md:hidden cursor-pointer' />
     </div>
     
     <div className="font-semibold ml-auto md:mr-0 flex cursor-pointer text-sm items-center px-2  text-white">
        <h3 className=' rounded-md px-4 py-1 flex  gap-2 items-center hover:bg-[#1b1b1bcc]' >
         
            <span className=''>SignIn</span> </h3>
     </div>
      
     
     <div className="font-semibold text-nowrap flex cursor-pointer text-sm items-center px-2 md:hidden  text-black">
        <h3 className=' rounded-sm p-1 sm:px-4 py-1 flex  gap-2 items-center bg-[#f5c518]' >
         
            <span className=' '>Use App</span> </h3>
     </div>
     <div className=" hidden md:flex   font-semibold  cursor-pointer text-sm items-center px-2  text-white">
        <h3 onClick={()=>setlanguagedropdown(!languagedropdowns)} className=' rounded-md  px-4 py-1 flex  gap-2 items-center hover:bg-[#1b1b1bcc]' >
        
            <span className=''>En</span>
            <VscTriangleDown></VscTriangleDown>
             </h3>
             <TranslationLanguage openlanguage={languagedropdowns}></TranslationLanguage>
     </div>
      <NavSlide isopen={toggleopen} onClose={closeNavSlide}></NavSlide>
      
     
    </div>
  )
}

export default Header
