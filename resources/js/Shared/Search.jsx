// Import React
import React, { useState } from "react";

// Import inertia router
import { router } from "@inertiajs/react";

export default function Search({ URL }) {
    // Define state for search input
    const [search, setSearch] = useState("");

    // Handle search submission
    const searchHandler = (e) => {
        e.preventDefault();
        router.get(`${URL}?q=${search}`);
    };

    return (
        <form onSubmit={searchHandler} className="w-full">
            <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-md shadow-sm">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-grow px-2 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Type keywords..."
                />
                <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white bg-green-500 hover:bg-green-600 sm:text-base"
                >
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
    );
}
