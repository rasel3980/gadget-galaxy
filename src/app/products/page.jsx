"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import data from "@/app/data/products.json"

const  Products = () => {
  const [search,setSearch] = useState("");
 
    const filtered = data.filter((product)=>product.title.toLowerCase().includes(search.toLocaleLowerCase())
  )
  

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">This is products page</h1>
      <div className="text-center mt-5">
        <input onChange={(e)=>setSearch(e.target.value )} className="px-3  border rounded w-1/3" type="text" value={search} placeholder="Search here" />
      </div>
      <div className="grid grid-cols-3 items-center justify-items-center gap-5 my-5">
        {filtered.map((product) => {
          return (
            <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <Image width={400} height={500} src={product.image} alt=""></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.title}
                  <div className="badge badge-secondary">{product.brand}</div>
                </h2>
                <p>
                    {product.description}
                </p>
                <div className="card-actions justify-end">
                    <Link href={`/products/${product.id}`}><button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">See Details</button></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
