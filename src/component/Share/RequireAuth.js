import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useFireBase from "../../hooks/useFirebase";
import auth from "../Share/firebase.init";
import Loading from "./Loading";
const RequireAuth = ({ children }) => {
    const { user } = useFireBase();
    const [loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        <Loading />;
    }
    if (!user) {
        return <Navigate to="/logIn" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
