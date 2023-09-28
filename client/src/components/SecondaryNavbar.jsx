import React from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function SecondaryNavbar() {
    return (
        <header className="text-white bg-[#232F3E] hidden sm:flex px-3 py-2 items-center space-x-6 text-sm font-medium">
            <Link>
                <MenuOutlinedIcon className="mr-1"/>
                All
            </Link>

            <Link>Today's Deals</Link>

            <Link>Customer Service</Link>

            <Link>Registery</Link>

            <Link>Gift Cards</Link>

            <Link>Sell</Link>
        </header>
    );
}
