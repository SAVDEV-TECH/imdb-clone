import React from 'react'

function TranslationLanguage({openlanguage}) {
  return (
    <div className={`${openlanguage? 'scale-y-100  ': 'scale-y-0 opacity-0 transition-[400] '} w-[300px] origin-top transition-[500] h-auto cursor-auto absolute right-0 top-[58px] bg-black`}>
        <div className=" ">
            <h3 className=' py-4 pl-6 border-b-2 capitalize border-b-white'> Fully Supported </h3>
            <ul className='w-full'>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className="w-4 h-4  bg-yellow-500 rounded-full"></div>
                    </div>
                   </label>
                   
                   <h3>English (united State)</h3>
                </li>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className={`  w-4 h-4  bg-yellow-500 rounded-full`}></div>
                    </div>
                   </label>
                   
                   <h3>English (united State)</h3>
                </li>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className="w-4 h-4  bg-yellow-500 rounded-full"></div>
                    </div>
                   </label>
                   
                   <h3>English (united State)</h3>
                </li>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className="w-4 h-4  bg-yellow-500 rounded-full"></div>
                    </div>
                   </label>
                   
                   <h3>French (France)</h3>
                </li>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className="w-4 h-4  bg-yellow-500 rounded-full"></div>
                    </div>
                   </label>
                   
                   <h3>English (united State)</h3>
                </li>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className="w-4 h-4  bg-yellow-500 rounded-full"></div>
                    </div>
                   </label>
                   
                   <h3>English (united State)</h3>
                </li>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className="w-4 h-4  bg-yellow-500 rounded-full"></div>
                    </div>
                   </label>
                   
                   <h3>English (united State)</h3>
                </li>
                <li className='flex pl-6 border-b-2 gap-10 border-b-white items-center py-4 '>
                    <label className='' title='check'  htmlFor="check"> 
                    <div className="w-7 h-7 rounded-full flex items-center justify-center  border-2  border-yellow-500">
                        <div className="w-4 h-4  bg-yellow-500 rounded-full"></div>
                    </div>
                   </label>
                   
                   <h3>English (united State)</h3>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default TranslationLanguage;
