import React from "react";

const Hero = ({ img, DayPicker, date, SetDate }) => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={img}
                        alt="Appointment Hero"
                        className="lg:max-w-lg rounded-lg shadow-2xl"
                    />
                    <div>
                        <DayPicker
                            mode="single"
                            required
                            selected={date}
                            onSelect={SetDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
