import React from 'react'

const Order = () => {
  return (
    <div className='flex p-[24px] text-white flex-col gap-2 w-[410px] bg-[#1F1D2B] '>
      <h1 className='font-bold text-lg'>Orders #34562</h1>
      <div className="flex gap-4">
        <p className='rounded-md bg-[#EA7C69] p-2 text-sm'>Dine in</p>
        <p className='rounded-md border-black p-2 text-sm'>To Go</p>
        <p>Delivery</p>
      </div>
    </div>
  )
}

export default Order