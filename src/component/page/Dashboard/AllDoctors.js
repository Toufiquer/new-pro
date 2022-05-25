import React from "react";
import AddDoctor from "./AddDoctor";

const AllDoctors = () => {
    const addDoctor = doctorData => {};
    const addDoctorCard = () => {};

    return (
        <div>
            <div className="text-2xl text-center">All Doctors</div>
            <div className="container mx-auto m-4">
                <div className="card-actions justify-end">
                    <label
                        disabled={"false" === 0}
                        htmlFor={`add-a-doctor`}
                        onClick={() => addDoctor(addDoctorCard)}
                        className="btn modal-button btn-primary mx-auto "
                    >
                        Add a Doctor
                    </label>
                </div>
                <AddDoctor />
                {/*  */}

                <div className="container mx-auto my-3">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th className="text-xl font-bold">
                                        Sl. No
                                    </th>
                                    <th className="text-xl font-bold">Name</th>
                                    <th className="text-xl font-bold">Email</th>
                                    <th className="text-xl font-bold">
                                        Specialist{" "}
                                    </th>
                                    <th className="text-xl font-bold">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 -->  */}
                                {/* {treatment.map((p, i) => (
                                    <tr
                                        key={i}
                                        className={i % 2 === 1 ? "active" : ""}
                                    >
                                        <th>{i + 1}</th>
                                        <td>{p.treatment}</td>
                                        <td>{p.date}</td>
                                        <td>{p.slot}</td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDoctors;
