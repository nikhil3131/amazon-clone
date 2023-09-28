import React from "react";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function Navbar() {
    return (
        <nav>
            {/*mobile navigation bar*/}
            <header className="flex sm:hidden justify-between px-3 pt-3 pb-1 bg-white fixed right-0 left-0 bottom-0 z-30 bg-red-400">
                {/*home*/}
                <span className="flex flex-col items-center">
                    <span className="w-7 h-1 bg-black absolute top-0 rounded-b"></span>
                    <Link>
                        <HomeOutlinedIcon />
                    </Link>
                    <span className="text-xs">Home</span>
                </span>

                {/*profile*/}
                <span className="flex flex-col items-center">
                    <span className="w-7 h-1 bg-black absolute top-0 rounded-b"></span>
                    <Link>
                        <Person2OutlinedIcon />
                    </Link>
                    <span className="text-xs">You</span>
                </span>

                {/*more*/}
                <span className="flex flex-col items-center">
                    <span className="w-7 h-1 bg-black absolute top-0 rounded-b"></span>
                    <Link>
                        <LayersOutlinedIcon />
                    </Link>
                    <span className="text-xs">More</span>
                </span>

                {/* cart */}
                <span className="flex flex-col items-center">
                    <span className="w-7 h-1 bg-black absolute top-0 rounded-b"></span>
                    <Link>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                    <span className="text-xs">Cart</span>
                </span>

                {/* menu */}
                <span className="flex flex-col items-center">
                    <span className="w-7 h-1 bg-black absolute top-0 rounded-b"></span>
                    <Link>
                        <MenuOutlinedIcon />
                    </Link>
                    <span className="text-xs">Menu</span>
                </span>
            </header>
        </nav>
    );
}
