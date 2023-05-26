import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import UndateToys from './UpdateToys';
import { Link } from 'react-router-dom';
import { FaEdit, FaRemoveFormat, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useTitle from '../../Title/Title';

const MyToys = () => {

    useTitle("My toys")
    const { user } = useContext(AuthContext)

    const [toys, setToys] = useState(null)

    useEffect(() => {
        fetch(`https://toy-marketplace-server-ruddy.vercel.app/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }, [user]);

    const handleAscending = () => {
        fetch(`https://toy-marketplace-server-ruddy.vercel.app/ascendingbyprice/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }
    const handleDescending = () => {
        fetch(`https://toy-marketplace-server-ruddy.vercel.app/descendingbyprice/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-ruddy.vercel.app/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(cof => cof._id !== _id);
                            setToys(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className="my-8">
                <h1 className="text-center text-2xl my-4 font-bold p-4 ">All My toys</h1>
                <div className='flex justify-center mb-2'>
                    <button onClick={handleAscending} className='btn mr-2'>price ascending</button>
                    <button onClick={handleDescending} className='btn'>price Descending</button>
                </div>
                <div>
                    {
                        toys?.map(toy =>
                            <div key={toy?._id} className='w-[60%] border-zinc-900 mx-auto flex justify-between items-center h-full border mb-2 p-4 gap-4'>
                                <div className='flex items-center w-[35%] gap-2'>
                                    <img src={toy?.photourl} className='h-20 w-20 rounded object-cover' alt="" />
                                    <div className='text-sm'>{toy?.toyname}</div>
                                </div>
                                <div>
                                    <h1 className='text-sm'>Price : ${toy?.price}</h1>
                                    <h1 className='text-sm'>Quantity : {toy?.quantity}</h1>
                                </div>
                                <div className='f'>
                                    <Link to={`/updatetoy/${toy?._id}`}><button to={`/singledetails/${toy?._id}`} className='btn mr-2'><FaEdit></FaEdit></button></Link>
                                    <button onClick={() => handleDelete(toy?._id)} className='btn btn-error'><FaTrash></FaTrash></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;