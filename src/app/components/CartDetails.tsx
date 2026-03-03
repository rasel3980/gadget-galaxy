'use client'

import {
  decrementQuantity,
  deleteCart,
  incrementQuantity,
  toggleSelected,
  CartItem
} from "@/app/redux/features/CartSlice"
import Image from "next/image"
import React from "react"
import { useDispatch } from "react-redux" // useSelector অপ্রয়োজনীয় এখানে
import Swal from "sweetalert2"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"
import { MdDelete } from "react-icons/md"
import type { AppDispatch } from "@/app/redux/store"

interface CartDetailsProps {
  item: CartItem
}

const CartDetails: React.FC<CartDetailsProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>()

  const productId = String(item.id);

  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-3",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "This Product will be removed!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteCart(productId))
          swalWithBootstrapButtons.fire({
            title: "Deleted!😰",
            text: "Your Product has been deleted.",
            icon: "success",
          })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Product is safe :)😎",
            icon: "error",
          })
        }
      })
  }

  return (
    <div className="bg-base-100 px-4 py-3 flex items-center justify-between shadow-sm hover:shadow-md hover:border-red-400 border border-transparent rounded-xl transition-all duration-300 mt-5">
      <div className="flex items-center md:gap-8 gap-3">
        <div className="flex md:gap-4 gap-2 items-center">
          <input
            onChange={() => dispatch(toggleSelected(productId))}
            checked={item.selected || false}
            className="checkbox checkbox-primary md:w-6 md:h-6"
            type="checkbox"
          />
          <div className="w-16 h-16 md:w-24 md:h-24 relative bg-gray-50 rounded-lg overflow-hidden">
            <Image
              fill
              className="object-contain p-2"
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>

        <div>
          <h2 className="md:card-title text-sm md:text-lg font-bold text-gray-800">
            {item.title}
            <span className="hidden md:inline-flex badge badge-secondary badge-sm ml-2">
              {item.brand}
            </span>
          </h2>

          <p className="text-blue-600 font-bold">
            ${item.price}
          </p>
        </div>
      </div>

      <div className="flex items-center md:gap-10 gap-4">
          <MdDelete
            size={25}
            onClick={handleDelete}
            className="text-red-500 cursor-pointer hover:scale-110 transition-transform"
          />

          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 gap-3 md:gap-5">
            <button
              onClick={() => dispatch(decrementQuantity(productId))}
              className="hover:text-blue-600 transition-colors"
              disabled={item.cartQuantity <= 1}
            >
              <CiCircleMinus size={28} className={item.cartQuantity <= 1 ? "text-gray-300" : ""} />
            </button>

            <span className="text-lg font-bold w-4 text-center">{item.cartQuantity || 0}</span>

            <button
              onClick={() => dispatch(incrementQuantity(productId))}
              className="hover:text-blue-600 transition-colors"
            >
              <CiCirclePlus size={28} />
            </button>
          </div>
      </div>
    </div>
  )
}

export default CartDetails