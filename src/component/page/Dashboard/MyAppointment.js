import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Share/firebase.init";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const MyAppointment = () => {
    const navigate = useNavigate();
    const [treatment, SetTreatment] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(
                `https://gentle-lowlands-70395.herokuapp.com/dashboard?treatment=${user?.email}`,
                {
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "access-token"
                        )}`,
                    },
                }
            )
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("access-token");
                        navigate("/");
                    }
                    return res.json();
                })
                .then(data => SetTreatment(data));
        }
    }, [user, navigate]);
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className="text-xl font-bold">Sl. No</th>
                            <th className="text-xl font-bold">Name</th>
                            <th className="text-xl font-bold">Date</th>
                            <th className="text-xl font-bold">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {treatment.map((p, i) => (
                            <tr key={i} className={i % 2 === 1 ? "active" : ""}>
                                <th>{i + 1}</th>
                                <td>{p.treatment}</td>
                                <td>{p.date}</td>
                                <td>{p.slot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
