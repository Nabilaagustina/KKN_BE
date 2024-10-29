//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/react";

//import component delete
import Delete from "../../../Shared/Delete";

//import formatPrice
import FormatPrice from "../../../Utils/FormatPrice";

export default function CartIndex() {
    //destruct props "carts"
    const { dataCarts, carts } = usePage().props;

    return (
        <>
            <Head>
                <title>Carts - Geek Store - Where Developer Shopping</title>
            </Head>
            <LayoutWeb>
                <div className="container px-4 mx-auto mt-20 mb-5">
                    <div className="fade-in">
                        <div className="flex justify-center">
                            <div className="w-full max-w-4xl">
                                {carts.length > 0 ? (
                                    <div className="mb-2">
                                        <div className="w-full">
                                            <div className="mb-3 bg-white rounded-lg shadow-sm">
                                                <div className="p-4">
                                                    {carts.map(
                                                        (cart, index) => (
                                                            <div
                                                                key={index}
                                                                className="mb-4"
                                                            >
                                                                <div className="flex flex-col gap-4 md:flex-row">
                                                                    <div className="w-full md:w-1/4">
                                                                        <img
                                                                            src={
                                                                                cart.product_image
                                                                            }
                                                                            className="object-cover w-full h-auto rounded-lg"
                                                                        />
                                                                    </div>
                                                                    <div className="w-full md:w-3/4">
                                                                        <div className="space-y-2">
                                                                            <h4 className="text-lg font-semibold">
                                                                                {
                                                                                    cart
                                                                                        .product
                                                                                        .title
                                                                                }
                                                                            </h4>

                                                                            <div className="grid grid-cols-2 gap-4">
                                                                                <div>
                                                                                    <div>
                                                                                        Qty:{" "}
                                                                                        <strong>
                                                                                            {
                                                                                                cart.qty
                                                                                            }
                                                                                        </strong>
                                                                                    </div>
                                                                                    <div className="mt-2">
                                                                                        Size:{" "}
                                                                                        <strong>
                                                                                            {
                                                                                                cart.size
                                                                                            }
                                                                                        </strong>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="mt-4">
                                                                                <Delete
                                                                                    URL={
                                                                                        "/carts"
                                                                                    }
                                                                                    id={
                                                                                        cart.id
                                                                                    }
                                                                                />
                                                                            </div>

                                                                            <hr className="my-2" />

                                                                            <h5 className="text-lg font-semibold">
                                                                                Rp.{" "}
                                                                                {FormatPrice(
                                                                                    cart.price
                                                                                )}
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr className="my-4" />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 mt-4 mb-4 text-center bg-white rounded-lg shadow-sm">
                                        <h6 className="text-lg font-semibold">
                                            Shopping Carts is Empty 😁
                                        </h6>
                                    </div>
                                )}

                                <div className="mb-5">
                                    <div className="p-4 bg-white rounded-lg shadow-sm">
                                        <h6 className="mb-0">
                                            Total Orders:{" "}
                                            <strong>
                                                Rp.{" "}
                                                {FormatPrice(dataCarts.price)}
                                            </strong>
                                        </h6>
                                    </div>
                                    <div className="mt-4">
                                        {carts.length > 0 ? (
                                            <Link
                                                href="/checkouts"
                                                className="block w-full px-4 py-3 text-center text-white transition bg-green-500 rounded-lg hover:bg-green-600"
                                            >
                                                Next Payment{" "}
                                                <i className="ml-2 fa fa-long-arrow-alt-right"></i>
                                            </Link>
                                        ) : (
                                            <button
                                                className="block w-full px-4 py-3 text-center text-white bg-green-500 rounded-lg"
                                                disabled
                                            >
                                                Next Payment{" "}
                                                <i className="ml-2 fa fa-long-arrow-alt-right"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}
