import React, { useState } from "react";
import Hero from "./Hero/Hero";
import img from "../../../assets/images/appointment.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import AppointmentService from "./AppointmentService/AppointmentService";
import Footer from "../../Share/Footer";
const Appointment = () => {
    const [date, SetDate] = useState(new Date());
    const footerDate = date ? (
        <>{format(date, "PP")}.</>
    ) : (
        <p>Please pick a day.</p>
    );
    return (
        <div>
            <Hero
                DayPicker={DayPicker}
                date={date}
                SetDate={SetDate}
                img={img}
            />
            <AppointmentService footerDate={footerDate} />
            <Footer />
        </div>
    );
};

export default Appointment;
