import React from 'react'

const Form = () => {
  return (
    

            <div className='w-[1440px] h-[591px] bgpic flex justify-center items-center '>
        <div className=' w-[777px] h-[322px] flex justify-center items-center flex-col  gap-12 mt-14'>
            <div className='w-[568px] h-[90px] flex justify-center mb-4 items-center '>
               <h1 className='text-4xl font-bold text-center z-10 opacity-70' >Search and browse through all <br /> of our products.</h1>
            </div>
            <div className='w-[750px] h-[82px] flex justify-between px-4 items-center rounded p-7  bg-white '>
                <input className='border-none outline-none ml-4 p-2' type="text"  placeholder='Search All Products' />
                <button className='p-2 mr-4 w-40 h-12 bg-[#8CC63F]'>Search</button>
            </div >
            <div className='w-[777px] h-[50px] mt-9'>
                 <ul className='flex justify-evenly items-center gap-5'>
                  <li className='py-[15px] px-[15px]  text-center  border-2 borderr font-bold cl' >Delta 8</li>
                  <li className='py-[15px] px-[15px]  text-center  border-2 borderr font-bold cl'>Delta 9</li>
                  <li className='py-[15px] px-[21px]  text-center  border-2 borderr font-bold cl'>Delta 10</li>
                  <li className='py-[15px] px-[21px]  text-center  border-2 borderr font-bold cl'>Edible</li>
                  <li className='py-[15px] px-[21px]  text-center  border-2 borderr font-bold cl'>Pets</li>
                  <li className='py-[15px] px-[21px]  text-center  border-2 borderr font-bold cl'>Vapes</li>
                  <li className='py-[15px] px-[21px]  text-center  border-2 borderr font-bold cl'>Flowers</li> 
                 </ul>
            </div>
        </div>

    </div>

  )
}

export default Form