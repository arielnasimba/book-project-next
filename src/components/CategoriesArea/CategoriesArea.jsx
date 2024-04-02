"use client"
import React, { useEffect } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import MiniCardCategorie from "../MiniCardCategorie/MiniCardCategorie";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";


export default function CategoriesArea(){

    const dispatch = useDispatch();
   
    

    const { data, loading, error} = useSelector((state) => state.user);
    const libraryContent = useSelector((state) => state.library.content)
    const libraryCategories = useSelector((state) => state.library.categories)

const uniqueElements = new Set(libraryCategories.flatMap(item => item.split(',')));

// Convertir l'ensemble en tableau
const list_of_categories = [...uniqueElements];
    
  return (
    <div
      className={`book-categories w-full h-[50rem]  flex flex-col gap-y-2 pt-2 `}
    >
      <div className="title-area font-semibold text-[1.2rem] mb-4">
        <h2> Book Genres</h2>
      </div>

      <div className="card-categories-area w-full h-[95%]  grid grid-cols-2 gap-x-6 gap-y-6 overflow-y-scroll
                    tablet:grid-cols-3 tablet:gap-x-5 desktopM:gap-x-3  desktopM:grid-cols-4 desktopL:grid-cols-5 desktopxl:grid-cols-6
                    
      ">
        {/* <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard /> */}


        {
            libraryCategories ? (
                // JSON.stringify(data)
                    // JSON.stringify(libraryCategories)
                    list_of_categories.map((singleData, i) =>{

                    return(

                        <div className="" key={i}
                        
                        >   
                        <Link
                        href={`/genre-page/${singleData}`}
                        >
                        
                        <MiniCardCategorie datas={singleData} />
                        </Link>

                        </div>
                    )
                })


            ) : 
                <p>hello</p>

        }


      </div>
    </div>
  );
}

