//import React
import React, { useState } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage
import { Head, usePage } from "@inertiajs/react";

//import formatPrice
import FormatPrice from "../../../Utils/FormatPrice";

//import axios
import axios from "axios";

//import component storeCheckout
import StoreCheckout from "./StoreCheckout";

export default function CheckoutIndex() {
    //destruct props "provinces"
    const { dataCarts } = usePage().props;
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Head>
                <title>Checkouts - Geek Store - Where Developer Shopping</title>
            </Head>
            <LayoutWeb>
                <div className="container mt-20 mb-5 md:mt-80">
                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <div className="bg-white border-0 shadow-sm rounded-3">
                                <div className="p-3 bg-gray-100 rounded-t-3">
                                    <i className="fa fa-shopping-cart"></i>{" "}
                                    Shipping Information
                                </div>
                            </div>

                            <div className="mt-3 mb-3 bg-white border-0 shadow-sm rounded-3">
                                <div className="p-4">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            width: "25%",
                                                        }}
                                                    >
                                                        Total Orders
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: "1%",
                                                        }}
                                                    >
                                                        :
                                                    </td>
                                                    <td>
                                                        <strong>
                                                            Rp.{" "}
                                                            {FormatPrice(
                                                                dataCarts.price
                                                            )}
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <StoreCheckout grandTotal={dataCarts.price} />
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}
