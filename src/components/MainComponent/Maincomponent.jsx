"use client";
import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import { fetchUserData } from "../../redux/slices/userSlice";
import Link from "next/link";
import BookCategories from "../BookCategories/BookCategories";
import { useDispatch, useSelector } from "react-redux";

export default function Maincomponent() {
    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.user);    
    // useEffect(() => {
    //     dispatch(fetchUserData())
    // }, [dispatch])
    
    // dispatch(addToContent(data))
    // dispatch(addToCategories(data))


  return (
    <div
      className={`main-component w-[100dvw] h-[150dvh]  flex flex-col gap-y-4 p-7 `}
    >
      <div className="title-area text-[2rem] w-full h-[6rem]    font-bold  ">
        <h1 className=" w-[60%]">Welcome to Story Arcadia </h1>
      </div>

      <div className="search-categorie-area w-[80%] h-[2.4rem]  grid grid-cols-2 gap-x-3 text-white font-semibold
                        tablet:w-[50%] desktopM:w-[40%] desktopL:w-[26%] desktopxl:w-[19%]
      ">
        <button className="bg-black rounded-3xl " type="button">
          Search
        </button>

        <button className="bg-black rounded-3xl" type="button">
            <Link 
            href={`/genre-page`}
            >
            
            Genres
            </Link>
        </button>
      </div>

      <div className="carousel-area">
        <Carousel />
      </div>

      <div className="categories-books-area">
        <BookCategories />
      </div>
    </div>
  );
}
