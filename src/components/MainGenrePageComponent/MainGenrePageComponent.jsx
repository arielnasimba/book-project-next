"use client";
import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import { fetchUserData } from "../../redux/slices/userSlice";
import CategoriesArea from "../CategoriesArea/CategoriesArea";
import { useDispatch, useSelector } from "react-redux";

export default function MainGenrePageComponent() {
    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.user);    
    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch])
    
    dispatch(addToContent(data))
    dispatch(addToCategories(data))


  return (
    <div
      className={`main-component w-[100dvw] min-h-[150dvh] overflow-y-scroll flex flex-col gap-y-4 p-7 `}
    >


      <div className="search-categorie-area w-[80%] h-[2.4rem]  grid grid-cols-2 gap-x-3 text-white font-semibold
                        tablet:w-[50%] desktopM:w-[40%] desktopL:w-[26%] 
      ">
        <button className="bg-black rounded-3xl " type="button">
          Search
        </button>

      </div>

      <div className="categories-books-area">

        <CategoriesArea />
        
      </div>
    </div>
  );
}
