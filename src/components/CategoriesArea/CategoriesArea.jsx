// "use client"
import React, { useEffect, useState } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import MiniCardCategorie from "../MiniCardCategorie/MiniCardCategorie";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function CategoriesArea() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.user);
  const libraryContent = useSelector((state) => state.library.content);
  const libraryCategories = useSelector((state) => state.library.categories);
  const uniqueElements = new Set(
    libraryCategories.flatMap((item) => item.split(","))
  );

  // Convertir l'ensemble en tableau
  const list_of_categories = [...uniqueElements];

  const [arrayTo, setarrayTo] = useState(list_of_categories)

  const [drop, setDrop] = useState(false);

  const handleDisplayDropDown = () => {
    setDrop(!drop);
  };

  const [ratingDecroissant, setRatingDecroissant] = useState({
    title: "ratingDecroissant",
    title2: "Rating ",
    logo: "down",
    contents: libraryContent,
    codeCat:"rc"
  });
  const [ratingCroissant, setRatingCroissant] = useState({
    title: "ratingCroissant",
    title2: "Rating ",
    logo: "up",
    contents: libraryContent,
    filterCategorie : "rd"
  });

  const [ratingCountDecroissant, setRatingCountDecroissant] = useState({
    title: "ratingCountDecroissant",
    title2: "Rating Count",
    logo: "down",
    contents: libraryContent,
    filterCategorie : "rcd"
  });
  const [ratingCountCroissant, setRatingCountCroissant] = useState({
    title: "ratingCountCroissant",
    title2: "Rating Count",
    logo: "up",
    contents: libraryContent,
    filterCategorie : "rcc"
  });

  const [reviewCountDecroissant, setReviewCountDecroissant] = useState({
    title: "reviewCountDecroissant",
    title2: "Review Count",
    logo: "down",
    contents: libraryContent,
    filterCategorie : "recc"
  });
  const [rewiewCountCroissant, setRewiewCountCroissant] = useState({
    title: "rewiewCountCroissant",
    title2: "Review Count",
    logo: "up",
    contents: libraryContent,
    filterCategorie : "recd"
  });

  const [authorsDecroissantAlphabet, setAuthorsDecroissantAlphabet] = useState({
    title: "authorsDecroissantAlphabet",
    title2: "Authors",
    logo: "down",
    contents: libraryContent,
    filterCategorie : ""
  });
  const [authorsCroissantAlphabet, setAuthorsCroissantAlphabet] = useState({
    title: "authorsCroissantAlphabet",
    title2: "Authors",
    logo: "up",
    contents: libraryContent,
    filterCategorie : ""
  });

  const [filteredBooksCat, setfilteredBooksCat] = useState([...arrayTo]);

  const [selectedCategories, setSelectedCategories] = useState("all");

  const arrayListCat = [
    ratingCroissant,
    ratingDecroissant,
    ratingCountCroissant,
    ratingCountDecroissant,
    rewiewCountCroissant,
    reviewCountDecroissant,
    authorsCroissantAlphabet,
    authorsDecroissantAlphabet,
  ];


  useEffect(() => {

    if ( libraryContent && libraryContent.length > 0) {
      switch (selectedCategories.trim().toLowerCase()) {
        case 'rc': // rating croissant
          setfilteredBooksCat([...libraryContent].sort((a, b) => b.rating - a.rating));
          break;
        case 'rd':// rating decroissant
          setfilteredBooksCat([...libraryContent].sort((a, b) => a.rating - b.rating));
          break;
        case 'rcc':// rating count croissant
          setfilteredBooksCat([...libraryContent].sort((a, b) => b.rating_count - a.rating_count));
          break;
        case 'rcd':// rating count decroissant
          setfilteredBooksCat([...libraryContent].sort((a, b) => a.rating_count - b.rating_count));
          break;
        case 'recc':// review count croissant
          setfilteredBooksCat([...libraryContent].sort((a, b) => b.review_count - a.review_count));
          break;
        case 'recd':// review count decroissant
          setfilteredBooksCat([...libraryContent].sort((a, b) => a.review_count - b.review_count));
          break;
        case 'all': // all
          setfilteredBooksCat(list_of_categories);
          break;
        default:
          // If selected category is not found, set filteredBooksCat to the original libraryContent
          setfilteredBooksCat([...arrayTo]);
      }
    }
  }, [selectedCategories]);

    // setcopycreme(copyCreme.filter(pizza => pizza.base.toLowerCase() == 'creme'));
    // setcopyTomate(copyTomate.filter(pizza => pizza.base.toLowerCase() == 'tomate'));



  return (
    <div
      className={`book-categories w-full h-[50rem]  flex flex-col gap-y-2 pt-2 `}
    >
      <div
        onClick={() => handleDisplayDropDown()}
        className="dropdown-filter-area w-[10rem] h-[3rem]  border border-black rounded-xl  absolute right-[2rem] top-[6rem] flex justify-center gap-3 items-center  desktopM:right-[2.5rem] desktopL:right-[2.7rem] desktopxl:right-[5.5rem] "
      >
        <span>Filter</span> <ChevronDownIcon className="w-[1rem] h-[1rem]" />
        {drop ? (
          <div className="dropdown-filter-content  w-[10rem] grid grid-cols-1 grid-flow-row gap-y-6 py-4 h-[32rem] top-[3.5rem] absolute rounded-xl  z-50 bg-[#e1e6f0]  border border-black
                desktopM:
          ">
            
              
            {arrayListCat ? (
              arrayListCat.map((booksGenre) => {
                  return(
                    <div onClick={(e) => setSelectedCategories(booksGenre.codeCat)}
                    className=" flex justify-center gap-x-2  items-center cursor-pointer ">
                      
                    <p className="" key={booksGenre.title}>
                    {booksGenre.title2} 
                  </p>              
                  <span>
                  {booksGenre.logo === "up" ?<ChevronDoubleUpIcon className="w-[1.2rem] h-[1.2rem]" />: <ChevronDoubleDownIcon className="w-[1.2rem] h-[1.2rem]" /> }
                    </span>    
                    </div>
                  )
              })
            ) : (
              <p>loading</p>
            )}
          </div>
        ) : (
          <div className="dropdown-filter-content hidden w-[10rem]  h-[15rem] top-[4rem] absolute rounded-xl  z-50  border border-black"></div>
        )}
      </div>
      <div className="title-area font-semibold text-[1.2rem] mb-4">
        <h2> Book Genres</h2>
      </div>

      <div
        className="card-categories-area w-full h-[95%]  grid grid-cols-2 gap-x-6 gap-y-6 overflow-y-scroll
                    tablet:grid-cols-3 tablet:gap-x-5 desktopM:gap-x-3  desktopM:grid-cols-4 desktopL:grid-cols-5 desktopxl:grid-cols-6
                    
      "
      >

        {filteredBooksCat.length > 0 ? (

          filteredBooksCat.map((singleData, i) => {
            return (

                <Link href={`/genre-page/${singleData}`} key={singleData.id}>
              <div className="" key={i}>
                  <MiniCardCategorie datas={singleData} />
              </div>
                </Link>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}
