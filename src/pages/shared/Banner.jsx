import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import { Link } from 'react-router-dom';
import banner from "../../assets/banner.jpg"

import Typewritter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='mt-2'>

            <Carousel className='text-center w-full ' showThumbs={false} emulateTouch>
                <div className='relative'>
                    <img src={first} className='object-cover object-center h-96 ' />
                    <div className="absolute flex justify-center items-center h-full top-0 bg-gradient-to-r from-[#3f3f3f] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white text-left w-3/4'>
                            <h1 className='font-bold text-5xl text-white mb-4 '>
                                <Typewritter options={
                                    {
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        strings: "Welcome To KIDPALACE"
                                    }
                                }>

                                </Typewritter>
                            </h1>
                            <p className='mb-6 w-3/4'>Welcome to our online Toy Palace, your virtual gateway to a world of excitement and imagination! We are thrilled to offer you a delightful assortment of toys that will ignite your imagination and bring joy to your doorstep.</p>
                            <div>
                                <button className="btn bg-[#fcbd02] border-none text-[#333333] hover:bg-yellow-600 hover:text-white  mr-5 w-[20%]">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={second} className='object-cover object-center h-96' />
                    <div className="absolute flex justify-center items-center h-full top-0 bg-gradient-to-r from-[#3f3f3f] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white text-left w-3/4'>
                            <h1 className='font-bold text-5xl text-white mb-4 '>
                                <Typewritter options={
                                    {
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        strings: "Welcome To KIDPALACE"
                                    }
                                }>

                                </Typewritter>
                            </h1>
                            <p className='mb-6 w-3/4'>Welcome to our online Toy Palace, your virtual gateway to a world of excitement and imagination! We are thrilled to offer you a delightful assortment of toys that will ignite your imagination and bring joy to your doorstep.</p>
                            <div>
                                <button className="btn bg-[#fcbd02] border-none text-[#333333] hover:bg-yellow-600 hover:text-white  mr-5 w-[20%]">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>



        </div>
    );
};

export default Banner;