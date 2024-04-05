"use client"
import React, { useEffect } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import BookCard from "../BookCard/BookCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import btn_icon from "../../images-dir/btnIcon";
// import { Li} from "react-dom"

export default function MainGenrePageID(){
  const params = useParams();
    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.user);
    const libraryContent = useSelector((state) => state.library.content)
    const libraryCategories = useSelector((state) => state.library.categories)




    let tab = [ "Young Adult,Fiction,Science Fiction,Dystopia,Fantasy","Fantasy,Young Adult,Fiction" , "Classics,Fiction,Historical,Historical Fiction,Academic,School",
"Classics,Fiction,Romance", "Young Adult,Fantasy,Romance,Paranormal,Vampires,Fiction","Historical,Historical Fiction,Fiction,Young Adult"]

const uniqueElements = new Set(libraryCategories.flatMap(item => item.split(',')));

// Convertir l'ensemble en tableau
const list_of_categories = [...uniqueElements];
const title = params.id.replace(/[^a-zA-Z ]/g, ' ')
    
let filteredBooks = null;
// if (data != null) {
//   filteredBooks = data.filter(book => {
//     const genres = book.genre_list.split(",");
//     return genres.includes(title);
//   });
// }

// let arrayCategories = [];

// function arraySortedByTitle(array, arraySorted) {

//   if (array) {
    
//     array.forEach(element => {
//       const elementGenreList = element.genre_list;
//         const element_genre_list_set =  new Set(elementGenreList.flatMap(item => item.split(',')))
//         element_genre_list_set.forEach(elementGenre => {
//             if (elementGenre == params.id.trim()) {
//               arrayCategories.push(element);
//             }
//         })
//     });

//     arraySorted = array
//   }
  
// }

if (libraryContent) {
  filteredBooks = libraryContent.filter(book => {
    const genres = book.genre_list.split(",");
    return genres.includes(params.id.trim());

  });
}

function onLinkClick(e) {
  e.preventDefault()
}
  return (
    <div
      className={`book-categories w-full h-[50rem]  flex flex-col gap-y-2 pt-2 p-7 `}
    >
<Link
    href={`/genre-page`}
    className=" w-[1.2rem] h-[1.2rem] mt-[1.2rem]  "
    
    >
  
    <button type="button ">

      <Image 
        alt={btn_icon[0].name}
        src={btn_icon[0].src}
      />
    </button>
    </Link>
      <div className="title-area font-semibold text-[1.2rem] mt-[1rem] mb-5">
        <h2> {title}  Categories</h2>
      </div>

      <div className="card-categories-area w-full h-[95%]  grid grid-cols-2 gap-x-2 gap-y-3 overflow-y-scroll
                    tablet:grid-cols-3
      ">

      {/* <BookCard /> */}

{
  libraryContent ? 
  
  (

    filteredBooks.map((book, i) => {


      return(
        <BookCard key={book.id} dataBook={book} />
      )
    })
  )
  :
  (
    <p>hello</p>
  )
}      



      </div>
    </div>
  );
}


// {
//   data ? (
//       // JSON.stringify(data)
//           // JSON.stringify(libraryCategories)
//           data.map((singleData,i) =>{
    
//           return(

//               <div className="" key={i}
              
//               >   
//               <BookCard  datas={singleData} key={singleData.id} />

//             {/* <p>{singleData.id} </p> */}
//               </div>
//           )
//       })


//   ) : 
//       <p>hello nothing</p>

// }