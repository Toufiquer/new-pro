import React from "react";

const ServiceCard = ({ appointment, SetTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="my-6">
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl">{name}</h2>
                    <p>
                        {slots.length !== 0
                            ? slots[0]
                            : "Ops! No slots available. Try again next day."}
                    </p>
                    <p>
                        {slots.length !== 0
                            ? `${slots.length} slot${
                                  slots.length > 1 ? "s" : ""
                              } available`
                            : "No Slots Available."}
                    </p>

                    <div className="card-actions justify-end">
                        <label
                            disabled={slots.length === 0}
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
