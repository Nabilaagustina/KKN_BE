//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/react";

import CardNews from "../../../Shared/CardNews";

export default function NewsIndex() {
    const { announcementNews, announcements } = usePage().props;

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
                <div className="mt-5">
                    <div className="flex items-center justify-center">
                        <div className="mx-auto flex w-full flex-col border-t-4 border-[#FF8A80] md:w-[80vw] md:border-t-[8px]">
                            <div className="grid grid-cols-2">
                                {/* Kiri */}
                                <div className="h-[39px] border-r-4 border-[#FF8A80] md:h-[132px] md:border-r-8">
                                    <h1 className="flex h-full items-center justify-center text-center text-[12px] font-bold md:text-[34px] lg:text-[42px] xl:text-[52px]">
                                        <p>
                                            <span className="font-['Maitree'] text-[#502C57]">
                                                BERITA{" "}
                                            </span>
                                            <span className="font-['Maitree'] text-[#016997]">
                                                UMKM
                                            </span>
                                        </p>
                                    </h1>
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div className="flex h-[21px] w-[60vw] items-center bg-[#FDC300] md:h-[40px] md:w-[76vw]">
                                    <p className="ml-2 text-[8px] font-bold text-[#016997] md:text-[16px] md:ml-4">
                                        DESA SEMAMBUNG, WONOAYU, SIDOARJO
                                    </p>
                                </div>
                                <div className="mb-[32px] h-[21px] flex-1 bg-[#76C6F8] md:h-[40px]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="relative mx-auto mb-[54px] flex flex-col md:w-[90vw] md:flex-row xl:w-[80vw]">
                            <div
                                className="h-[330px] w-full bg-[url('/Image/BeritaUMKM1.png')] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('/Image/BeritaUMKM1.png')",
                                }}
                            >
                                <div className="absolute left-0 top-0 z-10 h-full w-full bg-[#016997] opacity-60"></div>
                                <div className="absolute left-0 z-20 flex h-[330px] w-full transform flex-col justify-center text-center font-bold text-white md:left-0 md:ml-[32px] md:w-[40vw] md:translate-x-0 md:justify-center md:text-start">
                                    <h1 className="text-[48px]">
                                        LAPORAN UMKM
                                    </h1>
                                    <p className="mx-[25px] text-[24px] md:mx-0 lg:text-[28px]">
                                        Lebih dari 30 UMKM ada di Desa Semambung
                                        telah tersertifikasi halal MUI.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="h-[330px] w-full bg-[url('/Image/BeritaUMKM2.png')] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('/Image/BeritaUMKM2.png')",
                                }}
                            ></div>
                        </div>
                        <hr className="w-full mx-auto mb-[42px] border-b-8 border-[#FDC300] md:w-[80vw]" />
                    </div>
                </div>

                <div className="w-3/4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {announcementNews && announcementNews.length > 0 ? (
                            announcementNews.map((announcementNew, index) => (
                                <CardNews news={announcementNew} key={index} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">
                                No announcement available.
                            </p>
                        )}
                    </div>
                </div>

                <div className="mx-auto">
                    <div className="mt-[36px] flex flex-col items-center justify-center">
                        <div
                            className="relative mb-[14px] flex h-[180px] w-10/12 justify-center bg-[url('/gambar/bannerBeritaUMKM.jpg')] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/Image/tekno.png')",
                            }}
                        >
                            <div className="mb-28px absolute bottom-[18px] h-[100px] w-10/12 bg-[#FDC300]">
                                <h1 className="flex h-[100px] items-center justify-center text-center text-[16px] text-white md:text-[24px]">
                                    UMKM di Desa Semambung telah memanfaatkan
                                    teknologi, guna kemajuan bisnis.
                                </h1>
                            </div>
                            <div className="absolute left-0 top-0 flex h-[28px] w-[132px] translate-x-[-24px] translate-y-[-12px] items-center justify-center rounded-[60px] bg-[#FDC300] md:h-[36px] md:w-[240px]">
                                <h1 className="text-[20px] font-bold text-white">
                                    TEKNOLOGI
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto">
                    <div className="flex items-center justify-between mb-3">
                        {/* Categories Title */}
                        <div className="text-lg font-bold text-start">News</div>

                        {/* Link on the right */}
                        <div className="text-end">
                            <Link
                                href="/announcementss"
                                className="text-lg font-bold text-dark"
                            >
                                See More{" "}
                                <i className="fa fa-long-arrow-alt-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-3/4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {announcements && announcements.length > 0 ? (
                            announcements.map((announcement, index) => (
                                <CardNews news={announcement} key={index} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">
                                No announcement available.
                            </p>
                        )}
                    </div>
                </div>
            </main>
        </LayoutWeb>
    );
}
