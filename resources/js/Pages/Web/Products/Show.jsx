//import React
import React, { useState } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import formatPrice
import FormatPrice from "../../../Utils/FormatPrice";

import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel for styling

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function ProductShow() {
    //destruct props "product"
    const { product } = usePage().props;

    //define state
    const [productImage, setProductImage] = useState(
        product.product_images && product.product_images.length > 0
            ? product.product_images[0].image
            : null
    );

    const [size, setSize] = useState(product.product_sizes[0].size);
    const [price, setPrice] = useState(product.product_sizes[0].price);

    //method changeSizeAndPrice
    const changeSizeAndPrice = (size, price) => {
        setSize(size);
        setPrice(price);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <LayoutWeb>
            <Head>
                {/* SEO Meta Tags */}
                <title>Produk UMKM Desa Semambung - Wonoayu</title>
                <meta
                    name="description"
                    content="Temukan berbagai produk unggulan dari UMKM Desa Semambung, Wonoayu. Mulai dari kerajinan tangan, kuliner, hingga produk inovatif lainnya."
                />
                <meta
                    name="keywords"
                    content="Produk UMKM, Semambung, Wonoayu, Sidoarjo, Kerajinan, Kuliner, Produk Lokal, Belanja Desa"
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
                <div className="container px-4 mx-auto mb-5 mt-14">
                    <div className="flex justify-center">
                        <div className="w-full md:w-2/3 lg:w-1/2">
                            {/* Gambar Produk */}
                            <div className="p-4 mb-4 text-center bg-gray-100 rounded-lg shadow-sm">
                                <div className="w-3/4 mx-auto rounded-lg md:w-1/2">
                                    {product.product_images.length === 1 ? (
                                        <img
                                            src={`/${productImage}`}
                                            alt={product.title}
                                            className="w-full rounded-lg"
                                        />
                                    ) : product.product_images.length > 1 ? (
                                        <Slider {...settings}>
                                            {product.product_images.map(
                                                (image, index) => (
                                                    <div key={index}>
                                                        <img
                                                            src={`/${image.image}`}
                                                            alt={`${image.id}`}
                                                            className="w-full rounded-lg"
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </Slider>
                                    ) : (
                                        <img
                                            src={"/Image/image.png"}
                                            alt="Placeholder"
                                            className="w-full rounded-lg"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-4 mb-4 bg-white rounded-lg shadow-sm">
                                <div className="flex justify-between">
                                    <h5 className="text-lg font-bold">
                                        {product.title}
                                    </h5>
                                    <h5 className="text-lg font-bold text-green-500">
                                        Rp. {FormatPrice(price)}
                                    </h5>
                                </div>

                                <hr className="my-4" />

                                {/* Sizes */}
                                {product.product_sizes &&
                                product.product_sizes.length > 0 ? (
                                    product.product_sizes.map(
                                        (sizeOption, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setSize(sizeOption.size);
                                                    setPrice(sizeOption.price);
                                                }}
                                                className={`mx-2 px-4 py-2 rounded-lg shadow-sm text-sm transition-all duration-200 ease-in-out 
            ${
                size === sizeOption.size
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 hover:bg-green-400 hover:text-white"
            }`}
                                            >
                                                {sizeOption.size}
                                            </button>
                                        )
                                    )
                                ) : (
                                    <div className="text-gray-500">
                                        No sizes available
                                    </div>
                                )}
                            </div>

                            {/* Product Description */}
                            <div className="p-4 bg-white rounded-lg shadow-sm">
                                <h5 className="text-lg font-bold">
                                    Description
                                </h5>
                                <hr className="my-2" />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: product.description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutWeb>
    );
}
