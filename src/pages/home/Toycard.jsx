import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toycard = ({ toy }) => {

    const {user } = useContext(AuthContext);
    const { _id, photourl, toyname, price, ratings } = toy;


    const handleViewdetails =() => {
        if(!user){
            toast("You have to log in first to view details")
        }
    }


    return (
        <div className="card grid grid-cols-1 bg-slate-300 lg:grid-cols-2 border items-center shadow drop-shadow-md mt-4">
            <img className='lg:h-72 h-full lg:w-60 w-full object-cover lg:rounded-s-xl rounded-r-none' src={photourl} alt="Movie" />
            <div className="p-4 lg:p-0 space-y-4">
                <h2 className="card-title text-xl">{toyname}</h2>
                <p>Price : ${price}</p>
                <p>Ratings : {ratings}</p>
                <Link onClick={handleViewdetails} to={`/singledetails/${_id}`} className='btn bg-[#fcbd02] hover:bg-yellow-600 hover:text-white  border-none text-[#333333]'>View Details</Link>
            </div>
        </div>
    );
};

export default Toycard;