import React from "react";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import iphone from "../../../assets/images/iphone.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface favouriteCard {
  item: any;
}
const FavouriteCard = (props: favouriteCard) => {
  const router = useRouter();
  return (
    <div
      className="w-[262px] h-[488px] border border-[#CDD8DF] rounded px-[15px]"
      key={props.item.id}
    >
      <div className="w-full mt-[22px] flex justify-between ">
        <FaShareAlt />
        <FaHeart color="red" />
      </div>
      <div className="w-[200px] h-[138px] m-auto mt-[10px] border ">
        <Image src={props.item.image} alt="" />
      </div>
      <div className="w-full mt-[20px]  text-right">⭐⭐⭐⭐⭐</div>
      <div
        className="mt-[10px] font-[500] text-[18px] leading-[20px] cursor-pointer border min-h-[70px]"
        onClick={() => router.push(`/product/${props.item.id}`)}
      >
        <p>{props.item.name}</p>
      </div>
      <div>
        <p className="font-[300px] text-[12px] leading-[14px] text-[#56707A] mt-[15px]">
          {props.item.itemDescription}
        </p>
      </div>
      <p className="font-[600px] text-[14px] leading-[16px] my-[15px] text-[#FF4646]">
        Available On
      </p>
      <div className="grid grid-cols-3 place-items-center gap-2 ">
        <div className="rounded-full cursor-pointer w-[66px] h-[21px] border"></div>
        <div className="rounded-full cursor-pointer w-[66px] h-[21px] border"></div>
        <div className="rounded-full cursor-pointer w-[66px] h-[21px] border"></div>
        <div className="rounded-full cursor-pointer w-[66px] h-[21px] border"></div>
        <div className="rounded-full cursor-pointer w-[66px] h-[21px] border"></div>
        <div className="rounded-full cursor-pointer w-[66px] h-[21px] border"></div>
      </div>
    </div>
  );
};
export default FavouriteCard;
