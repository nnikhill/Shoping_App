import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import BillingForm from './Billing';
import OrderForm from './Order';

const Checkout = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/orders',
        { orderItems, totalPrice },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      navigate('/thanku');
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <>
      <div className="bg-green-800">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mx-5 p-4">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a className="text-white text-3xl font-bold ease-in-out no-underline">Craftify</a>
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
            <Link to="/" className="no-underline">
              <a className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">Home</a>
            </Link>
            <Link to="/shop" className="no-underline">
              <a className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">Shop</a>
            </Link>
            <Link to="/about" className="no-underline">
              <a className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">About us</a>
            </Link>
            <Link to="/blog" className="no-underline">
              <a className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">Blog</a>
            </Link>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex">
              <Link to="/cart">
                <a className="inline-flex items-center px-4 py-1 border border-transparent rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline">Back</a>
              </Link>
            </span>
            <span className="inline-flex rounded-md shadow ml-2">
              <Link to="/cart">
                <a className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline">Your Cart</a>
              </Link>
            </span>
          </div>
        </nav>
      </div>

      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">CheckOut</h1>
          </div>
          <div className="md:w-1/2">
            {/* Add any other content here if needed */}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-5">
          <div className="border p-4 rounded text-center bg-gray-100">
            Returning customer? <a href="/login" className="text-yellow-500 no-underline">Click here</a> to login
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full p-5 "><BillingForm setOrderItems={setOrderItems} setTotalPrice={setTotalPrice} /></div>
        <div className="w-full p-5 "><OrderForm /></div>
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400">Place Order</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
