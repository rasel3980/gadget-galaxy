"use client";
import { addToCart } from "@/app/redux/features/CartSlice";
import { stockReduce } from "@/app/redux/features/fetchDataSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const {items} = useSelector((state)=>state.data)
  const updateProduct = items.find((p) => p.id === product.id)

  const handleAddToCart = () => {
    if (updateProduct.quantity <= 0) {
      Swal.fire({
        title: "Sorry😞 Out of Stock",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      return;
    }
    dispatch(addToCart(product));
    dispatch(stockReduce(product.id));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to Cart 😉",
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <div>
      <div
        key={product.id}
        className="card bg-base-100 w-96 h-[520px] hover:shadow-red-600 shadow-lg"
      >
        <div>
          <Image
            width={400}
            height={400}
            className="h-72"
            src={product.image}
            alt=""
          ></Image>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {product.title}
            <div className="badge badge-secondary">{product.brand}</div>
          </h2>
          <p>{product.description}</p>
          <p className="font-bold">Stock: {product.quantity}</p>
          <p className="font-bold">Price: ${product.price}</p>
          <div className="card-actions justify-end gap-4">
            <button
              onClick={handleAddToCart}
              className="px-4 py-1 bg-blue-600 hover:bg-blue-900 rounded-tr-2xl rounded-bl-2xl text-white rounded cursor-pointer"
            >
              Add to Cart
            </button>
            <Link href={`/products/${product.id}`}>
              <button className="px-4 py-1 hover:bg-blue-900 rounded-tr-2xl rounded-bl-2xl bg-blue-600 text-white rounded cursor-pointer">
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
