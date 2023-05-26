import React, { useEffect } from 'react';
import marvel from "../../assets/marvel.jpg"
import batman from "../../assets/batman.jpeg"
import dc from "../../assets/dc.jpg"
import { Link } from 'react-router-dom';
import Aos from "aos"
import 'aos/dist/aos.css'

const Gallery = () => {

    useEffect(()=>{
        Aos.init({duration:1500})
    },[])

    return (
        <div className='w-[80%] mx-auto p-4'>
            <h1 className='text-4xl font-bold text-center my-10'>Toys Gallery</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 justify-between '>
                <Link to='/category/marvel'>
                    <div className="card w-full h-80 bg-base-100 hover:shadow-xl hover:shadow-zinc-400 shadow-xl image-full"  data-aos="fade-left" >
                        <figure><img src={marvel} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white text-3xl font-bold">MARVEL</h2>
                            <p className='text-white text-sm'>Marvel Comics is an American comic book publisher and the property of The Walt Disney Company since December 31, 2009.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/category/batman">
                    <div className="card w-full h-80 hover:shadow-xl hover:shadow-zinc-400  bg-base-100 shadow-xl image-full" data-aos="fade-bottom">
                        <figure><img src={batman} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white text-3xl font-bold">BATMAN</h2>
                            <p className='text-white text-sm'>The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.</p>
                        </div>
                    </div>
                </Link>
                <Link to='/category/dccomics'>
                    <div className="card w-full hover:shadow-xl hover:shadow-zinc-400 h-80 bg-base-100 shadow-xl image-full" data-aos="fade-right">
                        <figure><img src={dc} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white text-3xl font-bold">DC COMICS</h2>
                            <p className='text-white text-sm'>DC Comics, Inc. is an American comic book publisher and the flagship unit of DC Entertainment, a subsidiary of Warner Bros. Discovery. DC Comics is one of the largest and oldest American comic book companies, with their first comic under the DC banner being published in 1937.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Gallery;