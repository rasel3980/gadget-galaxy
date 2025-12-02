'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { addToCart } from '../redux/features/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { stockReduce } from '../redux/features/fetchDataSlice';

const PopularProducts = ({product}) => {
    const dispatch = useDispatch()
    const {items} = useSelector((state)=>state.data);
    const updateProduct = items.find((p)=>p.id === product.id)
    const handleAddToCart = () =>{
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
      dispatch(addToCart(product))
      dispatch(stockReduce(product.id))
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
            <div className="card bg-base-100 w-96 h-[520px] shadow-lg hover:shadow-red-600">
        <div>
          <Image width={400} height={400} className="h-72" src={product.image} alt=""></Image>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {product.title}
            <div className="badge badge-secondary">{product.brand}</div>
          </h2>
          <p>{product.description}</p>
          <p className="font-bold">Stock: {product.quantity}</p>
          <p className="font-bold">Price: ${product.price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="px-4 py-1 hover:bg-blue-900 rounded-tr-2xl rounded-bl-2xl bg-blue-600 text-white rounded cursor-pointer"
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

export default PopularProducts;