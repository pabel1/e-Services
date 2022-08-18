import React from 'react'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className=' bg-[#00193D]  p-5 grid items-center justify-center'>
    <div className=" border-b border-[#0D3166] py-10">
        
        <p className='text-white w-7/12 mx-auto text-center tracking-wider my-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
        <div className='social__group flex  items-center justify-center mb-4'>
            <span className=' m-4 text-[16px] text-[#00193D] p-3 rounded-[50%] bg-white ' ><IoLogoTwitter></IoLogoTwitter></span>
            <span className=' m-4 text-[16px] text-[#00193D] p-3 rounded-[50%] bg-white ' ><FaLinkedinIn></FaLinkedinIn></span>
            <span className=' m-4 text-[16px] text-[#00193D] p-3 rounded-[50%] bg-white '><FaFacebookF></FaFacebookF></span>
        </div>
    </div>
    <p className='text-white font-medium text-center py-10 tracking-wider text-[18px]'>&copy; All rights reserve by <span className="" style={{color:'#F60E0E'}}>me</span></p>
</footer>
  )
}

export default Footer