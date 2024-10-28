//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutIndex() {
    return (
        <LayoutWeb>
            <Head>
                {/* SEO Meta Tags */}
                <title>Tentang Desa Semambung - Wonoayu</title>
                <meta
                    name="description"
                    content="Kenali lebih dekat Desa Semambung, Wonoayu. Pelajari sejarah, budaya, dan potensi UMKM yang menjadikan desa ini unik dan berdaya saing."
                />
                <meta
                    name="keywords"
                    content="Tentang Desa, Semambung, Wonoayu, Sidoarjo, Sejarah, Budaya, UMKM, Usaha Mikro, Kecil, Menengah, Potensi Desa"
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
                <div className="grid-cols-2 md:grid md:relative">
                    <div>
                        <section
                            style={{ fontFamily: "Inter, sans-serif" }}
                            className="flex flex-col px-4 font-bold text-black gap-y-2 md:px-8"
                        >
                            <h1
                                style={{ fontFamily: "Inter, sans-serif" }}
                                className="text-[20px] font-bold md:text-[50px]"
                            >
                                TENTANG KAMI
                            </h1>
                            <hr className="border-b-4 border-black w-[90px] md:w-[148px]" />
                            <p
                                style={{ fontFamily: "Inter, sans-serif" }}
                                className="break-words text-[10px] md:text-[20px]"
                            >
                                Kami hadir untuk membantu UMKM warga desa
                                Semambung kec. Wonoayu Kab. Sidoarjo. Dengan
                                adanya website ini kami siap membantu
                                usaha-usaha warga desa Semambung agar dapat
                                mempermudah promosi usaha tersebut. Tujuan kami
                                adalah membuat UMKM warga desa dapat dikenal
                                sampai keluar daerah agar dapat mempermudah
                                transaksi jual beli dengan menggunakan website.
                            </p>
                        </section>

                        <div className="grid-cols-2 md:grid mt-7 md:mt-8">
                            <div>
                                <section
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                    className="flex flex-col px-4 font-bold text-black gap-y-2 md:px-8"
                                >
                                    <p
                                        style={{
                                            fontFamily: "Inter, sans-serif",
                                        }}
                                        className="text-[10px] md:text-[15px]"
                                    >
                                        JL. RAYA SEMAMBUNG NO. 296 SEMAMBUNG
                                        LOR, SEMAMBUNG KEC. WONOAYU KAB.
                                        SIDOARJO, JAWA TIMUR, 61261.
                                    </p>
                                </section>

                                <section
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                    className="flex flex-col px-4 font-bold text-black gap-y-2 mt-7 md:px-8"
                                >
                                    <div className="h-full">
                                        <ol className="mt-4 list-none">
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/desa.semambung.wny?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                                    className="flex items-center text-[10px] md:text-[16px]"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faInstagram}
                                                        size="2x"
                                                        color="#E4405F"
                                                    />
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "Inter, sans-serif",
                                                        }}
                                                        className="mx-3"
                                                    >
                                                        desa.semambung.wny
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://youtube.com/@seputardesasemambung?si=0Kvjl9JbqKjq79q-"
                                                    className="flex items-center text-[10px] md:text-[16px]"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faYoutube}
                                                        size="2x"
                                                        color="#FF0000"
                                                    />
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "Inter, sans-serif",
                                                        }}
                                                        className="mx-3"
                                                    >
                                                        seputar desa semambung
                                                    </span>
                                                </a>
                                            </li>
                                        </ol>
                                        <a
                                            href="http://semambung-wonoayu.desa.id/"
                                            className="flex items-center text-[10px] md:text-[16px]"
                                        >
                                            <FontAwesomeIcon
                                                icon={faInternetExplorer}
                                                size="2x"
                                                color="#0078D7"
                                            />
                                            <span
                                                style={{
                                                    fontFamily:
                                                        "Inter, sans-serif",
                                                }}
                                                className="mx-3"
                                            >
                                                http://semambung-wonoayu.desa.id/
                                            </span>
                                        </a>
                                    </div>
                                </section>
                            </div>

                            <div>
                                <section
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                    className="flex-col hidden font-bold text-black md:flex ml-14 gap-y-2 mt-14 md:text-center"
                                >
                                    <ol className="list-none mt-4 flex flex-col gap-y-3 text-[10px] md:text-[16px] md:text-left pl-4 md:pl-10 md:gap-y-10">
                                        <Link
                                            href="#"
                                            className="text-[#000000] hover:text-gray-600"
                                        >
                                            Berita
                                        </Link>
                                        <Link
                                            href="/productss"
                                            className="text-[#000000] hover:text-gray-600"
                                        >
                                            Produk
                                        </Link>
                                        <Link
                                            href="/categori"
                                            className="text-[#000000] hover:text-gray-300"
                                        >
                                            Categories
                                        </Link>
                                    </ol>
                                </section>
                            </div>
                        </div>

                        <section
                            style={{ fontFamily: "Inter, sans-serif" }}
                            className="flex-col hidden ml-16 text-black md:flex"
                        >
                            <p className="text-[10px] md:text-[25px] md:text-right md:pr-40">
                                @kkn1unnar2024
                            </p>
                        </section>
                    </div>

                    <div className="absolute bottom-0 right-0 items-end justify-end hidden w-48 h-48 bg-white rounded-tl-full md:flex md:w-1/4 md:h-1/2">
                        <img
                            src={"/Image/balai.png"}
                            alt=""
                            className="w-36 h-28 md:w-5/6 md:h-3/6 md:rounded-l-2xl"
                        />
                    </div>

                    <div className="relative flex flex-row h-full px-4 font-bold text-black md:hidden">
                        <div className="flex flex-col mt-4 gap-y-2">
                            <ol className="list-none mt-4 flex flex-col gap-y-3 text-[10px] md:text-[16px]">
                                <Link
                                    href="#"
                                    className="text-[#000000] hover:text-gray-600"
                                >
                                    Berita
                                </Link>
                                <Link
                                    href="/productss"
                                    className="text-[#000000] hover:text-gray-600"
                                >
                                    Produk
                                </Link>
                                <Link
                                    href="/categori"
                                    className="text-[#000000] hover:text-gray-300"
                                >
                                    Categories
                                </Link>
                            </ol>
                            <p
                                style={{ fontFamily: "Inter, sans-serif" }}
                                className="text-[10px] pt-6"
                            >
                                @kkn1unnar2024
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 flex items-end justify-end w-48 h-48 bg-white rounded-tl-full md:w-1/4 md:h-1/2">
                            <img
                                src={"/Image/balai.png"}
                                alt=""
                                className="w-36 h-28 md:w-5/6 md:h-3/6 md:rounded-l-2xl"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <section className="grid grid-cols-2 gap-4 mt-6 md:mt-10">
                        <p
                            style={{ fontFamily: "Inter, sans-serif" }}
                            className="text-[10px] md:text-[25px] break-words text-black pl-1 indent-1 md:pl-3"
                        >
                            Semambung adalah sebuah desa yang hijau dengan
                            keramahan warganya ini juga memiliki budaya unik
                            yang tidak kalah dengan desa lainnya seperti acara
                            karnaval, ruwah desa dll yang diselenggarakan
                            pada waktu tertentu yang terletak di wilayah
                            Kecamatan Wonoayu, Kabupaten Sidoarjo, Provinsi Jawa
                            Timur yang terdiri atas 2 RW dan 10 RT.
                        </p>
                        <img
                            src={"/Image/1.jpg"}
                            alt="Desa Semambung"
                            className="w-[178px] h-[153px] md:w-[429px] md:h-[379px] justify-self-center rounded-[12px]"
                        />
                    </section>

                    <section className="grid grid-cols-2 gap-4 mt-6 md:mt-10">
                        <img
                            src={"/Image/letak.jpg"}
                            alt="Letak Desa"
                            className="w-[178px] h-[153px] md:w-[429px] md:h-[379px] justify-self-center rounded-[12px]"
                        />
                        <p
                            style={{ fontFamily: "Inter, sans-serif" }}
                            className="text-[10px] md:text-[25px] break-words text-right text-black pr-1 md:pr-3 indent-1"
                        >
                            Letak desa ini berada di sebelah Utara desa ini
                            berbatasan dengan Desa Pagerngumbuk, di selatan
                            berbatasan dengan Desa Simoketawang, di sebelah
                            barat berbatasan dengan desa Simoangin Angin dan di
                            sebelah timur berbatasan dengan Desa Wonoayu.
                        </p>
                    </section>

                    <section
                        className="relative mt-6 md:mt-10 h-[334px] md:h-[457px] bg-cover bg-center"
                        style={{ backgroundImage: `url("/Image/1.jpg")` }}
                    >
                        <div className="absolute inset-0 bg-[#744440] opacity-60 z-10"></div>
                        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
                            <p
                                style={{ fontFamily: "Inter, sans-serif" }}
                                className="text-[10px] md:text-[25px] text-white mx-auto max-w-[90%] indent-2 md:indent-10"
                            >
                                Desa ini dilewati dua sungai yakni sungai yang
                                membelah RW 1 dengan RW 2 dan Kali Bader yang
                                berada di selatan desa. Asal usul penamaan Kali
                                Bader karena dulu banyak ditemukan ikan berjenis
                                Bader yang saat ini semakin susah ditemukan
                                karena pencemaran sungai. Akses ke desa ini
                                sangat mudah karena dilewati oleh Lyn
                                Krian-Sidoarjo yang beroperasi selama 24 jam.
                                Lyn tersebut berwarna orange dan sangat mudah
                                ditemukan. Sebagian besar wilayah Desa Semambung
                                masih berupa lahan persawahan dan perindustrian
                                kemudian selebihnya adalah pemukiman warga. Desa
                                ini cukup dekat dengan Puskesmas Wonoayu yang
                                menyediakan layanan kesehatan yg cukup lengkap
                                hingga pelayanan rawat inap.
                            </p>
                            <hr className="border-b-4 border-[#FDC300] w-11/12 mx-auto mt-4 md:mt-6" />
                        </div>
                    </section>

                    <section className="mt-6 md:mt-10">
                        <div className="flex items-center justify-center">
                            <p
                                style={{ fontFamily: "Inter, sans-serif" }}
                                className="text-[10px] md:text-[25px] text-center text-black mx-auto break-words max-w-[90%] indent-2 md:indent-10"
                            >
                                Desa ini memiliki 1 masjid besar dengan 2 lantai
                                di wilayah RT. 4 RW 2 bernama Masjid Baitul
                                Muttaqien yang digunakan untuk kegiatan ibadah.
                                Di desa ini terdapat beberapa sekolah formal
                                dari play group hingga Sekolah Menengah
                                Pertama/sederajat, play group dan taman
                                kanak-kanak Dharma Wanita yang terletak di
                                sebelah balai desa Semambung, play group dan
                                raudaltul ahfal Miftahul Jinan di RT 4 RW 2,
                                sekolah dasar negeri di dekat Jalan Raya
                                Semambung dan Madrasah Ibtidaiyah Miftahul Jinan
                                yg berada Di RT. 4 dan RT 3 RW 2, Sekolah
                                Menengah Pertama Negeri 1 Wonoayu yg berada Di
                                sebelah SDN Semambung. Di desa Semambung
                                terdapat lapangan sepak bola di sebelah timur
                                dari Sekolah Menengah Pertama Negeri 1 Wonoayu.
                                Di desa terdapat rumah sarang burung walet yg
                                berada Di dekat jalan Raya Semambung. Di desa
                                Semambung terdapat beberapa pabrik diantaranya
                                PT. Ciomas Adisatwa, PT. Comfeed dll. Wisata
                                kuliner yang dapat kita temukan disini yakni
                                Rujak Cingur di depan Masjid Baitul Muttaqien,
                                Bakso beranak dll.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </LayoutWeb>
    );
}
