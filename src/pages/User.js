import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const User = () => {
    const {token} = useContext(AuthContext);
    const [user,setUser] = useState([]);
    useEffect(()=>{
      axios.get('https://simple-user-management-task.vercel.app/api/v1/user',{
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(response=>{
        setUser(response?.data?.user) 
    })
    .catch(err=>{
        toast.error(<h1>{err.message}</h1>)
    })
    },[token])
    const handleDelete = e =>{
        axios.delete(`https://simple-user-management-task.vercel.app/api/v1/user/${e}`,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response=>{
            toast.success(<h1>wow   delete the user</h1>)
            const filter = user.filter(item=>item._id!==e) 
            setUser(filter)
        })
        .catch(err=>{
            toast.error(<h1>{err.message}</h1>)
        })
    }
    return (
        <div>
            <div className='flex flex-wrap justify-around items-center gap-2'>
            {
                user.map((person,i)=><div className="bg-white rounded-lg overflow-hidden shadow-lg" key={i}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{person?.username}</div>
                  <p className="text-gray-700 text-base">{person.email}</p>
                  <p className="text-gray-700 text-base">{person.role}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                 <Link to={`/create/user/edit/${person?._id}`}>
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Edit
                  </button>
                 </Link>
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>handleDelete(person?._id)}>
                   Delete
                  </button>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default User;