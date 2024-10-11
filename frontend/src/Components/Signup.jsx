import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { motion } from 'framer-motion';

// const Signup = () => {
//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   });
//   const navigate = useNavigate()
//   const changeHandle = (e) => {
//     setSignupData({ ...signupData, [e.target.name]: e.target.value });
//   };
//   const submitHandle = async () => {
//     console.log(signupData);
//     if (signupData.password !== signupData.confirm_password) {
//       return toast.error("password !== confirm password does not match");
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users/signup",
//         signupData
//       );
//       navigate("/userlogin")
//       toast.success(response.data.message);
//     } catch (err) {
//     //   toast.error(err.response.data.Message);
//     }
//   };
const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const navigate = useNavigate();

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirm_password) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name: signupData.name,
        email: signupData.email,
        password: signupData.password,
      });
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      navigate('/login');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }} // Initial animation values
    animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
    exit={{ opacity: 0, y: -50 }} // Animation when component is unmounted
    transition={{ duration: 0.5 }} // Animation duration
  >
    <div>
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                <div className="relative flex items-center">
                    <a href="/" className=" no-underline text-black"><h3>Craftify</h3></a>
                </div>
                <div className="flex-grow"></div>
                <div className="hidden items-center justify-center gap-6 md:flex">
                  
                    <a
                        className="rounded-md no-underline bg-yellow-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-black-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]" href="/">
                        Go to Back
                    </a>
                    </div>
                </nav>
                </header>
                <div className="flex">
            <div className='w-1/2 p-5 '>
                <img src="https://img.freepik.com/free-vector/credit-score-flat-composition-with-chat-bubbles-envelopes-application-screens-black-woman-with-credit-card-vector-illustration_1284-83826.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=sph" alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            
    <div class="bg-grey-lighter min-h-screen flex flex-col w-3/2 p-3">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="text-center font-bold text-3xl "> Signup Here</div><br></br>
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="name"
        onChange={changeHandle}
        required
        value={signupData.name}
        placeholder="Full Name"
      />

      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        required
        onChange={changeHandle}
        value={signupData.email}
        placeholder="Email"
      />

      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="password"
        onChange={changeHandle}
        required
        value={signupData.password}
        placeholder="Password"
      />
      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="confirm_password"
        onChange={changeHandle}
        value={signupData.confirm_password}
        required
        placeholder="Confirm Password"
      />

      <button
        type="submit"
        onClick={submitHandle}
        className="w-full text-center py-3 rounded bg-yellow-500 text-white hover:bg-green-dark focus:outline-none my-1"
      >
        Create Account
      </button>

      <div className="text-center text-sm text-grey-dark mt-4">
        By signing up, you agree to the
        <a
          className="no-underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Terms of Service
        </a>{" "}
        and
        <a
          className="no-underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <Link to="/login" className=" no-underline">
            <span class="no-underline  text-yellow-500">
              Log in.
            </span>
          </Link>
          
        </div>
      </div>
    </div>
    </div>
    </div>
    </motion.div>
  );
};

export default Signup;
