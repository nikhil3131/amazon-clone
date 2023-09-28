import React, { useEffect, useState } from "react";
import { banners } from "../../data";
import { Link } from "react-router-dom";

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>{
                const newIndex = prevIndex + 1;
                if(newIndex>banners.length -1){
                    return 0;
                }else{
                    return newIndex
                }
            })
        },3000)
        return ()=> clearInterval(interval)
    })

    const poster = banners[currentIndex];

    return (
        <section>
            <div>
                <Link to={poster.href}>
                    <img src={poster.image} alt={poster.title} />
                </Link>
            </div>
        </section>
    );
}
