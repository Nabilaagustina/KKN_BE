import React from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/react";
import hasAnyPermission from "../../../Utils/Permissions";
import Search from "../../../Shared/Search";
import Pagination from "../../../Shared/Pagination";
import Delete from "../../../Shared/Delete";

export default function UserIndex() {
    const { users } = usePage().props;

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
                <div className="mb-8 md:flex md:items-center md:justify-between">
                    <div className="flex flex-col w-full space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                        {/* Search Bar */}
                        <div className="flex-1 pr-4">
                            <Search URL="/account/users" />
                        </div>
                        {/* Add Button */}
                        <div className="md:flex-shrink-0">
                            <Link
                                href="/account/users/create"
                                className="flex items-center justify-center h-12 px-6 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700"
                            >
                                <i className="mr-2 fa fa-plus-circle"></i>
                                Add
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="overflow-hidden bg-white rounded-lg shadow-md">
                        <div className="p-4 text-white bg-green-600">
                            <span className="font-semibold">
                                <i className="mr-2 fa fa-users"></i> Users
                            </span>
                        </div>
                        <div className="p-4">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                No.
                                            </th>
                                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                Email Address
                                            </th>
                                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                Role
                                            </th>
                                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {users.data.map((user, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 text-sm text-left text-gray-500">
                                                    {index +
                                                        1 +
                                                        (users.current_page -
                                                            1) *
                                                            users.per_page}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700">
                                                    {user.roles.map(
                                                        (role, index) => (
                                                            <span
                                                                key={index}
                                                                className="inline-block px-2 py-1 mb-1 mr-2 text-xs font-semibold text-green-700 bg-green-100 rounded-md"
                                                            >
                                                                {role.name}
                                                            </span>
                                                        )
                                                    )}
                                                </td>
                                                <td className="flex items-center px-6 py-4 space-x-2 text-sm text-left">
                                                    {hasAnyPermission([
                                                        "users.edit",
                                                    ]) && (
                                                        <Link
                                                            href={`/account/users/${user.id}/edit`}
                                                            className="p-2 text-white transition duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600"
                                                        >
                                                            <i className="fa fa-pencil-alt"></i>
                                                        </Link>
                                                    )}
                                                    {hasAnyPermission([
                                                        "users.delete",
                                                    ]) && (
                                                        <Delete
                                                            URL="/account/users"
                                                            id={user.id}
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={users.links} align="end" />
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
