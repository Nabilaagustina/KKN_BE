//import React
import React from "react";

//import header component
import Header from "../Components/Header";

//import menu component
import Menu from "../Components/Menu";

export default function LayoutWeb({ children }) {
    return (
        <>
            <Header />
            {/* Main content area */}
            <div className="min-h-screen pt-16 pb-20 bg-[#D8EFEF] main md:pb-24">
                {/* Responsif wrapper for the content */}
                <div className="container px-4 mx-auto">{children}</div>

                {/* Bottom Menu */}
            </div>
            <Menu />
        </>
    );
}
