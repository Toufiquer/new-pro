import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import ModalCard from "./ModalCard";
const AppointmentService = ({ footerDate }) => {
    const [availableAppointment, SetAvailableAppointment] = useState([]);
    const [treatment, SetTreatment] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3500/service")
            .then(res => res.json())
            .then(data => SetAvailableAppointment(data));
    }, []);
    return (
        <div className="my-16">
            <div className="text-center text-xl font-bold">
                Available Appointment on: {footerDate}
            </div>
            <div className="grid grid-col-1 lg:grid-cols-3 gap-4 justify-items-center">
                {availableAppointment.map(appointment => (
                    <ServiceCard
                        key={appointment._id}
                        footerDate={footerDate}
                        appointment={appointment}
                        SetTreatment={SetTreatment}
                    />
                ))}

                {treatment && (
                    <ModalCard treatment={treatment} date={footerDate} />
                )}
            </div>
        </div>
    );
};

export default AppointmentService;
