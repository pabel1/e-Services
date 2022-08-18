import React from 'react'
import './AboutUs.css'
import aboutDetailsImg from '../../Assests/images/sels-group.png';
import usericonImg from '../../Assests/images/profile.jpg';
import { FiMonitor } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsPerson, BsTrophy } from 'react-icons/bs';
const AboutUs = () => {
  return (
    <div className='aboutus__bg mt-20 '>
    <div className="top__section flex items-center justify-center pb-12">
        <div className='w-2/4'>
            <img className='mx-auto w-3/4' src={aboutDetailsImg} alt="" />
        </div>
        <div className='w-2/4 ml-5'>
            <p className='text-[#0052CC] font-bold'>About Us</p>
            <h1 className='w-8/12 font-extrabold tracking-wider text-3xl my-6 mb-12'>A dedicated solution for startups and enterprises</h1>
            <p className='w-9/12 text-sm mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <hr />
            <div className='flex items-center justify-start mt-12'>
                <img className=' bg-transparent w-[15%] rounded-[50%] ring-2' src={usericonImg} alt="" />
                <div className='ml-10'>
                    <p className='w-9/12 text-sm leading-6'>"Our teams that care about their product growth."</p>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="bottom-section flex items-center justify-center pt-14 pb-10 ">
        <div className="grid items-center justify-center text-center mr-12">
            <span className='mx-auto'><FiMonitor className='text-[#0052CC] text-3xl'></FiMonitor></span>
            <h1 className='my-4 text-2xl font-bold text-[#0052CC]'>10+</h1>
            <p className='text-lg'>Platforms Created</p>
        </div>
        <div className="grid items-center justify-center text-center mx-12">
            <span className='mx-auto'><HiOutlineUserGroup className='text-[#0052CC] text-3xl'></HiOutlineUserGroup></span>
            <h1 className='my-4 text-2xl font-bold text-[#0052CC]'>1559+</h1>
            <p className='text-lg'>Total Users</p>
        </div>
        <div className="grid items-center justify-center text-center mx-12">
            <span className='mx-auto'><BsPerson className='text-[#0052CC] text-3xl'></BsPerson></span>
            <h1 className='my-4 text-2xl font-bold text-[#0052CC]'>10+</h1>
            <p className='text-lg'>Total Clients</p>
        </div>
        <div className="grid items-center justify-center text-center ml-12">
            <span className='mx-auto'><BsTrophy className='text-[#0052CC] text-3xl'></BsTrophy></span>
            <h1 className='my-4 text-2xl font-bold text-[#0052CC]'>300 Days</h1>
            <p className='text-lg'>In Operations</p>
        </div>
        
    </div>
</div>
  )
}

export default AboutUs