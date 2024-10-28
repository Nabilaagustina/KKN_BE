//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

export default function AnnouncementShow() {
    const { announcement } = usePage().props;

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
                <h1 className="text-[#016997] font-bold text-[20px] md:text-[50px] pt-0.5 md:pt-4 mx-4 md:mx-0 text-center">
                    {announcement.title}
                </h1>

                <section className="flex flex-col items-center px-4 md:flex-row md:mt-6 md:px-10">
                    <div className="mx-auto flex h-[207px] w-[230px] items-center justify-center md:h-[432px] md:w-[432px]">
                        <img
                            src={`/${announcement.image}`}
                            alt={announcement.title}
                            className="max-h-full max-w-full object-contain p-3 md:h-[321px] md:w-[317px]"
                        />
                    </div>

                    <div className="flex-1 px-4 mt-4 md:mt-0">
                        <div
                            className="text-[12px] pr-1 indent-1 md:text-[25px] md:pr-3"
                            dangerouslySetInnerHTML={{
                                __html: announcement.description,
                            }}
                        />
                    </div>
                </section>

                <section className="mt-6 md:mt-10">
                    <div className="flex items-center justify-center">
                        <p className="mx-auto max-w-[90%] break-words text-center text-[12px] text-[#C26861] indent-2 md:text-[25px] md:indent-10"></p>
                    </div>
                </section>
            </main>
        </LayoutWeb>
    );
}
