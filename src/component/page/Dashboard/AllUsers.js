import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";

import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Share/firebase.init";
const AllUsers = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const {
        data: allUsers,
        isLoading,
        refetch,
    } = useQuery(["allUsers", email], () =>
        fetch(
            `https://gentle-lowlands-70395.herokuapp.com/allUsers?email=${email}`,
            {
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                },
            }
        ).then(res => res.json())
    );
    if (isLoading) {
        <Loading />;
    }
    const handleDelete = email => {
        if (window.confirm("Are You sure?") === true) {
            // console.log("deleted");
            fetch(
                `https://gentle-lowlands-70395.herokuapp.com/delete?email=${email}`,
                {
                    method: "DELETE",
                }
            )
                .then(res => res.json())
                .then(data => {
                    toast.warning("Delete Successful");
                    refetch();
                });
        }
    };
    const mkAdmin = email => {
        if (window.confirm("Are You sure to Make Admin?") === true) {
            fetch(
                `https://gentle-lowlands-70395.herokuapp.com/mkAdmin?email=${email}`,
                {
                    method: "PUT",
                }
            )
                .then(res => res.json())
                .then(data => {
                    toast.success("Update Successful");
                    refetch();
                    // console.log(data);
                });
        }
    };
    const mkClient = email => {
        if (window.confirm("Are You sure to Make Client?") === true) {
            fetch(
                `https://gentle-lowlands-70395.herokuapp.com/mkClient?email=${email}`,
                {
                    method: "PUT",
                }
            )
                .then(res => res.json())
                .then(data => {
                    toast.success("Update Successful");
                    refetch();
                    // console.log(data);
                });
        }
    };
    return (
        <div>
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th className="text-xl font-bold">Sl. No</th>
                                <th className="text-xl font-bold">Name</th>
                                <th className="text-xl font-bold">Email</th>
                                <th className="text-xl font-bold">Role</th>
                                <th className="text-xl font-bold">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {allUsers?.map((p, i) => (
                                <tr
                                    key={i}
                                    className={i % 2 === 1 ? "active" : ""}
                                >
                                    <th>{i + 1}</th>
                                    <td>{p.name}</td>
                                    <td>{p.email}</td>
                                    <td>
                                        <span
                                            className="btn flex items-center justify-center"
                                            onClick={() => {
                                                if (p.role !== "admin") {
                                                    mkAdmin(p.email);
                                                } else {
                                                    mkClient(p.email);
                                                }
                                            }}
                                        >
                                            {p.role || "Client"}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className="btn flex items-center justify-center text-2xl bg-red-500"
                                            onClick={() =>
                                                handleDelete(p.email)
                                            }
                                        >
                                            X
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
