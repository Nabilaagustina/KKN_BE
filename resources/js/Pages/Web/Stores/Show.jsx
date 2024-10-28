//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import component slider
import CardProduct from "../../../Shared/CardProductStores";

export default function StoreShow() {
    //destruct props "Store"
    const { store } = usePage().props;

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
                            {/* Alert untuk nama kategori */}
                            <div className="w-full">
                                <div className="p-4 text-center text-white bg-[#3BAFAB] rounded-lg shadow-sm">
                                    Product Store: <strong>{store.name}</strong>
                                </div>
                            </div>

                            {/* Daftar produk */}
                            <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
                                {store.products && store.products.length > 0 ? (
                                    store.products.map((product, index) => (
                                        <CardProduct
                                            product={product}
                                            key={index}
                                        />
                                    ))
                                ) : (
                                    <p className="text-center col-span-full">
                                        No products available in this store.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutWeb>
    );
}
