"use client";
import React, { useEffect, useRef, useState } from "react";
import ShopBy from "../src/components/ShopBy/ShopBy";
import HorizontalScrollList from "@/src/components/HorizontalScrollList/HorizontalScrollList";
import ProductCard from "@/src/components/ProductCard/ProductCard";
import { TabContent, Tabs } from "@/src/components/HomeTabs/Tabs";
import { pillButtonData } from "@/utils/data";
import axios from "axios";

export default function HomePage() {
  const [pillActive, setPillActive] = useState<number>(pillButtonData[0].id);
  const [pillCategory, setPillCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit: number = 50;
  const getData = () => {
    setLoading(true);
    axios
      .get<{ products: Product[] }>(
        `https://strange-retina-377105.el.r.appspot.com/v1/serp-api/products?page=${page}&limit=${limit}`
      )
      .then((res) => {
        const newData: any = res.data;
        console.log(newData);
        setData((prevProducts) => [...prevProducts, ...newData]);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // const filteredProducts = data.filter((product: any) => {
  //   if (pillActive == 1 || pillCategory === "All") {
  //     return true; // Show all products
  //   } else {
  //     return product.category === pillCategory;
  //   }
  // });

  return (
    <div className={` m-auto border main-container`}>
      <ShopBy name="Shop from " colorName="Favourite" />
      <div className="w-full">
        <HorizontalScrollList data={data} />
      </div>
      <Tabs>
        <TabContent label="Explore Our" colorLabel="Collection">
          <div>
            <div className="overflow-auto w-full tab-cont mb-[50px]">
              <div className="min-w-[1578px] overflow-hidden h-[48px] pills-btn-div w-full flex text-[16px]  text-[#222222] cursor-pointer">
                {pillButtonData.map((items: any) => {
                  return (
                    <div
                      className={`pills-btn transition ease-in-out w-[170px] h-full rounded-full border flex justify-center items-center mr-2 ${
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
              {data.map((product: Product) => {
                if (product.dump?.error) {
                  return null;
                }
                return <ProductCard key={product.id} product={product} />;
              })}
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
        {/* <p className="text-[#868686] text-center">
          You have viewed 72 of 1000 products
        </p> */}
        <div className="w-full">
          <button
            className="h-[60px] bg-white text-[#575757] w-full mt-[50px]"
            onClick={handleLoadMore}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
}
