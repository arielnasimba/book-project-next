import React, { useEffect } from "react";
import { BookOpenIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { decrementQtyAdmin, incrementQtyAdmin, removeFromCartAdmin } from "../../redux/slices/usersManagementSlice";

export default function CartCard({ datas }) {
  const libraryGenres = useSelector((state) => state.library.categories);
  const foundBook = 0;
  const price = (datas.rating * 2.4).toFixed(2);

  const dispatch = useDispatch();
  function handleItemDelete(cartId){
      dispatch(removeFromCartAdmin(cartId))
  }
  function handleQtyIncrement(cartId){
      dispatch(incrementQtyAdmin (cartId))
  }
  function handleQtyDecrement(cartId){
      dispatch(decrementQtyAdmin(cartId))
  }
  return (
    <div
      className={`categories-card w-[19.8rem] h-[5.7rem]  rounded-3xl flex  
                      justify-between
                     tablet:w-[41.3rem] tablet:h-[12rem]  desktopM:w-[45rem] desktopL:w-[33rem] desktopxl:w-[32.5rem] 
    `}>
      <div className="left-area w-4/12 h-full flex pl-3
                       tablet: tablet:w-[45%] ">

                        <div className="img-area hidden tablet:w-[7rem] tablet:h-[8rem] tablet:my-auto tablet:mr-2 tablet:flex tablet:">
                        <img src={datas.image_url} alt="" srcset="" className="rounded-lg" />
                        </div>
        <div className="title-area_ text-center w-full h-auto m-auto  tablet: ">
            
          <h3 className=" text-[0.8rem] tablet:text-[1rem]  ">{datas.title}</h3>

        </div>
      </div>

      <div className="middle-area w-3/12 h-full  flex 
                    tablet: tablet:w-[12.5%]  
      ">
        <div className="qty-area w-full h-[2rem]  m-auto flex justify-between items-center cursor-pointer">
          <MinusIcon onClick={() => handleQtyDecrement(datas.id)} className="w-[1.4rem] h-[1.4rem]" />

          <span> {datas.qty} </span>
          <PlusIcon onClick={() => handleQtyIncrement(datas.id)} className="w-[1.4rem] h-[1.4rem] cursor-pointer" />
        </div>
      </div>

      <div className="top-area w-4/12 h-full  flex items-center justify-center font-semibold ">
        <p>{datas && price} € </p>
        <p>{}</p>
      </div>
    </div>
  );
}
