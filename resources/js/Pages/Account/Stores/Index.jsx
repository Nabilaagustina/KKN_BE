//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function StoreIndex() {
    // Destructure props
    const { stores, appUrl } = usePage().props;

    // Function to get the full image URL
    const getImageUrl = (imagePath) => {
        return imagePath ? `/storage/${imagePath}` : "/Images/image.png"; // Adjust as necessary
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
                <div className="mt-5">
                    <div className="mb-8 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col w-full space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                            <div className="flex-1 pr-4">
                                <Search URL={"/account/stores"} />
                            </div>
                            <div className="md:flex-shrink-0">
                                <Link
                                    href="/account/stores/create"
                                    className="flex items-center justify-center h-12 px-6 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-6">
                    <div className="w-full mx-auto max-w-7xl">
                        <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                            <div className="p-4 text-white bg-green-600 rounded-t-lg">
                                <h5 className="font-semibold">
                                    <i className="fa fa-folder"></i> Store
                                </h5>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-2 py-2 text-xs font-medium text-left sm:px-4 sm:text-sm">
                                                    No.
                                                </th>
                                                <th className="px-2 py-2 text-xs font-medium text-left sm:px-4 sm:text-sm">
                                                    Store Name
                                                </th>
                                                <th className="px-2 py-2 text-xs font-medium text-left sm:px-4 sm:text-sm">
                                                    Image
                                                </th>
                                                <th className="px-2 py-2 text-xs font-medium text-left sm:px-4 sm:text-sm">
                                                    No. Telp
                                                </th>
                                                <th className="px-2 py-2 text-xs font-medium text-left sm:px-4 sm:text-sm">
                                                    Address
                                                </th>
                                                <th className="px-2 py-2 text-xs font-medium text-left sm:px-4 sm:text-sm">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {stores.data.map((store, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b"
                                                >
                                                    <td className="px-2 py-2 text-left sm:px-4">
                                                        {++index +
                                                            (stores.current_page -
                                                                1) *
                                                                stores.per_page}
                                                    </td>
                                                    <td className="px-2 py-2 sm:px-4">
                                                        {store.name}
                                                    </td>
                                                    <td className="px-2 py-2 text-center sm:px-4">
                                                        <img
                                                            src={`/${store.image}`} // Absolute URL for testing
                                                            alt={store.image}
                                                            className="w-10 h-10 rounded-md sm:w-12 sm:h-12"
                                                        />
                                                    </td>
                                                    <td className="px-2 py-2 sm:px-4">
                                                        {store.telp}
                                                    </td>
                                                    <td className="px-2 py-2 sm:px-4">
                                                        {store.address}
                                                    </td>

                                                    <td className="px-2 py-2 text-left sm:px-4">
                                                        <div className="inline-flex space-x-2">
                                                            {hasAnyPermission([
                                                                "stores.edit",
                                                            ]) && (
                                                                <Link
                                                                    href={`/account/stores/${store.id}/edit`}
                                                                    className="px-2 py-1 text-xs text-white bg-blue-600 rounded-md hover:bg-blue-700 sm:px-3 sm:text-sm"
                                                                >
                                                                    <i className="fa fa-pencil-alt"></i>
                                                                </Link>
                                                            )}
                                                            {hasAnyPermission([
                                                                "stores.delete",
                                                            ]) && (
                                                                <Delete
                                                                    URL={
                                                                        "/account/stores"
                                                                    }
                                                                    id={
                                                                        store.id
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination
                                    links={stores.links}
                                    align={"end"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
