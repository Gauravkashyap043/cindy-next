"use client";
import { Tabs, TabContent } from "@/src/components/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import { BiDotsVertical, BiLike, BiDislike } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import Image from "next/image";
import headphone1 from "../../../assets/images/headphone1.png";
import headphone2 from "../../../assets/images/headphone2.png";
import headphone3 from "../../../assets/images/headphone3.png";
import headphone4 from "../../../assets/images/headphone4.png";
import styles from "./productDetails.module.css";
import Link from "next/link";
const imageData: any = [headphone1, headphone2, headphone3, headphone4];
import upload from "../../../assets/images/upload.png";
import { FaHeart } from "react-icons/fa";
import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
const SingleProduct: React.FC = ({ params }: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { data, error } = useSWR<Product>(
    // `https://strange-retina-377105.el.r.appspot.com/v1/serp-api/products/${params}`,
    `https://strange-retina-377105.el.r.appspot.com/v1/serp-api/products/${params.id}`,
    fetcher
  );
  const [selectedImage, setSelectedImage] = useState<any>(
    data?.dump?.product_results?.media[0]
  );
  useEffect(() => {
    setSelectedImage(data?.dump?.product_results?.media[0]);
  }, [data]);

  if (error) return <p>Loading failed...</p>;
  if (!data) {
    return (
      <>
        <div className="flex justify-center items-center w-full h-screen text-center">
          <h3 className="animate-bounce text-center">
            Hold your horses! Our products are getting their fashionably late
            entrance😉...
          </h3>
        </div>
      </>
    );
  }

  const handleImageClick = (imageSrc: any, index: number) => {
    setSelectedImage(imageSrc);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = selectedIndex - 1;
    if (newIndex >= 0) {
      setSelectedImage(imageData[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = selectedIndex + 1;
    if (newIndex < imageData.length) {
      setSelectedImage(imageData[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  return (
    <>
      <div className="m-auto  main-container">
        <div className="pdp-breadcrumb mt-[11px] flex gap-1 mb-[49px] text-gray-500">
          <Link href={"/"}>
            <p className="hover:text-blue-500 cursor-pointer">Home</p>
          </Link>
          <p>{">"}</p>
          <p>Product Details</p>
        </div>
        <div className="pdp-container w-full flex justify-between mt-3 bg-white py-[2rem] px-[1.2rem] rounded-lg">
          {/* left side */}
          <div className="relative w-[46%] ">
            <div className="pdp-img-cont flex gap-4 sticky top-2">
              <div
                className="small-img-cont w-[94px] h-[425px] overflow-auto pr-1
            "
              >
                {data.dump.product_results.media.map(
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
              <div className="carousel-points-div hidden">
                <div className="carousel-points">
                  {imageData.map((_: any, i: any) => (
                    <div
                      className={`point ${
                        i === selectedIndex
                          ? "active-point ease-out duration-300"
                          : ""
                      }`}
                      key={i}
                    />
                  ))}
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
          {/* right side */}
          <div className="w-[53%] px-2">
            <div className="pdp-mobile-favourite hidden w-full">
              <div className="flex justify-end items-center gap-2 w-full mb-1 mt-[-1%]">
                <FaHeart color="red" size={15} className="" />
                <p className="text-[#456EFF]">Favorite</p>
              </div>
            </div>
            <p className="pdp-product-name font-[700] text-[22px]">
              {data?.title}
            </p>
            <p className="pdp-special-price mt-[26px] md:mt-[5px] text-green-600 font-[500] text-[14px]">
              Special price
            </p>
            <div className="flex gap-3 items-center">
              <p className="pdp-price font-[500] text-[28px]">
                {data.prices[0]}
              </p>
              <p className="text-[16px] text-[#878787]">
                <span className="line-through">$1,449</span>{" "}
                <span className="font-bold text-green-600 ml-1">66% off</span>
              </p>
              <div className="w-[79px] h-[25px] rounded-full border border-green-500 text-center">
                ebay
              </div>
            </div>
            <div className="flex text-[10px] items-center gap-1 mt-[10px]">
              <div className="bg-green-600 text-white w-[34px] h-[17px]  flex justify-center items-center rounded ">
                <span>{data.rating}</span>
                <span>⭐</span>
              </div>
              <div className="text-[#878787]">
                2,131 ratings and 186 reviews
              </div>
            </div>
            <h4 className="my-3">Available On</h4>
            <div className="mt-3">
              <div className="other-affiliate w-full flex justify-between items-center bg-[#f9f9f9] pr-3 rounded-full shadow-md mt-3">
                <div className="affiliate-logo w-[132px] h-[42px] rounded-full border flex justify-center items-center">
                  Amazon
                </div>
                <div className="colorful-dots h-[42px] flex justify-center gap-2 items-center">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#FF2E2E]"></div>
                  <div className="w-[18px] h-[18px] rounded-full bg-[#1AC8FF]"></div>
                  <div className="w-[18px] h-[18px] rounded-full bg-[#FF1A95]"></div>
                </div>
                <p className="pdp-price font-[500] text-[28px] text-green-600">
                  {data.prices}
                </p>
                <button className="bg-[#0039F0] w-[75px] h-[26.5px] text-white text-[14px] font-[500] rounded-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div>
              <Tabs>
                <TabContent label="Product Details">
                  <div className="w-full mt-1 p-2 ">
                    <p className="text-[13px] font-bold mb-6">
                      About this item
                    </p>
                    <ul className="pdp-product-details list-disc ml-5 border-transparent">
                      <li>
                        Versatile: Logitech G435 is the first headset with
                        LIGHTSPEED wireless and low latency Bluetooth
                        connectivity, providing more freedom of play on PC,
                        smartphones, Playstation gaming devices{" "}
                      </li>
                      <li>
                        Lightweight: With a lightweight construction, this
                        wireless gaming headset weighs only 5.8 oz (165 g),
                        making it comfortable to wear all day long{" "}
                      </li>
                      <li>
                        uperior voice quality: Be heard loud and clear thanks to
                        the built-in dual beamforming microphones that eliminate
                        the need for a mic arm and reduce background noise
                      </li>
                      <li>
                        Immersive sound: This cool and colorful headset delivers
                        carefully balanced, high-fidelity audio with 40 mm
                        drivers; compatibility with Dolby Atmos, Tempest 3D
                        AudioTech and Windows Sonic for a true surround sound
                        experience{" "}
                      </li>
                      <li>
                        Long battery life: No need to stop the game to recharge
                        thanks to G435s 18 hours of battery life, allowing you
                        to keep playing, talking to friends, and listening to
                        music all day
                      </li>
                    </ul>
                  </div>
                </TabContent>
                <TabContent label="Specification">
                  <div className="w-[95%] mt-1 py-2">
                    <div className="flex items-center text-[13px] mt-3 gap-10">
                      <div className="w-[150px] font-bold">
                        <p>Brand</p>
                      </div>
                      <div>
                        <p>Logitech G</p>
                      </div>
                    </div>
                    <div className="flex items-center text-[13px] mt-3 gap-10">
                      <div className="w-[150px] font-bold">
                        <p>Model name</p>
                      </div>
                      <div>
                        <p>G432</p>
                      </div>
                    </div>
                    <div className="flex items-center text-[13px] mt-3 gap-10">
                      <div className="w-[150px] font-bold">
                        <p>Color</p>
                      </div>
                      <div>
                        <p>Pale Blue</p>
                      </div>
                    </div>
                    <div className="flex items-center text-[13px] mt-3 gap-10">
                      <div className="w-[150px] font-bold">
                        <p>Headphone from factor</p>
                      </div>
                      <div>
                        <p>Over Ear</p>
                      </div>
                    </div>
                    <div className="flex items-center text-[13px] mt-3 gap-10">
                      <div className="w-[150px] font-bold">
                        <p>Connector Type</p>
                      </div>
                      <div>
                        <p>wireless</p>
                      </div>
                    </div>
                  </div>
                </TabContent>
                <TabContent label="Reviews">
                  <div className="w-[95%] mt-1 py-2 mb-2">
                    <div>
                      <div className="bg-green-600 text-white w-[34px] h-[17px]  flex justify-center items-center rounded text-[12px] font-[500] p-1">
                        <span>5</span>
                        <span>⭐</span>
                      </div>
                      <p className="mt-[10px] text-[13px] font-bold">
                        More than perfect
                      </p>
                      <div className="mt-[10px]">
                        <div className="flex gap-3 text-[12px] text-gray-500">
                          <span>John Jackson</span>
                          <span>7 Month ago</span>
                        </div>
                        <div className="flex justify-between text-[12px] text-gray-500">
                          <div className="flex items-center gap-1">
                            <BsFillCheckCircleFill />
                            Certified Buyer
                          </div>
                          <div className="flex gap-3 items-center">
                            <span className="flex items-center gap-1">
                              <BiLike />
                              29
                            </span>
                            <span className="flex items-center gap-1">
                              <BiDislike />2
                            </span>
                            <BiDotsVertical className="cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[95%] mt-1 py-2 mb-2">
                    <div>
                      <div className="bg-green-600 text-white w-[34px] h-[17px]  flex justify-center items-center rounded text-[12px] font-[500] p-1">
                        <span>5</span>
                        <span>⭐</span>
                      </div>
                      <p className="mt-[10px] text-[13px] font-bold">
                        More than perfect
                      </p>
                      <div className="mt-[10px]">
                        <div className="flex gap-3 text-[12px] text-gray-500">
                          <span>John Jackson</span>
                          <span>7 Month ago</span>
                        </div>
                        <div className="flex justify-between text-[12px] text-gray-500">
                          <div className="flex items-center gap-1">
                            <BsFillCheckCircleFill />
                            Certified Buyer
                          </div>
                          <div className="flex gap-3 items-center">
                            <span className="flex items-center gap-1">
                              <BiLike />
                              29
                            </span>
                            <span className="flex items-center gap-1">
                              <BiDislike />2
                            </span>
                            <BiDotsVertical className="cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabContent>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] border mt-5 flex justify-center items-center">
          <h3>Product Recommendation section</h3>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
