//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import component slider
import CardProduct from "../../../Shared/CardProduct";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function ProductIndex() {
    //destruct props "products"
    const { products } = usePage().props;

    return (
        <LayoutWeb>
            <Head>
                {/* SEO Meta Tags */}
                <title>Produk UMKM Desa Semambung - Wonoayu</title>
                <meta
                    name="description"
                    content="Temukan berbagai produk unggulan dari UMKM Desa Semambung, Wonoayu. Mulai dari kerajinan tangan, kuliner, hingga produk inovatif lainnya."
                />
                <meta
                    name="keywords"
                    content="Produk UMKM, Semambung, Wonoayu, Sidoarjo, Kerajinan, Kuliner, Produk Lokal, Belanja Desa"
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
                            {/* Alert untuk menampilkan teks "All Products" */}
                            <div className="w-full">
                                <div className="p-4 text-center text-white bg-[#3BAFAB] rounded-lg shadow-sm">
                                    <strong>All Products</strong>
                                </div>
                            </div>

                            {/* Daftar produk */}
                            <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
                                {products.data && products.data.length > 0 ? (
                                    products.data.map((product, index) => (
                                        <CardProduct
                                            product={product}
                                            key={index}
                                        />
                                    ))
                                ) : (
                                    <p className="text-center col-span-full">
                                        No products available.
                                    </p>
                                )}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center mt-6">
                                <Pagination
                                    links={products.links}
                                    align="center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutWeb>
    );
}
