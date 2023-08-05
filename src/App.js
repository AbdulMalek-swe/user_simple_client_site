 
import React  from 'react';
import { RouterProvider } from 'react-router';
import router from './Routes/Route';
import { fetchNotes } from './utils/fetchNotes';
 
const App = () => {
 fetchNotes()
    
  return (
    <div>
         <RouterProvider router={router}>
          
         </RouterProvider>
    </div>
  );
};

export default App;