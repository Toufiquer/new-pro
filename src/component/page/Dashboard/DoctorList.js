import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Share/Loading";

const DoctorList = () => {
    const {
        data: doctorList,
        isLoading,
        refetch,
    } = useQuery("doctorList", () =>
        fetch("http://localhost:3500/allDoctors", {
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
        }).then(res => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    const handleDelete = email => {
        const isConfirm = window.confirm("Are you sure to Delete?");
        if (isConfirm) {
            fetch(`http://localhost:3500/doctor?email=${email}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                },
            })
                .then(res => res.json())
                .then(d => {
                    if (d.deletedCount === 1) {
                        toast("Delete Successful");
                        refetch();
                    } else {
                        toast("Try again");
                    }
                });
        }
    };
    return (
        <div>
            <div className="container mx-auto my-3">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th className="text-xl font-bold">Sl. No</th>
                                <th className="text-xl font-bold">Name</th>
                                <th className="text-xl font-bold">Email</th>
                                <th className="text-xl font-bold">
                                    Specialist{" "}
                                </th>
                                <th className="text-xl font-bold">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 -->  */}
                            {doctorList?.map((p, i) => (
                                <tr
                                    key={i}
                                    className={i % 2 === 1 ? "active" : ""}
                                >
                                    <th>{i + 1}</th>
                                    <td>
                                        <img
                                            className="w-16 h-16"
                                            src={p.img}
                                            alt={p.name}
                                        />
                                    </td>
                                    <td>{p.name}</td>
                                    <td>{p.email}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(p.email)
                                            }
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>
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

export default DoctorList;
