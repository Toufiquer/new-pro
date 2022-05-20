import React from "react";
import ServiceItem from "./ServiceItem";

const Services = ({ img }) => {
    return (
        <div>
            <div className="text-4xl text-center">Services We Provide</div>
            <div className="my-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <ServiceItem img={img} />
                <ServiceItem img={img} />
                <ServiceItem img={img} />
            </div>
        </div>
    );
};

export default Services;
