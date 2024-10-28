//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage and router
import { Head, usePage, router } from "@inertiajs/react";

//import Sweet Alert
import Swal from "sweetalert2";

export default function UserEdit() {
    //destruct props "errors" & "roles"
    const { errors, roles, user } = usePage().props;

    //initial state values
    const initialName = user.name;
    const initialEmail = user.email;
    const initialRoles = user.roles.map((obj) => obj.name);

    //state
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [rolesData, setRolesData] = useState(initialRoles);
    const [changedRoles, setChangedRoles] = useState([]); // Track changed roles

    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        let data = [...rolesData];
        const roleName = e.target.value;

        if (data.includes(roleName)) {
            data = data.filter((name) => name !== roleName);
        } else {
            data.push(roleName);
        }

        setRolesData(data);

        // Track changes only if it differs from the initial roles
        if (initialRoles.includes(roleName) && !data.includes(roleName)) {
            setChangedRoles((prev) => [
                ...prev,
                { name: roleName, action: "remove" },
            ]);
        } else if (
            !initialRoles.includes(roleName) &&
            data.includes(roleName)
        ) {
            setChangedRoles((prev) => [
                ...prev,
                { name: roleName, action: "add" },
            ]);
        } else {
            // If it matches the initial state, remove it from the changes
            setChangedRoles((prev) =>
                prev.filter((change) => change.name !== roleName)
            );
        }
    };

    //method "updateUser"
    const updateUser = async (e) => {
        e.preventDefault();

        // Prepare data to be sent, only if there are changes in roles
        const rolesToSend = changedRoles.length > 0 ? rolesData : initialRoles;

        router.put(
            `/account/users/${user.id}`,
            {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
                roles: rolesToSend,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Success!",
                        text: "Data updated successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    //method to reset form state
    const resetForm = () => {
        setName(initialName);
        setEmail(initialEmail);
        setPassword("");
        setPasswordConfirmation("");
        setRolesData(initialRoles);
        setChangedRoles([]); // Reset changed roles
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
                                    <i className="fa fa-users"></i> Edit User
                                </span>
                            </div>
                            <div className="p-6">
                                <form onSubmit={updateUser}>
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
                                                <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
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
                                                <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Password and Password Confirmation */}
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
                                                <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
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
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        value={role.name}
                                                        checked={rolesData.includes(
                                                            role.name
                                                        )}
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                        id={`check-${role.id}`}
                                                        className="mr-2"
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
                                                <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                    {errors.roles}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700"
                                        >
                                            <i className="mr-2 fa fa-save"></i>{" "}
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="px-6 py-3 text-white transition duration-200 bg-yellow-500 rounded-lg hover:bg-yellow-600"
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
