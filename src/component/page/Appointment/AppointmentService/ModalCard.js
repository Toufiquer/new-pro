import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Share/firebase.init";
import Loading from "../../../Share/Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ModalCard = ({ treatment, date, refetch }) => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const { name, _id, available } = treatment;
    if (loading) {
        <Loading />;
    }
    const handleSubmit = e => {
        e.preventDefault();
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: date?.props?.children[0],
            slot: e.target.slot.value,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value,
        };
        fetch("http://localhost:3500/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(booking),
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate("/");
                }
                return res.json();
            })
            .then(data => {
                if (data.success) {
                    toast("Confirm Appointment for", "date");
                } else {
                    toast.error("Ops! You have already an Appointment for ");
                }
                // console.log(data);
            });
        refetch();
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
                            {available.length !== 0
                                ? available.map(avail => (
                                      <option key={avail}>{avail}</option>
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
