'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { LiaTimesSolid } from "react-icons/lia";
interface propsa{
  isopen:boolean,
  onClose:() => void;
}
function NavSlide({ isopen, onClose }: propsa) {
  const [dropshow, setdropshow] = useState(false);

  const showdropdown = () => {
    setdropshow(!dropshow);
  };
  return (
    <div className={`${isopen ? 'translate-x-0 md:translate-y-0 md:right-0' : '-translate-x-full md:-translate-y-full'} transition-[500]   w-[300px]  md:w-full left-0 md:right-0 drop-shadow-2xl h-screen  top-0 fixed bg-[#1f1f1f]`}>
      <div className=" w-full h-[70px] flex items-center px-5 bg-slate-400">
        <LiaTimesSolid onClick={onClose} size={25} className='ml-auto p-1 text-white rounded-full w-[40px] transition-all h-[40px] hover:bg-[#1b1b1bcc]   cursor-pointer '></LiaTimesSolid>
      </div>
      <div className="w-full px-7 py-4">
        <ul className='flex flex-col md:flex-row md:gap-10 md:justify-center'>
          <li onClick={showdropdown} className=' flex cursor-pointer  flex-col text-white  '>
            <div className="flex py-4 text-white items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>
              <Link className='ml-3' href='/'>Movie</Link>
              <FaAngleDown className='ml-auto'></FaAngleDown>
            </div>

            <ul className={`${dropshow ? 'flex' : 'hidden'} flex-col cursor-pointer  w-full`}>
              <li className='pl-3 w-full hover:bg-[#1b1b1bcc]'>
                <Link className='w-full inline-block py-2' href='/'>Release carlendar</Link>
              </li>
              <li className='pl-3 w-full hover:bg-[#1b1b1bcc]'>
                <Link className='w-full inline-block py-2' href='/'>Top 250 movies</Link>
              </li>
              <li className='pl-3 w-full hover:bg-[#1b1b1bcc]'>
                <Link className='w-full inline-block py-2' href='/'>Most popular movies</Link>
              </li>
              <li className='pl-3 w-full hover:bg-[#1b1b1bcc]'>
                <Link className='w-full inline-block py-2' href='/'>Browse movies by Gerne</Link>
              </li>
              <li className='pl-3 w-full hover:bg-[#1b1b1bcc]'>
                <Link className='w-full inline-block py-2' href='/'>Top Box Office</Link>
              </li>
            </ul>
          </li>
          <li className='flex py-4 text-white items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path></svg>
            <Link className='ml-3' href='/'>Tv Shows</Link>
            <FaAngleDown className='ml-auto'></FaAngleDown>

          </li>
          <li className='flex py-4 text-white items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path></svg>
            <Link className='ml-3' href='/'>Watch</Link>
            <FaAngleDown className='ml-auto'></FaAngleDown>

          </li>
          <li className='flex py-4 text-white items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path></svg>
            <Link className='ml-3' href='/'>Award & Event</Link>
            <FaAngleDown className='ml-auto'></FaAngleDown>

          </li>
          <li className='flex py-4 text-white items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
            <Link className='ml-3' href='/'>Celeb</Link>
            <FaAngleDown className='ml-auto'></FaAngleDown>

          </li>
          <li className='flex py-4 text-white items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
            <Link className='ml-3' href='/'>Community</Link>
            <FaAngleDown className='ml-auto'></FaAngleDown>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavSlide
