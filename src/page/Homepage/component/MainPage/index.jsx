import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import FoodCard from './FoodCard';


const MainPage = () => {
  return (
    <div className='flex flex-col w-[833px] text-white p-10 '>
        <div className="flex flex-col gap-[24px] ">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className='text-[28px] font-bold '>Adedokun Femi</h2>
                    <h6 className='font-light font-[16px]'>Tuesday, 10 Jan 2024</h6>
                </div>
                <div className="searchbar flex items-center border-[#393C49] gap-2 rounded-lg p-6 h-[30px] bg-[#2D303E] ">       
                    <AiOutlineSearch className='w-[20px] bg-[#2D303E] h-[20px] ' />
                    <input className='border-0 outline-0 bg-[#2D303E] text-sm font-normal' type="text" placeholder='Search for food, coffe, etc..' />
                </div>
            </div>
            <div className="flex flex-start gap-[32px]">
                <p className='font-semibold text-[#EA7C69] text-[14px]'>Hot Dishes</p>
                <p className='font-semibold text-[14px]'>Cold Dishes</p>
                <p className='font-semibold text-[14px]'>Soup</p>
                <p className='font-semibold text-[14px]'>Grill</p>
                <p className='font-semibold text-[14px]'>Appetizer</p>
                <p className='font-semibold text-[14px]'>Desert</p>
            </div>
            <div>
                <FoodCard />
            </div>
        </div>
    </div>
  )
}  

export default MainPage