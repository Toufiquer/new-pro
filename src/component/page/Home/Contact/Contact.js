import React from "react";

const Contact = ({ img }) => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <div className="my-6 py-6" style={{ background: `url(${img})` }}>
            <div className="text-center py-6">
                <div className="text-normal">Contact Us</div>
                <div className="text-2xl">Stay Connected with us</div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full lg:w-2/4 mx-auto gap-4"
            >
                <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="input input-bordered input-accent w-full"
                />
                <input
                    type="subject"
                    placeholder="Subject"
                    name="subject"
                    className="input input-bordered input-accent w-full"
                />
                <textarea
                    className="textarea textarea-info"
                    placeholder="Your Massage"
                ></textarea>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary w-full"
                />
            </form>
        </div>
    );
};

export default Contact;
