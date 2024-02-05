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
        <div className="flex flex-col p-6 gap-3">
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
            <div className="flex flex-col">
                <label htmlFor="">Cardholder Name</label>
                <input type="text" placeholder='Adedokun Femi' />
            </div>
        </div>
    </div>
  )
}

export default Credit