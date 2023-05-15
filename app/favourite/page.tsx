"use client";
import React, { useRef, useState } from "react";
import ProductCard from "@/src/components/ProductCard/ProductCard";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import styles from "../../src/styles/favourite.module.css";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export default function Favourite() {
  const { data, error } = useSWR<Product[]>(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className={` m-auto border main-container !p-0`}>
      <div className="py-4">
        <div className={`${styles.breadcrumb} flex h-[64px] text-[#8B96A5] gap-2 items-center border px-[19px]`}>
          <Link href={"/"}>
            <div className="hover:text-blue-500 cursor-pointer">Home</div>
          </Link>
          <div>{">"}</div>
          <div className="cursor-pointer">Favourite</div>
        </div>
        <div
          className={`${styles.favourite_filter} mt-[7px] flex justify-between items-center h-[62px] bg-white pl-[19px] rounded border border-transparent text-[16px]`}
        >
          <div className="mr-1">1211 items in your Favourite</div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                className={`${styles.input_check} cursor-pointer w-[17px] h-[17px]`}
              />
              <p>Verified only</p>
            </div>
            <div className={`${styles.select} w-[173px] h-[40px]`}>
              <select
                name=""
                id=""
                className="h-full w-full border rounded outline-none cursor-pointer"
              >
                <option value="">Featured</option>
                <option value="UnFeatured">UnFeatured</option>
              </select>
            </div>
          </div>
        </div>
        <div></div>
        <div
          className={`${styles.favourite_product_div} product-card-div w-full mt-[10px]`}
        >
          {data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
