import React from 'react'

const Footer = () => {
  return (
    <div className='w-[1440px] h-[407px] bg-black flex justify-center items-center gap-5 p-6 text-white'>
       <div className=' w-full flex justify-around  items-center   flex-col gap-4'>
          <img className='w-[112px] h-[51px]  ' src="https://s3-alpha-sig.figma.com/img/02fb/a883/6c97a1c698c9815982610cfd5f18bce3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QraLXKfbZ66RUt5V0rLxEyaRSPcTPahLtaRraZ7bG2VeLWi2B2sHRuPTFf0x~xB1WP8JaSZJja069W5ECOSLEEj8KTsqYKE2yq303A8QUh4l5yM7aOWdrZUgFEQoXMXJ~3wHQXb4565omcSJLglIdMD-3VlvcRoscYY2f9UYBE5GyktEAuIOMrEy6nbTcn9LoTZRmWL5gajkuhN37UqYQ5M-l3KMDoKmV9py4yPjb2U3nFp6VxUFScUMnZh5xa5OfysBrfipxsn51Tgd4KjSnZRBNc5uTMfz-hQ~XtZjnTfw015yHXr8Op1RU4lJ58mZucEXZMv8d1NsdyCHKmoRRQ__" alt="" />
          <p className='text-gray-300 font-light'>Lorem ipsum is typically a corrupted <br /> version of 'De finibus bonorum et <br /> malorum', a 1st century BC</p>
       </div>
       <div className='flex justify-around  gap-6 w-full'>
          <div>
           <h1 className='font-bold text-xl'>Company</h1>
            <ul className='flex flex-col gap-2'>
                <li>About us</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Rent Guide</li>
                <li>Pricing</li>
                <li>Demo</li>
            </ul>
          </div>
          <div>
           <h1 className='font-bold text-xl'> Support</h1>
            <ul className='flex flex-col gap-2'>
                <li>Help Center</li>
                <li>Contact us</li>
                <li>Terms and Condition</li>
                <li>Sitemap & Feedback</li>
                <li>Pricing</li>
                <li>Demo</li>
            </ul>
          </div>
          <div>
           <h1 className='font-bold text-xl'> Media</h1>
            <ul className='flex flex-col gap-2'>
                <li>Facebook</li>
                <li>Tweeter</li>
                <li>Youtube</li>
                <li>Instagram</li>
            </ul>
          </div>
       </div>
       <div className='flex w-full justify-around items-center flex-col gap-4'>
           <div>
             <h1>Subscribe US</h1>
           </div>
           <div className='flex flex-col '>
             <input type="text" className='border-none outline-none bg-slate-800 text-white p-2' placeholder='Your Email here'/>
             <button className='bg-white text-black p-2'>Subscribe</button>
           </div>
       </div>
    </div>
  )
}

export default Footer