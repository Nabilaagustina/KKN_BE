import React, { useState, useEffect } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, router } from "@inertiajs/react";
import Swal from "sweetalert2";

// Import react Quill
import ReactQuill from "react-quill";

// Quill CSS
import "react-quill/dist/quill.snow.css";

export default function AnnouncementCreate() {
    const { errors, announcement } = usePage().props;

    // State
    const [title, setTitle] = useState(announcement.name);
    const [description, setDescription] = useState(announcement.description);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        setTitle(announcement.title);
        setDescription(announcement.description);
        setImagePreview(announcement.image ? `/${announcement.image}` : null);
    }, [announcement]);

    // Method to reset the form
    const resetForm = () => {
        setTitle(announcement.title);
        setDescription(announcement.description);
        setImage(null);
        setImagePreview(announcement.image ? `/${announcement.image}` : null); // Reset image preview
    };

    const updateannouncement = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        if (image) {
            formData.append("image", image);
        }
        formData.append("_method", "PUT");

        router.post(`/account/announcements/${announcement.id}`, formData, {
            onSuccess: () => {
                Swal.fire({
                    title: "Success!",
                    text: "Data updated successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            },
        });
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
                                <form onSubmit={updateannouncement}>
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
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                            onChange={(e) => {
                                                setImage(e.target.files[0]);
                                                setImagePreview(
                                                    URL.createObjectURL(
                                                        e.target.files[0]
                                                    )
                                                );
                                            }}
                                        />
                                        {errors.image && (
                                            <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                {errors.image}
                                            </div>
                                        )}
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                alt="Image Preview"
                                                className="object-cover w-32 h-32 mt-2 rounded"
                                            />
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
                                            onClick={resetForm} // Call reset function
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
