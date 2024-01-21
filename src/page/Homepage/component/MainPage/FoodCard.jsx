import React from 'react'
import { items } from '../../../../data/db'
import {FaChevronDown} from "react-icons/fa"


const FoodCard = () => {
  
  return (
    <div className="">
        <div className="flex items-center">
            <p>Choose Dishes</p>
            <div className="flex items-center rounded-lg p-2 bg-[#1F1D2B]">
              <FaChevronDown />
              <p>Dine</p>
            </div>
        </div>
        {items.map((item) => (
            <div className="" key={item.id}>

                <li>{item.title}</li>
                <img src={item.image} alt="" />
            </div>

        ))}
    </div>
  )
}

export default FoodCard