"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import btn_icon from "../../images-dir/btnIcon";
import FavoriesCard from "../FavoriesCard/FavoriesCard";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriesArea() {

    const dispatch = useDispatch();
    const allFavories = useSelector((state) => state.usersManagement.admin.favorites)

  return (
    <div className="FavoriesArea  w-full h-full mx-auto px-7 flex flex-col  gap-6">
      <Link href={`/`} className=" w-[1.2rem] h-[1.2rem] pt-[0.2rem] ">
        <button type="button ">
          <Image alt={btn_icon[0].name} src={btn_icon[0].src} />
        </button>
      </Link>
      <div className="title-area w-auto h-[95%] font-semibold justify-between flex flex-col  ">
        <div className="title-area w-[10rem] h-[2rem] font-semibold text-xl ">
          <h1>Favorites Books</h1>
        </div>

        <div className="favorites-card-area w-full h-[92%] grid grid-cols-1 gap-y-5 grid-flow-row  overflow-y-scroll ">
                

      {/* <FavoriesCard /> */}

        {
            allFavories.length > 0  ? 
            (
                allFavories.map((favsCard, i) => {
                    return(
                        <FavoriesCard key={i} data={favsCard} />
                    )
                })
            )
            :
            (
                <p>nothing</p>
            )
        }   

        </div>
      </div>
    </div>
  );
}
