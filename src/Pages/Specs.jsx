import React from 'react'
import { useSelector } from 'react-redux'

const Specs = () => {
    const major = useSelector((state=>(state.counter.value)))
  return (
    <>
              <div className=" w-full h-[550px] bg-[#081d4f] p-10">
            <div className=" flex justify-between items-center">
                <img className=' w-[750px] h-[450px]' src={major.image_url} alt={major.model}/>
                <div className=" flex flex-col justify-center items-center">
                    <h1 className=' text-5xl font-extrabold mb-10 text-white ml-10 text-center'> {major.color} {major.model}</h1>
                <ul className=' text-3xl font-medium text-center'>
                    <li className=' font-bold text-[#999]'>Production year: <span className=' font-normal text-white'>{major.model_year}</span></li>
                    <li className=' font-bold text-[#999]'>Number of seats: <span className=' font-normal text-white'>{major.seats}</span></li>
                    <li className=' font-bold text-[#999]'>Drivetrain: <span className=' font-normal text-white'>{major.wheel_drive}</span></li>
                    
                </ul>
                <h2 className='mt-14 text-5xl font-extrabold text-[#c23f3f] text-center'>$ {major.price}</h2>
            </div>
                </div>
        </div>
        <div className="w-full  h-[800px] bg-[#111827]">
            <h1 className=' text-center text-5xl font-medium text-[#a0f9ff] mb-28 pt-10'>Specs</h1>
            <h2 className=' text-2xl font-bold  bg-[#FDFCFB] p-2 '>Model- <span className=' font-medium text-[#8c8c8c]'>{major.model}</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#a00000] p-2'>Horsepower- <span className=' font-medium text-[#ffffff]'>{major.horsepower} hp</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#FDFCFB] p-2'>Torque- <span className=' font-medium text-[#8c8c8c]'>{major.torque} lb-ft</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#a00000] p-2'>Engine- <span className=' font-medium text-[#ffffff]'>{major.engine_size} hp</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#FDFCFB] p-2'>Drivetrain- <span className=' font-medium text-[#8c8c8c]'>{major.wheel_drive}</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#a00000] p-2'>Color- <span className=' font-medium text-[#ffffff]'>{major.color}</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#FDFCFB] p-2'>Seats- <span className=' font-medium text-[#8c8c8c]'>{major.seats}</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#a00000] p-2'>Manufacture year- <span className=' font-medium text-[#ffffff]'>{major.model_year}</span></h2>
            <h2 className=' text-2xl font-bold  bg-[#FDFCFB] p-2'>Chassis code- <span className=' font-medium text-[#8c8c8c]'>{major.chassis_code}</span></h2>
            
        </div>
    </>
  )
}

export default Specs
