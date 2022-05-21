import React from "react";
import { Link } from "react-router-dom";
const NavMenu = () => {
    return (
        <div className="bg-base-100 sticky top-0 z-50">
            <div className="container mx-auto">
                <div className="navbar bg-base-100 justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {/* Drop Down menu */}

                                {/* <li tabIndex="0">
                                <Link to="/" className="justify-between">
                                    Parent
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </Link>
                                <ul className="p-2">
                                    <li>
                                        <Link to="/">Submenu 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Submenu 2</Link>
                                    </li>
                                </ul>
                            </li> */}
                                {/* End ****** */}

                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/appointment">Appointment</Link>
                                </li>
                                <li>
                                    <Link to="/reviews">Reviews</Link>
                                </li>
                                <li>
                                    <Link to="/contactUs">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/logIn">Login</Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="btn btn-ghost normal-case text-xl"
                        >
                            The New Project
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {/* Drop Drown */}

                            {/* <li tabIndex="0">
                            <Link to="/">
                                Parent
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2">
                                <li>
                                    <Link to="/">Submenu 1</Link>
                                </li>
                                <li>
                                    <Link to="/">Submenu 2</Link>
                                </li>
                            </ul>
                        </li> */}
                            {/* End Drop Drown */}
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/appointment">Appointment</Link>
                            </li>
                            <li>
                                <Link to="/reviews">Reviews</Link>
                            </li>
                            <li>
                                <Link to="/contactUs">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/logIn">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
