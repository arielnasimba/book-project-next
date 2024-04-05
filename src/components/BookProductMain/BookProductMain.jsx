import React, { useEffect, useState } from 'react'
import btn_icon from '../../images-dir/btnIcon'
import Link from 'next/link'
import Image from 'next/image'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAdmin, addToCartAllAdmin, addToFavsAdmin, removeFromFavsAdmin } from '../../redux/slices/usersManagementSlice'

export default function BookProductMain() {

    
    const params = useParams();
    const dispatch = useDispatch();

    const [bookToCart, setbookToCart] = useState()

    const foundedBook = () => {

    }
    const handleAddToCart = (book) => {
        dispatch(addToCartAdmin(book))
    }

    const title = params.id.replace(/[^a-zA-Z ]/g, ' ')
    const titleToSearched = title.replace(/[^a-zA-Z ]/g, '').toLowerCase().trim().replaceAll(/\s+/g, '')

    const libraryContent = useSelector( ( state) => state.library.content)

 

    const [foundBook, setFoundBook] = useState(null);

    useEffect(() => {
        if (libraryContent) {
            libraryContent.map((el) => {
                if (el.title.toLowerCase().trim().replaceAll(/\s+/g, '') == titleToSearched) {
                    setFoundBook(el);
                }
            })
            // const book = libraryContent.find((item) =>
            //     item.title.toLowerCase().trim().replaceAll(/\s+/g, '').includes(titleToSearched)
            // );
            // setFoundBook(book);
        }
    }, [libraryContent, foundBook]);

    const [isAddedToFavs, setIsAddedToFavs] = useState(false);

    const handleAddToFavs = (book) => {
      
     if (!isAddedToFavs) {
        dispatch(addToFavsAdmin(book))
        setIsAddedToFavs(true)
      } else if (isAddedToFavs) {
        dispatch(removeFromFavsAdmin(book))
        setIsAddedToFavs(false)
      }
  
    }
  return (
    <div className={`book-product-main w-full min-h-[90dvh]  my-5 px-7 flex flex-col  gap-y-2 
         
    `}>
 <div className="top-area w-full h-[2rem] flex justify-between mt-[0.45rem] ">
 <Link
    href={`/genre-page`}
    className=" w-[1.18rem] h-[1.18rem]   "
    >
  
    <button type="button ">

      <Image
        alt={btn_icon[0].name}
        src={btn_icon[0].src}
      />
    </button>
    </Link>

    {
        isAddedToFavs ?
        (
            <svg onClick={() => handleAddToFavs(foundBook)}   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 active:scale-75 duration-200">
            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
          </svg>

        )
        :
        (

            <BookmarkIcon 
            onClick={() => handleAddToFavs(foundBook)}
            className='w-[1.5rem] h-[1.5rem] active:scale-75 duration-200  ' />
        )

    }


 </div>

 <div className="title-area text-2xl font-semibold tablet:ml-7 desktopM:ml-10 desktopL:ml-16 ">
    <h1> {title} </h1>
    
 </div>
 <div className="authors-area text-sm font-thin flex items-center gap-x-3 tablet:ml-7  desktopM:ml-10 desktopL:ml-16">

    <div className="round w-[1.7rem] h-[1.7rem]  rounded-full bg-blue-300 items-center flex justify-center"> A</div>
    <h2 className='text-gray-500 font-thin'> 
        {foundBook && foundBook.authors}
    
    </h2>
    
 </div>

 <div className="image-book-area w-auto h-auto mx-auto bg-blue-400 rounded-2xl mt-2">

    {
        foundBook ?  (

            <img
                alt={`hello`}
                src={foundBook.image_url}
                className='rounded-2xl'
            />
        ) : 

        ( <p>loading</p> )
    }


 </div>

 <div className="detail-area w-full min-h-[8rem]  flex flex-col  text-gray-400  text-sm gap-2 ">
    <h4>Details:</h4>

    <div className="bot w-full min-h-[80%] ">
        {
            foundBook ? 
            (
               <p>{foundBook.description} </p>  
            )
            :
            (
                <p>nothing</p>
            )
        }
        
    
    </div>

 </div>

    <div className="ratings-price-area flex  justify-between mt-2 ">

        <div className="rating-area flex flex-col">

        <h5 className='text-gray-400  text-sm'>Rating</h5>
        <span>{ foundBook && foundBook.rating} </span>
        </div>
        <div className="price-area flex flex-col">

        <h5 className='text-gray-400  text-sm'>Price</h5>
        <span>{ foundBook && (foundBook.rating * 2.4).toFixed(2)}€ </span>
        </div>
    </div>
    <div className="ratings-price-area flex  justify-between mt-2 ">

        <div className="rating-area flex flex-col">

        <h5 className='text-gray-400  text-sm'>Ratings</h5>
        <span>{ foundBook && foundBook.rating_count} </span>
        </div>
        <div className="price-area flex flex-col">

        <h5 className='text-gray-400  text-sm '>Reviews</h5>
        <span className='text-end'>{ foundBook && (foundBook.review_count)}</span>
        </div>
    </div>

    <div className="genres-area flex  justify-between my-2 ">

        <div className="rating-area flex flex-col">

        <h5 className='text-gray-400  text-sm'>Genres</h5>
        <span className='text-xs'>{ foundBook && foundBook.genre_list} </span>
        </div>
        {/* <div className="price-area flex flex-col">

        <h5 className='text-gray-400  text-sm'>Price</h5>
        <span>{ foundBook && (foundBook.rating * 2.4).toFixed(2)}€ </span>
        </div> */}
    </div>

    <button onClick={() => {handleAddToCart(foundBook), dispatch(addToCartAllAdmin(foundBook))}} type="button" className='w-full h-[3rem] rounded-3xl bg-black text-white active:scale-75 duration-500
            tablet:mx-auto tablet:w-[50%] desktopM:w-[30%] desktopL:w-[20%] 
    '>Add to cart</button>

    </div>
  )
}
