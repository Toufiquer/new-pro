import React from "react";

const ServiceCard = ({ appointment, SetTreatment }) => {
    const { name, available } = appointment;
    return (
        <div className="my-6">
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl">{name}</h2>
                    <p>
                        {available.length !== 0
                            ? available[0]
                            : "Ops! No available available. Try again next day."}
                    </p>
                    <p>
                        {available.length !== 0
                            ? `${available.length} slot${
                                  available.length > 1 ? "s" : ""
                              } available`
                            : "No available Available."}
                    </p>

                    <div className="card-actions justify-end">
                        <label
                            disabled={available.length === 0}
                            htmlFor={`appoint-modal`}
                            onClick={() => SetTreatment(appointment)}
                            className="btn modal-button btn-primary mx-auto "
                        >
                            Booking Now
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
