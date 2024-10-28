// Import React
import React, { useState, useRef } from "react";

// Import Layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, and router
import { Head, usePage, router } from "@inertiajs/react";

// Import Pagination component
import Pagination from "../../../Shared/Pagination";

// Import Delete component
import Delete from "../../../Shared/Delete";

// Import SweetAlert
import Swal from "sweetalert2";

export default function ProductShow() {
    // Destructuring props "product" and "errors"
    const { product, errors } = usePage().props;

    // Define state
    const [image, setImage] = useState("");
    const fileInputRef = useRef(null); // Reference to the file input

    // Method to store image
    const storeImage = async (e) => {
        e.preventDefault();

        // Sending data
        router.post(
            "/account/products/store_image_product",
            {
                image: image,
                product_id: product.id,
            },
            {
                onSuccess: () => {
                    // Show success alert
                    Swal.fire({
                        title: "Success!",
                        text: "Image uploaded successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    // Reset the state and the file input after a successful upload
                    setImage(null);
                    fileInputRef.current.value = ""; // Reset the file input
                },
            }
        );
    };

    return (
        <LayoutAccount>
            <Head>
                {/* SEO Meta Tags */}
                <title>Dashboard UMKM Desa Semambung - Wonoayu</title>
                <meta
                    name="description"
                    content="Kelola dan pantau aktivitas UMKM di Desa Semambung, Wonoayu melalui dashboard yang informatif dan mudah digunakan."
                />
                <meta
                    name="keywords"
                    content="Dashboard UMKM, Semambung, Wonoayu, Sidoarjo, Kelola UMKM, Analisis Data, Manajemen UMKM"
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
                <div className="mt-4">
                    <div className="w-full">
                        <div className="bg-white border-t-4 border-green-500 rounded-lg shadow-md">
                            <div className="p-4 text-white bg-green-600 rounded-t-lg">
                                <span className="text-lg font-semibold">
                                    <i className="mr-2 fa fa-shopping-bag"></i>{" "}
                                    Upload Product Image
                                </span>
                            </div>
                            <div className="p-6">
                                <form onSubmit={storeImage}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            ref={fileInputRef} // Attach the ref here
                                            className="w-full p-2 border rounded-lg"
                                            onChange={(e) =>
                                                setImage(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.image && (
                                        <div className="mb-4 text-red-600">
                                            {errors.image}
                                        </div>
                                    )}
                                    <div>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 mr-2 text-white bg-green-500 rounded-lg shadow-md"
                                        >
                                            <i className="fa fa-save"></i> Save
                                        </button>
                                        <button
                                            type="reset"
                                            className="px-4 py-2 text-white bg-yellow-500 rounded-lg shadow-md"
                                        >
                                            <i className="fa fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="w-full">
                        <div className="bg-white border-t-4 border-green-500 rounded-lg shadow-md">
                            <div className="p-4 text-white bg-green-600 rounded-t-lg">
                                <span className="text-lg font-semibold">
                                    <i className="mr-2 fa fa-shopping-bag"></i>{" "}
                                    Product Image
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead>
                                            <tr>
                                                <th className="p-3 text-sm font-semibold text-center">
                                                    No.
                                                </th>
                                                <th className="p-3 text-sm font-semibold text-center">
                                                    Image
                                                </th>
                                                <th className="p-3 text-sm font-semibold text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.product_images.data.map(
                                                (image, index) => (
                                                    <tr
                                                        key={index}
                                                        className="border-t"
                                                    >
                                                        <td className="p-3 text-sm text-center">
                                                            {++index +
                                                                (product
                                                                    .product_images
                                                                    .current_page -
                                                                    1) *
                                                                    product
                                                                        .product_images
                                                                        .per_page}
                                                        </td>
                                                        <td className="p-3 text-center">
                                                            <img
                                                                src={`/${image.image}`}
                                                                className="object-cover w-40 h-40 mx-auto rounded-lg"
                                                            />
                                                        </td>
                                                        <td className="p-3 text-center">
                                                            <Delete
                                                                URL={
                                                                    "/account/products/destroy_image_product"
                                                                }
                                                                id={image.id}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination
                                    links={product.product_images.links}
                                    align={"end"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
