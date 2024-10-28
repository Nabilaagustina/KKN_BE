import React from "react";
import { Link } from "@inertiajs/react";
import FormatPrice from "../Utils/FormatPrice";

export default function CardProductCategories({ product }) {
    return (
        <>
            {/* Product Card */}
            <div className="flex flex-col h-full overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <Link
                    href={`/products/${product.slug}`}
                    className="flex-grow text-gray-800 no-underline"
                >
                    {/* Product Image */}
                    <div className="w-full h-0 pb-[100%] bg-gray-100 relative">
                        {/* Aspect ratio trick: using `pb-[100%]` to create a square */}
                        {product.product_images.length > 0 ? (
                            <img
                                src={`/${product.product_images[0].image.replace(
                                    "categories/",
                                    ""
                                )}`}
                                alt={product.title}
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        ) : (
                            <img
                                src={"/Image/image.png"}
                                alt="Placeholder"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col flex-grow p-4">
                        <h6 className="font-semibold text-center truncate text-md">
                            {product.title}
                        </h6>
                    </div>
                </Link>

                <div className="p-4 border-t bg-gray-50">
                    <div className="flex justify-center">
                        <div className="text-lg font-bold">
                            {product.store.name}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-grow p-4">
                    <h6 className="font-semibold text-center truncate text-md">
                        {product.store.address}
                    </h6>
                </div>

                <div className="flex flex-col flex-grow p-4">
                    <a
                        href={`https://wa.me/${product.store.telp}`}
                        target="_blank" // perbaikan _black menjadi _blank
                        rel="noopener noreferrer" // untuk keamanan tambahan saat membuka di tab baru
                        className="text-center text-blue-500 hover:text-blue-700 hover:underline"
                    >
                        Nomor Telepon
                    </a>
                </div>

                {/* Footer: Price */}
                <div className="p-4 border-t bg-gray-50">
                    <div className="flex justify-center">
                        <div className="text-lg font-bold text-green-500">
                            Rp. {FormatPrice(product.product_sizes[0].price)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
