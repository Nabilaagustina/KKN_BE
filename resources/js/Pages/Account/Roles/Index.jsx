// Import React
import React from "react";

// Import Layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, Link from InertiaJS
import { Head, usePage, Link } from "@inertiajs/react";

// Import permissions utility
import hasAnyPermission from "../../../Utils/Permissions";

// Import Search component
import Search from "../../../Shared/Search";

// Import Pagination component
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function RoleIndex() {
    // Destruct props "roles"
    const { roles } = usePage().props;

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
                <div className="container px-4 mx-auto mt-8 md:px-0">
                    {/* Action and Search Section */}
                    <div className="mb-8 md:flex md:items-center md:justify-between">
                        {/* Search and Add New Role Button */}
                        <div className="flex flex-col w-full space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                            {/* Search */}
                            <div className="flex-1 pr-4">
                                <Search URL={"/account/roles"} />
                            </div>

                            {/* Add New Role Button */}
                            <div className="md:flex-shrink-0">
                                <Link
                                    href="/account/roles/create"
                                    className="flex items-center justify-center h-12 px-6 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700"
                                >
                                    <i className="mr-3 text-2xl fa fa-plus-circle"></i>
                                    <span className="text-lg font-semibold">
                                        Add New Role
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Roles Table Section */}
                    <div className="overflow-x-auto">
                        <div className="bg-white border-0 rounded-lg shadow-lg">
                            {/* Header */}
                            <div className="p-4 text-lg font-semibold text-white bg-green-600 rounded-t-lg">
                                <i className="mr-2 fa fa-shield-alt"></i> Roles
                            </div>

                            {/* Table Body */}
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full table-auto">
                                        <thead className="text-left bg-gray-100">
                                            <tr className="text-xs text-gray-500">
                                                <th className="px-4 py-3 text-sm font-semibold">
                                                    No.
                                                </th>
                                                <th className="px-4 py-3 text-sm font-semibold">
                                                    Role Name
                                                </th>
                                                <th className="px-4 py-3 text-sm font-semibold">
                                                    Permissions
                                                </th>
                                                <th className="px-4 py-3 text-sm font-semibold">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roles.data.map((role, index) => (
                                                <tr
                                                    key={role.id}
                                                    className="transition duration-300 ease-in-out hover:bg-gray-50"
                                                >
                                                    <td className="px-4 py-4 text-sm text-center text-gray-600">
                                                        {++index +
                                                            (roles.current_page -
                                                                1) *
                                                                roles.per_page}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-700">
                                                        {role.name}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm">
                                                        {role.permissions.map(
                                                            (
                                                                permission,
                                                                index
                                                            ) => (
                                                                <span
                                                                    key={index}
                                                                    className="inline-block px-2 py-1 mb-2 mr-2 text-xs font-semibold text-green-700 bg-green-100 rounded-full"
                                                                >
                                                                    {
                                                                        permission.name
                                                                    }
                                                                </span>
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-4 text-center">
                                                        <div className="flex justify-center space-x-3">
                                                            {hasAnyPermission([
                                                                "roles.edit",
                                                            ]) && (
                                                                <Link
                                                                    href={`/account/roles/${role.id}/edit`}
                                                                    className="p-2 text-white transition duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600"
                                                                >
                                                                    <i className="fa fa-pencil-alt"></i>
                                                                </Link>
                                                            )}
                                                            {hasAnyPermission([
                                                                "roles.delete",
                                                            ]) && (
                                                                <Delete
                                                                    URL={
                                                                        "/account/roles"
                                                                    }
                                                                    id={role.id}
                                                                />
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={roles.links} align="end" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
