import React from "react";
import PatientsItem from "./PatientsItem";

const Patients = ({ img }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <PatientsItem img={img} />
            <PatientsItem img={img} />
            <PatientsItem img={img} />
        </div>
    );
};

export default Patients;
