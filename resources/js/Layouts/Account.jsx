import React, { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import Sidebar from "../Components/Sidebar";

const Navbar = ({
    sidebarToggleHandler,
    auth,
    dropdownOpen,
    dropdownToggleHandler,
    logoutHandler,
}) => (
    <nav className="bg-[#1b4240] shadow-md">
        <div className="container flex items-center justify-between p-4 mx-auto">
            <button
                className="p-2 text-white rounded-md hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={sidebarToggleHandler}
            >
                <i className="fa fa-list-ul"></i>
            </button>

            <div className="relative">
                <button
                    className="flex items-center font-semibold text-white focus:outline-none"
                    onClick={dropdownToggleHandler}
                >
                    {auth.user.name}
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 z-20 w-48 mt-2 bg-white rounded-md shadow-lg">
                        <button
                            onClick={logoutHandler}
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                        >
                            <i className="mr-2 fa fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    </nav>
);

const SidebarLayout = ({ sidebarToggle, sidebarToggleHandler }) => (
    <div
        className={`bg-[#2C6664] text-white w-64 min-h-screen transition-transform duration-300 transform fixed z-30 ${
            sidebarToggle ? "-translate-x-full" : "translate-x-0"
        }`}
    >
        <div className="p-4 text-center bg-[#1b4240]">
            <button
                className="p-2 mx-3 text-white rounded-md hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={sidebarToggleHandler}
            >
                <i className="fa fa-list-ul"></i>
            </button>
            <Link href="/" className="flex items-center justify-center">
                <img src={"/Image/logoDesa.png"} alt="Logo" className="h-8" />
            </Link>
        </div>
        <Sidebar />
    </div>
);

export default function LayoutAccount({ children }) {
    const { auth } = usePage().props;

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSidebarToggle = (e) => {
        e.preventDefault();
        setSidebarToggle(!sidebarToggle);
    };

    const handleDropdownToggle = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        router.post("/logout");
    };

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar */}
                <SidebarLayout
                    sidebarToggle={sidebarToggle}
                    sidebarToggleHandler={handleSidebarToggle}
                />

                {/* Page Content */}
                <div
                    className={`flex-1 transition-all duration-300 ${
                        sidebarToggle ? "ml-0" : "ml-64"
                    }`}
                >
                    <Navbar
                        sidebarToggleHandler={handleSidebarToggle}
                        auth={auth}
                        dropdownOpen={dropdownOpen}
                        dropdownToggleHandler={handleDropdownToggle}
                        logoutHandler={handleLogout}
                    />

                    <div
                        className={`container p-6 mx-auto h-[calc(100vh-64px)] overflow-y-auto`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
