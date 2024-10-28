import React, { useState, useRef } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, router } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";

export default function ProductEdit() {
    const { errors, categories, product, stores } = usePage().props;

    // State
    const [title, setTitle] = useState(product.title);
    const [categoryID, setCategoryID] = useState(product.category_id);
    const [storeID, setStoreID] = useState(product.store_id);
    const [description, setDescription] = useState(product.description);
    const [discount, setDiscount] = useState(product.discount);
    const [productSize, setProductSize] = useState(product.product_sizes);

    // Method to add more product size fields
    const addMoreFields = () => {
        setProductSize([...productSize, { size: "", price: 0 }]);
    };

    // Method to remove product size fields
    const removeFields = (index) => {
        const newProductSize = [...productSize];
        newProductSize.splice(index, 1);
        setProductSize(newProductSize);
    };

    // Method to set product size and price
    const setProductSizePrice = (i, e) => {
        const newProductSize = [...productSize];
        newProductSize[i][e.target.name] = e.target.value;
        setProductSize(newProductSize);
    };

    // Method to update product
    const updateProduct = async (e) => {
        e.preventDefault();

        router.put(
            `/account/products/${product.id}`,
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
                        text: "Data updated successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    // Reset form state
    const resetForm = () => {
        setTitle(product.title);
        setCategoryID(product.category_id);
        setStoreID(product.store_id);
        setDescription(product.description);
        setDiscount(product.discount);
        setProductSize(product.product_sizes.map((size) => ({ ...size })));
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
                                    Edit Product
                                </span>
                            </div>
                            <div className="p-6">
                                <form onSubmit={updateProduct}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border rounded-lg"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            placeholder="Enter Title Product"
                                        />
                                    </div>
                                    {errors.title && (
                                        <div className="mb-4 text-red-600">
                                            {errors.title}
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold">
                                            Category
                                        </label>
                                        <select
                                            className="w-full p-2 border rounded-lg"
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
                                        <div className="mb-4 text-red-600">
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
                                        <div className="mb-4 text-red-600">
                                            {errors.description}
                                        </div>
                                    )}

                                    <div className="mt-4 mb-4">
                                        <div className="alert alert-warning">
                                            <i className="fa fa-info-circle"></i>{" "}
                                            Add size and price for your product.
                                        </div>

                                        {productSize.map((element, index) => (
                                            <div
                                                className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2"
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
                                                        className="w-full p-2 border rounded-lg"
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
                                                        className="w-full p-2 border rounded-lg"
                                                        placeholder="Enter Price"
                                                    />
                                                </div>

                                                {index > 0 && (
                                                    <div className="mt-4">
                                                        <button
                                                            type="button"
                                                            className="w-full p-2 text-white bg-red-500 rounded-lg md:w-auto"
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

                                        <div>
                                            <button
                                                type="button"
                                                className="p-2 text-white bg-blue-500 rounded-lg"
                                                onClick={addMoreFields}
                                            >
                                                <i className="fa fa-plus-circle"></i>{" "}
                                                Add Size
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 text-white bg-green-500 rounded-lg"
                                        >
                                            <i className="fa fa-save"></i>{" "}
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 py-2 text-white bg-yellow-500 rounded-lg"
                                            onClick={resetForm}
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
