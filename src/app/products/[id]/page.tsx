'use client'

import NotFoundPage from "@/app/not-found"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/app/redux/features/CartSlice"
import Swal from "sweetalert2"
import { stockReduce, Product } from "@/app/redux/features/fetchDataSlice"
import type { RootState, AppDispatch } from "@/app/redux/store"

interface ProductDetailsProps {
  params: {
    id: string
  }
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector((state: RootState) => state.data)
  const { id } = params

  // find product
  const product = items.find((p: Product) => p.id === id)
  const updateProduct = product ? items.find((p: Product) => p.id === product.id) : undefined

  if (loading) return <p>Loading.......</p>
  if (error) return <p>{error}</p>

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

    dispatch(addToCart(product!))
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
      <div>
        <h1 className="text-2xl font-bold text-center">Products details</h1>
        <div className="card bg-base-100 mx-auto w-96 shadow-lg hover:shadow-red-600 mt-10">
          <figure>
            <Image width={400} height={500} src={product.image} alt={product.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.title}
              <div className="badge badge-secondary">{product.brand}</div>
            </h2>
            <p>{product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Stock: {product.quantity}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: ${product.price}</p>
            <div className="card-actions justify-end gap-4">
              <button className="px-4 py-1 hover:bg-blue-900 rounded-tr-2xl rounded-bl-2xl bg-blue-600 text-white rounded cursor-pointer">
                Buy Now
              </button>
              <button onClick={handleAddToCart} className="px-4 py-1 hover:bg-blue-900 rounded-tr-2xl rounded-bl-2xl bg-blue-600 text-white rounded cursor-pointer">
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