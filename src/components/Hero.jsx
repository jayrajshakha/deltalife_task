import React from 'react'

import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'


const Hero = () => {
  return (
    <div className='bg-[#8CC63F] w-[1440px] h-[633px] z-10 flex px-9 ' >
       <div className='w-1/2 flex justify-center items-center'>
       <div className=' h-[371px] px-4 mt-[-10px] ' >
         <h1 className=' px-5 text-white text-[3rem] font-medium mb-2 ' >Hemp & Modern <br />Lifestyle Products</h1>
         <p className='text-white text-[20px] px-5 mt-5' >Delta life hamp is a premium suplier to consumer of cbd <br /> and hemp product in the us we ofer the variety of the <br /> best brand and product lines to over incedible clients</p>
         <button className='bg-white text-black p-6 px-5 mt-8 ml-5 w-52 font-bold'>Shop Now</button>
       </div>
       </div>
       <div className='w-[715px] h-[740px] -rotate-12 flex justify-center mt-4  items-center'>
        <div className='flex' >
            <img className=' w-[300px] h-[400px] overflow-hidden' src={img1} alt="" />
            <img className=' w-[200px] h-[500px] overflow-hidden z-0' src={img2} alt="" />
            <img className=' w-[300px] h-[500px] overflow-hidden' src={img3} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Hero