import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "../components";

export default function HomepageLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
