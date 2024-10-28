import React, { useState, useEffect } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, router } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function StoreEdit() {
    const { errors, store } = usePage().props;

    const [name, setName] = useState("");
    const [telp, setTelp] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        setName(store.name);
        setTelp(store.telp);
        setAddress(store.address);
        setImagePreview(store.image ? `/${store.image}` : null);
    }, [store]);

    // Method to reset the form
    const resetForm = () => {
        setName(store.name);
        setTelp(store.telp);
        setAddress(store.address);
        setImage(null);
        setImagePreview(store.image ? `/${store.image}` : null); // Reset image preview to initial state
    };

    const updateStore = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("telp", telp); // Correct the data being appended
        formData.append("address", address); // Correct the data being appended
        if (image) {
            formData.append("image", image);
        }
        formData.append("_method", "PUT");

        router.post(`/account/stores/${store.id}`, formData, {
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
                <div className="flex justify-center mt-4">
                    <div className="w-full lg:w-3/4">
                        <div className="bg-white border-0 border-t-4 border-green-500 rounded shadow-sm">
                            <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                                <h1 className="text-lg font-semibold text-gray-800">
                                    <i className="fa fa-folder"></i> Edit Store
                                </h1>
                            </div>
                            <div className="px-4 py-5">
                                <form onSubmit={updateStore}>
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
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Store Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Enter store Name"
                                        />
                                        {errors.name && (
                                            <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            No. Telp
                                        </label>
                                        <input
                                            type="tel" // Change to "tel" to better suit telephone number input
                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                            value={telp}
                                            onChange={(e) =>
                                                setTelp(e.target.value)
                                            }
                                            placeholder="Enter telpon (contoh: 628512345678)"
                                            pattern="[0-9]*" // Ensure only numbers can be input
                                        />
                                        {errors.telp && (
                                            <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                {errors.telp}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                            placeholder="Enter address"
                                        />
                                        {errors.address && (
                                            <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                {errors.address}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex space-x-2">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 text-sm text-white bg-green-600 rounded shadow-md hover:bg-green-700 focus:outline-none"
                                        >
                                            <i className="fa fa-save"></i>{" "}
                                            Update
                                        </button>
                                        <button
                                            type="button" // Change to "button"
                                            className="px-4 py-2 text-sm text-white bg-yellow-500 rounded shadow-md hover:bg-yellow-600 focus:outline-none"
                                            onClick={resetForm} // Call resetForm on click
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
