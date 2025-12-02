"use client";
import {
  decrementQuantity,
  deleteCart,
  incrementQuantity,
  toggleSelected,
} from "@/app/redux/features/CartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const CartDetails = ({ item }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart) || {};
  console.log("items" , items);

  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

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
          dispatch(deleteCart(item?.id));
          swalWithBootstrapButtons.fire({
            title: "Deleted!😰",
            text: "Your Product has been deleted.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Product is safe :)😎",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="bg-base-100 px-3 flex items-center justify-between shadow-sm hover:shadow-md hover:shadow-red-400 mt-10">
      <div className="flex items-center md:gap-8 gap-3">
        <figure className="flex md:gap-4 gap-2 items-center">
          <input
            onChange={() => dispatch(toggleSelected(item?.id))}
            checked={item?.selected || false}
            className="md:w-6 md:h-6"
            type="checkbox"
          />
          <Image
            width={100}
            height={300}
            src={item?.image || ""}
            alt={item?.title || ""}
          />
        </figure>

        <div>
          <h2 className="md:card-title text-sm md:text-lg">
            {item?.title}
            <div className="md:badge hidden md:block md:badge-secondary">
              {item?.brand}
            </div>
          </h2>

          <p className="md:text-md text-xs font-bold">
            Price: ${item?.price || 0}
          </p>
        </div>
      </div>

      <div>
        <div className="md:card-actions flex items-center justify-center md:gap-10 gap-4">
          <div>
            <MdDelete
              size={25}
              onClick={handleDelete}
              className="text-red-600 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-5">
            <p
              onClick={() => dispatch(decrementQuantity(item?.id))}
              className="cursor-pointer"
            >
              <CiCircleMinus size={30} />
            </p>

            <p className="text-xl">{item?.cartQuantity || 0}</p>

            <p
              onClick={() => dispatch(incrementQuantity(item?.id))}
              className="cursor-pointer"
            >
              <CiCirclePlus size={30} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
