"use client";
import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import { fetchUserData } from "../../redux/slices/userSlice";
import CategoriesArea from "../CategoriesArea/CategoriesArea";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import btn_icon from "../../images-dir/btnIcon"
import Image from "next/image";
import { ArrowDownIcon, ChevronDoubleDownIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function MainGenrePageComponent() {
    const dispatch = useDispatch();
      // useEffect(() => {
      //   dispatch(addToContent(products))
      //   dispatch(addToCategories(products))
      
      // }, [])
      
    
    const { data, loading, error} = useSelector((state) => state.user);    


  return (
    <div
      className={`main-component w-[100dvw] min-h-[150dvh] overflow-y-scroll flex flex-col gap-y-4 p-7 `}
    >

    <Link
    href={`/`}
    className=" w-[1.2rem] h-[1.2rem] "
    >
  
    <button type="button ">

      <Image 
        alt={btn_icon[0].name}
        src={btn_icon[0].src}
      />
    </button>
    </Link>





      <div className="categories-books-area ">

        <CategoriesArea  />
        
      </div>
    </div>
  );
}
