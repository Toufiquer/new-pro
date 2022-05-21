import React from "react";
import img from "../../../assets/images/appointment.png";
import Card from "./Card/Card";
import Contact from "./Contact/Contact";
import Exception from "./Exception/Exception";
import MakeAppointment from "./Exception/MakeAppointment/MakeAppointment";
import Footer from "../../Share/Footer";
import Hero from "./Hero";
import Patients from "./Patients/Patients";
import Services from "./Services/Services";
const Home = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <Hero img={img} />
                <Card />
                <Services img={img} />
                <Exception img={img} />
                <MakeAppointment img={img} />
                <Patients img={img} />
                <Contact img={img} />
            </div>
            <Footer img={img} />
        </div>
    );
};

export default Home;
