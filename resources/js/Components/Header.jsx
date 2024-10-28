import React, { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import axios from "axios";

export default function Navbar() {
    const { auth } = usePage().props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleDropdownToggle = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        router.post("/logout");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle mobile menu visibility
    };

    // Handle search input
    const searchHandler = (e) => {
        const query = e.target.value;
        if (query) {
            setIsLoading(true);
            axios
                .post(`/search`, { q: query })
                .then((response) => {
                    setProducts(response.data.products);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        } else {
            setProducts([]);
        }
    };

    // Handle modal visibility
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <nav
                className="fixed top-0 z-50 w-full text-white bg-[#3BAFAB] shadow-md"
                data-aos="fade-down"
            >
                <div className="container px-4 mx-auto">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img
                                src={"/Image/logoDesa.png"}
                                alt="Logo"
                                className="h-8"
                            />
                        </Link>

                        {/* Hamburger Menu Button for Mobile */}
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-800 focus:outline-none"
                            >
                                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-800"></span>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden text-white lg:flex lg:items-center lg:space-x-6">
                            <Link
                                href="/"
                                className="text-white hover:text-gray-300"
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/news"
                                className="text-white hover:text-gray-300"
                            >
                                Berita
                            </Link>
                            <Link
                                href="/productss"
                                className="text-white hover:text-gray-300"
                            >
                                Produk
                            </Link>
                            <Link
                                href="/categori"
                                className="text-white hover:text-gray-300"
                            >
                                Categories
                            </Link>
                            <Link
                                href="/about"
                                className="text-white hover:text-gray-300"
                            >
                                Tentang
                            </Link>
                            <button
                                onClick={openModal}
                                className="text-white hover:text-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                    className="w-6 h-6 text-white"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>

                            {!auth.user ? (
                                <>
                                    {/* Guest Links */}
                                    <Link
                                        href="/register"
                                        className="text-white hover:text-gray-300"
                                    >
                                        Sign Up
                                    </Link>
                                    <Link
                                        href="/login"
                                        className="px-4 py-2 ml-4 text-white bg-green-500 rounded-full hover:bg-green-600"
                                    >
                                        Sign In
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {/* Authenticated User Menu */}
                                    <div className="relative">
                                        <button
                                            onClick={handleDropdownToggle}
                                            className="flex items-center text-white hover:text-gray-300"
                                        >
                                            <span>Hi, {auth.user.name}</span>
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        {dropdownOpen && (
                                            <div className="absolute right-0 z-10 w-48 mt-2 bg-gray-100 rounded-lg shadow-lg">
                                                <Link
                                                    href="/account/dashboard"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                                >
                                                    Dashboard
                                                </Link>
                                                <hr className="my-2" />
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                                                >
                                                    <i className="mr-2 fa fa-sign-out-alt"></i>{" "}
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <Link href="/cart" className="relative">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1.5em"
                                            height="1.5em"
                                            fill="currentColor"
                                            className="mx-auto bi bi-cart"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                                            3
                                        </div>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu for Medium (md) Screens and Below */}
                <div
                    className={`lg:hidden ${
                        menuOpen ? "block" : "hidden"
                    } text-white`}
                >
                    <div className="flex flex-col items-center py-4 space-y-4 text-white">
                        <Link
                            href="/"
                            className="text-white hover:text-gray-600"
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/news"
                            className="text-white hover:text-gray-600"
                        >
                            Berita
                        </Link>
                        <Link
                            href="/productss"
                            className="text-white hover:text-gray-600"
                        >
                            Produk
                        </Link>
                        <Link
                            href="/categori"
                            className="text-white hover:text-gray-300"
                        >
                            Categories
                        </Link>
                        <Link
                            href="/about"
                            className="text-white hover:text-gray-600"
                        >
                            Tentang
                        </Link>
                        <button
                            onClick={openModal}
                            className="text-white hover:text-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5em"
                                height="1.5em"
                                fill="currentColor"
                                className="w-6 h-6 text-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>

                        {!auth.user ? (
                            <>
                                <Link
                                    href="/register"
                                    className="text-white hover:text-gray-600"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                                >
                                    Sign In
                                </Link>
                            </>
                        ) : (
                            <>
                                <div className="relative">
                                    <button
                                        className="flex items-center font-semibold text-white focus:outline-none"
                                        onClick={handleDropdownToggle}
                                    >
                                        {auth.user.name}
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {dropdownOpen && (
                                        <div className="absolute right-0 z-20 w-48 mt-2 bg-gray-100 rounded-md shadow-lg">
                                            <Link
                                                href="/account/dashboard"
                                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                                            >
                                                Dashboard
                                            </Link>
                                            <hr className="my-2" />
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                                            >
                                                <i className="mr-2 fa fa-sign-out-alt"></i>{" "}
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <Link href="/cart" className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.5em"
                                        height="1.5em"
                                        fill="currentColor"
                                        className="mx-auto bi bi-cart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                                        3
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Modal for Search */}
            {modalVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-1/2 p-6 bg-white rounded-lg shadow-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5em"
                                height="1.5em"
                                fill="currentColor"
                                className="w-6 h-6 text-gray-800"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                        <div>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                                placeholder="Search..."
                                onChange={searchHandler}
                            />
                        </div>
                        <div>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : products.length > 0 ? (
                                <ul>
                                    {products.map((product, index) => (
                                        <a
                                            href={`/products/${product.slug}`}
                                            className="mt-2 text-gray-800 no-underline"
                                            key={index}
                                        >
                                            <div className="mt-2 mb-3 bg-gray-100 rounded-lg shadow-sm">
                                                <div className="p-4">
                                                    {product.title}
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </ul>
                            ) : (
                                <p>No products found.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
