"use client"
// import Image from "next/image";
import Header from "./Component/Header/page";
// import Movie_role from "./Component/Movieu/Movierole/page";
// import Moviedisplay from '@/app/Component/moviedisplay
 import Demoapicall from '@/app/Component/Demoapicall/Demoapicall'
 
export default function Home() {
  return (
     <div className="">
        <Header></Header>
         
        {/* <Movie_role/> */}
        <Demoapicall></Demoapicall>
       
     </div>
  );
}
