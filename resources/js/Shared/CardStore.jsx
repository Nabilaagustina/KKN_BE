//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/react";

export default function CardStore({ category }) {
    return (
        <>
            <div className="mb-4 bg-white col-6 sm:col-4 md:col-3 lg:col-2 rounded-[8px] hover:shadow-md">
                <Link
                    href={`/stores/${category.slug}`}
                    className="text-decoration-none text-dark"
                >
                    <div className="transition-shadow duration-300 border-0 rounded-lg shadow-sm card">
                        <div className="p-4 text-center card-body">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="mx-auto mb-4"
                                width="50"
                            />
                            <p className="text-sm font-semibold text-gray-800 card-title sm:text-base md:text-lg">
                                {category.name}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
