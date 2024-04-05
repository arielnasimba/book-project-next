import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/slices/userSlice';
import './Carousel.css' 

export default function Carousel() {
  const libBooks = useSelector((state) => state.library.content);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentForCarouselArray, setContentForCarouselArray] = useState([]);

  function getBooksRandomForCarousel (apiArray) {
    let arraySizeMax = 15;
    let array = [];
    let index = 0;
    while (array.length < arraySizeMax && index < apiArray.length) {
      const book = apiArray[index];
      if (!array.some((b) => b.id === book.id)) {
        array.push(book);
      }
      index++;
    }
    return array;
  }

  useEffect(() => {
    if (libBooks) {
      const booksForCarousel = getBooksRandomForCarousel(libBooks);
      setContentForCarouselArray(booksForCarousel);
    }
  }, [libBooks]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === contentForCarouselArray.length - 3 ? 0 : prevIndex + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [contentForCarouselArray]);

  return (
    <div className='carousel-area w-full h-[10rem]  flex justify-start gap-x-2 
                tablet:h-[15rem] desktopM:h-[18rem] desktopL:h-[22rem] 
    '>

{contentForCarouselArray.length > 0 ? (
        contentForCarouselArray.map((singleBook, i) => (
          <div key={i} className='carousel-item w-[10rem] h-[10rem] tablet:h-[15rem] desktopM:h-[18rem] ' style={{ display: i >= currentIndex && i < currentIndex + 3 ? 'block' : 'none' }}>
            <img src={singleBook.image_url} alt={singleBook.title} className='w-full h-full rounded-xl' />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
