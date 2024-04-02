import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function FavoriesCard() {
  return (
    <div className={`favories-card w-[23rem] h-[8rem]  rounded-3xl border flex  p-5  items-center justify-between
    tablet:w-[14rem] tablet:h-[4.7rem] cursor-pointer border-black tablet:p-4 desktopL:w-[16rem]
` }>

{/* <p className='m-auto'> card template</p> */}

<div className="left w-[20%] h-full flex bg-emerald-300 rounded-[2rem] text-start ">

</div>

<div className="right w-[75%] h-full   flex flex-col justify-between
tablet:w-[9.7rem] 
">


<h2 className='text-lg '>The Great Gatsby </h2>

<h3 className='font-normal'>Author: Ariel Nasimba</h3>

<div className="bottom-area w-[40%] h-[1.5rem]  flex justify-between">


<HeartIcon className='w-[1.5rem] h-[1.5rem]' />
<XMarkIcon className='w-[1.5rem] h-[1.5rem]' />

</div>

</div>


</div>
  )
}
