import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthProvider';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const location = useLocation()
    const navigate = useNavigate();
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
   
    const handleSubmit = e =>{
        axios.post("https://simple-user-management-task.vercel.app/api/v1/login",{email,password})
        .then(response=>{
            localStorage.setItem("token",response?.data?.token)
            navigate("/create")
            window.location.reload()
        })
        .catch(error=>{
          toast.error(<h1>{error.message}</h1>)
        })
        e.preventDefault()
      }
    return (
        <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
          <form className="m-5 w-10/12" onSubmit={handleSubmit}>
            <h1 className="w-full text-4xl tracking-widest text-center my-6">
              Login
            </h1>
            <div className="w-full my-6">
              <label
                htmlFor="email"
                className="text-sm font-bold block mb-2"
              >
                Email
              </label>
              <input
                className="p-2 rounded-md bg-gray-300 outline-none w-full shadow-inner focus:shadow-md transition duration-500 ease-in-out"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="w-full my-6">
              <label
                htmlFor="password"
                className="text-sm font-bold block mb-2"
              >
                Password
              </label>
              <input
                className="p-2 rounded-md bg-gray-300 outline-none w-full shadow-inner focus:shadow-md transition duration-500 ease-in-out"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="w-full my-10">
              <button
                type="submit"
                className="p-2 bg-indigo-500 text-white rounded-md w-full"
              >
                Login
              </button>
            </div>
            
          </form>
        </div>
      </div>
    );
};

export default Login;