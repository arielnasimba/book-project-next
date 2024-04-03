"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slices/userSlice";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function BookCard(props) {
  const dispatch = useDispatch();

  // const library = useSelector((state) => state.library.content);
  const { data, loading, error } = useSelector((state) => state.user);
  //     useEffect(() => {
  //   dispatch(fetchUserData())

  // }, [dispatch])

  // const title = props.datas.id == props.key;

  return (
    <div
      className={`w-[11.2rem] h-[19rem]  mx-auto bg-[rgba(221,221,221,0.4)] border-white border flex justify-between flex-col rounded-3xl relative p-4`}
    >
      <div className={`image-area w-full h-[62%] flex rounded-3xl bg-cover bg-no-repeat `} 
      
      style={{backgroundImage:`url(https://images.gr-assets.com/books/1442530605l/5996153.jpg)`}}>
        {/* <Image alt={``} src={`https://images.gr-assets.com/books/1442530605l/5996153.jpg`} 
          className="object-fill"
          width={"50"}
          height={"50"}
        /> */}

        {/* <img src="https://images.gr-assets.com/books/1442530605l/5996153.jpg" alt="" srcset="" className="w-auto" /> */}
      </div>

      <HeartIcon className={`absolute top-4 w-[1.5rem] right-4 `} />
      <div className="text-area w-full h-[38%]  rounded-b-3xl flex flex-col p-2 justify-evenly ">
        <div className="title-area  text- ">
          <h2>
            {/* {props.title} */}
            {/* {props.datas.id} */}
            {/* {title.title} */}
            Book Title
          </h2>

          <p className="text-sm"> ariel nasimba</p>
        </div>


        <div className="w-full h-[2rem] flex justify-between  ">
          <button
            type="button"
            className={`w-[3rem] h-[2rem]  rounded-xl bg-[rgba(221,221,221,0.4)] border-white border flex justify-between`}
          >
            <ShoppingBagIcon className="w-[1.2rem] m-auto" />
          </button>
          <div className="rating-area w-[4rem] h-[2rem]  text-center text-xs flex flex-col">
            <span>3.2</span>

            <div className="botton w-full flex">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

          </div>
        </div>
        <InformationCircleIcon className='w-[1.5rem] h-[1.5rem] absolute right-6 bottom-20' />

      </div>
    </div>
  );
}
