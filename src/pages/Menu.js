import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-around'>

                <Link to="/create">
                    <button className='btn btn-success'>Create account </button>
                </Link>

                <Link to="/create/user">
                    <button className='btn btn-success'>See user</button>
                </Link>
                <Link to="/create/profile">
                    <button className='btn btn-success'>See Profile</button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Menu;