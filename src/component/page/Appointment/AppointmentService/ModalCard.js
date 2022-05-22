import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Share/firebase.init";
import Loading from "../../../Share/Loading";
const ModalCard = ({ treatment, date }) => {
    const [user, loading] = useAuthState(auth);
    const { name, slots, _id } = treatment;
    if (loading) {
        <Loading />;
    }
    const handleSubmit = e => {
        e.preventDefault();
        const booking = {
            treatmentId: _id,
            treatment: name,
            dte: date?.props?.children,
            slot: e.target.slot.value,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value,
        };
        fetch("http://localhost:3500/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => console.log(data));
    };
    return (
        <div>
            <input
                type="checkbox"
                id={`appoint-modal`}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor={`appoint-modal`}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <div className="text-lg text-center input input-bordered input-accent w-full flex items-center justify-start mb-2">
                        Appoint For: {date}
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="gap-2 grid-cols-1 grid"
                    >
                        <select
                            name="slot"
                            className="select select-accent select-bordered w-full"
                        >
                            {slots.length !== 0
                                ? slots.map(slot => (
                                      <option key={slot}>{slot}</option>
                                  ))
                                : "Ops No Slots available."}
                        </select>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={user?.displayName || ""}
                            disabled
                            className="input input-bordered input-accent w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={user?.email || ""}
                            disabled
                            className="input input-bordered input-accent w-full"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                            className="input input-bordered input-accent w-full"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full btn btn-primary"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;
