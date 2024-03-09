import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[1440px] h-48 flex flex-col px-9'>
        <div className='flex justify-center items-center'>
           <img className='w-48 h-[89px] my-5 border-b ' src="https://s3-alpha-sig.figma.com/img/02fb/a883/6c97a1c698c9815982610cfd5f18bce3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QraLXKfbZ66RUt5V0rLxEyaRSPcTPahLtaRraZ7bG2VeLWi2B2sHRuPTFf0x~xB1WP8JaSZJja069W5ECOSLEEj8KTsqYKE2yq303A8QUh4l5yM7aOWdrZUgFEQoXMXJ~3wHQXb4565omcSJLglIdMD-3VlvcRoscYY2f9UYBE5GyktEAuIOMrEy6nbTcn9LoTZRmWL5gajkuhN37UqYQ5M-l3KMDoKmV9py4yPjb2U3nFp6VxUFScUMnZh5xa5OfysBrfipxsn51Tgd4KjSnZRBNc5uTMfz-hQ~XtZjnTfw015yHXr8Op1RU4lJ58mZucEXZMv8d1NsdyCHKmoRRQ__" alt="" />
        </div>
        <div className=' hidden md:block h-[62px]  '>
            <ul className='flex justify-evenly mt-1 px-8'>
                <li>News</li>
                <li>About</li>
                <li>Contact</li>
                <li>Account</li>
                <li>Wholesell</li>
                <li>Vape</li>
                <li>THC-O</li>
                <li>HHC-O</li>
                <li>HHC</li>
                <li>Delta 8</li>
                <li>Delta 9</li>
                <li>Delta 10</li>
                <button className='px-3 h-8 bg-[#8CC63F] text-white  '>All Products</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar