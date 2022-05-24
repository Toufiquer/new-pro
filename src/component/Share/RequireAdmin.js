import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../../hooks/useAdmin";
import useFireBase from "../../hooks/useFirebase";
import auth from "../Share/firebase.init";
import Loading from "./Loading";
const RequireAuth = ({ children }) => {
    const { user } = useFireBase();
    const [admin, adminLoading] = useAdmin(user);
    const [loading] = useAuthState(auth);
    const location = useLocation();
    if (loading || adminLoading) {
        <Loading />;
    }
    console.log(!user, !admin);
    // if (false || false) {
    //     console.log("both false");
    // }
    if (!user || !admin) {
        return <Navigate to="/logIn" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
