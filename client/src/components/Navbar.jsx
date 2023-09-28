import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Navbar() {
    const { pathname } = useLocation();
    const [serachedProduct, setSearchedProduct] = useState("");

    async function handleSubmit(e){
        e.preventDefault()
        console.log(serachedProduct)
    }

    return (
        <nav>
            {/******************************************** mobile navigationbar *****************************************************/}
            <header className="flex sm:hidden justify-between px-3 pt-2 pb-1 bg-white fixed right-0 left-0 bottom-0 z-30">
                {/*home*/}
                <span className={pathname === "/" ? "flex flex-col items-center text-[#419197]":"flex flex-col items-center"}>
                    <span className={pathname === "/" ? "w-7 h-1 bg-[#419197]  absolute top-0 rounded-b":"hidden"}></span>
                    <Link to="/">
                        <HomeOutlinedIcon />
                    </Link>
                    <span className="text-xs">Home</span>
                </span>

                {/*profile*/}
                <span className={pathname === "/profile" ? "flex flex-col items-center text-[#419197]":"flex flex-col items-center"}>
                    <span className={pathname === "/profile" ? "w-7 h-1 bg-[#419197] absolute top-0 rounded-b":"hidden"}></span>
                    <Link to="/profile">
                        <Person2OutlinedIcon />
                    </Link>
                    <span className="text-xs">You</span>
                </span>

                {/*more*/}
                <span className={pathname === "/more" ? "flex flex-col items-center text-[#419197]":"flex flex-col items-center"}>
                    <span className={pathname === "/more" ? "w-7 h-1 bg-[#419197] absolute top-0 rounded-b":"hidden"}></span>
                    <Link to="more">
                        <LayersOutlinedIcon />
                    </Link>
                    <span className="text-xs">More</span>
                </span>

                {/* cart */}
                <span className={pathname === "/cart" ? "flex flex-col items-center text-[#419197]":"flex flex-col items-center"}>
                    <span className={pathname === "/cart" ? "w-7 h-1 bg-[#419197] absolute top-0 rounded-b":"hidden"}></span>
                    <Link to="cart">
                        <ShoppingCartOutlinedIcon />
                    </Link>
                    <span className="text-xs">Cart</span>
                </span>

                {/* menu */}
                <span className={pathname === "/menu" ? "flex flex-col items-center text-[#419197]":"flex flex-col items-center"}>
                    <span className={pathname === "/menu" ? "w-7 h-1 bg-[#419197] absolute top-0 rounded-b":"hidden"}></span>
                    <Link to="menu">
                        <MenuOutlinedIcon />
                    </Link>
                    <span className="text-xs">Menu</span>
                </span>
            </header>

            {/***************************************** desktop navbar **************************************/}
            <header className="hidden sm:flex bg-[#131921] justify-between px-4 py-2 items-center space-x-4">
                {/* amazon logo */}
                <span className="mt-2">
                    <Link to="/">
                        <img
                            src="../../src/assets/images/NicePng_amazon-logo-png_167642.png"
                            width={100}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </span>

                {/* search bar */}
                <form onSubmit={handleSubmit} className="flex flex-grow">
                    <input
                        className="p-1 focus:outline-none px-2 rounded-l flex-grow"
                        type="text"
                        placeholder="Amazon Search"
                        id="search"
                        onChange={(e)=>{setSearchedProduct(e.target.value)}}
                    />
                    <button type="submit" className="p-1 px-2 hover:bg-orange-400 bg-orange-300 rounded-r">
                        <SearchOutlinedIcon />
                    </button>
                </form>

                {/* signin */}
                <div className="text-white text-xs">
                    <Link className="flex flex-col">
                        <span>Hello, {}</span>
                        <span className="font-black">Accounts & Lists</span>
                    </Link>
                </div>

                {/* return and orders */}
                <div className="text-white text-xs">
                    <Link className="flex flex-col">
                        <span>Returns</span>
                        <span className="font-black">& Orders</span>
                    </Link>
                </div>

                {/* cart */}
                <div>
                    <Link className="text-white text-xs font-black">
                        <ShoppingCartOutlinedIcon/>
                        Cart
                    </Link>
                    <span className="absolute rounded-full -top-1 right-11 text-yellow-300">0</span>
                </div>
            </header>
        </nav>
    );
}
