'use client';
import { pillButtonData } from "@/utils/data";
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [pillActive, setPillActive] = useState([pillButtonData[0].id]);
  return (
    <div className="overflow-auto">
      <div className="h-[48px] min-w-[1465px] border w-full flex justify-between text-[16px] mb-[50px] text-[#222222] cursor-pointer overflow-hidden">
        {pillButtonData.map((items: any) => {
          return (
            <div
              className={`pills-btn w-[182px] h-full rounded-full border flex justify-center items-center ${pillActive == items.id ?"bg-black text-white" : "bg-white text-black" } `}
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
      {pillActive}
    </div>
  );

};

export default Page;
