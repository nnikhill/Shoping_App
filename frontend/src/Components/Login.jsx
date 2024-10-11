import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const Userlogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandle = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", loginData);
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error logging in");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
          <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
            <div className="relative flex items-center">
              <Link className="text-black no-underline" to="/"><h3>Craftify</h3></Link>
            </div>
            <div className="flex-grow"></div>
            <div className="hidden items-center justify-center gap-6 md:flex">
              <Link
                className="rounded-md no-underline bg-yellow-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-black-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
                to="/"
              >
                Go to Back
              </Link>
            </div>
          </nav>
        </header>
        <div className="flex flex-col md:flex-row">
          <div className='hidden md:block md:w-1/2 p-5 mt-5 '>
            <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg" alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="bg-grey-lighter min-h-screen flex flex-col md:w-1/2 p-1 mx-5">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="text-center font-bold text-3xl"> Login Here</div>
              <br />
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  onChange={changeHandle}
                  required
                  value={loginData.email}
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  onChange={changeHandle}
                  required
                  value={loginData.password}
                  placeholder="Password"
                />
                <button
                  type="submit"
                  onClick={submitHandle}
                  className="w-full text-center py-3 rounded bg-yellow-500 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Log in
                </button>
                <div className="text-grey-dark mt-6">
                  Create new account?
                  <Link to="/signup" className=" no-underline">
                    <span className=" text-yellow-500 ">
                      Sign up
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Userlogin;
