import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCardData = () => {
    const toydetail = useLoaderData();
    const { photourl, toyname, sellername, selleremail, price, ratings, quantity, details } = toydetail;
    console.log(toydetail)
    return (
        <div className='w-[80%] mx-auto my-6'>
            <h1 className='text-3xl font-bold text-center my-10'>Single card Details</h1>
            <div className="card  lg:card-side grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 border border-x-teal-50  bg-base-100 shadow shadow-slate-500">

                <figure><img className='h-full' src={photourl} alt="Album" /></figure>
                <div className="p-6 h-full">
                    <h2 className="card-title text-2xl">{toyname}</h2>
                    <p className='text-sm my-4'>{details}</p>
                    <p className='text-sm'><strong>Price :</strong> {price}</p>
                    <p className='text-sm mt-2'><strong>Available Quantity :</strong> {quantity}</p>
                    <div className=' mt-10'>
                        <h1 className='card-title mb-2'>Seller Information:</h1>
                        <h1 className='text-sm mb-2'>Name : {sellername}</h1>
                        <h1 className='text-sm mb-2'>Email : {selleremail}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardData;