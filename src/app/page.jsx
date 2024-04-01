"use client"
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer"
import Login from "../components/Login/Login";
import Maincomponent from "../components/MainComponent/Maincomponent";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import { fetchUserData } from "../redux/slices/userSlice";
import { addToContent } from "../redux/slices/contentSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { data, loading, error} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData())
    
  }, [dispatch])

  dispatch(addToContent(data))
  return (
    <main className="w-[100dvw] h-[250dvh] flex flex-col ">

      <div className={`navbar-area w-full h-[5rem]`}>


      <Navbar />
      </div>

      <div className="main-area">

        <Maincomponent />
      </div>

      <Footer/>

    </main>
  );
}
