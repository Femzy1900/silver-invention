import React from 'react'
import {FaCreditCard, FaPaypal, FaWallet} from "react-icons/fa"

const Credit = () => {
  return (
    <div className=''>
        <div className="flex items-center mt-10 justify-between p-4 border-b-2 border-[#252836]">
            <div className="flex gap-2   flex-col">
                <p className='text-[24px] font-semibold'>Payment</p>
                <p className='text-[14px] font-thin'> payment method available</p>
            </div>
            
        </div>
        <div className="flex flex-col p-6 gap-4">
            <h1>Payment Method</h1>
            <div className="flex gap-3 ">
                <div className=" flex flex-col justify-center items-center border rounded-lg py-2 px-4 text-center bg-[#252836] gap-1 ">
                    <FaCreditCard size={20}/>
                    <p className='text-[12px] font-thin'>Credit Card</p>
                </div>
                <div className="  flex flex-col justify-center items-center border-2 rounded-lg py-2 px-7 text-center border-[#252836] gap-1 ">
                    <FaPaypal />
                    <p className='text-[12px] font-thin'>Paypal</p>
                </div>
                <div className="  flex flex-col justify-center items-center border-2 rounded-lg py-2 px-7 text-center border-[#252836] gap-1 ">
                    <FaWallet />
                    <p className='text-[12px] font-thin'>Cash</p>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className='font-thin text-[14px]'>Cardholder Name</p>
                <input className='font-thin rounded-md bg-[#393C49] flex-1 text-[13px] py-3 pl-4' type="text" placeholder='Adedokun Femi' />
            </div>
            <div className="flex flex-col gap-1">
                <p className='font-thin text-[14px]'>Card Number</p>
                <input className='font-thin rounded-md bg-[#393C49] flex-1 text-[13px] py-3 pl-4' type="text" placeholder='2354 9045 2453 8956' />
            </div>
            <div className="flex border-b-2 gap-4 border-[#252836] pb-4">
                <div className="flex basis-1/2 flex-col gap-1">
                    <p className='font-thin text-[14px]'>Expiration Date</p>
                    <input className='font-thin rounded-md bg-[#393C49] flex-1 text-[13px] py-3 pl-4' type="text" placeholder='02/2024' />
                </div>
                <div className="flex basis-1/2 flex-col gap-1">
                    <p className='font-thin text-[14px]'>CVV</p>
                    <input className='font-bold rounded-md bg-[#393C49] flex-1 text-[13px] py-3 pl-4' type="text" placeholder='* * *' />
                </div>
            </div>
            <div className="flex  gap-4">
                <div className="flex basis-1/2 flex-col gap-1">
                    <p className='font-thin text-[14px]'>Order Type</p>
                    <select name='Dine' className='bg-[#393C49] py-3 pl-4 font-thin rounded-md text-[13px]'>
                        <option value="Dine">Dine In</option>
                        <option value="Book">Book</option>
                    </select>
                </div>
                <div className="flex basis-1/2 flex-col gap-1">
                    <p className='font-thin text-[14px]'>Table no.</p>
                    <input className='font-thin rounded-md bg-[#393C49] flex-1 text-[13px] py-3 px-4' type="text" placeholder='140' />
                </div>
            </div> 
            <div className="flex gap-3 pt-[100px]">
                <button  className='basis-1/2 border-2 border-[#EA7C69] p-3 text-[14px] mt-3 rounded-md'>Cancel</button>
                <button  className='bg-[#EA7C69] basis-1/2 p-3 text-[14px] mt-3 rounded-md'>Confirm Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Credit