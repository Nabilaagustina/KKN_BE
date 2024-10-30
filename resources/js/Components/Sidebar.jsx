import React from "react";
import hasAnyPermission from "../Utils/Permissions";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {
    const { url } = usePage();

    return (
        <>
            <div className="space-y-2">
                {hasAnyPermission(["dashboard.index"]) && (
                    <Link
                        href="/account/dashboard"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/dashboard")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-tachometer-alt"></i>
                        Dashboard
                    </Link>
                )}
                {hasAnyPermission(["announcements.index"]) && (
                    <Link
                        href="/account/announcements"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/announcements")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-folder"></i>
                        Announcements
                    </Link>
                )}
                {hasAnyPermission(["categories.index"]) && (
                    <Link
                        href="/account/categories"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/categories")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-folder"></i>
                        Categories
                    </Link>
                )}
                {hasAnyPermission(["stores.index"]) && (
                    <Link
                        href="/account/stores"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/stores")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-folder"></i>
                        Store
                    </Link>
                )}
                {hasAnyPermission(["products.index"]) && (
                    <Link
                        href="/account/products"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/products")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-shopping-bag"></i>
                        Products
                    </Link>
                )}
                {hasAnyPermission(["transactions.exportPage"]) && (
                    <Link
                        href="/account/transaction/export"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/transaction/export")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-shopping-bag"></i>
                        Eksport Transactions
                    </Link>
                )}
                {hasAnyPermission(["transactions.index"]) && (
                    <Link
                        href="/account/transactions"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/transactions")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-shopping-cart"></i>
                        Transactions
                    </Link>
                )}
                {hasAnyPermission(["roles.index"]) && (
                    <Link
                        href="/account/roles"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/roles")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-shield-alt"></i>
                        Roles
                    </Link>
                )}
                {hasAnyPermission(["permissions.index"]) && (
                    <Link
                        href="/account/permissions"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/permissions")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-key"></i>
                        Permissions
                    </Link>
                )}
                {hasAnyPermission(["users.index"]) && (
                    <Link
                        href="/account/users"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                            url.startsWith("/account/users")
                                ? "bg-gray-700 font-semibold"
                                : ""
                        }`}
                    >
                        <i className="mr-3 fa fa-users"></i>
                        Users
                    </Link>
                )}
            </div>
        </>
    );
}
