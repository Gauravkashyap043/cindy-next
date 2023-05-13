import React from 'react';
interface Props {
  name: string;
  colorName:string;
}
import { FcNext } from "react-icons/fc";
const ShopBy: React.FC<Props> = ({ name,colorName }) => {
  return (
    <div className='shopBy-cont border border-transparent border-b-gray-300 flex justify-between items-center my-[40px]'>
      <div className=" border-2 border-transparent text-[#666666] border-b-[#008ECC] flex  items-center pr-2">
       
        <p className="shopBy-heading font-[500] text-[20px]">{name}  <span className='text-[#008ECC]'>{colorName}</span></p>
      </div>
      
      <button className="text-sm text-[16px] font-[400] flex items-center ">View all <span className='text-[#008ECC]'><FcNext/></span></button>
    </div>
  );
}

export default ShopBy;
