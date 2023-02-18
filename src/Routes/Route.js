import React   from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import MyId from '../pages/MyId';
import Signup from '../pages/Signup';
import User from '../pages/User';
import UserEdit from '../pages/UserEdit';
const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/create",
      element:<Menu/>,
      children:[
        {
          path:"/create",
          element:<Signup/>
        },
        {
          path:"/create/user",
          element:<User/>
        },
        {
          path:"/create/profile",
          element:<MyId/>
        },
        {
          path:"/create/user/edit/:id",
          element:<UserEdit/>
        }
      ]
    },
     
     
  ]);

  export default router;