"use client";
import { pillButtonData } from "@/utils/data";
import React, { useEffect, useRef, useState } from "react";

const Page: React.FC = () => {
  const [pillActive, setPillActive] = useState([pillButtonData[0].id]);
  const divRef = useRef<HTMLDivElement>(null);

  

  return (
    <div className="overflow-auto">
      <div className="h-[48px] min-w-[1465px] border w-full flex justify-between text-[16px] mb-[50px] text-[#222222] cursor-pointer overflow-hidden">
        {pillButtonData.map((items: any) => {
          return (
            <div
              className={`pills-btn w-[182px] h-full rounded-full border flex justify-center items-center ${
                pillActive == items.id
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } `}
              // className="pills-btn w-[182px] h-full rounded-full border flex justify-center items-center bg-white"
              key={items.id}
              onClick={() => {
                setPillActive(items.id);
              }}
            >
              {items.name}
            </div>
          );
        })}
      </div>
      <div className=" w-[200px] border truncate">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nisi
        error dolorem molestiae suscipit. Sit quae suscipit impedit iure et
        architecto totam optio tenetur porro debitis labore, fugiat, quos earum.
      </div>
      <div className="text-center">
        <button className="w-[150px] h-[50px] bg-black text-white rounded hover:bg-gray-400 hover:text-black"
        onClick={() => alert("click")}
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Page;
