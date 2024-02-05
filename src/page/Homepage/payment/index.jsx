import React from 'react'
import MainPage from '../component/MainPage'
import { items } from '../../../data/db'
import {FaTrash} from "react-icons/fa"
import { FaArrowLeft } from 'react-icons/fa'
import Credit from './credit'


const Payment = () => {
  return (
    <div className='bg-[#252836] relative duration-700'>

        <div className="brightness-50">
          <MainPage />
        </div>
        <div className=" text-white top-0 left-[345px] h-full justify-between rounded-l-lg  flex absolute w-[900px] bg-[#1F1D2B]">
          
          <div className="border-r-2 border-[#252836] basis-1/2 p-6">
            <FaArrowLeft />
            <div className="flex items-center justify-between p-4 border-b-2 border-[#252836]">
              <div className="flex gap-2  flex-col">
                <p className='text-[24px] font-semibold'>Confirmation</p>
                <p className='text-[14px] font-thin'>Orders #34562</p>
              </div>
              <div className='bg-[#EA7C69] items-center py-1 px-3 text-center rounded-md text-3xl'>
                +
              </div>
            </div>
            <div className="Scrollbar py-4 h-[600px] overflow-auto scrollbar-hidden">
              {items.map((item) => (
                <div className="flex flex-col gap-2">
            
                  <div className="flex items-center gap-10 " key={item.id}>
                      <img className=' w-[40px] rounded-full' src={item.image} alt="" />
                      <div className="flex  items-center text-start flex-col w-[150px]">
                        <p className='text-[12px]'>{item.title}</p>
                        <p className='text-[10px] font-thin '>{item.price}</p>
                      </div>
                      <p className='flex text-center rounded-md py-3 px-5  bg-[#393C49]'>2</p>
                      <p className='text-[13px]'>$ 4.58</p>
                      
                  </div>
                
                  <div className="flex items-center gap-11 mb-4">
                    <input className='h-[40px] rounded-md bg-[#393C49] flex-1 text-[12px] pl-4' type="text" placeholder='Order Note...' />
                    <div className='items-center justify-center text-center rounded-md border-[#EA7C69] border-[2px] p-2'>
                      <FaTrash className='text-[#EA7C69]'  />
                    </div>
                    
                  </div>
                </div> 
              ))}
            </div>
            <div className="flex gap-4 flex-col border-t-2 pt-3 border-[#252836]">
              <div className="flex justify-between">
                <p className='font-thin text-[12px]'>Discount</p>
                <p >$0</p>
              </div>
              <div className="flex justify-between">
                <p className='font-thin text-[12px]'>Subtotal</p>
                <p>$21.03</p>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <Credit />
          </div>
        </div>
    </div>
  )
}

export default Payment