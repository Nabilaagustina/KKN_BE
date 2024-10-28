import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";

export default function Menu() {
    return (
        <>
            <section className="relative">
                <a
                    href="https://wa.me/yourphonenumber"
                    className="bg-[#25D366] p-3 rounded-full fixed bottom-4 left-4 z-30"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 md:w-[72px] md:h-[77px] text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20.52 3.48C18.37 1.34 15.51.25 12.46.25c-6.02 0-10.93 4.91-10.93 10.93 0 1.92.49 3.81 1.42 5.47L1.25 22.75l6.39-1.66c1.59.87 3.39 1.32 5.3 1.32 6.02 0 10.93-4.91 10.93-10.93 0-3.05-1.09-5.91-3.35-8.17zM12.46 20.6c-1.64 0-3.24-.43-4.65-1.24l-.33-.19-3.78.98 1.01-3.7-.22-.34C3.36 15.02 2.89 13.77 2.89 12.46c0-5.27 4.3-9.56 9.56-9.56 2.56 0 4.96 1 6.77 2.82 1.81 1.81 2.82 4.22 2.82 6.77 0 5.27-4.29 9.56-9.58 9.56zm5.42-7.82c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.92 1.11-.17.19-.34.22-.62.07-.28-.14-1.18-.44-2.26-1.4-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.42.12-.56.12-.12.28-.34.42-.51.14-.19.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.62-1.48-.85-2.02-.22-.53-.44-.45-.64-.45-.16 0-.35 0-.54 0-.19 0-.5.07-.77.35-.26.28-1 1-1 2.45s1.02 2.84 1.16 3.04c.14.19 2 3.06 4.85 4.29.68.29 1.21.46 1.63.6.68.22 1.3.19 1.78.12.54-.07 1.66-.68 1.9-1.34.24-.66.24-1.24.17-1.34-.07-.1-.26-.19-.54-.33z" />
                    </svg>
                </a>
            </section>

            <footer className="bg-[#3BAFAB] py-4">
                <div className="grid grid-cols-2 border-t-2 border-b-2">
                    <div className="flex flex-col h-full px-4 text-white border-r-2">
                        <h3 className="text-[10px] md:text-[25px] text-center mt-5">
                            Terhubung Dengan Kami
                        </h3>
                        <p className="text-[9px] md:text-[24px] break-words mt-4">
                            JL. RAYA SEMAMBUNG NO. 296 SEMAMBUNG LOR, SEMAMBUNG
                            KEC. WONOAYU KAB. SIDOARJO, JAWA TIMUR, 61261.
                        </p>
                        <ol className="mt-4 list-none">
                            <li className="flex items-center">
                                <a
                                    href="https://www.instagram.com/desa.semambung.wny?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    className="flex items-center text-[9px] md:text-[24px]"
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="2x"
                                        color="#E4405F"
                                    />
                                    <span className="mx-3">
                                        desa.semambung.wny
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="https://youtube.com/@seputardesasemambung?si=0Kvjl9JbqKjq79q-"
                                    className="flex items-center text-[9px] md:text-[24px]"
                                >
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        size="2x"
                                        color="#FF0000"
                                    />
                                    <span className="mx-3">
                                        seputar desa semambung
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faInternetExplorer}
                                    size="2x"
                                    color="#0078D7"
                                />
                                <a
                                    href="http://semambung-wonoayu.desa.id/"
                                    className="text-[8px] self-start pt-2 md:text-[24px]"
                                >
                                    <span className="mx-3">
                                        http://semambung-wonoayu.desa.id/
                                    </span>
                                </a>
                            </li>
                        </ol>
                    </div>

                    <div className="flex flex-col h-full px-4 text-center text-white gap-y-5">
                        <h3 className="text-[10px] mt-5 font-bold md:text-[25px]">
                            DESA SEMAMBUNG
                        </h3>
                        <Link
                            href="/news"
                            className="text-white hover:text-gray-600"
                        >
                            Berita
                        </Link>
                        <Link
                            href="/productss"
                            className="text-white hover:text-gray-600"
                        >
                            Produk
                        </Link>
                        <Link
                            href="/categori"
                            className="text-white hover:text-gray-300"
                        >
                            Categories
                        </Link>
                        <a
                            href="/about"
                            className="text-[10px] self-center md:text-[25px] font-bold flex items-center justify-center"
                        >
                            <span>TENTANG KAMI</span>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center mt-2 md:mt-3">
                    <p className="text-white text-[11px] md:text-[25px]">
                        @kkn1unnar2024
                    </p>
                </div>
            </footer>
        </>
    );
}
