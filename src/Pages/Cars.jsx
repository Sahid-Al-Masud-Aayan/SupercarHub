import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { carsSpecs } from '../Slices/CarsSlice';

const Cars = () => {

    const [data, dataChanger] = useState ([])
    const navigator = useNavigate()
    const dispatcher = useDispatch()

    
    useEffect(()=>{    
    axios.get('https://api.jsonbin.io/v3/b/66b529c8acd3cb34a871f889')
    .then((info)=>dataChanger(info.data.record))
    .catch((fault)=>console.log(fault))},[])


   const specPage = (inventory)=>{
        navigator('/specs')
        dispatcher(carsSpecs(inventory))
    }
    const buyPage = (inventory)=>{
        navigator('/buy')
        dispatcher(carsSpecs(inventory))
    }
  return (
    <>
      <div className=" min-h-screen bg-[#172138]">
        <h2 className=' text-3xl font-bold text-slate-300 p-5 text-center'>Our Collection</h2>
    <div className="flex gap-5 flex-wrap justify-center">
      {
          data.map((cars,n)=>(
            <div key={n} className="w-[440px] h-[630px] bg-[#ffffff] shadow-lg rounded-lg overflow-hidden p-3 mb-3 mt-5">
            <img
        className="w-full h-[230px] object-cover object-center"
        src={cars.image_url}
        alt={cars.model}
        />
      <div className="p-6">
        <p className=" mt-2 text-center font-bold text-3xl">{cars.model}</p>
        <div className="flex items-center mt-4">
        </div>
        <ul className="mt-4 space-y-2 ">
          <li className=' font-medium text-lg text-[#474747]'> <span className=' font-bold text-black'>Horsepower: </span>{cars.horsepower} hp</li>
          <li className=' font-medium text-lg text-[#474747]'><span className=' font-bold text-black'>Torque: </span>{cars.torque} lb-ft</li>
          <li className=' font-medium text-lg text-[#484848]'><span className=' font-bold text-black'>Engine: </span>{cars.engine_size}</li>
        </ul>
        <h3 className="text-4xl text-center font-extrabold text-[#ff8f1f]">$ {cars.price}</h3>
        <button onClick={()=>specPage(cars)} className=" flex justify-center items-center gap-1 mt-4 text-[21px] w-full bg-red-700 font-semibold text-white h-[50px] rounded-lg hover:text-black hover:bg-red-800 transition duration-300">
          <MdOutlineLibraryBooks/>Details
        </button>
        <button onClick={()=>buyPage(cars)} className=" flex justify-center items-center gap-1 mt-4 text-[21px] w-full bg-blue-800 font-semibold text-white h-[50px] rounded-lg hover:text-black hover:bg-blue-900 transition duration-300">
          <TiShoppingCart/>Purchase
        </button>
      </div>
    </div>
        ))
      }
  </div>


      </div>
    </>
  )
}

export default Cars
