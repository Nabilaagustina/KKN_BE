//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/react";

//import component card category
import CardCategory from "../../../Shared/CardCategory";

import CardStore from "../../../Shared/CardStore";

//import component slider
import CardProduct from "../../../Shared/CardProduct";

export default function HomeIndex() {
    //destruct props "categories", "products"
    const { categories, products, stores } = usePage().props;

    return (
        <LayoutWeb>
            <Head>
                {/* SEO Meta Tags */}
                <title>Beranda - UMKM Desa Semambung Wonoayu</title>
                <meta
                    name="description"
                    content="Selamat datang di UMKM Desa Semambung Wonoayu. Temukan berbagai produk unggulan dari lebih dari 40 UMKM yang telah berkembang di Desa Semambung, Wonoayu, Sidoarjo."
                />
                <meta
                    name="keywords"
                    content="Beranda, UMKM, Desa Semambung, Wonoayu, Sidoarjo, Produk Lokal, UKM, Usaha Mikro, Kecil, Menengah, Bisnis"
                />
                <meta name="author" content="UMKM Desa Semambung" />

                {/* Favicon / Icon */}
                <link
                    rel="icon"
                    href={"/Image/logoDesa.png"}
                    type="image/x-icon"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={"/Image/logoDesa.png"}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={"/Image/logoDesa.png"}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={"/Image/logoDesa.png"}
                />
            </Head>

            <main>
                <div className="container relative px-4 mx-auto mt-4 mb-5">
                    {/* Bagian gambar dan teks UMKM */}
                    <div
                        className="grid grid-cols-1 gap-4 mb-8 bg-center bg-cover md:grid-cols-2 place-items-center"
                        style={{
                            backgroundImage: "url('/Image/UMKM.png')",
                        }}
                    >
                        {" "}
                        {/* Hapus absolute */}
                        <div className="flex justify-center">
                            <img
                                src={"/Image/paperbag.jpg"}
                                alt="Paperbag Image"
                                className="w-[269px] h-[236px] md:w-[469px] md:h-[411px] mb-4 md:mb-0 p-4"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-white font-bold text-[24px] md:text-[42px] mb-4 md:mb-2">
                                UMKM
                                <br />
                                DESA SEMAMBUNG, WONOAYU
                            </h3>

                            <hr className="border-b-8 border-[#FDC300] w-full md:w-11/12 mb-2" />

                            <h4 className="text-white text-[12px] md:text-[18px] font-bold mt-2 break-words w-full md:w-11/12 mb-4">
                                UMKM di Desa Semambung tak kalah majunya.{" "}
                                <br className="md:hidden" />
                                Terdapat lebih dari 40 lebih UMKM yang telah
                                berjalan di Desa Semambung, Wonoayu, Sidoarjo.
                            </h4>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                        {/* Categories Title */}
                        <div className="text-lg font-bold text-start">
                            Categories
                        </div>

                        {/* Link on the right */}
                        <div className="text-end">
                            <Link
                                href="/categori"
                                className="text-lg font-bold text-dark"
                            >
                                See More{" "}
                                <i className="fa fa-long-arrow-alt-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {categories && categories.length > 0 ? (
                            categories.map((category, index) => (
                                <CardCategory category={category} key={index} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">
                                No categories available.
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                        {/* Categories Title */}
                        <div className="text-lg font-bold text-start">
                            Store
                        </div>

                        {/* Link on the right */}
                        <div className="text-end">
                            <Link
                                href="/storess"
                                className="text-lg font-bold text-dark"
                            >
                                See More{" "}
                                <i className="fa fa-long-arrow-alt-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {stores && stores.length > 0 ? (
                            stores.map((store, index) => (
                                <CardStore category={store} key={index} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">
                                No stores available.
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-between mt-4 mb-3">
                        {/* Title on the left */}
                        <div className="text-lg font-bold text-start">
                            Latest Products
                        </div>

                        {/* Link on the right */}
                        <div className="text-end">
                            <Link
                                href="/productss"
                                className="text-lg font-bold text-dark"
                            >
                                See More{" "}
                                <i className="fa fa-long-arrow-alt-right"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Konten produk */}
                    <div className="grid grid-cols-1 gap-6 px-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products && products.length > 0 ? (
                            products.map((product, index) => (
                                <CardProduct product={product} key={index} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">
                                No products available.
                            </p>
                        )}
                    </div>
                </div>
            </main>
        </LayoutWeb>
    );
}
