  "use client"
  import Link from "next/link";
  import Footer from "../../../components/Footer/Footer";
  import Maincomponent from "../../../components/MainComponent/Maincomponent";
  import MainGenrePageComponent from "../../../components/MainGenrePageComponent/MainGenrePageComponent";
  import MainGenrePageID from "../../../components/MainGenrePageID/MainGenrePageID";
  import Navbar from "../../../components/Navbar/Navbar";

  import btn_icon from "../../../images-dir/btnIcon";
  import Image from "next/image";
  import { useDispatch, useSelector } from "react-redux";
  import { fetchUserData } from "../../../redux/slices/userSlice";
  import { useEffect } from "react";
  import { addToCategories, addToContent } from "../../../redux/slices/contentSlice";

  export default function GenrePageUnique() {
    const dispatch = useDispatch();
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

          <MainGenrePageID />
        </div>



        <Footer/>
      </main>
    );
  }
