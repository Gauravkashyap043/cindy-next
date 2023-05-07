
import React from "react";
import first from "../assets/images/1.png";
import second from "../assets/images/2.png";
import third from "../assets/images/3.png";
import forth from "../assets/images/4.png";
import electronics from "../assets/images/electronics.png";
import sale from "../assets/images/sale.png";
import styleImg from "../assets/images/style.png";
import summerSale from "../assets/images/summerSale.png";
import gear from "../assets/images/gear.png";
import Image from "next/image";
import ShopBy from "../src/components/ShopBy/ShopBy";
import styles from "../src/styles/home.module.scss";
import HorizontalScrollList from "@/src/components/HorizontalScrollList/HorizontalScrollList";
import { cardFavItems, categoryItems } from "@/utils/data";
import FavouriteCard from "@/src/components/FavouriteCard/FavouriteCard";
import ProductCard from "@/src/components/ProductCard/ProductCard";

const HomePage: React.FC = () => {
 
  return (
    <div
      className={` m-auto border main-container`}
    >
      <div className="w-[90%] flex justify-center items-center gap-14 mt-[2.1rem]">
        <div>
          <p className="text-[13px] font-[600] text-[#3F3F3F] leading-[14px]">
            <span className="text-green-600">Free fast delivery</span> on order
            over $20 
          </p>
        </div>
        <div>
          <div>
            <p className="text-[13px] font-[600] text-[#3F3F3F] leading-[14px]">
              <span className="text-red-600">Same day dispatch</span> weekdays
              by 6:30pm
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-[13px] font-[600] text-[#3F3F3F] leading-[14px]">
              <span className="text-black">Members earn loyalty point</span> on
              every products
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-row min-[753px]:flex-col
       justify-between h-[250px] mt-[1.2rem]">
        <div className="h-full w-[49.5%] rounded ">
          <Image src={electronics} alt="img" className="w-full h-full" />
        </div>
        <div className="h-full w-[49.5%] rounded ">
          <Image src={sale} alt="img" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full flex justify-between h-[120px] mt-[1%]">
        <div className="h-full w-[49.5%] rounded flex justify-between">
          <div className="h-full w-[49%] rounded">
            <Image src={first} alt="img" className="w-full h-full" />
          </div>
          <div className="h-full w-[49%] rounded">
            <Image src={second} alt="img" className="w-full h-full" />
          </div>
        </div>
        <div className="h-full w-[49.5%] rounded flex justify-between">
          <div className="h-full w-[49%] rounded">
            <Image src={third} alt="img" className="w-full h-full" />
          </div>
          <div className="h-full w-[49%] rounded">
            <Image src={forth} alt="img" className="w-full h-full" />
          </div>
        </div>
      </div>

      <ShopBy name="SHOP BY CATEGORY" />
      <div className="w-full ">
        <HorizontalScrollList data={categoryItems} />
      </div>

      <ShopBy name="FAVORITE PRODUCTS" />
      {/* <HorizontalScrollList data={cardFavItems} /> */}
      <div className="w-full">
        <HorizontalScrollList data={cardFavItems} />
      </div>

      <ShopBy name="ALL PRODUCTS" />
      <div className="product-card-div grid grid-cols-4 place-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full border h-[143px]">
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
