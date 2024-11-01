//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link, router } from "@inertiajs/react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import formatPrice
import FormatPrice from "../../../Utils/FormatPrice";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import Sweet Alert
import Swal from "sweetalert2";

export default function TransactionIndex() {
    //destruct props "transactions"
    const { transactions } = usePage().props;

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
                <div className="flex flex-col items-center px-2 mt-5 space-y-4">
                    <div className="w-full max-w-lg">
                        <Search URL={"/account/transactions"} />
                    </div>
                </div>

                <div className="w-full max-w-6xl px-2 mx-auto mt-5">
                    <div className="w-full bg-white border rounded-lg shadow-sm">
                        <div className="p-4 text-white bg-green-500 rounded-t">
                            <span className="font-bold">
                                <i className="fa fa-shopping-cart"></i>{" "}
                                Transactions
                            </span>
                        </div>
                        <div className="p-4">
                            <div className="overflow-x-auto">
                                <table className="min-w-full border rounded-lg table-auto">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-sm text-left">
                                                No.
                                            </th>
                                            <th className="px-4 py-2 text-sm text-left">
                                                Full Name
                                            </th>
                                            <th className="px-4 py-2 text-sm text-left">
                                                Full Store
                                            </th>
                                            <th className="px-4 py-2 text-sm text-left">
                                                Grand Total
                                            </th>
                                            <th className="px-4 py-2 text-sm text-left">
                                                Status
                                            </th>
                                            <th className="px-4 py-2 text-sm text-left">
                                                Created At
                                            </th>
                                            <th className="px-4 py-2 text-sm text-left">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.data.map(
                                            (transaction, index) => (
                                                <tr
                                                    key={index}
                                                    className="text-sm border-t"
                                                >
                                                    <td className="px-4 py-2 text-center">
                                                        {++index +
                                                            (transactions.current_page -
                                                                1) *
                                                                transactions.per_page}
                                                    </td>
                                                    <td className="px-4 py-2 break-words">
                                                        {transaction.user.name}
                                                    </td>
                                                    <td className="px-4 py-2 break-words">
                                                        {transaction?.transaction_details?.map(
                                                            (
                                                                detailTrans,
                                                                index
                                                            ) => (
                                                                <li key={index}>
                                                                    {
                                                                        detailTrans
                                                                            ?.product
                                                                            ?.store
                                                                            ?.name
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 break-words">
                                                        Rp.{" "}
                                                        {FormatPrice(
                                                            transaction.grand_total
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 text-center">
                                                        {transaction.status ==
                                                            "UNPAID" && (
                                                            <span className="px-2 py-1 text-xs text-white bg-yellow-500 rounded">
                                                                UNPAID
                                                            </span>
                                                        )}
                                                        {transaction.status ==
                                                            "PAID" && (
                                                            <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">
                                                                PAID
                                                            </span>
                                                        )}
                                                        {transaction.status ==
                                                            "CANCELLED" && (
                                                            <span className="px-2 py-1 text-xs text-white bg-red-500 rounded">
                                                                CANCELLED
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 break-words">
                                                        {transaction.created_at}
                                                    </td>
                                                    <td className="px-4 py-2 text-center">
                                                        {hasAnyPermission([
                                                            "transactions.show",
                                                        ]) && (
                                                            <Link
                                                                href={`/account/transactions/${transaction.invoice}`}
                                                                className="text-blue-500 hover:text-blue-700"
                                                            >
                                                                <i className="fa fa-list-ul"></i>
                                                            </Link>
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-end mt-4">
                                <Pagination
                                    links={transactions.links}
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
