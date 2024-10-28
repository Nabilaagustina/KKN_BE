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

export default function ProductCreate() {
    // Destructuring props "errors", "categories", and "stores"
    const { errors, categories, stores } = usePage().props;

    // State
    const [title, setTitle] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [storeID, setStoreID] = useState("");
    const [description, setDescription] = useState("");
    const [discount, setDiscount] = useState("");
    const [productSize, setProductSize] = useState([{ size: "", price: 0 }]);

    // Function to reset all fields
    const resetFields = () => {
        setTitle("");
        setCategoryID("");
        setStoreID("");
        setDescription("");
        setDiscount("");
        setProductSize([{ size: "", price: 0 }]); // Reset to initial state
    };

    // Add more fields for product size
    const addMoreFields = () => {
        setProductSize([...productSize, { size: "", price: 0 }]);
    };

    // Remove product size field
    const removeFields = (index) => {
        let newProductSize = [...productSize];
        newProductSize.splice(index, 1);
        setProductSize(newProductSize);
    };

    // Set product size and price
    const setProductSizePrice = (i, e) => {
        let newProductSize = [...productSize];
        newProductSize[i][e.target.name] = e.target.value;
        setProductSize(newProductSize);
    };

    // Store product
    const storeProduct = async (e) => {
        e.preventDefault();
        router.post(
            "/account/products",
            {
                title: title,
                category_id: categoryID,
                store_id: storeID,
                description: description,
                discount: discount,
                product_sizes: productSize,
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
                                    Add New Product
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
                                        <label className="block text-sm font-semibold">
                                            Category
                                        </label>
                                        <select
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                                            value={categoryID}
                                            onChange={(e) =>
                                                setCategoryID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Category --
                                            </option>
                                            {categories.map((category) => (
                                                <option
                                                    value={category.id}
                                                    key={category.id}
                                                >
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.category_id && (
                                        <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.category_id}
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold">
                                            Store
                                        </label>
                                        <select
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                                            value={storeID}
                                            onChange={(e) =>
                                                setStoreID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Store --
                                            </option>
                                            {stores.map((store) => (
                                                <option
                                                    value={store.id}
                                                    key={store.id}
                                                >
                                                    {store.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.store_id && (
                                        <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                            {errors.store_id}
                                        </div>
                                    )}

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

                                    <hr className="my-6" />
                                    {/* Dynamic size and price */}
                                    <div className="mt-3 mb-5">
                                        <div className="p-3 mb-4 bg-yellow-100 rounded">
                                            <i className="fa fa-info-circle"></i>{" "}
                                            Add size and price for your product.
                                        </div>

                                        {productSize.map((element, index) => (
                                            <div
                                                className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3"
                                                key={index}
                                            >
                                                <div>
                                                    <label className="block text-sm font-semibold">
                                                        Size
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="size"
                                                        value={
                                                            element.size || ""
                                                        }
                                                        onChange={(e) =>
                                                            setProductSizePrice(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                                                        placeholder="Enter Size"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold">
                                                        Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="price"
                                                        value={
                                                            element.price || ""
                                                        }
                                                        onChange={(e) =>
                                                            setProductSizePrice(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                                                        placeholder="Enter Price"
                                                    />
                                                </div>
                                                {index !== 0 && (
                                                    <div className="flex items-center justify-center">
                                                        <button
                                                            type="button"
                                                            className="w-full py-2 text-white bg-red-600 rounded-md focus:outline-none"
                                                            onClick={() =>
                                                                removeFields(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-trash"></i>{" "}
                                                            Remove
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {errors.product_sizes && (
                                            <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                                {errors.product_sizes}
                                            </div>
                                        )}

                                        <div className="flex justify-start">
                                            <button
                                                type="button"
                                                className="px-6 py-2 text-white bg-blue-600 rounded-md focus:outline-none"
                                                onClick={() => addMoreFields()}
                                            >
                                                <i className="fa fa-plus-circle"></i>{" "}
                                                Add Size & Price
                                            </button>
                                        </div>
                                    </div>

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
