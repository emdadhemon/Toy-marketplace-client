import React from 'react';

const ContactUs = () => {
    return (
        <div className='text-center py-8 bg-[#147970] mb-2'>
            <h1 className='text-4xl font-bold py-8 text-white'>Contact Us</h1>
            <div className='border inline-block w-3/4 p-8'>
                <input className='w-3/4 rounded-xl py-3 mb-2 ps-2' type="Text" placeholder='Your Name' /> <br />
                <input className='w-3/4 rounded-xl py-3 mb-3 ps-2' type="Email" placeholder='Your Email' /> <br />
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-3/4 mb-2 " ></textarea> <br />
                <input className='w-3/4 rounded-xl btn hover:text-white hover:bg-yellow-600  bg-[#fcbd02] border-none text-[#333333]' type="submit" value="Leave Message" />
            </div>
        </div>
    );
};

export default ContactUs;