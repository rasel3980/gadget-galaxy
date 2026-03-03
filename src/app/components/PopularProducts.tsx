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

  const updateProduct = items.find((p) => p.id === product.id)

  const handleAddToCart = () => {

    if (!updateProduct || updateProduct.quantity <= 0) {
      Swal.fire({
        title: "Sorry 😞 Out of Stock",
      })
      return
    }

    dispatch(addToCart(product))
    dispatch(stockReduce(product.id))

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to Cart 😉",
      showConfirmButton: false,
      timer: 1200
    })
  }

  return (
    <div>
      <div className="card bg-base-100 w-96 h-[520px] shadow-lg hover:shadow-red-600">
        <div>
          <Image
            width={400}
            height={400}
            className="h-72"
            src={product.image}
            alt={product.title}
          />
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
  )
}

export default PopularProducts