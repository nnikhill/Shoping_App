import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ThankYou = () => {
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
 <Link to="/about" className=' no-underline'> <a

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
       Contact Us
    </a>
  </span>
</div>
</nav>
</div>

{/* Hero Section */}
<div className="bg-green-800 text-white py-16">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="md:w-1/2">
  <h1 className="text-4xl font-bold">Your Cart</h1>
</div>
<div className="md:w-1/2">
  {/* Add any other content here if needed */}
</div>
</div>
</div>

    <div className="untree_co-section">
      <div className="container mx-auto">
        <div className="flex justify-center items-center pt-5">
          <div className="text-center">
            <span className="text-6xl text-primary mb-5 inline-block">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-cart-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </span>
            <h2 className="text-4xl font-bold text-black">Thank you!</h2>
            <p className="text-lg mb-5">Your order was successfully completed.</p>
            <p>
              <a href="/shop" className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline">
                Back to shop
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default ThankYou;
