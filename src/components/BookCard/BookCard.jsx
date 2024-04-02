"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/slices/userSlice';


export default function BookCard(props) {
    const dispatch = useDispatch();

    // const library = useSelector((state) => state.library.content);
    const { data, loading, error} = useSelector((state) => state.user);
    //     useEffect(() => {
    //   dispatch(fetchUserData())
      
    // }, [dispatch])

    const title = props.datas.id == props.key;
    
  return (
    <div className={`w-[10.2rem] h-[15rem]  mx-auto bg-[rgba(221,221,221,0.4)] border-white border flex flex-col rounded-3xl relative`}>

    <div className="image-area w-full h-[55%]  rounded-t-3xl">
        <Image
            alt={``}
            src={``}
        />
    </div>

    <HeartIcon 
    
    className={`absolute top-4 w-[1.5rem] right-4`}
    />
    <div className="text-area w-full h-[45%]  rounded-b-3xl flex flex-col p-2 justify-evenly">

        <div className="title-area mx-auto text-center">
             <h2>
                {/* {props.title} */}
    {/* {props.datas.id} */}
    {title.title}
             </h2>
        </div>
    
        {/* <div className="description-area mx-auto overflow-scroll">
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, architecto?</p>
        </div> */}

        <button type="button" className={`w-[30%] h-[2rem] mx-auto rounded-xl bg-[rgba(221,221,221,0.4)] border-white border flex`}>
            <ShoppingBagIcon
                className='w-[1.2rem] m-auto'
            />
        </button>
    </div>
    </div>
  )
}
