import React from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function SecondaryNavbar() {
    return (
        <header className="text-white bg-[#232F3E] hidden sm:flex px-3 py-1 items-center space-x-6 text-sm font-medium">
            <Link className="hover:border hover:border-white px-2 py-1">
                <MenuOutlinedIcon className="mr-1"/>
                All
            </Link>

            <Link className="hover:border hover:border-white px-2 py-1">Today's Deals</Link>

            <Link className="hover:border hover:border-white px-2 py-1">Customer Service</Link>

            <Link className="hover:border hover:border-white px-2 py-1">Registery</Link>

            <Link className="hover:border hover:border-white px-2 py-1">Gift Cards</Link>

            <Link className="hover:border hover:border-white px-2 py-1">Sell</Link>
        </header>
    );
}
