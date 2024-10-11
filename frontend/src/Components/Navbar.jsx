import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Chooseus from "../Components/Chooseus"
import Helpsection from "../Components/Helpsection"
import Product from "../Components/Product"
import Testimonial from "../Components/Testimonial"
import BlogSection from "../Components/BlogSection"
import Footer from "../Components/Footer"
import image from "../Images/landing page.png"
import image1 from "../Images/cross.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { userInfo, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <div className=' bg-green-800'>
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mx-5 p-4">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" className=" text-white text-3xl font-bold ease-in-out no-underline">Craftify</Link>
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
            <Link to="/" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">Home</Link>
            <Link to="/shop" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">Shop</Link>
            <Link to="/about" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">About us</Link>
            <Link to="/blog" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">Blog</Link>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            {userInfo ? (
              <>
                <span className="inline-flex">
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-1 border border-transparent  rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline"
                  >
                    Logout
                  </button>
                </span>
                <span className="inline-flex rounded-md shadow ml-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline"
                  >
                    Contact us
                  </Link>
                </span>
              </>
            ) : (
              <>
                <span className="inline-flex">
                  <Link
                    to="/login"
                    className="inline-flex items-center px-4 py-1 border border-transparent  rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline"
                  >
                    Login
                  </Link>
                </span>
                <span className="inline-flex rounded-md shadow ml-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline"
                  >
                    Signup
                  </Link>
                </span>
              </>
            )}
          </div>
        </nav>
        <div>
        <div className="hero">
          <div className="container p-5">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt text-white pt-5">
                  <h1>Unveiling Timeless Masterpieces <span className="d-block"></span></h1>
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
      </div>
        <div className="product-section py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">

            {/* Start Column 1 */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-5 mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-4">Crafted with excellent Artist.</h2>
              <p className="mb-4">The art of ancient civilizations such as Egypt, Mesopotamia, Greece, Rome, and China reflects a rich tapestry of artistic styles, techniques, and themes.</p>
              <p><a href="/shop" className="inline-flex items-center px-3 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:border-yellow-700 transition duration-150 ease-in-out no-underline">Explore</a></p>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
              <a className="product-item block relative ease-in-out no-underline" href="/cart">
                <img src="https://i.pinimg.com/1200x/48/b2/81/48b28125899c1e45c876fc425e7fada4.jpg" className="w-full h-80 object-cover mb-4 rounded" alt="Madhubani painting" />
                <h3 className="text-lg font-semibold mb-2 text-yellow-500  ">Madhubani painting</h3>
                <strong className="text-xl font-bold text-yellow-500">$50.00</strong>
                <span className="icon-cross absolute top-4 right-4">
                  <img src={image1} className="w-4 h-4" alt="Remove" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
              <a className="product-item block relative ease-in-out no-underline" href="/cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrE4xKkwgN3V0xUCYfQnTOcV0TAKrQvIItk-4qG84GA&s" className="w-full h-80 object-cover mb-4 rounded" alt="Terracotta arts" />
                <h3 className="text-lg font-semibold mb-2 text-yellow-500">Terracotta arts</h3>
                <strong className="text-xl font-bold text-yellow-500">$78.00</strong>
                <span className="icon-cross absolute top-4 right-4">
                  <img src={image1} className="w-4 h-4" alt="Remove" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
              <a className="product-item block relative ease-in-out no-underline" href="/cart">
                <img src="https://i.pinimg.com/originals/c5/00/9c/c5009ca79859edd61d9548082d4dfd9a.jpg" className="w-full h-80 object-cover mb-4 rounded" alt="Chikankari Embroidery" />
                <h3 className="text-lg font-semibold mb-2 text-yellow-500">Chikankari Embroidery</h3>
                <strong className="text-xl font-bold text-yellow-500">$43.00</strong>
                <span className="icon-cross absolute top-4 right-4">
                  <img src={image1} className="w-4 h-4" alt="Remove" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}

          </div>
        
        </div>
      </div>
      <div><Chooseus /></div>
      <div><Helpsection /></div>
      <div><Product /></div>
      <div><Testimonial /></div>
      <div><BlogSection /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Navbar;
