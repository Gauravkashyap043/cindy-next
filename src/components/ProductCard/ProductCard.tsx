"use client";
import React, { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import upload from "../../../assets/images/upload.png";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StarRating from "../starRating/StarRating";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [addFavorite, setAddFavorite] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="product-card-container border border-[#CDD8DF]  relative bg-white rounded cursor-pointer">
      <Image
        src={upload}
        alt=""
        className="absolute h-[29px] w-[29px] right-[15px] top-[11px] cursor-pointer"
        onClick={() => alert("click on product card")}
      />
      <Link href={`/product/${product.productID}`}>
        <div className="product-card-img  m-auto cursor-pointer">
          <img
            src={product.dump.product_results?.media[0].link}
            alt=""
            className="h-full w-full"
          />
        </div>
      </Link>

      <div className="w-[94%] m-auto  mt-[10px]">
        <div className="price-cont w-full h-[22px] flex justify-between items-center text-[16px] font-[500]">
          <div className="flex justify-center items-center gap-2">
            <p className="text-[#388E3C]">{product.prices[0]}</p>
            {/* <div className="border rounded-full px-2 h-[14px] text-[10px] flex justify-center items-center cursor-pointer text-[#388E3C]">
              ebay
            </div> */}
          </div>
          {/* <p className="text-[10px] rating-star">⭐⭐⭐⭐⭐</p> */}
          <div className="text-red">
            <StarRating rating={product.rating} />
          </div>
        </div>
        <div className="w-[96%]">
          <p
            className="product-name truncate text-[15px] text-[#3E4042]"
            // onClick={() => alert(`${product.id}`)}
          >
            {product.title}
          </p>
        </div>
      </div>
      <div
        className="favorite-cont flex items-center w-[74px] justify-between m-auto cursor-pointer"
        onClick={() =>
          !session
            ? router.push("/api/auth/signin")
            : setAddFavorite(!addFavorite)
        }
      >
        <>
          {addFavorite ? (
            <FaHeart color="red" size={15} className="" />
          ) : (
            <FaRegHeart color="" size={15} className="" />
          )}
        </>

        <p className="text-[#456EFF] text-[13px]">Favourite</p>
      </div>
    </div>
  );
};

export default ProductCard;
