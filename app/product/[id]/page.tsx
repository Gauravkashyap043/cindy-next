"use client";
import { Tabs, TabContent } from "@/src/components/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import upload from "../../../assets/images/upload.png";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const SingleProduct: React.FC = ({ params }: any) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const getData = async () => {
    await axios
      .get<Product>(
        `https://strange-retina-377105.el.r.appspot.com/v1/serp-api/products/${params.id}`
      )
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const [selectedImage, setSelectedImage] = useState<any>(
    product?.dump?.product_results?.media[0]
  );
  useEffect(() => {
    setSelectedImage(product?.dump?.product_results?.media[0]);
  }, [product]);

  const handleImageClick = (imageSrc: any, index: number) => {
    setSelectedImage(imageSrc);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    if (product && product.dump && product.dump.product_results) {
      const newIndex = selectedIndex - 1;
      if (newIndex >= 0) {
        setSelectedImage(product.dump.product_results.media[newIndex]);
        setSelectedIndex(newIndex);
      }
    }
  };

  const handleNext = () => {
    if (product && product.dump && product.dump.product_results) {
      const newIndex = selectedIndex + 1;
      if (newIndex < product.dump.product_results.media.length) {
        setSelectedImage(product.dump.product_results.media[newIndex]);
        setSelectedIndex(newIndex);
      }
    }
  };

  return (
    <>
      {product ? (
        <div className="m-auto  main-container">
          <div className="pdp-breadcrumb mt-[11px] flex gap-1 mb-[49px] text-gray-500">
            <Link href={"/"}>
              <p className="hover:text-blue-500 cursor-pointer">Home</p>
            </Link>
            <p>{">"}</p>
            <p>Product Details</p>
          </div>
          <div className="pdp-container w-full flex justify-between mt-3 bg-white py-[2rem] px-[1.2rem] rounded-lg">
            <div className="relative w-[46%] ">
              <div className="pdp-img-cont flex gap-4 sticky top-2">
                <div
                  className="small-img-cont w-[94px] h-[425px] overflow-auto pr-1
            "
                >
                  <div className="small-img-div flex flex-col h-full">
                    {product.dump.product_results.media.map(
                      (imageSrc: any, i: number) => {
                        const isSelected = i === selectedIndex;
                        return (
                          <>
                            <div
                              className={`small-img w-full h-[94px] mb-[17px] rounded cursor-pointer border ${
                                isSelected ? " border-2 border-blue-500" : ""
                              }`}
                              key={i}
                            >
                              <img
                                src={imageSrc.link}
                                alt="product img"
                                onClick={() => handleImageClick(imageSrc, i)}
                                className="h-full w-full"
                              />
                            </div>
                          </>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className="carousel-points-div hidden">
                  <div className="carousel-points">
                    {product.dump.product_results.media.map(
                      (_: any, i: any) => (
                        <div
                          className={`point ${
                            i === selectedIndex
                              ? "active-point ease-out duration-300"
                              : ""
                          }`}
                          key={i}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="pdp-selected-img w-[424px] h-[425px] border rounded-lg relative">
                  <Image
                    src={upload}
                    alt=""
                    className="absolute h-[29px] w-[29px] left-[15px] top-[11px] cursor-pointer"
                    onClick={() => alert("click on product card")}
                  />
                  <div className="pdp-favourite absolute h-[35px] w-[35px] rounded-full right-[15px] top-[11px] cursor-pointer flex justify-center items-center shadow-xl">
                    <FaHeart color="red" size={18} className="" />
                  </div>
                  <div
                    className="pdp-prev w-[30px] h-[28px] justify-center items-center rounded-r-lg border bg-[#00000025] hidden"
                    onClick={handlePrevious}
                  >
                    <div className="w-full h-full flex justify-center items-center">
                      <BsArrowLeft color="white" className="font-bold" />
                    </div>
                  </div>
                  <div
                    className="pdp-next w-[30px] h-[28px] justify-center items-center rounded-l-lg border bg-[#00000025] hidden"
                    onClick={handleNext}
                  >
                    <div className="w-full h-full flex justify-center items-center">
                      <BsArrowRight color="white" className="font-bold" />
                    </div>
                  </div>
                  {selectedImage && (
                    <img
                      src={selectedImage.link}
                      alt="main product img"
                      className="w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-[53%] px-2">
              <div className="pdp-mobile-favourite hidden w-full">
                <div className="flex justify-end items-center gap-2 w-full mb-1 mt-[-1%]">
                  <FaHeart color="red" size={15} className="" />
                  <p className="text-[#456EFF]">Favorite</p>
                </div>
              </div>
              <p className="pdp-product-name font-[700] text-[22px]">
                {product?.title}
              </p>
              <p className="pdp-special-price mt-[26px] md:mt-[5px] text-green-600 font-[500] text-[14px]">
                Special price
              </p>
              <div className="flex gap-3 items-center">
                <p className="pdp-price font-[500] text-[28px]">
                  {product.prices[0]}
                </p>
                <Link
                  href={product?.dump.sellers_results?.online_sellers[0].link}
                  target="_blank"
                >
                  <div className="font-bold cursor-pointer bg-green-600 text-white rounded-full border px-3 py-1 pb-2 border-green-500 flex justify-center items-center">
                    {
                      product?.dump.sellers_results?.online_sellers[0].name.split(
                        "-"
                      )[0]
                    }
                  </div>
                </Link>
              </div>
              <div className="flex text-[10px] items-center gap-1 mt-[10px]">
                <div className="bg-green-600 text-white w-[34px] h-[17px]  flex justify-center items-center rounded ">
                  <span>{product.rating}</span>
                  <span>⭐</span>
                </div>
                <p>Rating</p>
              </div>
              <h4 className="my-3">Available On</h4>
              {product?.dump.sellers_results?.online_sellers.map((items, i) => {
                return (
                  <div className="mt-3" key={i}>
                    <div className="other-affiliate w-full flex justify-between items-center bg-[#f9f9f9] pr-3 rounded-full shadow-md mt-3">
                      <div className="min-w-[150px]">
                        <div className="affiliate-logo px-3 font-bold h-[42px] rounded-full border flex justify-center items-center">
                          {items.name.split("-")[0]}
                        </div>
                      </div>
                      <div className="colorful-dots h-[42px] flex justify-center gap-2 items-center">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#FF2E2E]"></div>
                        <div className="w-[18px] h-[18px] rounded-full bg-[#1AC8FF]"></div>
                        <div className="w-[18px] h-[18px] rounded-full bg-[#FF1A95]"></div>
                      </div>
                      <p className="pdp-price font-[500] text-[28px] text-green-600">
                        {items.base_price}
                      </p>
                      <Link href={items.link}>
                        <button className="bg-[#0039F0] w-[75px] h-[26.5px] text-white text-[14px] font-[500] rounded-full">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}

              <div>
                <Tabs>
                  <TabContent label="Product Details">
                    <div className="w-full mt-1 p-2 ">
                      <p className="text-[13px] font-bold mb-6">
                        About this item
                      </p>
                      {product.description && (
                        <div className="font-bold">{product.description}</div>
                      )}
                      <ul className="pdp-product-details list-disc ml-5 border-transparent">
                        {product.highlights.length
                          ? product.highlights.map((items, i) => {
                              return <li key={i}>{items}</li>;
                            })
                          : ""}
                      </ul>
                    </div>
                  </TabContent>
                  <TabContent label="Specification">
                    <div className="w-[95%] mt-1 py-2 min-h-[300px] border border-transparent"></div>
                  </TabContent>
                  <TabContent label="Reviews">
                    {product.dump?.reviews_results?.reviews.map((items, i) => {
                      return (
                        <div className="w-[95%] mt-1 py-2 mb-2" key={i}>
                          <div>
                            <div className="flex items-center gap-1">
                              <div className="bg-green-600 text-white w-[34px] h-[17px]  flex justify-center items-center rounded text-[12px] font-[500] p-1">
                                <span>{items.rating}</span>
                                <span>⭐</span>
                              </div>
                              <p>Rating</p>
                            </div>
                            <p className="mt-[10px] text-[13px] font-bold">
                              {items.source}
                            </p>
                            <div className="">
                              <div className="flex gap-3 text-[12px] text-gray-500">
                                <span>{items.date}</span>
                              </div>
                              <div className="flex justify-between text-[12px] mt-2">
                                {items.content}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabContent>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] border mt-5 flex justify-center items-center">
            <h3>Product Recommendation section</h3>
          </div>
        </div>
      ) : (
        "Loading------"
      )}
    </>
  );
};

export default SingleProduct;
