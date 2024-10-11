import React, { useState } from 'react';
import axios from 'axios';
import image from "../Images/landing page.png";
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ContactSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            alert('Message sent successfully!');
        } catch (error) {
            alert('Failed to send message. Please try again.');
        }
    };
    

    return (
        <div>
            <div className=' bg-green-800'>
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mx-5 p-4">
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a className=" text-white text-3xl font-bold ease-in-out no-underline">Craftify</a>
                            <div className="-mr-2 flex items-center md:hidden">
                                <button
                                    type="button"
                                    id="main-menu"
                                    aria-label="Main menu"
                                    aria-haspopup="true"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                    onClick={toggleMenu}
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`md:flex md:space-x-10 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                        <a
                            href="/"
                            className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline"
                        >
                            Home
                        </a>

                        <Link to="/shop" className=' no-underline'>
                            <a className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">
                                Shop
                            </a>
                        </Link>
                        <Link to="/about" className=' no-underline'>
                            <a
                                className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline"
                            >
                                About us
                            </a>
                        </Link>
                        <a
                            href="https://docs.pingping.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline"
                        >
                            Blog
                        </a>
                    </div>
                    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                        <span className="inline-flex">
                            <Link to="/">
                                <a
                                    className="inline-flex items-center px-4 py-1 border border-transparent rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline"
                                >
                                    Back
                                </a>
                            </Link>
                        </span>
                        <span className="inline-flex rounded-md shadow ml-2">
                            <a
                                href="/login"
                                className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline"
                            >
                                Login
                            </a>
                        </span>
                    </div>
                </nav>

                {/* hero section */}
                <div className="hero">
                    <div className="container p-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-5">
                                <div className="intro-excerpt text-white pt-5">
                                    <h1>Contact Us <span className="d-block"></span></h1>
                                    <p className="mb-4">Ancient art represents a timeless and captivating journey into the cultural heritage and artistic expressions of ancient civilizations.</p>
                                    <p>
                                        <a href="/shop" className="inline-flex items-center m-1 px-3 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:border-yellow-700 transition duration-150 ease-in-out no-underline">Shop Now</a>
                                        <a href="/about" className="inline-flex items-center m-1 mx-2 px-4 py-1 border border-transparent rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline">Explore</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-img-wrap">
                                    <img src={image} className="img-fluid w-96" alt="Hero" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section py-12">
                <div className="container mx-auto">

                    <div className="block">
                        <div className="flex justify-center">

                            <div className="md:w-8/12 lg:w-8/12 pb-4">

                                <div className="flex flex-wrap mb-5">
                                    <div className="lg:w-4/12 px-2">
                                        <div className="service no-shadow flex items-center link horizontal active" data-aos="fade-left" data-aos-delay="0">
                                            <div className="service-icon text-yellow-500 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="50%" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                            </div>
                                            <div className="service-contents">
                                                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-4/12 px-2">
                                        <div className="service no-shadow flex items-center link horizontal active" data-aos="fade-left" data-aos-delay="0">
                                            <div className="service-icon text-yellow-500 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="50%" fill="currentColor" className="bi bi-envelope-fill m-2 mb-2" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                </svg>
                                            </div>
                                            <div className="service-contents">
                                                <p>info@yourdomain.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-4/12 px-2">
                                        <div className="service no-shadow flex items-center link horizontal active" data-aos="fade-left" data-aos-delay="0">
                                            <div className="service-icon text-yellow-500 mb-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18%" height="" fill="currentColor" className="mx-5" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                            </div>
                                            <div className="service-contents">
                                                <p>+1 294 3925 3939</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-1/2 px-2 mb-4">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="fname">First name</label>
                                                <input
                                                    type="text"
                                                    className="form-control w-full p-2 border border-gray-300 rounded"
                                                    id="fname"
                                                    value={formData.fname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-2 mb-4">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="lname">Last name</label>
                                                <input
                                                    type="text"
                                                    className="form-control w-full p-2 border border-gray-300 rounded"
                                                    id="lname"
                                                    value={formData.lname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="text-black" htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control w-full p-2 border border-gray-300 rounded"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group mb-5">
                                        <label className="text-black" htmlFor="message">Message</label>
                                        <textarea
                                            className="form-control w-full p-2 border border-gray-300 rounded"
                                            id="message"
                                            cols="30"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-300">Send Message</button>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactSection;
