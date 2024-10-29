//import React
import React from "react";

//import usePage and router
import { usePage, router } from "@inertiajs/react";

//import Sweet Alert
import Swal from "sweetalert2";

export default function AddToCart({ product_id, productImage, size, price }) {
    //destruct props "auth"
    const { auth } = usePage().props;

    // Check if productImage is valid before attempting to use split
    const imageName = productImage
        ? productImage.split("\\").pop().split("/").pop()
        : "Image/image.png"; // You can provide a fallback image or handle it however you'd like

    //method addToCart
    const addToCart = () => {
        //check user is logged in
        if (!auth.user) {
            //show alert
            Swal.fire({
                title: "Oopss!",
                text: "Please login!",
                icon: "error",
                showConfirmButton: false,
                timer: 3000,
            });

            return router.visit("/login");
        }

        router.post(
            "/carts",
            {
                //data
                product_id: product_id,
                product_image: imageName,
                size: size,
                price: price,
                qty: 1,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Add to Cart successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4">
                <button
                    onClick={addToCart}
                    className="flex items-center px-4 py-2 text-sm font-bold text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
                >
                    <i className="mr-2 fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </>
    );
}
