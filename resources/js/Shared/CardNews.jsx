//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/react";

export default function CardNews({ news }) {
    return (
        <>
            <div className="mb-4 bg-white col-6 sm:col-4 md:col-3 lg:col-2 rounded-[8px] hover:shadow-md">
                <Link
                    href={`/announcement/${news.slug}`}
                    className="text-decoration-none text-dark"
                >
                    <div className="transition-shadow duration-300 border-0 rounded-lg shadow-sm card">
                        <div className="p-4 text-center card-body">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="mx-auto mb-4"
                                width="50"
                            />
                            <p className="text-sm font-semibold text-gray-800 card-title sm:text-base md:text-lg">
                                {news.title}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
