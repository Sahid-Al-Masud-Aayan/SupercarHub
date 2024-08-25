import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";

const Order = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-500">
      <h1 className=' text-5xl font-extrabold mb-10 text-white ml-10 text-center'>Thanks for purchasing from us.</h1>
      <Link className=' w-[290px] h-[70px] bg-blue-900  text-gray-300 font-bold text-xl flex justify-center items-center gap-1 rounded-2xl' to='/cars'>See more of our collections<FaArrowCircleRight /></Link>
      </div>
    </>
  )
}

export default Order
