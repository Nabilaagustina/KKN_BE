// Import React
import React, { useState } from "react";

// Import layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage and router from InertiaJS
import { Head, usePage, router } from "@inertiajs/react";

// Import Sweet Alert
import Swal from "sweetalert2";

export default function RoleCreate() {
    // Destruct props "errors" & "permissions"
    const { errors, permissions } = usePage().props;

    // Define state
    const [name, setName] = useState("");
    const [permissionsData, setPermissionsData] = useState([]);

    // Define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        let data = [...permissionsData];

        // Check if the permission is already in the state
        if (data.includes(value)) {
            // Remove it if it exists
            data = data.filter((item) => item !== value);
        } else {
            // Add it if it doesn't exist
            data.push(value);
        }

        // Set data to state
        setPermissionsData(data);
    };

    // Define reset method
    const resetForm = () => {
        setName(""); // Reset the role name to an empty string
        setPermissionsData([]); // Reset the permissionsData to an empty array
    };

    // Define method to store the role
    const storeRole = async (e) => {
        e.preventDefault();

        // Sending data
        router.post(
            "/account/roles",
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
                <div className="container mx-auto mt-6">
                    <div className="overflow-hidden bg-white rounded-lg shadow-md">
                        <div className="flex items-center p-4 text-white bg-green-500 rounded-t-lg">
                            <h2 className="text-xl font-semibold">
                                <i className="fa fa-shield-alt"></i> Add New
                                Role
                            </h2>
                        </div>
                        <div className="px-6 py-4">
                            <form onSubmit={storeRole}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="roleName"
                                        className="block text-sm font-bold text-gray-700"
                                    >
                                        Role Name
                                    </label>
                                    <input
                                        type="text"
                                        id="roleName"
                                        className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Enter Role Name"
                                    />
                                    {errors.name && (
                                        <div className="relative px-4 py-3 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                <hr className="my-4 border-t border-gray-300" />

                                <div className="mb-4">
                                    <label className="block text-sm font-bold text-gray-700">
                                        Permissions
                                    </label>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {permissions.map(
                                            (permission, index) => (
                                                <div
                                                    className="flex items-center"
                                                    key={index}
                                                >
                                                    <input
                                                        className="mr-2"
                                                        type="checkbox"
                                                        id={`check-${permission.id}`}
                                                        value={permission.name}
                                                        checked={permissionsData.includes(
                                                            permission.name
                                                        )}
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={`check-${permission.id}`}
                                                        className="text-gray-700"
                                                    >
                                                        {permission.name}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {errors.permissions && (
                                        <div className="relative px-4 py-3 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.permissions}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col items-center justify-end mt-4 space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-white transition duration-300 bg-green-600 rounded-md hover:bg-green-700"
                                    >
                                        <i className="mr-2 fa fa-save"></i> Save
                                    </button>
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-white transition duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600"
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
