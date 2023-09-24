import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Contect from './component/Contect/Contect';
import About from './component/About/About';
import User from './component/USER/User';
import UserDetels from './component/UserDetels/UserDetels';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/Contect",
        element: <Contect></Contect>
      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path: "/USER",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      }, {
        path: "/Userr/:Userrid",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.Userrid}`),
        element: <UserDetels></UserDetels>

      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
