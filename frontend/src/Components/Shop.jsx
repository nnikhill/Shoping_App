// Shop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import Footer from "../Components/Footer"

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from your API
        const { data } = await axios.get('http://localhost:5000/api/products');
        
        // Manually add products for demonstration purposes
        const manualProducts = [
          {
            _id: '1',
            name: 'Handmade Mug',
            image: 'https://i.pinimg.com/736x/ed/d6/fe/edd6fe04fbb1d09e362f9ec038088e6e.jpg',
            price: 15.99
          },
          {
            _id: '2',
            name: 'Handcrafted Vase',
            image: 'https://suspire.in/cdn/shop/files/hollow-vase-_sku-43624429453556_---copy_1400x.jpg?v=1698322648',
            price: 25.99
          },
          {
            _id: '3',
            name: 'Wooden Sculpture',
            image: 'https://m.media-amazon.com/images/I/71QsEktdpYS._AC_UF350,350_QL80_.jpg',
            price: 45.99
          },
          {
            _id: '4',
            name: 'Ceramic Plate',
            image: 'https://m.media-amazon.com/images/I/716l13A7VsL._AC_UF894,1000_QL80_.jpg',
            price: 10.99
          },
          {
            _id: '5',
            name: 'Coconut Arts',
            image: 'https://i.pinimg.com/236x/fb/19/89/fb1989466f89741bfd3ab907faebbd14.jpg',
            price: 30.99
          },
          {
            _id: '6',
            name: 'Teracotta Art',
            image: 'https://bongoniketan.in/cdn/shop/products/IMG_5012_300x300.jpg?v=1636536859',
            price: 20.99
          },
          {
            _id: '7',
            name: 'Bamboo Art',
            image: 'https://m.media-amazon.com/images/I/61D4yjAvC2L._AC_UF1000,1000_QL80_.jpg',
            price: 10.99
          },
          {
            _id: '8',
            name: 'Wooden Furniture',
            image: 'https://5.imimg.com/data5/TN/GW/GLADMIN-1612066/dining-table-500x500.jpg',
            price: 10.99
          }

        ];
        
        // Combine the fetched products with the manually added products
        setProducts([...data, ...manualProducts]);
      } catch (error) {
        console.error("Error fetching products:", error);
        // In case of an error, just use the manually added products
        const manualProducts = [
          {
            _id: '1',
            name: 'Handmade Mug',
            image: 'https://example.com/handmade-mug.jpg',
            price: 15.99
          },
          {
            _id: '2',
            name: 'Handcrafted Vase',
            image: 'https://example.com/handcrafted-vase.jpg',
            price: 25.99
          },
          {
            _id: '3',
            name: 'Wooden Sculpture',
            image: 'https://example.com/wooden-sculpture.jpg',
            price: 45.99
          },
          {
            _id: '4',
            name: 'Ceramic Plate',
            image: 'https://example.com/ceramic-plate.jpg',
            price: 10.99
          }
        ];
        setProducts(manualProducts);
      }
    };
    fetchProducts();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='bg-green-800'>
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
                  onClick={toggleMenu}
                >
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`md:flex md:space-x-10 ${menuOpen ? 'block' : 'hidden'} md:block`}>
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
              <Link to="/" className="inline-flex items-center px-4 py-1 border border-transparent rounded-md text-base leading-6 font-medium text-white hover:bg-yellow-500 focus:outline-none transition duration-150 ease-in-out no-underline">
                Back
              </Link>
            </span>
            <span className="inline-flex rounded-md shadow ml-2">
              <Link to="/cart" className="inline-flex items-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 focus:outline-none hover:bg-yellow-300 focus:border-yellow-700 transition duration-150 ease-in-out no-underline">
                Your Cart ({cart.length})
              </Link>
            </span>
          </div>
        </nav>
      </div>

      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">Shop Now</h1>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map(product => (
              <ProductItem key={product._id} product={product} addToCart={addToCart} />
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">No products available</div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

const ProductItem = ({ product, addToCart }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    <button onClick={() => addToCart(product)} className="block no-underline w-full text-left">
      <img src={product.image || '/path/to/default-image.jpg'} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-yellow-500">{product.name || 'Untitled'}</h3>
      <strong className="text-xl text-yellow-500">{`$${product.price.toFixed(2)}`}</strong>
    </button>
  </div>
);

export default Shop;



