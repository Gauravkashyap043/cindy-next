import React from 'react';
interface Props {
  name: string;
}

const ShopBy: React.FC<Props> = ({ name }) => {
  return (
    <div className={`flex items-center my-[40px]`}>
      <div className=" border rounded-full flex justify-center items-center">
        <p className="font-[500] text-[20px]">{name}</p>
      </div>
      <div className="border flex-1 "></div>
      <button className="py-[9px] px-[13px] rounded-full text-blue-800 font-bold text-sm border">View all</button>
    </div>
  );
}

export default ShopBy;
