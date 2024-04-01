// "use client"
import { addToCategories } from '../../redux/slices/contentSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookOpenIcon } from '@heroicons/react/24/solid';

export default function CategoriesCard({datas}) {

    const dispatch = useDispatch()
    const libraryGenres = useSelector( ( state) => state.library.categories)
    

  return (
    <div className={`categories-card w-[10.7rem] h-[10.7rem]  rounded-3xl border flex flex-col p-3 justify-between
                    tablet:w-[14rem] tablet:h-[14rem] cursor-pointer
    ` }>

        {/* <p className='m-auto'> card template</p> */}

            <div className="top-area w-full h-[2.2rem] ">

                <div className="cercle w-[2.2rem] h-[2.2rem] bg-black rounded-full flex text-white">
                    <BookOpenIcon className='w-[1.2rem] h-[1.2rem]  m-auto' />

                </div>

            </div>


        <h3 className='text-gray-500 text-[0.8rem] mt-3'>Discover</h3>

        <h4 className='font-[600] text-[1rem]  '>{datas} </h4>



        <div className="ligne-area w-[5rem] h-[0.5rem] border border-black rounded-3xl mx-auto">


        </div>
    </div>
  )
}
