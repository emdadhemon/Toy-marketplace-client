import React from 'react';
import logo from "../../assets/logo.png"
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" footer bg-zinc-800 p-10  text-white">
            <div className='footer justify-between w-[80%] mx-auto'>
                <div>
                    <img className='w-40' src={logo} alt="" />
                    <p className="">Kid Industries Ltd.<br />Providing reliable toys since 1992</p>
                    <p className="flex items-center"> <FaMapMarkerAlt className='mr-2'></FaMapMarkerAlt> 41/25, Block-C, Road-1, Chanmia Housing</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;