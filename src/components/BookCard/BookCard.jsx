"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slices/userSlice";

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
      className={`w-[10.8rem] h-[17rem]  mx-auto bg-[rgba(221,221,221,0.4)] border-white border flex justify-between flex-col rounded-3xl relative p-4`}
    >
      <div className="image-area w-full h-[55%]  rounded-3xl bg-blue-600">
        <Image alt={``} src={``} />
      </div>

      <HeartIcon className={`absolute top-4 w-[1.5rem] right-4 `} />
      <div className="text-area w-full h-[45%]  rounded-b-3xl flex flex-col p-2 justify-evenly ">
        <div className="title-area  text- ">
          <h2>
            {/* {props.title} */}
            {/* {props.datas.id} */}
            {/* {title.title} */}
            Book Title
          </h2>

          <p className="text-sm"> ariel nasimba</p>
        </div>
        {/* <div className="description-area mx-auto overflow-scroll">
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, architecto?</p>
        </div> */}

        <bottom-area className="w-full h-[5rem] flex justify-between bg-blue-600">
          <button
            type="button"
            className={`w-[3rem] h-[2rem]  rounded-xl bg-[rgba(221,221,221,0.4)] border-white border flex justify-between`}
          >
            <ShoppingBagIcon className="w-[1.2rem] m-auto" />
          </button>
          <div className="rating-area w-[4rem] h-[2rem] bg-red-600  text-xs flex flex-col">
            <span>3.2</span>

            <div className="botton w-full flex">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </bottom-area>
      </div>
    </div>
  );
}
