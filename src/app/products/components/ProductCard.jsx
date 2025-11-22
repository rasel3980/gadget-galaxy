'use client'
import { addToCart } from "@/app/redux/features/CartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const ProductCard = ({product}) => {
  const dispatch = useDispatch()

  const handleAddToCart = () =>{
    dispatch(addToCart(product))
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Product added to Cart 😉",
  showConfirmButton: false,
  timer: 1200
});
  }

  

  return (
    <div>
      <div key={product.id} className="card bg-base-100 w-96 h-[520px] shadow-sm">
        <div>
          <Image width={400} height={400} className="h-72" src={product.image} alt=""></Image>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {product.title}
            <div className="badge badge-secondary">{product.brand}</div>
          </h2>
          <p>{product.description}</p>
          <p className="font-bold">Price: ${product.price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
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
