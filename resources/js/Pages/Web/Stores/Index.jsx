//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import component card category
import CardStore from "../../../Shared/CardStore";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function StoreIndex() {
    //destruct props "stores"
    const { stores } = usePage().props;

    return (
        <LayoutWeb>
            <Head>
                {/* SEO Meta Tags */}
                <title>Toko UMKM Desa Semambung - Wonoayu</title>
                <meta
                    name="description"
                    content="Belanja produk unggulan dari UMKM Desa Semambung, Wonoayu secara online. Dukung produk lokal dan temukan berbagai penawaran menarik."
                />
                <meta
                    name="keywords"
                    content="Toko UMKM, Semambung, Wonoayu, Sidoarjo, Belanja Online, Produk Lokal, Penawaran, UMKM, Store"
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
                <div className="container px-4 mx-auto mt-20 mb-5">
                    <div className="flex justify-center">
                        <div className="w-full md:w-3/4">
                            {/* Alert untuk judul kategori */}
                            <div className="w-full">
                                <div className="p-4 text-center text-white bg-[#3BAFAB] rounded-lg shadow-sm">
                                    <strong>All Stores</strong>
                                </div>
                            </div>

                            {/* Daftar kategori */}
                            <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
                                {stores && stores.data.length > 0 ? (
                                    stores.data.map((store, index) => (
                                        <CardStore
                                            category={store}
                                            key={index}
                                        />
                                    ))
                                ) : (
                                    <p className="text-center col-span-full">
                                        No stores available.
                                    </p>
                                )}
                            </div>

                            {/* Pagination */}
                            {stores && stores.links.length > 0 && (
                                <div className="flex justify-center mt-8 mb-5">
                                    <Pagination
                                        links={stores.links}
                                        align="center"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </LayoutWeb>
    );
}
