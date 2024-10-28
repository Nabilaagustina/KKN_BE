//import hook react
import React, { useState } from "react";

//import Head, usePage, Link and router
import { Head, usePage, Link, router } from "@inertiajs/react";

export default function Login() {
    //destruct props "errors"
    const { errors } = usePage().props;

    //state user
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //function "loginHandler"
    const loginHandler = async (e) => {
        e.preventDefault();

        //login
        router.post("/login", {
            email: email,
            password: password,
        });
    };

    return (
        <>
            <Head>
                {/* SEO Meta Tags */}
                <title>Login - UMKM Desa Semambung Wonoayu</title>
                <meta
                    name="description"
                    content="Login ke UMKM Desa Semambung Wonoayu untuk mengelola akun UMKM Anda, melihat produk, dan berinteraksi dengan pelanggan di Sidoarjo."
                />
                <meta
                    name="keywords"
                    content="Login, UMKM, Desa Semambung, Wonoayu, Sidoarjo, Pengelolaan Akun, Produk Lokal, UKM, Usaha Mikro, Akun UMKM"
                />
                <meta name="author" content="UMKM Desa Semambung" />

                {/* Favicon / Icon */}
                <link
                    rel="icon"
                    href={"/Image/logoDesa.png"}
                    type="image/x-icon"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={"/Image/logoDesa.png"}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={"/Image/logoDesa.png"}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={"/Image/logoDesa.png"}
                />
            </Head>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full bg-[#2C6664] flex flex-col md:flex-row justify-center items-center p-8 mx-auto space-y-4 md:space-y-0 md:space-x-6 shadow">
                    <div className="flex flex-col items-center justify-center w-full gap-y-4 md:w-1/2">
                        <h1 className="text-4xl font-bold text-center text-white">
                            SELAMAT DATANG
                        </h1>
                        <hr className="h-1 bg-[#FDC300] w-3/4" />
                        <img
                            src={"/Image/logoDesa.png"}
                            alt="Desa Semambung"
                            className="w-[106px] md:w-[212px] h-[100px] md:h-[200px] mx-auto"
                        />
                    </div>
                    <div className="flex items-center justify-center w-full md:w-1/2">
                        <form
                            className="w-full px-4 space-y-6"
                            onSubmit={loginHandler}
                        >
                            <div>
                                <input
                                    type="email"
                                    className="w-full p-2.5 rounded-lg border focus:ring-primary-600 focus:border-primary-600"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                />
                            </div>
                            {errors.email && (
                                <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                    {errors.email}
                                </div>
                            )}

                            <div>
                                <input
                                    type="password"
                                    className="w-full p-2.5 rounded-lg border focus:ring-primary-600 focus:border-primary-600"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Password"
                                />
                            </div>
                            {errors.password && (
                                <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
                                    {errors.password}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full text-white bg-[#FDC300] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                LOGIN
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-3 text-center">
                    Need an account?{" "}
                    <Link
                        href="/register"
                        className="text-blue-500 hover:text-blue-700 hover:underline"
                    >
                        Register!
                    </Link>
                </div>
            </div>
        </>
    );
}
