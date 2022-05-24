import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAdmin = user => {
    const email = user?.email;
    const [admin, SetAdmin] = useState("false");
    const [adminLoading, SetAdminLoading] = useState("true");
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:3500/user?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return toast("Ops You are Not admin");
                    } else {
                        return res.json();
                    }
                })
                .then(data => {
                    SetAdmin(data.result);
                    SetAdminLoading(false);
                    console.log(data.result);
                    console.log("admin: ", admin);
                });
        }
    }, [email, admin]);
    return [admin, adminLoading];
};
export default useAdmin;
