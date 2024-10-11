import React from 'react'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Chooseus from './Chooseus'
import { useState } from 'react';
import image from "../Images/landing page.png"
import { Link } from 'react-router-dom';
import OurTeam from './OurTeam';

const About = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
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

          <Link to="/shop" className=' no-underline'><a className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline"
          >
            Shop
          </a></Link>
         <Link to="/about" className=' no-underline'><a
            
            className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline"
          >
            About us
          </a></Link> 
       <Link to="/blog" className=' no-underline'>  <a
            
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline"
          >
            Blog
          </a></Link> 
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex">
          <Link to="/"> <a
              
              className="inline-flex items-center px-4 py-1 border border-transparent  rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline"
            >
              Back
            </a></Link>
          </span>
          <span className="inline-flex rounded-md shadow ml-2">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline"
            >
              Contact us
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
                <h1>About Us <span className="d-block"></span></h1>
                <p className="mb-4">Ancient art represents a timeless and captivating journey into the cultural heritage and artistic expressions of ancient civilizations.</p>
                <p>
                  <a href="/shop" className="inline-flex items-center m-1 px-3 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:border-yellow-700 transition duration-150 ease-in-out no-underline">Shop Now</a>
                  <a href="/about" className="inline-flex items-center m-1 mx-2 px-4 py-1 border border-transparent  rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline">Explore</a>
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
        <Chooseus/>
        <OurTeam/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default About
