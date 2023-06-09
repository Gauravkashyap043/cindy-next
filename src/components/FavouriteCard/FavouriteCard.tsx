'use client';
import React, { useState } from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import upload from "../../../assets/images/upload.png";
interface favouriteCard {
  item: any;
}
const FavouriteCard = (props: favouriteCard) => {
  const [addFavorite,setAddFavorite] = useState(false)
  return (
    <div

    className=""
      key={props.item.id}
    >
      <div 
      className=" product-card-container border border-[#CDD8DF]  relative bg-white rounded "
      >

      <Image
        src={upload}
        alt=""
        className="absolute h-[29px] w-[29px] right-[13px] top-[11px] cursor-pointer"
        onClick={() => alert("click on share of favorite card")}
      />
      <div className="product-card-img  m-auto mt-[24px] cursor-pointer"onClick={() => alert("clicked on favrote card image ")}>
        <img src={props.item.image} alt="product" className="w-full h-full" />
      </div>
      <div className="block w-[94%] m-auto mt-[7px]">
        <div className="price-cont w-full h-[22px] flex justify-between items-center text-[16px] font-[500] text-[#388E3C]">
          <div className="flex justify-center items-center gap-2">
            <p>${props.item.price}</p>
            <div className="border rounded-full px-2 h-[14px] text-[10px] flex justify-center items-center cursor-pointer">
              ebay
            </div>
          </div>
          <p className="text-[10px] rating-star">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="w-[96%] ">
          <p className="product-name truncate  text-[15px] text-[#3E4042]">
          {props.item.title}
          </p>
        </div>
      </div>
      <div className="favorite-cont flex items-center w-[74px] justify-between m-auto gap-1">
        {addFavorite ? <FaHeart color="red" size={15} className="" onClick={() => setAddFavorite(!addFavorite)}/> : <FaRegHeart color="" size={15} className="" onClick={() => setAddFavorite(!addFavorite)}/>}
        
        <p className="text-[#456EFF] text-[13px]">Favourite</p>
      </div>
      </div>
    </div>
  );
};
export default FavouriteCard;
