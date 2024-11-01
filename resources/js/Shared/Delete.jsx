//import react
import React from "react";

//import inertia router
import { router } from "@inertiajs/react";

//import Sweet Alert
import Swal from "sweetalert2";

export default function Delete({ URL, id }) {
    //method destroy
    const destroy = async (id) => {
        //show sweet alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                //delete
                router.delete(`${URL}/${id}`);

                Swal.fire({
                    title: "Success!",
                    text: "Data deleted successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <>
            <button
                onClick={() => destroy(id)}
                className="p-2 text-white transition duration-300 transform bg-red-500 rounded-lg hover:bg-red-600"
            >
                <i className="fa fa-trash"></i>
            </button>
        </>
    );
}
