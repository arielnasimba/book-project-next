"use client"
import React, { useEffect } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import BookCard from "../BookCard/BookCard";
import { useParams } from "next/navigation";


export default function MainGenrePageID(){
  const params = useParams();
    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.user);
    const libraryContent = useSelector((state) => state.library.content)
    const libraryCategories = useSelector((state) => state.library.categories)

    // useEffect(() => {
    //   dispatch(fetchUserData())
      
    // }, [dispatch])

    
    // useEffect(() => {
    //     dispatch(addToContent(data))

    // }, [])
    // if (loading) {
    //     return <p>Loading ...</p>
    // }
    // if (error) {
    //     return <p>Error failed to </p>
    // }



    let tab = [ "Young Adult,Fiction,Science Fiction,Dystopia,Fantasy","Fantasy,Young Adult,Fiction" , "Classics,Fiction,Historical,Historical Fiction,Academic,School",
"Classics,Fiction,Romance", "Young Adult,Fantasy,Romance,Paranormal,Vampires,Fiction","Historical,Historical Fiction,Fiction,Young Adult"]

const uniqueElements = new Set(libraryCategories.flatMap(item => item.split(',')));

// Convertir l'ensemble en tableau
const list_of_categories = [...uniqueElements];
const title = params.id.replace(/[^a-zA-Z ]/g, ' ')
    
let filteredBooks = null;
if (data != null) {
  filteredBooks = data.filter(book => {
    const genres = book.genre_list.split(",");
    return genres.includes(title);
  });
}
  return (
    <div
      className={`book-categories w-full h-[50rem]  flex flex-col gap-y-2 pt-2 p-7 `}
    >
      <div className="title-area font-semibold text-[1.2rem]">
        <h2> {title}  Categories</h2>
      </div>

      <div className="card-categories-area w-full h-[95%]  grid grid-cols-2 gap-x-6 gap-y-6
                    tablet:grid-cols-3
      ">

        {
            data ? (
                // JSON.stringify(data)
                    // JSON.stringify(libraryCategories)
                    data.map((singleData,i) =>{
                      (singleData.genre_list).split(",").map((el) => {
                        return( <p>{el} </p> )
                      })
                    return(

                        <div className="" key={i}
                        
                        >   
                        {/* <BookCard  datas={singleData} /> */}

                      <p>{singleData.id} </p>
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


