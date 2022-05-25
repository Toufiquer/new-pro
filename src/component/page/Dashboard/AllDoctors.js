import React from "react";
import AddDoctor from "./AddDoctor";
import DoctorList from "./DoctorList";

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
                <DoctorList />
            </div>
        </div>
    );
};

export default AllDoctors;
