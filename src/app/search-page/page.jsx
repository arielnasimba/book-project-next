"use client";
import React, { useEffect } from "react";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Maincomponent from "../../components/MainComponent/Maincomponent";
import Navbar from "../../components/Navbar/Navbar";
import Login from "../../components/Login/Login";
import SearchArea from "../../components/SearchArea/SearchArea";

export default function SearchPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  dispatch(addToContent(data));
  dispatch(addToCategories(data));

  return (
    <main className="w-[100dvw] min-h-[140dvh] flex flex-col ">
      <div className={`navbar-area w-full h-[5rem]`}>
        <Navbar />
      </div>

      <div className="main-area">
        
    <SearchArea />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
