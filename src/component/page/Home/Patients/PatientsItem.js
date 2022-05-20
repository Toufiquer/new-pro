import React from "react";

const PatientsItem = ({ img }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl py-6">
                <div className="card-body">
                    <p>
                        If a dog chews shoes whose shoes does he choose?If a dog
                        chews shoes whose shoes does he choose?If a dog chews
                        shoes whose shoes does he choose?If a dog chews shoes
                        whose shoes does he choose?
                    </p>
                </div>
                <figure>
                    <img
                        src={img}
                        alt="Shoes"
                        className="w-16 h-16 rounded-3xl"
                    />
                    <div className="text-start ml-6">
                        <div className="text-2xl">The Name</div>
                        <div className="text-normal">CEO, Google</div>
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default PatientsItem;
