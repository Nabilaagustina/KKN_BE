// Import react
import React, { useState } from "react";

// Import layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, and router
import { Head, usePage, router } from "@inertiajs/react";

// Import SweetAlert
import Swal from "sweetalert2";

export default function UserCreate() {
    // Destruct props "errors" & "roles"
    const { errors, roles } = usePage().props;

    // State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [rolesData, setRolesData] = useState([]);

    // Define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        // Update rolesData based on whether the checkbox is checked or unchecked
        if (isChecked) {
            setRolesData((prevRoles) => [...prevRoles, value]);
        } else {
            setRolesData((prevRoles) =>
                prevRoles.filter((role) => role !== value)
            );
        }
    };

    // Method to reset the form
    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
        setRolesData([]);
    };

    // Method "storeUser"
    const storeUser = async (e) => {
        e.preventDefault();

        // Sending data
        router.post(
            "/account/users",
            {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
                roles: rolesData,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    return (
        <LayoutAccount>
            <Head>
                {/* SEO Meta Tags */}
                <title>Dashboard UMKM Desa Semambung - Wonoayu</title>
                <meta
                    name="description"
                    content="Kelola dan pantau aktivitas UMKM di Desa Semambung, Wonoayu melalui dashboard yang informatif dan mudah digunakan."
                />
                <meta
                    name="keywords"
                    content="Dashboard UMKM, Semambung, Wonoayu, Sidoarjo, Kelola UMKM, Analisis Data, Manajemen UMKM"
                />
                <meta name="author" content="UMKM Desa Semambung" />

                {/* Favicon / Icon */}
                <link
                    rel="icon"
                    href="/Image/logoDesa.png"
                    type="image/x-icon"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/Image/logoDesa.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/Image/logoDesa.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/Image/logoDesa.png"
                />
            </Head>

            <main>
                <div className="mt-4">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="flex items-center p-4 text-white bg-green-500 rounded-t-lg">
                                <span className="text-xl font-semibold">
                                    <i className="fa fa-users"></i> Add New User
                                </span>
                            </div>
                            <div className="p-6">
                                <form onSubmit={storeUser}>
                                    {/* Full Name and Email */}
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm font-bold">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                placeholder="Enter Full Name"
                                            />
                                            {errors.name && (
                                                <p className="relative px-4 py-3 my-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm font-bold">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                placeholder="Enter Email Address"
                                            />
                                            {errors.email && (
                                                <p className="relative px-4 py-3 my-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Password and Confirmation */}
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm font-bold">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                placeholder="Enter Password"
                                            />
                                            {errors.password && (
                                                <p className="relative px-4 py-3 my-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                    {errors.password}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm font-bold">
                                                Password Confirmation
                                            </label>
                                            <input
                                                type="password"
                                                className="w-full p-3 border border-gray-300 rounded-lg"
                                                value={passwordConfirmation}
                                                onChange={(e) =>
                                                    setPasswordConfirmation(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter Password Confirmation"
                                            />
                                        </div>
                                    </div>

                                    {/* Roles */}
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold">
                                            Roles
                                        </label>
                                        <div className="space-y-2">
                                            {roles.map((role, index) => (
                                                <div
                                                    className="flex items-center"
                                                    key={index}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        value={role.name}
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                        id={`check-${role.id}`}
                                                        className="mr-2"
                                                        checked={rolesData.includes(
                                                            role.name
                                                        )}
                                                    />
                                                    <label
                                                        htmlFor={`check-${role.id}`}
                                                        className="text-sm"
                                                    >
                                                        {role.name}
                                                    </label>
                                                </div>
                                            ))}
                                            {errors.roles && (
                                                <p className="relative px-4 py-3 my-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                    {errors.roles}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Submit and Reset Buttons */}
                                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700"
                                        >
                                            <i className="mr-2 fa fa-save"></i>{" "}
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="px-6 py-3 text-white transition duration-200 bg-yellow-500 rounded-lg hover:bg-yellow-600"
                                            onClick={resetForm}
                                        >
                                            <i className="mr-2 fa fa-redo"></i>{" "}
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
