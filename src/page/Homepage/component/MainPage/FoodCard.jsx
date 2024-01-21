import React from 'react'
import { items } from '../../../../data/db'


const FoodCard = () => {
  
  return (
    <div className="">
        <div className="">
            <p>Choose Dishes</p>
            <div className="">

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