"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slices/userSlice";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { addToCartAdmin, addToCartAllAdmin, addToFavsAdmin, removeFromFavsAdmin } from "../../redux/slices/usersManagementSlice";

export default function BookCard(props) {
  const dispatch = useDispatch();

  // const library = useSelector((state) => state.library.content);
  const { data, loading, error } = useSelector((state) => state.user);
      useEffect(() => {
    dispatch(fetchUserData())

  }, [dispatch])

  // const title = props.datas.id == props.key;
  const libraryContent = useSelector((state) => state.library.content)

  const [isAddedToFavs, setIsAddedToFavs] = useState(false);

  const handleAddToFavs = (book) => {
    
   if (!isAddedToFavs) {
      dispatch(addToFavsAdmin(book))
      setIsAddedToFavs(true)
    } else if (isAddedToFavs) {
      dispatch(removeFromFavsAdmin(book))
      setIsAddedToFavs(false)
    }

  }

  const handleAddBag = (book) => {

    dispatch(addToCartAdmin(book))
    console.log(`you add ${book.title} ` );
  }
  return (
    <div
      className={`w-[11.2rem] h-[20rem]  mx-auto bg-[rgba(221,221,221,0.4)] border-white border flex justify-between flex-col rounded-3xl relative p-4 `}
    > 
      <Link 
        href={`/book-page/${props.dataBook.title}`}
        className={`image-area w-full h-[62%] flex rounded-3xl bg-cover bg-no-repeat cursor-pointer `} 
      
      style={{backgroundImage:`url(${props.dataBook.image_url})`}}>
        {/* <Image alt={``} src={`https://images.gr-assets.com/books/1442530605l/5996153.jpg`} 
          className="object-fill"
          width={"50"}
          height={"50"}
        /> */}

        {/* <img src="https://images.gr-assets.com/books/1442530605l/5996153.jpg" alt="" srcset="" className="w-auto" /> */}
      </Link>


        {
          isAddedToFavs ? 
          (
            <svg onClick={() => handleAddToFavs(props.dataBook)}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-400 absolute top-4  right-3 active:scale-75 duration-200 cursor-pointer">
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          )
          :
          ( <HeartIcon
            onClick={() => handleAddToFavs(props.dataBook)}
            className={`absolute top-4 w-[1.5rem] right-3 active:scale-75 duration-200 cursor-pointer text-white  `}  />)
        }



      <div className="text-area w-full h-[38%]  rounded-b-3xl flex flex-col p-2 justify-evenly ">
        <div className="title-area  text- ">
          <h2>
            {props.dataBook.title}
          </h2>

          <p className="text-sm"> 
          {props.dataBook.authors}
          </p>
        </div>


        <div className="w-full h-[2rem] flex justify-between  ">
          <button
            type="button"
            onClick={() =>{handleAddBag(props.dataBook), dispatch(addToCartAllAdmin(props.dataBook)) }}
            className={`w-[3rem] h-[2rem]  rounded-xl bg-[rgba(221,221,221,0.4)] border-white border flex justify-between active:scale-75 duration-200`}
          >
            <ShoppingBagIcon className="w-[1.2rem] m-auto " />
          </button>
          <div className="rating-area w-[4rem] h-[2rem]  text-center text-xs flex flex-col">
            <span>
              {props.dataBook.rating}
              </span>

            <div className="botton w-full flex">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

          </div>
        </div>
        <Link
        href={`/book-page/${props.dataBook.title}`}
        >
        
        <InformationCircleIcon className='w-[1.5rem] h-[1.5rem] absolute right-6 bottom-20 cursor-pointer active:scale-75 duration-200' />
        </Link>

      </div>
    </div>
  );
}
