//import react
import React, { useState, useRef } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage and router
import { Head, usePage, router } from "@inertiajs/react";

//import Sweet Alert
import Swal from "sweetalert2";

export default function StoreCreate() {
    //destruct props "errors"
    const { errors } = usePage().props;

    //state
    const [name, setName] = useState("");
    const [telp, setTelp] = useState(null);
    const [address, setAddress] = useState("");
    const [image, setImage] = useState(null);

    //reference for file input
    const fileInputRef = useRef(null);

    //method "storeCategory"
    const storeStore = async (e) => {
        e.preventDefault();

        //sending data
        router.post(
            "/account/stores",
            {
                //data
                name: name,
                image: image,
                telp: telp,
                address: address,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    //method to reset form state
    const resetForm = () => {
        setName("");
        setAddress("");
        setImage(null);
        setTelp(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null; // Clear the file input
        }
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
                    <div className="w-full px-4 md:w-3/4 lg:w-1/2">
                        <div className="bg-white border-t-4 border-green-500 rounded-lg shadow-md">
                            <div className="p-4 text-white bg-green-500 rounded-t-lg">
                                <h2 className="text-xl font-bold">
                                    <i className="fa fa-folder"></i> Add New
                                    Store
                                </h2>
                            </div>
                            <div className="p-6">
                                <form onSubmit={storeStore}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
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
                                        <label className="block text-sm font-medium text-gray-700">
                                            Store Name
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Enter Store Name"
                                        />
                                        {errors.name && (
                                            <p className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            No. Telp
                                        </label>
                                        <input
                                            type="number"
                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                            value={telp}
                                            onChange={(e) =>
                                                setTelp(e.target.value)
                                            }
                                            placeholder="Enter telpon (contoh: 628512345678)"
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

                                    <div className="flex justify-between">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 text-white transition duration-200 bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                        >
                                            <i className="fa fa-save"></i> Save
                                        </button>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="px-4 py-2 text-white transition duration-200 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600"
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
