import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import LayoutAccount from "../../../Layouts/Account";
import Swal from "sweetalert2";

export default function TransactionExport() {
    const { stores } = usePage().props;
    const csrf_token = document.querySelector(
        'meta[name="csrf-token"]'
    ).content;
    const [storeId, setStoreId] = useState("");

    const handleExport = async (e) => {
        e.preventDefault();

        if (!storeId) {
            Swal.fire("Error!", "Please select a store to export.", "warning");
            return;
        }

        try {
            const response = await fetch("/account/transaction/export", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrf_token,
                },
                body: JSON.stringify({ store_id: storeId }),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.style.display = "none";
                a.href = url;
                a.download = `transactions_store_${storeId}.csv`; // Memastikan penggunaan backtick
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);

                Swal.fire(
                    "Success!",
                    "Data has been exported successfully.",
                    "success"
                );
            } else {
                Swal.fire(
                    "Error!",
                    "Failed to export data. Please try again.",
                    "error"
                );
            }
        } catch (error) {
            Swal.fire(
                "Error!",
                "An unexpected error occurred. Please try again.",
                "error"
            );
        }
    };

    return (
        <LayoutAccount>
            <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
                <h1 className="mb-6 text-xl font-semibold text-center text-gray-800">
                    Export Transaksi
                </h1>
                <form onSubmit={handleExport}>
                    <div className="mb-4">
                        <label
                            htmlFor="store"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Pilih Toko:
                        </label>
                        <select
                            id="store"
                            value={storeId}
                            onChange={(e) => setStoreId(e.target.value)}
                            required
                            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="">Pilih Toko</option>
                            {stores.map((store) => (
                                <option key={store.id} value={store.id}>
                                    {store.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-white transition duration-150 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Export
                    </button>
                </form>
            </div>
        </LayoutAccount>
    );
}
