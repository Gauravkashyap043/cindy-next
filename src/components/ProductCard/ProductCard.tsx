'use client'
import React, { useEffect, useRef, useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import printer from "../../../assets/images/printer.png";
import Image from "next/image";
import upload from "../../../assets/images/upload.png";
// import { BsUpload } from "react-icons/bs";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [addFavorite,setAddFavorite] = useState(false)             
  return (
    <div className="product-card-container border border-[#CDD8DF]  relative bg-white rounded">
      <Image
        src={upload}
        alt=""
        className="absolute h-[29px] w-[29px] right-[15px] top-[11px] cursor-pointer"
        onClick={() => alert("click on product card")}
      />
      <div className="product-card-img  m-auto" onClick={() => alert("clicked on product image")}>
        <img src={product.image} alt="" className="h-full w-full" />
      </div>
      <div className="w-[94%] m-auto  mt-[10px]">
        <div className="price-cont w-full h-[22px] flex justify-between items-center text-[16px] font-[500] text-[#388E3C]">
          <div className="flex justify-center items-center gap-2">
            <p>${product.price}</p>
            <div className="border rounded-full px-2 h-[14px] text-[10px] flex justify-center items-center cursor-pointer">
              ebay
            </div>
          </div>
          <p className="text-[10px] rating-star">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="w-[96%]">
          <p className="product-name truncate text-[15px] text-[#3E4042]">
            {product.title}
          </p>
        </div>
      </div>
      <div className="favorite-cont flex items-center w-[74px] justify-between m-auto">
      {addFavorite ? <FaHeart color="red" size={15} className="" onClick={() => setAddFavorite(!addFavorite)}/> : <FaRegHeart color="" size={15} className="" onClick={() => setAddFavorite(!addFavorite)}/>}

        <p className="text-[#456EFF] text-[13px]">Favourite</p>
      </div>
    </div>
  );
};

export default ProductCard;
