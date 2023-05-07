"use client";
import { Tabs, TabContent } from "@/src/components/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import { BiDotsVertical, BiLike, BiDislike } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
// import { imageData } from "@/utils/data";
import headphone1 from "../../../assets/images/headphone1.png";
import headphone2 from "../../../assets/images/headphone2.png";
import headphone3 from "../../../assets/images/headphone3.png";
import headphone4 from "../../../assets/images/headphone4.png";
// const imageData: any = [first, second, third, forth];
const imageData: any = [headphone1, headphone2, headphone3, headphone4];

const SingleProduct: React.FC = ({params} :any) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<any>(imageData[0]);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.log('Error getting geolocation:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported in this browser.');
    }
  }, []);

  const handleImageClick = (imageSrc: any) => {
    setSelectedImage(imageSrc);
  };
  return (
    <div className="w-[75%] m-auto border border-red-600 main-container">
      <div className="w-full flex justify-between">
        {/* left side */}
        <div className="relative w-[46%] ">
          <div className=" border flex justify-evenly sticky top-2">
            <div className="w-[94px]">
              {imageData.map((imageSrc: any, i: number) => {
                return (
                  <div
                    className="w-full h-[94px] mb-[17px] border rounded cursor-pointer"
                    key={i}
                  >
                    <Image
                      src={imageSrc}
                      alt="product img"
                      onClick={() => handleImageClick(imageSrc)}
                      className="h-full w-full"
                    />
                  </div>
                );
              })}

              {/* <div className="w-full h-[94px] mb-[17px] border border-green-600 rounded"></div>
              <div className="w-full h-[94px] mb-[17px] border border-green-600 rounded"></div>
              <div className="w-full h-[94px] mb-[17px] border border-green-600 rounded"></div> */}
            </div>
            <div className="w-[424px] h-[425px] border rounded-lg">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="main product img"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-[53%]  border px-2">
          <p className="font-[700] text-[22px]">
            Logitech G435 Lightspeed and Bluetooth Wireless Over Ear Gaming
            Headphones - Lightweight with Dual mics, 18h Battery, Compatible
            with Dolby Atmos, PC, PS4, PS5, Mobile - White {params.id}
          </p>
          <p>Latitude: {latitude}, Longitude: {longitude}</p>
          <p className="mt-[26px] text-green-600 font-[500] text-[14px]">
            Special price
          </p>
          <div className="flex gap-3 items-center">
            <p className="font-[500] text-[28px]">$ 49.9</p>
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
              <span>4.5</span>
              <span>⭐</span>
            </div>
            <div className="text-[#878787]">2,131 ratings and 186 reviews</div>
          </div>
          <div className="w-full flex mt-6 justify-between items-center">
            <p className="text-[13px] font-bold">Offer Available</p>
            <button className="bg-white text-blue-600 font-bold text-[12px] border py-[11px] px-[13px] rounded-full">
              View all Offer
            </button>
          </div>
          <div className="w-full flex items-center justify-between mt-2">
            <div className="w-[154px] h-[118px] px-[10px] py-[8px] border-2 rounded">
              <h4 className="">No cost EMI</h4>
              <div className="h-[55px] w-full text-[10px] leading-[18px] text-[#0F1111]">
                Upto $ 292.46 EMI interest savings on Amazon Pay ICICI…
              </div>
              <div className="w-[79px] h-[25px] rounded-full border border-green-500 mt-1 text-center">
                ebay
              </div>
            </div>
            <div className="w-[154px] h-[118px] px-[10px] py-[8px] border-2 rounded">
              <h4 className="">No cost EMI</h4>
              <div className="h-[55px] w-full text-[10px] leading-[18px] text-[#0F1111]">
                Upto $ 292.46 EMI interest savings on Amazon Pay ICICI…
              </div>
              <div className="w-[79px] h-[25px] rounded-full border border-green-500 mt-1 text-center">
                amazon
              </div>
            </div>
            <div className="w-[154px] h-[118px] px-[10px] py-[8px] border-2 rounded">
              <h4 className="">No cost EMI</h4>
              <div className="h-[55px] w-full text-[10px] leading-[18px] text-[#0F1111]">
                Upto $ 292.46 EMI interest savings on Amazon Pay ICICI…
              </div>
              <div className="w-[79px] h-[25px] rounded-full border border-green-500 mt-1 text-center">
                amazon
              </div>
            </div>
            <div className="w-[154px] h-[118px] px-[10px] py-[8px] border-2 rounded">
              <h4 className="">No cost EMI</h4>
              <div className="h-[55px] w-full text-[10px] leading-[18px]  mt-1 text-[#0F1111]">
                Upto $ 292.46 EMI interest savings on Amazon Pay ICICI…
              </div>
              <div className="w-[79px] h-[25px] rounded-full border border-green-500 text-center">
                amazon
              </div>
            </div>
          </div>

          <h4 className="my-3">Available On</h4>
          <div className="mt-3">
            <div className="w-full flex justify-between items-center bg-[#f9f9f9] pr-3 rounded-full shadow-md mt-3">
              <div className="w-[132px] h-[42px] rounded-full border flex justify-center items-center">
                Amazon
              </div>
              <div className="w-[132px] h-[42px] flex justify-center gap-2 items-center">
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF2E2E]"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-[#1AC8FF]"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF1A95]"></div>
              </div>
              <p className="font-[500] text-[28px] text-green-600">$ 49.9</p>
              <button className="bg-[#0039F0] w-[75px] h-[26.5px] text-white text-[14px] font-[500] rounded-full">
                Buy Now
              </button>
            </div>
            <div className="w-full flex justify-between items-center bg-[#f9f9f9] pr-3 rounded-full shadow-md mt-3">
              <div className="w-[132px] h-[42px] rounded-full border flex justify-center items-center">
                Amazon
              </div>
              <div className="w-[132px] h-[42px] flex justify-center gap-2 items-center">
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF2E2E]"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-[#1AC8FF]"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF1A95]"></div>
              </div>
              <p className="font-[500] text-[28px] text-green-600">$ 49.9</p>
              <button className="bg-[#0039F0] w-[75px] h-[26.5px] text-white text-[14px] font-[500] rounded-full">
                Buy Now
              </button>
            </div>
            <div className="w-full flex justify-between items-center bg-[#f9f9f9] pr-3 rounded-full shadow-md mt-3">
              <div className="w-[132px] h-[42px] rounded-full border flex justify-center items-center">
                Amazon
              </div>
              <div className="w-[132px] h-[42px] flex justify-center gap-2 items-center">
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF2E2E]"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-[#1AC8FF]"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF1A95]"></div>
              </div>
              <p className="font-[500] text-[28px] text-green-600">$ 49.9</p>
              <button className="bg-[#0039F0] w-[75px] h-[26.5px] text-white text-[14px] font-[500] rounded-full">
                Buy Now
              </button>
            </div>
          </div>
          <div>
            <Tabs>
              <TabContent label="Product Details">
                <div className="w-[95%] border mt-1 p-2">
                  <p className="text-[13px] font-bold mb-6">About this item</p>
                  <ul className="list-disc ml-5 border-transparent">
                    <li>
                      Versatile: Logitech G435 is the first headset with
                      LIGHTSPEED wireless and low latency Bluetooth
                      connectivity, providing more freedom of play on PC,
                      smartphones, Playstation gaming devices{" "}
                    </li>
                    <li>
                      Lightweight: With a lightweight construction, this
                      wireless gaming headset weighs only 5.8 oz (165 g), making
                      it comfortable to wear all day long{" "}
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
                      thanks to G435s 18 hours of battery life, allowing you to
                      keep playing, talking to friends, and listening to music
                      all day
                    </li>
                  </ul>
                </div>
              </TabContent>
              <TabContent label="Specification">
                <div className="w-[95%] border mt-1 py-2">
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
                <div className="w-[95%] border mt-1 py-2 mb-2">
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
                <div className="w-[95%] border mt-1 py-2 mb-2">
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
    </div>
  );
};

export default SingleProduct;
