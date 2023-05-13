"use client";
import React, { useRef, useState } from "react";
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
// import { cardFavItems, categoryItems } from "@/utils/data";
import FavouriteCard from "@/src/components/FavouriteCard/FavouriteCard";
import ProductCard from "@/src/components/ProductCard/ProductCard";
import { TabContent, Tabs } from "@/src/components/HomeTabs/Tabs";
import { pillButtonData } from "@/utils/data";
import { GetStaticProps } from "next";
import useSWR from "swr";
import axios from "axios";
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export default function HomePage() {
  const [pillActive, setPillActive] = useState<number>(pillButtonData[0].id);
  const [pillCategory, setPillCategory] = useState<string>("");
  const { data, error } = useSWR<Product[]>(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;

  const filteredProducts = data.filter((product: Product) => {
    // Check if the pill button is active and the product category matches
    if (pillActive == 1 || pillCategory === "All") {
      return true; // Show all products
    } else {
      return product.category === pillCategory;
    }
  });

  return (
    <div className={` m-auto border main-container`}>
      {/* <div className="order_div w-[90%] flex justify-center items-center gap-14 mt-[2.1rem] border border-black m-auto">
        <div className="border">
          <p className="order_text text-[13px] font-[600] text-[#3F3F3F] leading-[14px]">
            <span className="text-green-600">Free fast delivery</span> on order
            over $20
          </p>
        </div>
        <div>
          <div className="border border-red-500">
            <p className="order_text text-[13px] font-[600] text-[#3F3F3F] leading-[14px]">
              <span className="text-red-600">Same day dispatch</span> weekdays
              by 6:30pm
            </p>
          </div>
        </div>
        <div>
          <div className="border border-green-500">
            <p className="order_text text-[13px]  font-[600] text-[#3F3F3F] leading-[14px]">
              <span className="text-black">Members earn loyalty point</span> on
              every products
            </p>
          </div>
        </div>
      </div> */}
      {/* <div
        className="w-full  flex
       justify-between h-[250px] mt-[1.2rem]"
      >
        <div className="h-full w-[49.5%] rounded ">
          <Image src={electronics} alt="img" className="w-full h-full" />
        </div>
        <div className="h-full w-[49.5%] rounded ">
          <Image src={sale} alt="img" className="w-full h-full" />
        </div>
      </div> */}

      {/* <div className="w-full flex justify-between h-[120px] mt-[1%]">
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
      </div> */}

      <ShopBy name="Shop from " colorName="Favourite" />
      {/* <div className="w-full ">
        <HorizontalScrollList data={categoryItems} />
      </div> */}

      {/* <ShopBy name="FAVORITE PRODUCTS" /> */}
      {/* <HorizontalScrollList data={cardFavItems} /> */}
      <div className="w-full">
        <HorizontalScrollList data={data} />
      </div>

      <Tabs>
        <TabContent label="Explore Our" colorLabel="Collection">
          <div>
            <div className="overflow-auto w-full tab-cont mb-[50px]">
              <div className="h-[48px] pill-btn-div min-w-[1465px] w-full flex justify-between text-[16px]  text-[#222222] cursor-pointer overflow-hidden">
                {pillButtonData.map((items: any) => {
                  return (
                    <div
                      className={`pills-btn transition ease-in-out w-[170px] h-full rounded-full border flex justify-center items-center ${
                        pillActive == items.id
                          ? "bg-[#008ECC] text-white"
                          : "bg-white text-black"
                      } `}
                      key={items.id}
                      onClick={() => {
                        setPillActive(items.id), setPillCategory(items.name);
                      }}
                    >
                      {items.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="product-card-div">
              {filteredProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </TabContent>
        <TabContent label="Explore our" colorLabel="Giftable">
          <div className="product-card-div min-h-[500px]">
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </TabContent>
        <TabContent label="Explore Our Desi" colorLabel="Collection">
          <div className="product-card-div min-h-[500px]">
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </TabContent>
      </Tabs>

      <div className="w-full border  h-[136px] mt-[30px]">
        <p className="text-[#868686] text-center">
          You have viewed 72 of 1000 products
        </p>
        <div className="w-full">
          <button className="h-[60px] bg-white text-[#575757] w-full mt-[50px]">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
