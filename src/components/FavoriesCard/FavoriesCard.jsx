"use client"
import React from 'react'
import { HeartIcon, InformationCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCartAdmin, addToCartAllAdmin, removeFromCartAdmin, removeFromFavsAdmin } from '../../redux/slices/usersManagementSlice';

export default function FavoriesCard({data}) {
    const dispatch = useDispatch();

    const handleAddBag = (book) => {

        dispatch(addToCartAdmin(book))
        dispatch(addToCartAllAdmin(book))
        console.log(`you add ${book.title} ` );
      }
  return (
    <div className={`favories-card w-[23rem] h-[8rem]  rounded-3xl border flex  p-5  items-center justify-between
    tablet:w-[22rem] tablet:h-[10rem] cursor-pointer border-black tablet:p-4 desktopL:w-[16rem]
` }>

{/* <p className='m-auto'> card template</p> */}

<Link
href={`/book-page/${data.title}`}
className="left w-[20%] h-full flex bg-emerald-300 rounded-[2rem] text-start ">
    <img src={ data && data.image_url} alt="" srcset="" className='w-full h-full rounded-lg' />

</Link>

<div className="right w-[75%] h-full   flex flex-col justify-between
tablet:w-[9.7rem] 
">


<h2 className='text-lg '>{  data && data.title} </h2>

<h3 className='font-normal'>Author: {  data && data.authors}  </h3>

<div className="bottom-area w-[40%] h-[1.5rem]  flex justify-between">


<ShoppingBagIcon onClick={ () => handleAddBag(data)} className='w-[1.3rem] h-[1.3rem] active:scale-75 duration-200' />

<XMarkIcon onClick={ () => dispatch(removeFromFavsAdmin(data))} className='w-[1.5rem] h-[1.5rem] active:scale-75 duration-200' />

</div>

</div>


</div>
  )
}
