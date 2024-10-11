// App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Login from './Components/Login';
import About from './Components/About';
import ContactSection from './Components/Contact';
import Signup from './Components/Signup';
import BlogSection from './Components/BlogSection';
import CartTable from './Components/Cart';
import Checkout from './Components/Checkout';
import BillingForm from './Components/Billing';
import OrderForm from './Components/Order';
import ThankYou from './Components/Thankyou';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <BlogSection />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/contact",
    element: <ContactSection />,
  },
  {
    path: "/cart",
    element: <CartTable />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/bill",
    element: <BillingForm />,
  },
  {
    path: "/order",
    element: <OrderForm />,
  },
  {
    path: "/thanku",
    element: <ThankYou />,
  }
]);

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
