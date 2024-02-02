import React from 'react'
import { items } from '../../../data/db'

const Order = () => {
  return (
    <div className='flex p-[24px] text-white flex-col gap-4 w-[410px] bg-[#1F1D2B] '>
      <div className="flex flex-col gap-6">
        <h1 className='font-bold text-lg'>Orders #34562</h1>
        <div className="flex gap-4">
          <p className='rounded-md bg-[#EA7C69] p-2 text-sm'>Dine in</p>
          <p className='rounded-md border-[#393C49] border-[1px] text-[#EA7C69]  p-2 text-[12px]'>To Go</p>
          <p className='rounded-md border-[#393C49] border-[1px] text-[#EA7C69]  p-2 text-[12px]'>Delivery</p>
        </div>
        <div className="flex justify-between gap-5">
          <p className='basis-1/2'>Item</p>
          <p >Qty</p>
          <p>Price</p>
        </div>
      </div>
      <div className="py-4">
        <div className="">
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
    </div>
  )
}

export default Order