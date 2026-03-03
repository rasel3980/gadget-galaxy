'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { addToCart } from '../redux/features/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { stockReduce } from '../redux/features/fetchDataSlice'
import type { RootState, AppDispatch } from '../redux/store'
import type { Product } from '../redux/features/fetchDataSlice'

interface PopularProductsProps {
  product: Product
}

const PopularProducts: React.FC<PopularProductsProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { items } = useSelector((state: RootState) => state.data)

  const updateProduct = items.find((p) => String(p.id) === String(product.id))
  const currentStock = updateProduct ? updateProduct.quantity : product.quantity

  const handleAddToCart = () => {
    if (currentStock <= 0) {
      Swal.fire({
        title: "Sorry 😞 Out of Stock",
        icon: "error",
        confirmButtonColor: "#3b82f6"
      })
      return
    }

    dispatch(addToCart(product))
    dispatch(stockReduce(product.id))

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Cart 😉",
      showConfirmButton: false,
      timer: 1200,
      toast: true
    })
  }

  return (
    <div className="p-2 flex flex-col items-center"> 
      <div className="card bg-base-100 w-full max-w-[380px] h-[550px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
       
        <figure className="relative h-64 overflow-hidden bg-gray-50 pt-4">
          <Image
            width={400}
            height={400}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            src={product.image}
            alt={product.title}
          />
          {currentStock <= 0 && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">Sold Out</span>
            </div>
          )}
        </figure>

        <div className="card-body p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="card-title text-lg font-bold line-clamp-1">
                {product.title}
              </h2>
              <div className="badge badge-secondary badge-outline text-[10px]">{product.brand}</div>
            </div>
            <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-t pt-4">
              <div>
                <p className={`text-xs font-bold ${currentStock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                   {currentStock > 0 ? `Stock: ${currentStock}` : 'Out of Stock'}
                </p>
                <p className="text-2xl font-black text-blue-600">${product.price}</p>
              </div>
              <div className="text-yellow-500 font-bold">⭐ {product.rating}</div>
            </div>

            <div className="card-actions grid grid-cols-2 gap-2">
              <button
                disabled={currentStock <= 0}
                onClick={handleAddToCart}
                className={`py-2 text-xs font-bold uppercase transition-all rounded-tr-xl rounded-bl-xl ${
                  currentStock > 0 
                  ? "bg-blue-600 hover:bg-blue-800 text-white" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Add to Cart
              </button>

              <Link href={`/products/${product.id}`} className="w-full">
                <button className="w-full py-2 text-xs font-bold uppercase bg-gray-800 hover:bg-black text-white rounded-tr-xl rounded-bl-xl transition-all">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts