import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import auth from "../../Share/firebase.init";
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label
                                htmlFor="my-drawer-3"
                                className="btn btn-square btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li>
                                    <Link to="/dashboard">My Appointment</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/myReview">
                                        My Review
                                    </Link>
                                </li>
                                {admin === true && (
                                    <li>
                                        <Link to="/dashboard/allUsers">
                                            All Users
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    <div className="text-center-text-2xl my-4">Dash Board</div>

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/dashboard">My Appointment</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/myReview">My Review</Link>
                        </li>
                        {admin === true && (
                            <li>
                                <Link to="/dashboard/allUsers">All Users</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
