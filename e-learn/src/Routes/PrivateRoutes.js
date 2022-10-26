import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
        return <Spinner animation="border" role="status" style={{ margin: 'auto' }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    if (user && user.uid && user.emailVerified) {
        return children;
    } else if (user && user.uid && !user.emailVerified) {
        return <Navigate to="/verify-email"></Navigate>;
    } else {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

};

export default PrivateRoutes;