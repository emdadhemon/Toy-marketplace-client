import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import route from './Routes/routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={route}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
