// Import React
import React from "react";

// Import Link from InertiaJS
import { Link } from "@inertiajs/react";

export default function Pagination({ links, align = "center" }) {
    // Determine the Tailwind alignment class based on the 'align' prop
    const alignmentClass =
        align === "start"
            ? "justify-start"
            : align === "end"
            ? "justify-end"
            : "justify-center";

    return (
        <nav className="flex items-center justify-center w-full mt-4">
            <ul className={`flex flex-wrap ${alignmentClass} gap-2`}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            className={`w-10 h-10 border text-sm rounded-md transition-all flex items-center justify-center 
                                ${
                                    !link.url
                                        ? "pointer-events-none opacity-50 cursor-not-allowed bg-gray-200"
                                        : "hover:bg-gray-200"
                                }
                                ${
                                    link.active
                                        ? "bg-green-500 text-white"
                                        : "bg-white text-gray-700"
                                }`}
                            href={link.url || "#"}
                        >
                            {/* Render the label safely */}
                            <span
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
