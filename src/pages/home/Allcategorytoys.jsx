import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Allcategorytoys = () => {

    const handleViewdetails =() => {
        if(!user){
            toast("You have to log in first to view details")
        }
    }


    const toys = useLoaderData()
    console.log(toys)
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>All {toys[0].category} Toys</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 w-[85%] mx-auto my-11' >
                {
                    toys?.map(toy => <div>
                        <div className="card h-80 bg-base-100 shadow-xl image-full">
                            <figure><img className='h-full w-full object-cover' src={toy?.photourl} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-white text-xl font-bold">{toy?.toyname}</h2>
                                <p className='text-white text-sm'>Price : ${toy?.price}</p>
                                <Link onClick={handleViewdetails} to={`/singledetails/${toy?._id}`} className='btn  hover:text-white hover:bg-yellow-600  bg-[#fcbd02]  text-[#333333] border-none'>View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Allcategorytoys;