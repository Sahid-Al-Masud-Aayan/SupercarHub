import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const major = useSelector((state=>(state.counter.value)))
    const navigator= useNavigate()

const confirmPage = (inventory)=>{
    navigator('/ordered')
}

  return (
<>
                <div className=" flex justify-between items-center bg-gray-700 p-5">
                <img className=' w-[750px] h-[450px]' src={major.image_url} alt={major.model}/>
                <div className=" flex flex-col justify-center items-center">
                    <h1 className=' text-5xl font-extrabold mb-10 text-white ml-10 text-center'> {major.color} {major.model}</h1>
                <h2 className='mt-4 text-5xl font-extrabold text-[#c23f3f] text-center'>$ {major.price}</h2>
                    <button onClick={()=>confirmPage(major)} className=' w-[250px] h-[60px] bg-[#6f0038] text-2xl rounded-full font-medium duration-100 hover:hover:scale-[1.2] hover:bg-[#ff43a1] text-white mt-10'>Buy now</button>
            </div>
                </div>
</>
  )
}

export default Buy
