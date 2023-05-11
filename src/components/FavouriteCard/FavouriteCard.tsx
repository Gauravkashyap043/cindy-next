import React from "react";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import iphone from "../../../assets/images/iphone.png";
import printer from "../../../assets/images/printer.png";
import Image from "next/image";
import upload from "../../../assets/images/upload.png";
import { useRouter } from "next/navigation";
interface favouriteCard {
  item: any;
}
const FavouriteCard = (props: favouriteCard) => {
  const truncatedTitle = props.item.title.length > 15 ? props.item.title.substring(0, 15) + "..." : props.item.title;
  return (
    <div
      className="w-[232px] h-[383px] border border-[#CDD8DF] rounded mt-2  product-card bg-white "
      key={props.item.id}
    >
      {/* <Image
        src={upload}
        alt=""
        className="absolute h-[29px] w-[29px] left-[188px] top-[11px]"
      /> */}
      <div className="w-[232px] h-[285px] m-auto border mt-[24px]">
        <img src={props.item.image} alt="product" className="w-full h-full" />
      </div>
      <div className="w-[94%] m-auto h-[48px]">
        <div className="w-full h-[22px] flex justify-between items-center text-[16px] font-[500] text-[#388E3C]">
          <div className="flex justify-center items-center gap-2">
            <p>${props.item.price}</p>
            <div className="border rounded-full px-2 h-[14px] text-[10px] flex justify-center items-center cursor-pointer">
              ebay
            </div>
          </div>
          <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
        </div>
        <div>
          <p className="text-[15px] text-[#3E4042]">
            {truncatedTitle}
          </p>
        </div>
      </div>
      <div className="flex items-center w-[74px] justify-between m-auto">
        <FaHeart color="red" size={15} className="" />
        <p className="text-[#456EFF] text-[13px]">Favourite</p>
      </div>
    </div>
  );
};
export default FavouriteCard;
