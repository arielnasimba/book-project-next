"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logos from "../../images-dir/logoImages";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function   Navbar() {
  const dataAdminBag = useSelector((state) => state.usersManagement.admin.allBasket)
  const dataAdminFavs = useSelector((state) => state.usersManagement.admin.favorites)

  const [displayLogged, setDisplayLogged] = useState(false)

  // document.querySelector(".dropdown-area").style.display = 'hidden';

  const handleFormBox = () => {
    setDisplayLogged(!displayLogged)
    if (displayLogged) {
      document.querySelector(".dropdown-area").style.display = `flex`;
    }
    else if (!displayLogged) {
      document.querySelector(".dropdown-area").style.display = `none`;

    }
  }

  const [isClicked, setIsClicked] = useState(false)
  const [isClickedSideBar, setIsClickedSideBar] = useState(false)

  // document.querySelector(".sidebar-area").style.color = "red"
  const handleSidebar = () => {
    setIsClickedSideBar(!isClicked)
    if (isClickedSideBar) {
      document.querySelector(".sidebar-area").style.transform = `translateX(9rem)`
    } else if (!isClickedSideBar) {
      document.querySelector(".sidebar-area").style.transform = `translateX(-9rem)`

    }
  }
  const handleBox = () => {
    setIsClicked(!isClicked)
    if (isClicked) {
      document.querySelector(".dropdown-area").style.display = `none`
    } else if (!isClicked) {
      document.querySelector(".dropdown-area").style.display = `flex`

    }
  }

  return (
    <nav
      className={`w-full h-full  flex  bg-[rgba(221,221,221,0.1)] border-[rgba(0,0,0,0.2)] border-b rounded-b-3xl `}
    >
      <ul className={` w-[90%] h-[80%] flex  m-auto  justify-between `}>
        <li
            // onClick={() => displaySideBar()}
          className={`w-[8%] h-full  flex 
                    tablet:w-[5%]
                    desktopM:hidden
                    desktopL:w-[4%] hover:cursor-pointer
                    desktopxl:w-[2.5%] 
            `}
        >
          <Bars3CenterLeftIcon onClick={() => handleSidebar()} className={`w-full m-auto text-black`} />
        </li>
        <div className="sidebar-area w-[8rem] h-[10rem] -translate-x-[9rem] duration-500 border bg-blue-50 border-[rgba(0,0,0,0.5)] absolute z-40 left-[0.2rem] top-[5.2rem] rounded-xl flex flex-col justify-evenly desktopL:right-[3.7rem] desktopxl:right-[5rem]  ">

<Link
// onClick={() => handleSidebar()}
href={`/register-page/`}
>
  <p  className="w-full h-[2.2rem] hover:underline-offset-4 hover:underline">
    Register
  </p>
</Link>
<Link
// onClick={() => handleSidebar()}

href={`/login-page/`}
>
  <p  className="w-full h-[2.2rem]  hover:underline-offset-4 hover:underline">
    Login
  </p>
</Link>
</div>

        <Link
          href={`/`}
          className={`w-[20%] h-full  flex
                tablet:w-[14%]
                desktopM:w-[12%]
                desktopL:w-[9%]
                desktopxl:w-[7%] 
            `}
        >
          <li className="flex ">
            <Image
              alt={logos[1].name}
              src={logos[1].src}
              className={`m-auto w-full`}
            />
          </li>
        </Link>
        <li
          className={`w-[6%] h-full  flex
                             
                            tablet:w-[28%] tablet:h-[66%]  tablet: tablet: tablet:  tablet:
                            tablet: my-auto 
            `}
        >
 
          <Link 
          href={`/search-page/`}
          >
          
          <MagnifyingGlassIcon
            className={` text-black absolute top-[1.9rem] w-[1.5rem]
            tablet:absolute  tablet:top-[1.9rem] tablet:w-[1.5rem] tablet:right-[16.5rem]
            desktopM:right-[21.5rem]
            desktopL:right-[26rem]
            desktopxl:right-[40.5rem]
            `}
            />
          </Link>
        </li>
        <Link
        href={`/favorites-page/`}
          className={`w-[6%] h-full  flex hover:cursor-pointer
                            tablet:w-[4%] 
                            desktopM:w-[3%] desktopM:ml-8
                            desktopL:w-[2%] desktopL:ml-24
                            desktopxl:w-[1.5%] desktopxl:ml-24
            `}
        >
          <BookmarkIcon className={`w-full text-black `} />
          <div className="circle-bag w-[1.3rem] h-[1.3rem] border-black border-[0.1rem] absolute top-[0.8rem] right-[11.5rem] rounded-full flex 
                    tablet:right-[12.4rem] tablet:top-[0.8rem] desktopM:top-[0.8rem] desktopM:right-[17rem]  desktopL:right-[20.5rem] desktopxl:right-[31.6rem]
          ">
    <span className="m-auto text-[0.8rem]">{dataAdminFavs.length} </span>
          </div>
          
        </Link>
        <Link
        href={`/cart-page/`}
          className={`w-[6%] h-full  flex hover:cursor-pointer
                            tablet:w-[4%]   tablet:-ml-8 tablet:-mr-8 
                            desktopM:w-[3%] desktopM:-ml-20 desktopM:-mr-20
                            desktopL:w-[2%] desktopL:-ml-36 desktopL:-mr-36
                            desktopxl:w-[1.5%] desktopxl:-ml-36 desktopxl:-mr-36
            `}
        >
          <ShoppingBagIcon className={`w-full text-black`} />{" "}
          <div className="circle-bag w-[1.3rem] h-[1.3rem] border-black border-[0.1rem] absolute top-[0.8rem] right-[9.1rem] rounded-full flex 
                          tablet:right-[9.35rem] tablet:top-[0.8rem] desktopM:right-[12.2rem] desktopL:right-[14.7rem] desktopxl:right-[21.6rem]
          ">
    <span className="m-auto text-[0.8rem]">{dataAdminBag.length} </span>

          </div>

        </Link>

        <div
          // href={`/register-page`}
          className={`w-[30%] h-full  flex
                 tablet:w-[14%]
                    desktopM:w-[11%]
                    desktopL:w-[8%]
            `}
        >
          <li className="flex w-full h-full">
            <button
            onClick={() => handleFormBox()}
              type="button"
              className="w-[2.4rem] h-[2.4rem] bg-[rgba(221,221,221,0.4)] outline-white outline outline-1 rounded-3xl m-auto"
            >
              U 
            </button>
          </li>
        </div>

          <div className="dropdown-area w-[8rem] h-[6rem] hidden border border-[rgba(0,0,0,0.5)] absolute z-40 right-[2rem] top-[5.2rem] rounded-xl flex flex-col justify-evenly desktopL:right-[3.7rem] desktopxl:right-[5rem]  ">

            <Link
            onClick={() => handleBox()}
            href={`/register-page/`}
            >
              <button type="button" className="w-full h-[2.2rem] hover:underline-offset-4 hover:underline">
                Register
              </button>
            </Link>
            <Link
            onClick={() => handleBox()}

            href={`/login-page/`}
            >
              <button type="button" className="w-full h-[2.2rem]  hover:underline-offset-4 hover:underline">
                Login
              </button>
            </Link>
          </div>

      </ul>
    </nav>
  );
}
