'use client'

import React from "react" 
import NotFoundPage from "@/app/not-found"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/app/redux/features/CartSlice"
import Swal from "sweetalert2"
import { stockReduce, Product } from "@/app/redux/features/fetchDataSlice"
import type { RootState, AppDispatch } from "@/app/redux/store"

interface ProductDetailsProps {
  params: Promise<{ id: string }> 
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector((state: RootState) => state.data)

  const resolvedParams = React.use(params)
  const id = resolvedParams.id

  const product = items.find((p: Product) => String(p.id) === String(id))
  
  const updateProduct = product ? items.find((p: Product) => String(p.id) === String(product.id)) : undefined

  if (loading) return <p className="text-center mt-10 text-xl font-bold">Loading.......</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

  const handleAddToCart = () => {
    if (!updateProduct || updateProduct.quantity <= 0) {
      Swal.fire({
        title: "Sorry😞 Out of Stock",
        showClass: {
          popup: `animate__animated animate__fadeInUp animate__faster`,
        },
        hideClass: {
          popup: `animate__animated animate__fadeOutDown animate__faster`,
        },
      })
      return
    }

    dispatch(addToCart(product as any))
    dispatch(stockReduce(product!.id))

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to Cart 😉",
      showConfirmButton: false,
      timer: 1200
    })
  }

  if (product) {
    return (
      <div className="py-10">
        <h1 className="text-3xl font-black text-center mb-6">Product Details</h1>
        <div className="card bg-base-100 mx-auto w-96 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
          <figure className="px-4 pt-4">
            <Image 
              width={400} 
              height={500} 
              src={product.image} 
              alt={product.title} 
              className="rounded-xl object-cover h-64 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {product.title}
              <div className="badge badge-secondary text-xs">{product.brand}</div>
            </h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
            
            <div className="space-y-1 my-4 bg-gray-50 p-3 rounded-lg">
               <p className="text-sm"><strong>Brand:</strong> {product.brand}</p>
               <p className="text-sm"><strong>Stock:</strong> <span className={product.quantity > 0 ? 'text-green-600' : 'text-red-500'}>{product.quantity} units left</span></p>
               <p className="text-sm"><strong>Rating:</strong> ⭐ {product.rating}</p>
               <p className="text-2xl font-black text-blue-600 mt-2">${product.price}</p>
            </div>

            <div className="card-actions justify-between mt-4">
              <button className="btn btn-outline btn-info flex-1 rounded-xl">
                Buy Now
              </button>
              <button onClick={handleAddToCart} className="btn btn-primary flex-1 rounded-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <NotFoundPage />
  }
}

export default ProductDetails