import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const UserEdit = () => {
    const { id } = useParams()
    const { token, user } = useContext(AuthContext)
    console.log(user);
    const [updateUser, setUpdateUser] = useState({})
    const handleUsernameChange = (event) => {
        setUpdateUser({ username: event.target.value, email: updateUser?.email, role: updateUser?.role });
    };
    const handleEmailChange = (event) => {
        setUpdateUser({ email: event.target.value, username: updateUser?.username, role: updateUser?.role });
    };
    const handleRoleChange = (event) => {
        setUpdateUser({ role: event.target.value, username: updateUser?.username, email: updateUser?.email });
    };
    useEffect(() => {
        axios.get('https://simple-user-management-task.vercel.app/api/v1/user', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                //   setUser(response?.data?.user) 
                const find = response?.data?.user.find(item => item?._id === id);
                setUpdateUser(find)
            })
            .catch(err => {
                toast.error(<h1>{err.message}</h1>)
            })
    }, [token])
    const handleSubmit = e => {
        axios.patch(`https://simple-user-management-task.vercel.app/api/v1/user/${id}`, updateUser, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                toast.success(<h1 className=''>update user successfully </h1>)
            })
            .catch(error => {
                toast.error(<h1>{error.message}</h1>)
            })
        e.preventDefault()
    }
    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <form className="m-5 w-10/12" onSubmit={handleSubmit}>
                    <h1 className="w-full text-4xl tracking-widest text-center my-6">
                        Edit user
                    </h1>
                    <div className="w-full my-6">
                        <label
                            htmlFor="username"
                            className="text-sm font-bold block mb-2"
                        >
                            Username
                        </label>
                        <input
                            className="p-2 rounded-md bg-gray-300 outline-none w-full shadow-inner focus:shadow-md transition duration-500 ease-in-out"
                            type="text"
                            id="username"
                            value={updateUser?.username || ''}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
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
                            value={updateUser?.email || ''}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="w-full my-6">
                        {user?.role?.includes("admin") && <select value={updateUser?.role || ''} className='w-full p-4 text-black'
                            onChange={handleRoleChange}
                        >
                            <option value="employee"  >employee</option>
                            <option value="admin"  >admin</option>
                            <option value="manager">manager</option>
                        </select>
                        }
                    </div>
                    <div className="w-full my-10">
                        <button
                            type="submit"
                            className="p-2 bg-indigo-500 text-white rounded-md w-full"
                        >
                            Edit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserEdit;