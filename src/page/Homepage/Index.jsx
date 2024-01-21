import React from 'react'
import MainPage from './component/MainPage/index.jsx'
import Order from './component/Order.jsx'

const Homepage = () => {
  return (
    <div className='flex'>
      <MainPage />
      <Order />
    </div>
  )
}

export default Homepage