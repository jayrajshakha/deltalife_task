import React from 'react'
import img from '../assets/img/imgg.png'

const Hero2 = () => {
  return ( 
    <div className='w-[1400px] h-[739px] flex justify-center items-center'>
    <div className='w-[1067px] h-[448px] flex gap-14'>
    <div className='border-[35px] border-[#8CC63F] h-[400px] w-[400px] rounded-[45%] relative'>
         <img className='w-[316px] h-[448px] absolute top-[-60px] ' src={img} alt="" />
      </div>
      <div className='flex w-[35rem]' >
          <div>
          <h1 className=' text-5xl p-3 my-2 font-bold'>
          Delta Life's Mixed Fruit <br />Delta 9 Gummies
          </h1>
          <p className='text-xl p-3 my-2 font-light '>
          We’re huge fans of this new gummy and think it was <br />well worth the wait! 25mg per gummy, made in the <br /> USA. Mixed fruit flavor.
          </p>
          <button className='p-3 bg-[#8CC63F] text-white font-bold text-xl  ml-3'> See More</button>
          </div>
      </div>
    </div>

  </div>
  )
}

export default Hero2