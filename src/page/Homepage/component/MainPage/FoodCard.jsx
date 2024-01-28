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
        <div className="flex flex-wrap">

          {items.map((item) => (
              <div className="bg-white p-0 m-0 text-center" key={item.id}>
                  <img className='m-auto' src={item.image} alt="" />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p>{item.available}</p>
              </div>

          ))}
        </div>
    </div>
  )
}

export default FoodCard