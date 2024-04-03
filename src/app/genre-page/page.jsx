"use client"

import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Maincomponent from "../../components/MainComponent/Maincomponent";
import MainGenrePageComponent from "../../components/MainGenrePageComponent/MainGenrePageComponent";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";

async function getProduct(){
  const res = await fetch('https:/example-data.draftbit.com/books')
  return res.json()
}

export default  function GenrePage() {
  // const products = await getProduct()
  const dispatch =  useDispatch();
  const { data, loading, error} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch])

  dispatch(addToContent(data))
  dispatch(addToCategories(data))


  return (
    <main className="w-[100dvw] h-[250dvh] flex flex-col ">

      <div className={`navbar-area w-full h-[5rem]`}>


      <Navbar />
      </div>

      <div className="main-area">

        <MainGenrePageComponent   />
      </div>


      <Footer/>
    </main>
  );
}
