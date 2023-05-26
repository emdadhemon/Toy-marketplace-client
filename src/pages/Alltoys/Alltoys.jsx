import React, { useEffect, useState } from 'react';
import useTitle from '../../Title/Title';
import { Link } from 'react-router-dom';

const Alltoys = () => {

  useTitle('All Toys')

  const [toys, settoys] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch(`https://toy-marketplace-server-ruddy.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settoys(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://toy-marketplace-server-ruddy.vercel.app/searchtoysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settoys(data);
      });
  };

  const handleViewdetails =() => {
    if(!user){
        toast("You have to log in first to view details")
    }
}


  console.log(toys)
  return (
    <div className='w-[80%] mx-auto my-10'>
      <form onSubmit={handleSearch} className='mb-4'>
        <input onChange={(e) => setSearchText(e.target.value)} className='input w-[25%] border border-gray-900 bg-white text-black mr-2' type="text" name="name" placeholder='Search Your Product' id="" />
        <input className='btn ' type="submit" value="Search" />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Seller details</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            toys.map(toy => <tr key={toy?._id}>
              <th><img className='h-20 w-20 rounded object-cover' src={toy?.photourl} alt="" /></th>
              <th>{toy.toyname}</th>
              <td>{toy.sellername} <br /> {toy.selleremail}</td>
              <td>Price : $
                {toy.price} <br /> Quantity : {toy.quantity}</td>
              <td><Link onClick={handleViewdetails} to={`/singledetails/${toy?._id}`} className='btn hover:bg-yellow-600 bg-[#fcbd02] border-none text-[#333333] hover:text-white'>View Details</Link></td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default Alltoys;