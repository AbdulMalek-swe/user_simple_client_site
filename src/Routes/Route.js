import React   from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/auth/Register';
import PublicRoute from './PublicRoute';
import Login from '../pages/auth/Login';
import Note from '../pages/notes/Note';
 
const router = createBrowserRouter([
       {
       path:"/",
       element:<PublicRoute><Login/></PublicRoute>
        },
        {
          path:"/create",
          element: <PublicRoute> <Register/></PublicRoute>
        },
        {
          path:"/note",
          element:<Note/>
        },
        
  ]);

  export default router;