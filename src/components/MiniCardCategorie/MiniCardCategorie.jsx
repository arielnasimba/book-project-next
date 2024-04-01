// "use client"
import { addToCategories } from '../../redux/slices/contentSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookOpenIcon } from '@heroicons/react/24/solid';

export default function MiniCardCategorie({datas}) {

    const dispatch = useDispatch()
    const libraryGenres = useSelector( ( state) => state.library.categories)
    

  return (
    <div className={`categories-card w-[10.7rem] h-[3.7rem]  rounded-3xl border flex  p-3 justify-between items-center
                    tablet:w-[14rem] tablet:h-[14rem] cursor-pointer border-black
    ` }>

        {/* <p className='m-auto'> card template</p> */}

        <div className="left w-[1.5rem] h-[1.5rem] flex my-auto">

                    <BookOpenIcon className='w-[1.5rem] h-[1.5rem]  m-auto' />
        </div>

        <div className="right w-[6.7rem] h-[3rem]  text-center flex">


        <h5 className='text-[1rem] m-auto'>{datas} </h5>
        </div>

        
    </div>
  )
}
