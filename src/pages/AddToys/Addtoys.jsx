import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Title/Title';

const Addtoys = () => {

    useTitle("Add a toy")

    const {user} = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        fetch("https://toy-marketplace-server-ruddy.vercel.app/toys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Toy data Has been Saved',
                        confirmButtonText : "Ok"
                      })
                }
            });
    }



    return (
        <div className='text-center my-8'>
            <h1 className='font-bold text-3xl my-4'>Add A Toy</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='input border border-gray-800 w-[25%] m-2 bg-white text-black'
                    {...register("sellername")}
                    placeholder="Your Name"
                    value={user?.displayName}
                    type='text'
                    required
                />
                <input
                    className='input border border-gray-800 w-[25%] m-2 bg-white text-black'
                    {...register("selleremail")}
                    placeholder="Your Email"
                    value={user?.email}
                    type='email'
                    required
                /> <br />

                <input
                    className='input border border-gray-800 w-[25%] m-2 bg-white text-black'
                    {...register("toyname")}
                    placeholder="Toy Name"
                    type='text'
                    required
                />
                <input
                    className='input border border-gray-800 w-[25%] m-2 bg-white text-black'
                    {...register("price")}
                    placeholder="price"
                    type='number'
                    step="any"
                    required
                /> <br />
                <input
                    className='input border border-gray-800 w-[25%] m-2 bg-white text-black'
                    {...register("photourl")}
                    placeholder="Photo URL"
                    type='text'
                    required
                />
                <input
                    className='input border border-gray-800 w-[25%] m-2 bg-white text-black'
                    {...register("quantity")}
                    placeholder="Available Quantity"
                    type='number'
                    step="any"
                    required
                /> <br />

                <select className='input border border-gray-800 w-[25%] m-2 bg-white text-black' {...register("category")}>
                    <option value="marvel">Marvel</option>
                    <option value="batman">BatMan</option>
                    <option value="dccomics">DC Comics</option>
                </select>
                <select className='input border border-gray-800 w-[25%] m-2 bg-white text-black' {...register("subcategory")}>
                    <option value="spiderman">Spiderman</option>
                    <option value="Hulk">Hulk</option>
                    <option value="captainamerica">Captain America</option>
                    <option value="superman">Superman</option>
                    <option value="wonderwomen">Wonderwomen</option>
                    <option value="batman">Batman</option>
                    <option value="theflash">TheFlash</option>
                    <option value="joker">Joker</option>
                    <option value="aquaman">Aquaman</option>
                </select> <br />

                <input
                    className='input border border-gray-800 w-[15%] m-2 bg-white text-black'
                    {...register("ratings")}
                    placeholder="Ratings"
                    type='number'
                    step="any"
                    required
                />
                <input
                    className='input border border-gray-800 w-[35%] m-2 bg-white text-black'
                    {...register("details")}
                    placeholder="Write someting about your toy..."
                    type='details'
                    required
                />

                <br />


                <input className='btn btn-success border border-gray-800 w-[51%] mt-4' type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default Addtoys;