"use client";
import Link from "next/link";
import React from "react";
import medias from "../../images-dir/logo-medias";
import paiments from "../../images-dir/logo-paiements";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className={`w-[95%]  mx-auto h-[50rem] bg-[rgba(221,221,221,0.1)]  rounded-3xl border-[rgba(0,0,0,0.2)] border mb-10  mt-4 grid grid-cols-1 grid-rows-4 p-5 gap-y-1  
                    tablet:grid-cols-2 tablet:grid-rows-2 tablet:h-[30rem]  
                    desktopM:grid-cols-4 desktopM:h-[13rem]
                    desktopL:grid-cols-4 desktopL:h-[12.5rem]
      `}
    >
      <div className={`row-span-1   flex flex-col p-5 gap-3`}>
        <div className="title-area relative">
          <h2 className="text-[1.7rem] 
                            desktopM:text-[1.35rem]
          ">Who are we ? </h2>

          <span
            class="absolute -bottom-[0.1rem] left-0 w-[5.2rem] h-[0.12rem] bg-black 
                                
                                

                                
                                "
          ></span>
        </div>
        <div className="sections-list-area flex flex-col w-auto ">
          <ul className="flex flex-col justify-between text-[1.2rem] desktopM:text-[1.1rem]">
            <Link href={`/`}>Who are we?</Link>
            <Link href={`/`}>Our Services</Link>
            <Link href={`/`}>Contact Us</Link>
          </ul>
        </div>
      </div>
      <div className={`row-span-1   flex flex-col p-5 gap-3`}>
        <div className="title-area relative">
          <h2 className="text-[1.7rem]                              desktopM:text-[1.35rem]
">Informations </h2>
          <span
            class="absolute -bottom-[0.1rem] left-0 w-[5.2rem] h-[0.12rem] bg-black 
                                
                                

                                
                                "
          ></span>
        </div>
        <div className="sections-list-area flex flex-col w-auto ">
          <ul className="flex flex-col justify-between text-[1.2rem] desktopM:text-[1.1rem]">
            <Link href={`/`}>Site map</Link>
            <Link href={`/`}>Terms of sale</Link>
            <Link href={`/`}>Manage your cookies</Link>
          </ul>
        </div>
      </div>
      <div className={`row-span-1   flex flex-col p-5 gap-3`}>
        <div className="title-area relative">
          <h2 className="text-[1.7rem]
                                      desktopM:text-[1.35rem]

          ">Social Media </h2>
          <span
            class="absolute -bottom-[0.1rem] left-0 w-[5.2rem] h-[0.12rem] bg-black 
                                
                                

                                
                                "
          ></span>
        </div>
        <div className="sections-list-area flex flex-col w-full ">
          <ul className="grid grid-cols-2 grid-rows-2 w-[30%]  text-[1.2rem] gap-4 desktopM:mt-2  desktopL:-gap-y-4 ">
            {medias.map((logo, id) => {
              return (
                <Link
                  key={logo.id}
                  href={`/`}
                  className="col-span-1 w-[2.5rem] h-[2.2rem]  rounded-lg flex  
                        desktopM:w-[2.2rem] desktopM:h-[1.5rem]
                                            desktopL:h-[1.8rem]
                  "
                >
                  <Image
                    alt={logo.name}
                    src={logo.src}
                    className="object-contain"
                  />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={`row-span-1   flex flex-col p-5 gap-3`}>
        <div className="title-area relative">
          <h2 className="text-[1.7rem]                             desktopM:text-[1.35rem]
">Accepted Payments </h2>
          <span
            class="absolute -bottom-[0.1rem] left-0 w-[5.2rem] h-[0.12rem] bg-black 
                                
                                

                                
                                "
          ></span>
        </div>
        <div className="sections-list-area flex flex-col w-full ">
          <ul className="grid grid-cols-2 grid-rows-2 w-[40%]  text-[1.2rem] gap-4 
            desktopM:mt-2
          ">
            {paiments.map((logo, id) => {
              return (
                <div key={logo.id}
                  
                  className="col-span-1 w-[2.5rem] h-[2.2rem]  rounded-lg flex
                  
                  desktopM:w-[2rem] desktopM:h-[1.5rem]
                  "
                >
                  <Image
                    alt={logo.name}
                    src={logo.src}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
