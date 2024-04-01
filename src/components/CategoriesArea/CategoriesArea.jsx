"use client"
import React, { useEffect } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import MiniCardCategorie from "../MiniCardCategorie/MiniCardCategorie";
import { useDispatch, useSelector } from "react-redux";


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
      <div className="title-area font-semibold text-[1.2rem]">
        <h2> Book Genres</h2>
      </div>

      <div className="card-categories-area w-full h-[95%]  grid grid-cols-2 gap-x-6 gap-y-6
                    tablet:grid-cols-3
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
            data ? (
                // JSON.stringify(data)
                    // JSON.stringify(libraryCategories)
                    list_of_categories.map((singleData, i) =>{

                    return(

                        <div className="" key={i}
                        
                        >   
                        <MiniCardCategorie datas={singleData} />

                        </div>
                    )
                })


            ) : 
                <p></p>

        }


      </div>
    </div>
  );
}

