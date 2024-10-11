// Cart.js (renamed to CartTable.js)
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from '../CartContext';

const CartTable = () => {
  const { cart, setCart } = useCart();

  const handleRemove = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  return (
    <div>
      <div className="bg-green-800">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mx-5 p-4">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" className="text-white text-3xl font-bold ease-in-out no-underline">Craftify</Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`md:flex md:space-x-10`}>
            <Link to="/" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">
              Home
            </Link>
            <Link to="/shop" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">
              Shop
            </Link>
            <Link to="/about" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">
              About us
            </Link>
            <Link to="/blog" className="font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out no-underline">
              Blog
            </Link>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex">
              <Link to="/shop" className="inline-flex items-center px-4 py-1 border border-transparent rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline">
                Back
              </Link>
            </span>
            <span className="inline-flex rounded-md shadow ml-2">
              <Link to="/contact" className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline">
                Contact Us
              </Link>
            </span>
          </div>
        </nav>
      </div>

      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">Your Cart</h1>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto">
          <div className="overflow-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Image</th>
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item._id}>
                    <td className="py-2">
                      <img src={item.image} alt={item.name} className="h-20" />
                    </td>
                    <td className="py-2">
                      <h6 className="text-black">{item.name}</h6>
                    </td>
                    <td className="py-2">${item.price.toFixed(2)}</td>
                    <td className="py-2">
                      <div className="flex items-center">
                        <button className="border px-2">−</button>
                        <input type="text" className="text-center w-12 mx-2" value={item.qty || 1} readOnly />
                        <button className="border px-2">+</button>
                      </div>
                    </td>
                    <td className="py-2">${(item.price * (item.qty || 1)).toFixed(2)}</td>
                    <td className="py-2">
                      <button className="text-black" onClick={() => handleRemove(item._id)}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex">
            <div className="w-1/2 p-4">
              <div className="flex justify-between my-8">
                <button className="bg-yellow-500 text-white py-2 px-4">Update Cart</button>
                <Link to="/shop">
                  <button className="border border-yellow-500 py-2 px-4 text-yellow-500">Continue Shopping</button>
                </Link>
              </div>
              <div className="my-8">
                <h4 className="text-black mb-4">Coupon</h4>
                <p className="text-black mb-4">Enter your coupon code if you have one.</p>
                <div className="flex">
                  <input type="text" className="flex-grow border py-3 px-4" placeholder="Coupon Code" />
                  <button className="bg-yellow-500 text-white py-3 px-4">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-1/2 p-5">
              <div className="w-full md:w-1/2">
                <div className="border-b mb-4 pb-4">
                  <h4 className="text-black text-right mb-4">Cart Totals</h4>
                  <div className="flex justify-between mb-2">
                    <span className="text-black">Subtotal</span>
                    <strong className="text-black">${cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0).toFixed(2)}</strong>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-black">Total</span>
                    <strong className="text-black">${cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0).toFixed(2)}</strong>
                  </div>
                </div>
                <Link to="/checkout" className='no-underline'>
                  <button className="bg-yellow-500 text-white py-3 px-4 w-full">
                    Proceed To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartTable;
