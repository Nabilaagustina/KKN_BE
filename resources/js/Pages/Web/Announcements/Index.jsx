//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

import CardNews from "../../../Shared/CardNews";

export default function AnnouncementsIndex() {
    const { announcements } = usePage().props;

    return (
        <LayoutWeb>
            <Head>
                {/* SEO Meta Tags */}
                <title>Berita Desa Semambung - Wonoayu</title>

                <meta
                    name="description"
                    content="Dapatkan berita terbaru dari Desa Semambung, Wonoayu. Baca perkembangan terkini seputar kegiatan, informasi penting, dan potensi UMKM di desa ini."
                />
                <meta
                    name="keywords"
                    content="Berita Desa, Semambung, Wonoayu, Sidoarjo, Kabar Desa, UMKM, Informasi Terbaru, Potensi Desa"
                />
                <meta name="author" content="Berita Desa Semambung" />

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
                                    <strong>All Announcements</strong>
                                </div>
                            </div>
                            {/* Daftar kategori */}
                            <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
                                {announcements &&
                                announcements.data.length > 0 ? (
                                    announcements.data.map(
                                        (announcement, index) => (
                                            <CardNews
                                                news={announcement}
                                                key={index}
                                            />
                                        )
                                    )
                                ) : (
                                    <p className="text-center col-span-full">
                                        No categories available.
                                    </p>
                                )}
                            </div>

                            {announcements &&
                                announcements.links.length > 0 && (
                                    <div className="flex justify-center mt-8 mb-5">
                                        <Pagination
                                            links={announcements.links}
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
