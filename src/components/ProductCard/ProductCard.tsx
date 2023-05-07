import React from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import printer from '../../../assets/images/printer.png'
import Image from "next/image";

const ProductCard: React.FC = () => {
  return (
    <div className="w-[18.2rem] h-[459px] border border-[#CDD8DF] rounded px-[15px] mt-3 product-card">
      <div className="w-full mt-[18px] flex justify-between ">
        <FaShareAlt />
        <FaHeart color="red" />
      </div>
      <div className="w-[173px] h-[185px] m-auto mt-[10px] border ">
        <Image src={printer} alt="product"/>
      </div>
      <div className="mt-[22px]  font-[700] text-[16px] leading-[20px]">
        <p>Apple iphome 14 pro max (256gb) - Deep Purple</p>
      </div>
      <div className="flex text-[10px] items-center gap-1 mt-[10px]">
        <div className="bg-green-600 text-white w-[34px] h-[17px]  flex justify-center items-center rounded ">
            <span>4.5</span><span>⭐</span>
        </div>
        <div>(2,131)</div>
      </div>
      <p className="font-[600px] text-[14px] leading-[16px] my-[15px] text-[#FF4646]">
        Available On
      </p>
      <div className="grid grid-cols-3 place-items-center">
        <div className="rounded-full cursor-pointer w-[78px] h-[24px] border mt-2"></div>
        <div className="rounded-full cursor-pointer w-[78px] h-[24px] border mt-2"></div>
        <div className="rounded-full cursor-pointer w-[78px] h-[24px] border mt-2"></div>
        <div className="rounded-full cursor-pointer w-[78px] h-[24px] border mt-2"></div>
        <div className="rounded-full cursor-pointer w-[78px] h-[24px] border mt-2"></div>
        <div className="rounded-full cursor-pointer w-[78px] h-[24px] border mt-2"></div>
      </div>
    </div>
  );
};

export default ProductCard;
