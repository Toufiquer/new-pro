import React, { useState } from "react";
import img from "../../../assets/images/appointment.png";
const LogIn = () => {
    const [password, SetPassword] = useState("");
    const [conPassword, SetConPassword] = useState("");
    const [err, SetErr] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    };
    const [logIn, SetLogIn] = useState(true);
    const handlePassword = () => {
        if (password !== conPassword) {
            SetErr("Password do not match");
        } else {
            SetErr(null);
        }
    };
    return (
        <div className="container mx-auto">
            <div
                className="my-6 min-h-full py-6"
                style={{ background: `url(${img})` }}
            >
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
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={e => SetPassword(e.target.value)}
                        value={password || ""}
                        className="input input-bordered input-accent w-full"
                    />
                    {logIn && (
                        <>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                onChange={e => SetConPassword(e.target.value)}
                                value={conPassword || ""}
                                onBlur={handlePassword}
                                className="input input-bordered input-accent w-full"
                            />
                            {err && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {err}
                                </span>
                            )}
                        </>
                    )}
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary w-full"
                    />
                    {logIn ? (
                        <span className="label-text-alt text-lg">
                            Already a member?{" "}
                            <button
                                onClick={() => SetLogIn(!logIn)}
                                className="link"
                            >
                                Log In
                            </button>
                        </span>
                    ) : (
                        <span className="label-text-alt text-lg">
                            New to Doctors Portal?{" "}
                            <button
                                onClick={() => SetLogIn(!logIn)}
                                className="link"
                            >
                                Create new account
                            </button>
                        </span>
                    )}
                </form>
                <div className="divider">OR</div>
                <div className="grid btn rounded-box place-items-center w-full lg:w-1/2 mx-auto bg-transparent">
                    Continue with Google
                </div>
            </div>
        </div>
    );
};

export default LogIn;
