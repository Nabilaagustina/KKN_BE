//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import component card category
import CardCategory from "../../../Shared/CardCategory";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function CategoryIndex() {
    //destruct props "categories"
    const { categories } = usePage().props;

    return (
        <LayoutWeb>
            <Head>
                {/* SEO Meta Tags */}
                <title>Kategori UMKM Desa Semambung - Wonoayu</title>
                <meta
                    name="description"
                    content="Jelajahi berbagai kategori UMKM di Desa Semambung, Wonoayu. Temukan produk lokal unggulan dari beragam sektor usaha yang berkembang di desa ini."
                />
                <meta
                    name="keywords"
                    content="Kategori UMKM, Semambung, Wonoayu, Sidoarjo, Produk Lokal, Sektor Usaha, Potensi Desa"
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
                                    <strong>All Categories</strong>
                                </div>
                            </div>

                            {/* Daftar kategori */}
                            <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
                                {categories && categories.data.length > 0 ? (
                                    categories.data.map((category, index) => (
                                        <CardCategory
                                            category={category}
                                            key={index}
                                        />
                                    ))
                                ) : (
                                    <p className="text-center col-span-full">
                                        No categories available.
                                    </p>
                                )}
                            </div>

                            {/* Pagination */}
                            {categories && categories.links.length > 0 && (
                                <div className="flex justify-center mt-8 mb-5">
                                    <Pagination
                                        links={categories.links}
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
