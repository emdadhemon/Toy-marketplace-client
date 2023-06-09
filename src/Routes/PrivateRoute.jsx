import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {


    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading) {
        return <div className='w-[80%] text-center left-8'>
            <progress className="progress w-56  my-12"></progress>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;