"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cycle from "../../../assets/images/cycle.png";
import Image from "next/image";
import CategoryCard from "../CategoryCard/CategoryCard";
import FavouriteCard from "../FavouriteCard/FavouriteCard";
import prev from "../../../assets/images/prev.png";
import next from "../../../assets/images/next.png";

interface horizontalScrollList {
  data: any;
}

const HorizontalScrollList = (props: horizontalScrollList) => {
  const containerRef = useRef<any>(null);
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200;
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200;
    }
  };

  const renderCards = (item: any) => {
    // switch (item.type) {
    //   case "category":
    //     return <CategoryCard item={item} />;
    //   case "fav":
    //     return <FavouriteCard item={item} />;
    // }
    if (item.type === "category") {
      return <CategoryCard item={item} />;
    } else {
      return <FavouriteCard item={item} />;
    }
  };

  return (
    <div className="w-full m-auto overflow-x-hidden relative">
      {props.data && props.data.length && (
        <>
          <div
            className="horizontal-scrollist flex overflow-auto scroll-smooth"
            ref={containerRef}
          >
            <div className="w-full flex gap-3 ml-16">{props.data.map((item: any) => renderCards(item))}</div>
          </div>
          <div>
            {/* <FaChevronLeft
              className="p-4 border absolute top-[40%] cursor-pointer"
              onClick={handleScrollLeft}
              color="black"
            /> */}
            
          </div>
        </>
      )}
      <Image
              src={prev}
              alt=""
              className="prev w-[70px] h-[70px] absolute top-[40%] cursor-pointer  "
              onClick={handleScrollLeft}
            />
            <Image
              src={next}
              alt=""
              className="next w-[70px] h-[70px] absolute top-[40%] right-0 cursor-pointer"
              onClick={handleScrollRight}
            />
    </div>
  );
};

export default HorizontalScrollList;
