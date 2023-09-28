import React from 'react';
import { categories } from "../../data";
import { Link } from 'react-router-dom';

export default function MobileSecondaryNavbar() {
  return (
    <div className='flex bg-white p-1 overflow-auto space-x-6 items-center px-3 scrollbarWidth'>
        {
            categories.map((categ)=>{
                return(
                    <Link to={categ.href} key={categ.id}>
                        <img src={categ.image} width={40} height={40}/>
                        <span className='text-xs'>{categ.title}</span>
                    </Link>
                )
            })
        }
    </div>
  )
}
