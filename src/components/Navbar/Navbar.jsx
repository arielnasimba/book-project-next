"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logos from "../../images-dir/logoImages";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function   Navbar() {
  const dataAdminBag = useSelector((state) => state.usersManagement.admin.allBasket)
  const dataAdminFavs = useSelector((state) => state.usersManagement.admin.favorites)
  console.log(dataAdminBag);
  return (
    <nav
      className={`w-full h-full  flex  bg-[rgba(221,221,221,0.1)] border-[rgba(0,0,0,0.2)] border-b rounded-b-3xl `}
    >
      <ul className={` w-[90%] h-[80%] flex  m-auto  justify-between `}>
        <li
            // onClick={() => displaySideBar()}
          className={`w-[8%] h-full  flex 
                    tablet:w-[5%]
                    desktopL:w-[4%] hover:cursor-pointer
                    desktopxl:w-[2.5%] 
            `}
        >
          <Bars3CenterLeftIcon className={`w-full m-auto text-black`} />
        </li>

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
                             
                            tablet:w-[28%] tablet:h-[66%]  tablet:outline tablet:outline-1 tablet:bg-[rgba(221,221,221,0.4)]  tablet:outline-white
                            tablet:rounded-3xl my-auto 
            `}
        >
          <input
            type="outline"
            name=""
            id="gameSearched"
            className={` hidden placeholder:text-black
                                                        tablet:flex tablet:w-full tablet:rounded-3xl tablet:bg-transparent
                                                        tablet:
                                                        tablet:pl-5

                                                        `}
            placeholder="Search a book... "
          />
          <MagnifyingGlassIcon
            className={`w-full text-black  
                                                tablet:absolute  tablet:top-[1.9rem] tablet:w-[1.5rem] tablet:left-[27.3rem]
                                                desktopM:left-[38.5rem]
                                                desktopL:left-[55rem]
                                                desktopxl:left-[71.5rem]
                                                `}
          />
        </li>
        <Link
        href={`/favorites-page`}
          className={`w-[6%] h-full  flex hover:cursor-pointer
                            tablet:w-[4%] 
                            desktopM:w-[3%] desktopM:ml-8
                            desktopL:w-[2%] desktopL:ml-24
                            desktopxl:w-[1.5%] desktopxl:ml-24
            `}
        >
          <BookmarkIcon className={`w-full text-black `} />
          <div className="circle-bag w-[1.3rem] h-[1.3rem] border-black border-[0.1rem] absolute top-[1.15rem] right-[11.6rem] rounded-full flex ">
    <span className="m-auto text-[0.8rem]">{dataAdminFavs.length} </span>
          </div>
          
        </Link>
        <Link
        href={`/cart-page`}
          className={`w-[6%] h-full  flex hover:cursor-pointer
                            tablet:w-[4%]   tablet:-ml-8 tablet:-mr-8 
                            desktopM:w-[3%] desktopM:-ml-20 desktopM:-mr-20
                            desktopL:w-[2%] desktopL:-ml-36 desktopL:-mr-36
                            desktopxl:w-[1.5%] desktopxl:-ml-36 desktopxl:-mr-36
            `}
        >
          <ShoppingBagIcon className={`w-full text-black`} />{" "}
          <div className="circle-bag w-[1.3rem] h-[1.3rem] border-black border-[0.1rem] absolute top-[1.15rem] right-[9.1rem] rounded-full flex ">
    <span className="m-auto text-[0.8rem]">{dataAdminBag.length} </span>

          </div>

        </Link>

        <Link
          href={`/user-login`}
          className={`w-[30%] h-full  flex
                 tablet:w-[14%]
                    desktopM:w-[11%]
                    desktopL:w-[8%]
            `}
        >
          <li className="flex w-full h-full">
            <button
              type="button"
              className="w-[2.4rem] h-[2.4rem] bg-[rgba(221,221,221,0.4)] outline-white outline outline-1 rounded-3xl m-auto"
            >
              U 
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
