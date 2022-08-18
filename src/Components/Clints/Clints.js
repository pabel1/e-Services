import React from 'react'


import ClinsImg1 from '../../Assests/images/Aven.png';
import ClinsImg2 from '../../Assests/images/Amara.png';
import ClinsImg3 from '../../Assests/images/Circle.png';
import ClinsImg4 from '../../Assests/images/Kyan.png';
import ClinsImg5 from '../../Assests/images/Treva.png';
const Clints = () => {
  return (
            <div className='clins__sec text-[#0052CC] font-semibold text-3xl text-center py-10'>
                <h1 className='my-10 mb-10'>5,000+ high-impact teams</h1>
                <div className="teams-img flex items-center justify-center mt-12 my-10">
                    <img className="mr-12 w-[120px]" src={ClinsImg1} alt="" />
                    <img className="mx-12 w-[120px]" src={ClinsImg2} alt="" />
                    <img className="mx-12 w-[120px]" src={ClinsImg3} alt="" />
                    <img className="mx-12 w-[120px]" src={ClinsImg4} alt="" />
                    <img className="ml-12 w-[120px]" src={ClinsImg5} alt="" />
                </div>
            </div>
        );
    };

export default Clints