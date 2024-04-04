"use client"
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CartArea from '../../components/CartArea/CartArea'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/slices/userSlice';
import { addToCategories, addToContent } from '../../redux/slices/contentSlice';

export default function CartPage() {

      // const products = await getProduct()
  const dispatch = useDispatch();
  const { data, loading, error} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch])


  
  dispatch(addToContent(data))
  dispatch(addToCategories(data))

  return (
    <main className='w-[100dvw] h-[200dvh] flex flex-col gap-y-6 '>

    <div className={`navbar-area w-full h-[5rem]`}>

<Navbar />
</div>

<div className="main-area w-full h-[85dvh]  tablet:h-[98dvh]   ">

<CartArea />
</div>



    <Footer/>
</main>
  )
}
