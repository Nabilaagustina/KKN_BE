//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import formatPrice
import FormatPrice from "../../../Utils/FormatPrice";

export default function TransactionShow() {
    //destruct props "transaction"
    const { transaction } = usePage().props;

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
                <div className="px-4 mt-4 mb-4 md:px-6 lg:px-8">
                    <div className="w-full overflow-hidden bg-white border rounded-lg shadow-sm">
                        <div className="p-4 text-white bg-green-500">
                            <span className="font-bold">
                                <i className="fa fa-shopping-cart"></i> Detail
                                Transaction
                            </span>
                        </div>
                        <div className="p-4">
                            <table className="w-full text-sm">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="w-1/3 py-2 font-semibold">
                                            NO. INVOICE
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-2 break-words">
                                            {transaction.invoice}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">
                                            FULL NAME
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-2">
                                            {transaction.user.name}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">
                                            COURIER / SERVICE / COST
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-2">
                                            {transaction.courier_name} /{" "}
                                            {transaction.courier_service} / Rp.{" "}
                                            {FormatPrice(
                                                transaction.courier_cost
                                            )}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">
                                            CITY
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-2">
                                            {transaction.city.name}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">
                                            PROVINCE
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-2">
                                            {transaction.province.name}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">
                                            ADDRESS
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-2 break-words">
                                            {transaction.address}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">
                                            GRAND TOTAL
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-2">
                                            Rp.{" "}
                                            {FormatPrice(
                                                transaction.grand_total
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">
                                            STATUS
                                        </td>
                                        <td className="py-2">:</td>
                                        <td className="py-3">
                                            {transaction.status == "UNPAID" && (
                                                <a
                                                    href={`https://app-sandbox.duitku.com/redirect_checkout?reference=${transaction.reference}&lang=id`}
                                                    className="block px-4 py-2 text-sm text-center text-white bg-green-500 rounded shadow-sm"
                                                >
                                                    PAY NOW
                                                </a>
                                            )}
                                            {transaction.status == "PAID" && (
                                                <button className="block px-4 py-2 text-sm text-center text-white bg-green-500 rounded shadow-sm">
                                                    <i className="fa fa-check-circle"></i>{" "}
                                                    PAID
                                                </button>
                                            )}
                                            {transaction.status ==
                                                "CANCELLED" && (
                                                <button className="block px-4 py-2 text-sm text-center text-white bg-red-500 rounded shadow-sm">
                                                    <i className="fa fa-times"></i>{" "}
                                                    CANCELLED
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="w-full mt-4 overflow-hidden bg-white border rounded-lg shadow-sm">
                        <div className="p-4 text-white bg-green-500">
                            <span className="font-bold">
                                <i className="fa fa-shopping-bag"></i> Detail
                                Product
                            </span>
                        </div>
                        <div className="p-4 space-y-6">
                            {transaction.transaction_details.map(
                                (detail, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-12 gap-4"
                                    >
                                        <div className="col-span-12 sm:col-span-3">
                                            <img
                                                src={detail.product_image}
                                                className="w-full h-auto rounded-lg"
                                                alt={detail.product.title}
                                            />
                                        </div>
                                        <div className="col-span-12 sm:col-span-9">
                                            <h4 className="text-lg font-semibold">
                                                {detail.product.title}
                                            </h4>

                                            <div className="grid grid-cols-2 gap-4 mt-2">
                                                <div>
                                                    <p>
                                                        Qty:{" "}
                                                        <strong>
                                                            {detail.qty}
                                                        </strong>
                                                    </p>
                                                    <p className="mt-2">
                                                        Size:{" "}
                                                        <strong>
                                                            {detail.size}
                                                        </strong>
                                                    </p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div>Color: </div>
                                                    <img
                                                        src={detail.color_image}
                                                        alt={detail.color}
                                                        className="w-6 h-6 border rounded-full"
                                                    />
                                                    <p className="ml-2">
                                                        <strong>
                                                            {detail.color}
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>

                                            <hr className="my-2" />

                                            <h5 className="font-bold">
                                                Rp. {FormatPrice(detail.price)}
                                            </h5>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
