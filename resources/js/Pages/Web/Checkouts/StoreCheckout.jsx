//import React
import React from "react";

//import router Inertia
import { router } from "@inertiajs/react";

//import Sweet Alert
import Swal from "sweetalert2";

export default function StoreCheckout({ grandTotal }) {
    //method checkout
    const storeCheckout = () => {
        router.post(
            "/checkouts",
            {
                //data
                grand_total: grandTotal,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Checkout successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                },
            }
        );
    };

    return (
        <>
            <button
                onClick={storeCheckout}
                className={`bg-green-500 text-white font-semibold py-3 px-4 rounded-md shadow-md w-full mb-5 
                ${
                    grandTotal === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-green-600"
                }`}
                disabled={grandTotal === 0}
            >
                BAYAR SEKARANG
            </button>
        </>
    );
}
