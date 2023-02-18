import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import router from './Routes/Route';
import { Toaster } from 'react-hot-toast';
 
function App() {
 
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
