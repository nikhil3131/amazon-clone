import React from "react";
import { Banner } from "../components";
import { fetchDataFromApi } from "../dataFetching/fakeApi.js";

export default function Landing() {
  //fetching data from API
  const {data,error,isLoading,isError} =fetchDataFromApi("https://fakestoreapi.com/products","products")

  //loading state
  if(isLoading){
    return(
      <div className="text-lg font-black">Loading.....</div>
    )
  }

  //error during data fetching 
  if(isError){
    return(
      <div>
        error:{error}
      </div>
    )
  }

    return (
        <section className="bg-gray-100">
            <section className="max-w-screen-2xl mx-auto">
                {/* banners */}
                <Banner />
                
            </section>
        </section>
    );
}
