'use client'
import { addToCart } from "@/app/redux/features/CartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image width={400} height={500} src={product.image} alt=""></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.title}
            <div className="badge badge-secondary">{product.brand}</div>
          </h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer"
            >
              Add to Cart
            </button>
            <Link href={`/products/${product.id}`}>
              <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
