import React from 'react';
import { FaCreditCard, FaGift, FaPaperPlane, FaRocketchat, FaSdCard } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='bg-zinc-800 text-white my-2'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-10 '>
                <div className='flex items-center p-10 bg-slate-700'>
                    <FaPaperPlane className='text-5xl'></FaPaperPlane><span  className='ms-2'>Free Delivery
                       <br /> On Orders Of $200+</span>
                </div>
                <div className='flex items-center  p-10 bg-slate-700 '>
                    <FaGift className='text-5xl' ></FaGift><span className='ms-2'>Free Gift Box
                       <br /> By A Gift</span>
                </div>
                <div className='flex items-center   p-10 bg-slate-700'>
                    <FaCreditCard className='text-5xl'></FaCreditCard><span className='ms-2'>COD
                       <br />Cash On Delivery</span>
                </div>
                <div className='flex items-center  p-10 bg-slate-700 '>
                    <FaRocketchat className='text-5xl'></FaRocketchat><span className='ms-2'>Free Support 24/7
                      <br />  Online 24hrs A Day</span>
                </div>
            </div>
        </div>
    );
};

export default Services;