import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";

import { toast } from "react-toastify";
const AllUsers = () => {
    // const {data,isLoading,refetch} = useQuery(['available'])
    const {
        data: allUsers,
        isLoading,
        refetch,
    } = useQuery(["allUsers"], () =>
        fetch(`http://localhost:3500/allUsers`).then(res => res.json())
    );
    if (isLoading) {
        <Loading />;
    }
    const handleDelete = email => {
        if (window.confirm("Are You sure?") === true) {
            // console.log("deleted");
            fetch(`http://localhost:3500/delete?email=${email}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    toast.warning("Delete Successful");
                    refetch();
                });
        }
    };
    const mkAdmin = email => {
        if (window.confirm("Are You sure to Make Admin?") === true) {
            fetch(`http://localhost:3500/mkAdmin?email=${email}`, {
                method: "PUT",
            })
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
            fetch(`http://localhost:3500/mkClient?email=${email}`, {
                method: "PUT",
            })
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
