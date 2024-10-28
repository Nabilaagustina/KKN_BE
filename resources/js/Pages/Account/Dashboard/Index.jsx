//import React
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import component Head and usePage
import { Head, usePage } from "@inertiajs/react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import chart js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";

//import react chart js
import { Line } from "react-chartjs-2";

//register chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function Dashboard() {
    //destruct props
    const { auth, count, chart } = usePage().props;

    //option chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `STATISTIC REVENUE : ${new Date().getFullYear()}`,
            },
        },
    };

    //data chart
    const data = {
        labels: chart.month_name,
        datasets: [
            {
                fill: true,
                label: "REVENUE",
                backgroundColor: "#bccad8",
                data: chart.grand_total,
            },
        ],
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
                <div className="mt-4 overflow-auto">
                    <div className="w-full mb-4">
                        <div className="p-4 mb-0 text-white bg-green-500 border-0 rounded shadow-sm">
                            Selamat Datang, <strong>{auth.user?.name}</strong>
                        </div>
                    </div>
                </div>

                {hasAnyPermission(["dashboard.statistics"]) && (
                    <div className="grid grid-cols-1 gap-4 mt-2 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Unpaid Card */}
                        <div className="mb-4">
                            <div className="overflow-hidden border-0 rounded-lg shadow-sm card">
                                <div className="flex items-center p-4">
                                    <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 px-5 py-4 bg-blue-600 rounded-full">
                                        <i className="text-white fas fa-circle-notch fa-spin fa-2x"></i>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-2xl font-semibold text-primary">
                                            {count.unpaid}
                                        </div>
                                        <div className="text-sm font-bold uppercase text-muted">
                                            UNPAID
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Paid Card */}
                        <div className="mb-4">
                            <div className="overflow-hidden border-0 rounded shadow-sm card">
                                <div className="flex items-center p-4">
                                    <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 px-5 py-4 bg-green-600 rounded-full">
                                        <i className="text-white fas fa-check-circle fa-2x"></i>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-2xl font-semibold text-green-600">
                                            {count.paid}
                                        </div>
                                        <div className="text-sm font-bold uppercase text-muted">
                                            PAID
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expired Card */}
                        <div className="mb-4">
                            <div className="overflow-hidden border-0 rounded shadow-sm card">
                                <div className="flex items-center p-4">
                                    <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 px-5 py-4 bg-yellow-500 rounded-full">
                                        <i className="text-white fas fa-exclamation-triangle fa-2x"></i>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-2xl font-semibold text-yellow-500">
                                            {count.expired}
                                        </div>
                                        <div className="text-sm font-bold uppercase text-muted">
                                            EXPIRED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cancelled Card */}
                        <div className="mb-4">
                            <div className="overflow-hidden border-0 rounded shadow-sm card">
                                <div className="flex items-center p-4">
                                    <div className="flex items-center justify-center flex-shrink-0 w-32 h-32 px-5 py-4 bg-red-600 rounded-full">
                                        <i className="text-white fas fa-times fa-2x"></i>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-2xl font-semibold text-red-600">
                                            {count.cancelled}
                                        </div>
                                        <div className="text-sm font-bold uppercase text-muted">
                                            CANCELLED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {hasAnyPermission(["dashboard.chart"]) && (
                    <div className="grid grid-cols-1 mt-2">
                        <div className="mb-4">
                            <div className="overflow-hidden bg-white rounded-lg shadow-sm">
                                <div className="flex items-center p-4 font-bold text-white bg-green-600">
                                    <i className="mr-2 fa fa-chart-bar"></i>
                                    <span>
                                        CHART REVENUE {new Date().getFullYear()}
                                    </span>
                                </div>

                                <div className="p-4">
                                    <Line options={options} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </LayoutAccount>
    );
}
