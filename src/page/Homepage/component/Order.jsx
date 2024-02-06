import React from 'react'
import { items } from '../../../data/db'
import {FaTrash} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Order = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/payment')
  }



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
      <div className="Scrollbar py-4 h-[460px] overflow-auto scrollbar-hidden">
      {items.map((item) => (
              <div className="flex flex-col gap-2">
          
                <div className="flex items-center gap-10 " key={item.id}>
                    <img className=' w-[40px] rounded-full' src={item.image} alt="" />
                    <div className="flex  items-center text-start flex-col w-[110px]">
                      <p className='text-[12px]'>{item.title}</p>
                      <p className='text-[10px] font-thin '>{item.price}</p>
                    </div>
                    <p className='flex-1 text-center rounded-md py-3 bg-[#393C49]'>2</p>
                    <p className='text-[13px]'>$ 4.58</p>
                    
                </div>
              
                <div className="flex items-center gap-8 mb-4">
                  <input className='h-[40px] rounded-md bg-[#393C49] flex-1 text-[12px] pl-4' type="text" placeholder='Order Note...' />
                  <div className='items-center justify-center text-center rounded-md border-[#EA7C69] border-[2px] p-3'>
                    <FaTrash className='text-[#EA7C69]'  />
                  </div>
                  
                </div>
              </div> 
        ))}
      </div>
      <div className="flex gap-4 flex-col">
        <div className="flex justify-between">
          <p className='font-thin text-[12px]'>Discount</p>
          <p >$0</p>
        </div>
        <div className="flex justify-between">
          <p className='font-thin text-[12px]'>Subtotal</p>
          <p>$21.03</p>
        </div>
      </div>
      
      <button onClick={handleButtonClick} className='bg-[#EA7C69] p-3 text-[14px] mt-3 rounded-md'>Continue to Payment</button>
    </div>
  )
}

export default Order