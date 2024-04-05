"use client";
import React, { useEffect } from "react";
import { fetchUserData } from "../../redux/slices/userSlice";
import { addToCategories, addToContent } from "../../redux/slices/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Maincomponent from "../../components/MainComponent/Maincomponent";
import Navbar from "../../components/Navbar/Navbar";
import Login from "../../components/Login/Login";
import Link from "next/link";
import LoggedIn from "../../components/LoggedIn/LoggedIn";

export default function LoggedInPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  dispatch(addToContent(data));
  dispatch(addToCategories(data));
  const isAdminUser = useSelector(
    (state) => state.usersManagement.admin.isConnected
  );
  return (
    <main className="w-[100dvw] h-[140dvh] flex flex-col  ">
      <div className={`navbar-area w-full h-[5rem]`}>
        <Navbar />
      </div>

      <div className="main-area">
        {isAdminUser ?  (
          <div className="w-[24rem] h-[52rem]  mx-auto flex justify-center items-center text-center ">
            <div className="text-center-area w-[20rem] h-[15rem]  flex flex-col gap-y-4">
              You are not connected

              <button
                className="w-[8rem] h-[3rem] border border-black rounded-xl mx-auto"
                type="button"
              >
                Connexion
              </button>
              <Link
              href={`/register-page/`}
                className="w-[8rem] h-[3rem] border border-black rounded-xl mx-auto flex justify-center items-center active:scale-75 duration-200"
              >
                Register
              </Link>
            </div>
          </div>
        )
        :
        (
            <LoggedIn />
        ) 
      }
      </div>
      <Footer />
    </main>
  );
}
