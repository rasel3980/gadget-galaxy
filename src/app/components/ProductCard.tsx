'use client'

import { addToCart } from "@/app/redux/features/CartSlice"
import { stockReduce } from "@/app/redux/features/fetchDataSlice"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import type { RootState, AppDispatch } from "@/app/redux/store"
import type { Product } from "@/app/redux/features/fetchDataSlice"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { items } = useSelector((state: RootState) => state.data)

  const updateProduct = items.find((p) => p.id === product.id)
  const currentStock = updateProduct ? updateProduct.quantity : product.quantity

  const handleAddToCart = () => {
    if (currentStock <= 0) {
      Swal.fire({
        icon: 'error',
        title: "Out of Stock",
        text: "Sorry, this product is currently unavailable.",
        confirmButtonColor: '#3085d6',
      })
      return
    }

   
    dispatch(addToCart({
      ...product,
      price: product.price as number 
    }))
    
    dispatch(stockReduce(product.id))

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Cart! 🛒",
      showConfirmButton: false,
      timer: 1500,
      toast: true 
    })
  }

  return (
    <div className="group">
      <div className="card bg-white w-full max-w-[380px] h-[550px] shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 rounded-3xl overflow-hidden">
        
      
        <div className="relative h-64 overflow-hidden">
          <Image
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={product.image || "/placeholder.png"}
            alt={product.title}
          />
          {currentStock <= 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="card-body p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="card-title text-gray-800 font-bold leading-tight">
                {product.title}
              </h2>
              <span className="badge badge-outline text-xs">{product.brand}</span>
            </div>

            <p className="text-gray-500 text-sm line-clamp-2 mb-4">
              {product.description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center border-t pt-4">
              <div>
                <p className={`text-xs font-semibold ${currentStock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {currentStock > 0 ? `In Stock: ${currentStock}` : 'Sold Out'}
                </p>
                <p className="text-2xl font-black text-blue-700">${product.price}</p>
              </div>
            </div>

            <div className="card-actions grid grid-cols-2 gap-3 mt-2">
              <button
                disabled={currentStock <= 0}
                onClick={handleAddToCart}
                className={`py-2.5 text-sm font-bold transition-all rounded-xl shadow-lg active:scale-95 ${
                  currentStock > 0 
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200" 
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Add to Cart
              </button>

              <Link href={`/products/${product.id}`} className="w-full">
                <button className="w-full py-2.5 text-sm font-bold bg-gray-800 hover:bg-black text-white rounded-xl transition-all shadow-lg active:scale-95">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard