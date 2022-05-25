import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import ModalCard from "./ModalCard";
import { useQuery } from "react-query";
import Loading from "../../../Share/Loading";
const AppointmentService = ({ footerDate }) => {
    // const [availableAppointment, SetAvailableAppointment] = useState([]);
    const [treatment, SetTreatment] = useState(null);
    const date = footerDate.props.children[0];
    const {
        data: availableAppointment,
        isLoading,
        refetch,
    } = useQuery(["available", date], () =>
        fetch(
            `https://gentle-lowlands-70395.herokuapp.com/available?date=${date}`
        ).then(res => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }

    // console.log(date);
    // useEffect(() => {
    //     fetch(`https://gentle-lowlands-70395.herokuapp.com/available?date=${date}`)
    //         .then(res => res.json())
    //         .then(data => SetAvailableAppointment(data));
    // }, [date]);
    return (
        <div className="my-16">
            <div className="text-center text-xl font-bold">
                Available Appointment on: {date}
            </div>
            <div className="grid grid-col-1 lg:grid-cols-3 gap-4 justify-items-center">
                {availableAppointment?.map(appointment => (
                    <ServiceCard
                        key={appointment._id}
                        appointment={appointment}
                        SetTreatment={SetTreatment}
                    />
                ))}

                {treatment && (
                    <ModalCard
                        refetch={refetch}
                        treatment={treatment}
                        date={footerDate}
                    />
                )}
            </div>
        </div>
    );
};

export default AppointmentService;
