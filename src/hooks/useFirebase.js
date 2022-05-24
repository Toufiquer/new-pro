import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../component/Share/firebase.init";

const useFireBase = () => {
    const [user, SetUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            SetUser(user);
        });
    }, []);
    return { user };
};
export default useFireBase;
