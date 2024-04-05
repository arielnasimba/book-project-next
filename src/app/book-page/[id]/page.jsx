"use client"
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer/Footer"
import Login from "../../../components/Login/Login";
import Maincomponent from "../../../components/MainComponent/Maincomponent";
import Navbar from "../../../components/Navbar/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import BookProductMain from "../../../components/BookProductMain/BookProductMain";
import { fetchUserData } from "../../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../../redux/slices/contentSlice";
// import { fetchUserData } from "../redux/slices/userSlice";
// import { addToCategories, addToContent } from "../redux/slices/contentSlice";



export default function BookPageID() {


  // const products = await getProduct()
  const dispatch = useDispatch();
  const { data, loading, error} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch])


  
  dispatch(addToContent(data))
  dispatch(addToCategories(data))


  return (
    <main className="w-[100dvw] h-[130dvh] flex flex-col ">

      <div className={`navbar-area w-full h-[5rem]`}>


      <Navbar />
      </div>

      <div className="main-area">

        <BookProductMain />

      </div>

      {/* <Footer/> */}

    </main>
  );
}
