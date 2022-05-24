import React, { useEffect } from "react";
import img from "../../../assets/images/appointment.png";
import auth from "../../Share/firebase.init";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../Share/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useToken from "../../../hooks/useToken";
const LogIn = () => {
    const [uUser, uLoading] = useAuthState(auth);
    // Error
    let err;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Use Form for design and validate
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Google Log in with one click google
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    // Google Log in with email and password
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -
    const [token] = useToken(user || gUser);
    useEffect(() => {
        // After Log in
        if (token) {
            navigate(from, { replace: true });
        }
        // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -
    }, [token, from, navigate]);

    // Loading
    if (uLoading || gLoading || loading) {
        return <Loading />;
    }
    // Error
    if (gError || error) {
        err = gError?.message || error?.message;
        console.log(err);
    }

    // Handle Submit
    const onSubmit = e => {
        signInWithEmailAndPassword(e.email, e.password);
        console.log(e.email, e.password);
    };

    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    return (
        <div className="container mx-auto">
            <div
                className="my-6 min-h-full py-6"
                style={{ background: `url(${img})` }}
            >
                <div className="text-center py-6">
                    <div className="text-2xl font-bold">Login</div>
                </div>
                <form
                    className="flex flex-col w-full lg:w-2/4 mx-auto gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <>
                        {/* Input Email */}
                        <input
                            autoComplete="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required.",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid Email.",
                                },
                            })}
                            placeholder="Your Email"
                            className="input input-bordered input-accent w-full"
                        />
                        {errors.email?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.email.message}{" "}
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.email.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}
                    </>
                    <>
                        {/* Input Password */}
                        <input
                            type="password"
                            autoComplete="current-password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required.",
                                },
                            })}
                            placeholder="Your Password"
                            className="input input-bordered input-accent w-full"
                        />
                        {errors.password?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.password.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}
                    </>
                    {/* Error Show */}
                    {err && (
                        <span className="label-text-alt text-lg text-red-500">
                            {err}{" "}
                        </span>
                    )}
                    {/* --- --- --- */}
                    <span className="label-text-alt text-lg">
                        New to Doctors Portal?{" "}
                        <Link to="/signUp" className="link">
                            Sign Up
                        </Link>
                    </span>
                    <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary w-full"
                    />
                </form>
                <div className="divider">OR</div>
                <div
                    onClick={() => signInWithGoogle()}
                    className="grid btn rounded-box place-items-center w-full lg:w-1/2 mx-auto bg-transparent"
                >
                    Continue with Google
                </div>
            </div>
        </div>
    );
};

// const [password, SetPassword] = useState("");
// const [conPassword, SetConPassword] = useState("");
// const [email, SetEmail] = useState("");
// const [err, SetErr] = useState(null);
// const handleSubmit = e => {
//     e.preventDefault();
//     console.log(e);
// };
// const handlePassword = () => {
//     if (password !== conPassword) {
//         SetErr("Password do not match");
//     } else {
//         SetErr(null);
//     }
// };
// ====================================

// <form
// onSubmit={handleSubmit}
// className="flex flex-col w-full lg:w-2/4 mx-auto gap-4"
// >
// <input
//     type="email"
//     placeholder="Your Email"
//     name="email"
//     onChange={e => SetEmail(e.target.value)}
//     value={email || ""}
//     className="input input-bordered input-accent w-full"
// />
// <input
//     type="password"
//     placeholder="Password"
//     name="password"
//     onChange={e => SetPassword(e.target.value)}
//     value={password || ""}
//     className="input input-bordered input-accent w-full"
// />
// {logIn && (
//     <>
//         <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             onChange={e => SetConPassword(e.target.value)}
//             value={conPassword || ""}
//             onBlur={handlePassword}
//             className="input input-bordered input-accent w-full"
//         />
//         {err && (
//             <span className="label-text-alt text-lg text-red-500">
//                 {err}
//             </span>
//         )}
//     </>
// )}
// {logIn ? (
//     <span className="label-text-alt text-lg">
//         Already a member?{" "}
//         <button
//             onClick={() => SetLogIn(!logIn)}
//             className="link"
//         >
//             Log In
//         </button>
//     </span>
// ) : (
//     <span className="label-text-alt text-lg">
//         New to Doctors Portal?{" "}
//         <button
//             onClick={() => SetLogIn(!logIn)}
//             className="link"
//         >
//             Create new account
//         </button>
//     </span>
// )}
// <input
//     type="submit"
//     value={logIn ? "Sign Up" : "Login"}
//     className="btn btn-primary w-full"
// />
// </form>

export default LogIn;
