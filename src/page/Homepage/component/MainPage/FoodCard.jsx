import React from 'react'
import { items } from '../../../../data/db'
import {FaChevronDown} from "react-icons/fa"


const FoodCard = () => {
  
  return (
    <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
            <p className='text-xl'>Choose Dishes</p>
            <div className="flex  items-center gap-2.5 text-sm rounded-lg p-3.5 bg-[#1F1D2B]">
              <FaChevronDown />
              <p>Dine</p>
            </div>
        </div>
        <div className="flex flex-wrap  gap-[28px]">

          {items.map((item) => (
              <div className=" bg-[#1F1D2B] rounded-xl w-[230px] h-[260px]" key={item.id}>
                  <img className='m-auto mt-2 rounded-full' src={item.image} alt="" />
                <div className="bg-transparent text-center m-auto pt-4  w-[144px] text-[14px]">

                  <p className='bg-inherit'>{item.title}</p>
                  <p className='bg-inherit font-thin '>{item.price}</p>
                  <p className='bg-inherit font-extralight text-[12px]'>{item.available}</p>
                </div>
              </div>

          ))}
        </div>
    </div>
  )
}

export default FoodCard