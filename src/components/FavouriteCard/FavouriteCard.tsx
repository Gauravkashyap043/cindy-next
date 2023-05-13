'use client';
import React, { useState } from "react";
import { FaShareAlt, FaHeart,FaRegHeart } from "react-icons/fa";
import iphone from "../../../assets/images/iphone.png";
import printer from "../../../assets/images/printer.png";
import Image from "next/image";
import upload from "../../../assets/images/upload.png";
interface favouriteCard {
  item: any;
}
const FavouriteCard = (props: favouriteCard) => {
  const [addFavorite,setAddFavorite] = useState(false)
  const truncatedTitle = props.item.title.length > 15 ? props.item.title.substring(0, 15) + "..." : props.item.title;
  return (
    <div
      className=" product-card-container border border-[#CDD8DF]  relative bg-white rounded "
      key={props.item.id}
    >
      <Image
        src={upload}
        alt=""
        className="absolute h-[29px] w-[29px] right-[13px] top-[11px] cursor-pointer"
        onClick={() => alert("click on share of favorite card")}
      />
      <div className="product-card-img w-[14.5rem] h-[285px] m-auto mt-[20px]"onClick={() => alert("clicked on favrote card image ")}>
        <img src={props.item.image} alt="product" className="w-full h-full" />
      </div>
      <div className="w-[94%] m-auto h-[48px] mt-[7px]">
        <div className="price-cont w-full h-[22px] flex justify-between items-center text-[16px] font-[500] text-[#388E3C]">
          <div className="flex justify-center items-center gap-2">
            <p>${props.item.price}</p>
            <div className="border rounded-full px-2 h-[14px] text-[10px] flex justify-center items-center cursor-pointer">
              ebay
            </div>
          </div>
          <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
        </div>
        <div>
          <p className="product-name text-[15px] text-[#3E4042]">
            {truncatedTitle}
          </p>
        </div>
      </div>
      <div className="flex items-center w-[74px] justify-between m-auto gap-1">
        {addFavorite ? <FaHeart color="red" size={15} className="" onClick={() => setAddFavorite(!addFavorite)}/> : <FaRegHeart color="" size={15} className="" onClick={() => setAddFavorite(!addFavorite)}/>}
        
        <p className="text-[#456EFF] text-[13px]">Favourite</p>
      </div>
    </div>
  );
};
export default FavouriteCard;
