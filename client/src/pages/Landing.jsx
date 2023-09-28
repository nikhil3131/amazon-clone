import React, { useState } from "react";
import { Banner } from "../components";
import { fetchDataFromApi } from "../dataFetching/fakeApi.js";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export default function Landing() {
    const [hasPrime] = useState(Math.random() < 0.5);

    //fetching data from API
    const { data, error, isLoading, isError } = fetchDataFromApi(
        "https://fakestoreapi.com/products",
        "products"
    );

    //loading state
    if (isLoading) {
        return <div className="text-lg font-black">Loading.....</div>;
    }

    //error during data fetching
    if (isError) {
        return <div>error:{error}</div>;
    }

    return (
        <section className="bg-gray-100">
            <section className="max-w-screen-2xl mx-auto">
                {/* banners */}
                <Banner />

                {/* featured products */}
                <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
                    {data.slice(0,4).map((pro) => {
                        return (
                            <div
                                key={pro.id}
                                className="relative flex flex-col m-5 bg-white z-20 p-10"
                            >
                                {/* product image */}
                                <img
                                    src={pro.image}
                                    alt={pro.title}
                                    height={200}
                                    width={200}
                                    className="object-contain mx-auto"
                                />

                                {/* product title */}
                                <h4 className="my-3">{pro.title}</h4>

                                {/* product rating */}
                                <div>
                                    {Array(Math.floor(pro.rating.rate))
                                        .fill()
                                        .map((_, i) => {
                                            return (
                                                <StarOutlinedIcon className="text-yellow-400" key={i}/>
                                            );
                                        })}
                                </div>

                                {/* description */}
                                <p className="text-xs my-2 line-clamp-2">
                                    {pro.description}
                                </p>

                                {/* price */}
                                <div className="mb-5">Rs {pro.price}</div>

                                {/* has prime */}
                                {hasPrime && (
                                    <div className="flex items-center space-x-2 -mt-5">
                                        <img
                                            src="../../src/assets/images/icons8-amazon-prime-48.png"
                                            alt="prime"
                                        />
                                        <p className="text-xs text-gray-500">
                                            FREE Next day Delivery
                                        </p>
                                    </div>
                                )}

                                {/* add to cart */}
                                <button className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:right-2 focus:ring-yellow-500 active:from-yellow-500">
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                    <img src="https://links.papareact.com/dyz" className="md:col-span-full mx-auto"/>
                    {data.slice(4).map((pro) => {
                        return (
                            <div
                                key={pro.id}
                                className="relative flex flex-col m-5 bg-white z-20 p-10"
                            >
                                {/* product image */}
                                <img
                                    src={pro.image}
                                    alt={pro.title}
                                    height={200}
                                    width={200}
                                    className="object-contain mx-auto"
                                />

                                {/* product title */}
                                <h4 className="my-3">{pro.title}</h4>

                                {/* product rating */}
                                <div>
                                    {Array(Math.floor(pro.rating.rate))
                                        .fill()
                                        .map((_, i) => {
                                            return (
                                                <StarOutlinedIcon className="text-yellow-400" key={i}/>
                                            );
                                        })}
                                </div>

                                {/* description */}
                                <p className="text-xs my-2 line-clamp-2">
                                    {pro.description}
                                </p>

                                {/* price */}
                                <div className="mb-5">Rs {pro.price}</div>

                                {/* has prime */}
                                {hasPrime && (
                                    <div className="flex items-center space-x-2 -mt-5">
                                        <img
                                            src="../../src/assets/images/icons8-amazon-prime-48.png"
                                            alt="prime"
                                        />
                                        <p className="text-xs text-gray-500">
                                            FREE Next day Delivery
                                        </p>
                                    </div>
                                )}

                                {/* add to cart */}
                                <button className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:right-2 focus:ring-yellow-500 active:from-yellow-500">
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </section>
    );
}
