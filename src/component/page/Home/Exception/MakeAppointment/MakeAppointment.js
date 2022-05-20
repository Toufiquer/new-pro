import React from "react";

const MakeAppointment = ({ img }) => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-6 my-6">
                <div
                    style={{ background: `url(${img})` }}
                    className="hero-content flex-col lg:flex-row py-6"
                >
                    <img
                        src={img}
                        className="max-w-xl rounded-lg shadow-2xl mt-[-100px]"
                        alt="Exception"
                    />
                    <div>
                        <h1 className="text-5xl ml-4 font-bold uppercase">
                            Make an appointment.
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
