// Import React
import React from "react";

// Import Layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage
import { Head, usePage } from "@inertiajs/react";

// Import Search component
import Search from "../../../Shared/Search";

// Import Pagination component
import Pagination from "../../../Shared/Pagination";

export default function PermissionIndex() {
    // Destruct props "permissions"
    const { permissions } = usePage().props;

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
                <div className="container px-4 mx-auto mt-10">
                    {/* Search Section */}
                    <div className="flex flex-wrap justify-between mb-6">
                        <div className="w-full mb-4 md:w-2/3 lg:w-4/5 md:mb-0">
                            <Search URL={"/account/permissions"} />
                        </div>
                    </div>

                    {/* Permissions Table Section */}
                    <div className="overflow-x-auto">
                        <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex items-center p-4 text-white bg-green-500 rounded-t-lg">
                                <i className="mr-2 fa fa-key"></i>
                                <span className="text-xl font-bold">
                                    Permissions
                                </span>
                            </div>
                            <div className="p-4">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border-collapse">
                                        <thead>
                                            <tr className="text-sm font-semibold text-left text-gray-700 border-b">
                                                <th className="px-4 py-2 text-center">
                                                    No.
                                                </th>
                                                <th className="px-4 py-2">
                                                    Permission Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {permissions.data.map(
                                                (permission, index) => (
                                                    <tr
                                                        key={permission.id}
                                                        className="transition duration-200 ease-in-out border-t hover:bg-gray-100"
                                                    >
                                                        <td className="px-4 py-2 text-sm text-center text-gray-700">
                                                            {++index +
                                                                (permissions.current_page -
                                                                    1) *
                                                                    permissions.per_page}
                                                        </td>
                                                        <td className="px-4 py-2 text-sm text-gray-800">
                                                            {permission.name}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <Pagination
                                    links={permissions.links}
                                    align="end"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
