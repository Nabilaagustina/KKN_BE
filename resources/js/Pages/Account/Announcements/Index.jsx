// Import React
import React from "react";

// Import layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/react";

// Import permissions
import hasAnyPermission from "../../../Utils/Permissions";

// Import component search
import Search from "../../../Shared/Search";

// Import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function ProductIndex() {
    // Destructure props "Announcements"
    const { announcements } = usePage().props;

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
                <div className="mt-5">
                    <div className="mb-8 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col w-full space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                            <div className="flex-1 pr-4">
                                <Search URL={"/account/announcements"} />
                            </div>
                            <div className="md:flex-shrink-0">
                                <Link
                                    href="/account/announcements/create"
                                    className="flex items-center justify-center h-12 px-6 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700"
                                >
                                    <i className="mr-2 fa fa-plus-circle"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 mb-6">
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="p-4 text-white bg-green-600 rounded-t-lg">
                            <h5 className="flex items-center font-semibold">
                                <i className="mr-2 fa fa-shopping-bag"></i>{" "}
                                Announcements
                            </h5>
                        </div>
                        <div className="p-6">
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="w-12 px-4 py-2 text-sm font-medium text-left">
                                                No.
                                            </th>
                                            <th className="w-1/4 px-4 py-2 text-sm font-medium text-left">
                                                Title
                                            </th>
                                            <th className="w-1/4 px-4 py-2 text-sm font-medium text-left">
                                                Image
                                            </th>
                                            <th className="w-1/4 px-4 py-2 text-sm font-medium text-left">
                                                description
                                            </th>
                                            <th className="w-1/4 px-4 py-2 text-sm font-medium text-left">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {announcements.data.map(
                                            (announcement, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b"
                                                >
                                                    <td className="px-4 py-2 text-left">
                                                        {++index +
                                                            (announcements.current_page -
                                                                1) *
                                                                announcements.per_page}
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        {announcement.title}
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <img
                                                            src={`/${announcement.image}`} // Absolute URL for testing
                                                            alt={
                                                                announcement.image
                                                            }
                                                            className="w-10 h-10 rounded-md sm:w-12 sm:h-12"
                                                        />
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        {
                                                            announcement.description
                                                        }
                                                    </td>

                                                    <td className="px-4 py-2 text-left">
                                                        {hasAnyPermission([
                                                            "announcements.show",
                                                        ]) && (
                                                            <Link
                                                                href={`/account/announcements/${announcement.id}`}
                                                                className="inline-block px-3 py-1 mr-2 text-sm text-white bg-gray-800 rounded hover:bg-gray-900"
                                                            >
                                                                <i className="fa fa-eye"></i>
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "announcements.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/account/announcements/${announcement.id}/edit`}
                                                                className="inline-block px-3 py-1 mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "announcements.delete",
                                                        ]) && (
                                                            <Delete
                                                                URL={
                                                                    "/account/announcements"
                                                                }
                                                                id={
                                                                    announcement.id
                                                                }
                                                            />
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <Pagination
                                links={announcements.links}
                                align={"end"}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
