// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import btn_icon from "../../images-dir/btnIcon";
import { useSelector } from "react-redux";
import CartCard from "../CartCard/CartCard";

export default function CartArea() {

  const cartContentAdmin = useSelector((state) =>  state.usersManagement.admin.basket)

  const subTotal = cartContentAdmin.reduce((acc, currentItem) => {
    return acc + (currentItem.price * currentItem.qty)
  },0);
  return (
    <div className={`w-full h-full flex flex-col  px-7 gap-6   `}>
      <Link href={`/`} className=" w-[1.2rem] h-[1.2rem] pt-[0.2rem] ">
        <button type="button ">
          <Image alt={btn_icon[0].name} src={btn_icon[0].src} />
        </button>
      </Link>
      <div className="w-full h-[80%] border-[rgba(0,0,0,0.5)] border-[0.05rem] rounded-3xl flex flex-col p-6 justify-between mx-auto 
                       desktopM:w-[80%]  desktopxl:w-[60%] 
        ">

        <div className="title-area w-[8rem] h-[2rem] font-semibold text-2xl">
            <h1>Cart Items</h1>
        </div>
        <div className="display-items-area w-full h-[25rem]   border-b border-black overflow-y-scroll grid grid-cols-1 desktopL:grid-cols-2" >


          {
            cartContentAdmin  ? 
            (
              cartContentAdmin.map((book, i) => {

                if (book.qty > 0) {
                  
                  return(
                    <CartCard datas={book} key={book.id} />
  
                  )
                }
              })
            )
            :
            (
              <p>hello</p>
            )
          }


        </div>

        <div className="total-area w-[98%] h-[2rem]  flex justify-between font-semibold  mx-auto
                            tablet:w-[45%] desktopM:w-[35%] desktopL:w-[25%] desktopxl:w-[15%] 
        ">
            <h4>Total</h4>
            <h4> {(subTotal).toFixed(2)} € </h4>
        </div>

        <button type="button" className="w-full h-[3.5rem] bg-black rounded-3xl text-white font-semibold mx-auto 
                                            tablet:w-[45%] desktopM:w-[35%] desktopL:w-[25%] desktopxl:w-[15%] 
        ">
            Checkout

        </button>
      </div>
    </div>
  );
}
