// Import React
import React, { useState } from "react";

// Import Layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, and router
import { Head, usePage, router } from "@inertiajs/react";

// Import SweetAlert
import Swal from "sweetalert2";

export default function RoleEdit() {
    // Destructure props: "errors", "permissions" & "role"
    const { errors, permissions, role } = usePage().props;

    // Define state
    const [name, setName] = useState(role.name);
    const [permissionsData, setPermissionsData] = useState(
        role.permissions.map((obj) => obj.name)
    );

    // Define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        // Define data
        let data = [...permissionsData];

        // Check if item already exists, if so, remove it with filter
        if (data.includes(value)) {
            data = data.filter((name) => name !== value);
        } else {
            // Add new item to the array
            data.push(value);
        }

        // Set data to state
        setPermissionsData(data);
    };

    // Define reset method
    const resetForm = () => {
        // Reset permissions data and role name to the initial state
        setPermissionsData(role.permissions.map((obj) => obj.name));
        setName(role.name);
    };

    // Define method
    const updateRole = async (e) => {
        e.preventDefault();

        // Sending data
        router.put(
            `/account/roles/${role.id}`,
            {
                // Data
                name: name,
                permissions: permissionsData,
            },
            {
                onSuccess: () => {
                    // Show alert
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
                <div className="max-w-full px-4 mx-auto mt-6 md:max-w-3xl">
                    <div className="bg-white border-t-4 border-green-600 rounded-lg shadow-lg">
                        <div className="p-4 text-lg font-semibold text-green-700">
                            <i className="mr-2 fa fa-shield-alt"></i> Edit Role
                        </div>
                        <div className="p-4 md:p-6">
                            <form onSubmit={updateRole}>
                                {/* Role Name Field */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                                        Role Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Enter Role Name"
                                    />
                                    {errors.name && (
                                        <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                <hr className="my-4" />

                                {/* Permissions Section */}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                                        Permissions
                                    </label>
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                                        {permissions.map(
                                            (permission, index) => (
                                                <div
                                                    className="flex items-center"
                                                    key={index}
                                                >
                                                    <input
                                                        className="mr-2 border-gray-300 rounded focus:ring-green-500"
                                                        type="checkbox"
                                                        value={permission.name}
                                                        checked={permissionsData.includes(
                                                            permission.name
                                                        )}
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                        id={`check-${permission.id}`}
                                                    />
                                                    <label
                                                        className="text-sm text-gray-700"
                                                        htmlFor={`check-${permission.id}`}
                                                    >
                                                        {permission.name}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    {errors.permissions && (
                                        <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.permissions}
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col mt-4 space-y-2 md:space-y-0 md:space-x-3 md:flex-row">
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center px-4 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:ring-green-300"
                                    >
                                        <i className="mr-2 fa fa-save"></i>{" "}
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center px-4 py-2 text-sm text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300"
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
            </main>
        </LayoutAccount>
    );
}
