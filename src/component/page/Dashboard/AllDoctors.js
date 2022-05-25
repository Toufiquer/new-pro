import React from "react";

const AllDoctors = () => {
    const addDoctor = doctorData => {};
    const addDoctorCard = () => {};
    const handleSubmit = () => {};
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

                <div>
                    <input
                        type="checkbox"
                        id={`add-a-doctor`}
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box relative">
                            <div className="text-center text-xl my-2 text-bold">
                                Add a New Doctor
                            </div>
                            <label
                                htmlFor={`add-a-doctor`}
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <form
                                onSubmit={handleSubmit}
                                className="gap-2 grid-cols-1 grid"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered input-accent w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="input input-bordered input-accent w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Specialist"
                                    name="specialist"
                                    className="input input-bordered input-accent w-full"
                                />
                                <input
                                    type="submit"
                                    value="Add New Doctor"
                                    className="w-full btn btn-primary"
                                />
                            </form>
                        </div>
                    </div>
                </div>

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
                                {/* <!-- row 1 --> */}
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
