import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const MyId = () => {
    const {token,user,setUser} = useContext(AuthContext);
    return (
        <div className='container flex items-center justify-center mx-auto'>
         <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{user?.username}</div>
                  <p className="text-gray-700 text-base">{user?.email}</p>
                  <p className="text-gray-700 text-base">{user?.role}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
    
                </div>
              </div>
        </div>
    );
};

export default MyId;