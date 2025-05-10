 import React from 'react'
 import Link from 'next/link'
// import { title } from 'process'
 interface item{
  address:string,
  title:string
 }
 const menuitem = ({address,title}: item) => {
     
   return (
     <div>
       <Link className='text-[18px] px-2 rounded-sm font-extrabold bg-[#f5c518]' href={address}>{title}</Link>
     </div>
   )
 }
 
 export default menuitem
 
