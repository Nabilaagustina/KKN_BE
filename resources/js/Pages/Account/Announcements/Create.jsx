// Import React
import React, { useState } from "react";

// Import layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, and router
import { Head, usePage, router } from "@inertiajs/react";

// Import react Quill
import ReactQuill from "react-quill";

// Quill CSS
import "react-quill/dist/quill.snow.css";

// Import Sweet Alert
import Swal from "sweetalert2";

export default function AnnouncementCreate() {
    // Destructuring props "errors", "categories", and "stores"
    const { errors, announcement } = usePage().props;

    // State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    // Function to reset all fields
    const resetFields = () => {
        setTitle("");
        setImage(null);
        setDescription("");
    };

    // Store product
    const storeProduct = async (e) => {
        e.preventDefault();
        router.post(
            "/account/announcements",
            {
                title: title,
                description: description,
                image: image,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    resetFields(); // Reset fields after successful submission
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
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-4 text-white bg-green-600 rounded-t-lg">
                                <span className="text-lg font-semibold">
                                    <i className="mr-2 fa fa-shopping-bag"></i>{" "}
                                    Add New Announcement
                                </span>
                            </div>
                            <div className="p-6">
                                <form onSubmit={storeProduct}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            placeholder="Enter Product Title"
                                        />
                                    </div>
                                    {errors.title && (
                                        <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.title}
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                            onChange={(e) =>
                                                setImage(e.target.files[0])
                                            }
                                        />
                                        {errors.image && (
                                            <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                {errors.image}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold">
                                            Description
                                        </label>
                                        <ReactQuill
                                            theme="snow"
                                            value={description}
                                            onChange={(content) =>
                                                setDescription(content)
                                            }
                                        />
                                    </div>
                                    {errors.description && (
                                        <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.description}
                                        </div>
                                    )}

                                    <div className="flex justify-start space-x-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-2 text-white bg-green-600 rounded-md focus:outline-none"
                                        >
                                            <i className="fa fa-save"></i> Save
                                        </button>
                                        <button
                                            type="button" // Prevent form submission
                                            className="px-6 py-2 text-white bg-yellow-600 rounded-md focus:outline-none"
                                            onClick={resetFields} // Call reset function
                                        >
                                            <i className="fa fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAccount>
    );
}
