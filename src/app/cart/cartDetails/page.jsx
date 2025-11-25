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

const CartDetails = ({ item }) => {
  const dispatch = useDispatch();
  const {items} = useSelector((state)=>state.cart)
  console.log("cart item",items);

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
          dispatch(deleteCart(item.id))
          swalWithBootstrapButtons.fire({
            title: "Deleted!😰",
            text: "Your Product has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Product is safe :)😎",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className=" bg-base-100 px-3 flex items-center justify-between  shadow-sm hover:shadow-md hover:shadow-red-400 mt-10">
      <div className="flex items-center gap-8">
        <figure className="flex gap-4 items-center">
          <input onChange={()=>dispatch(toggleSelected(item.id))} checked={item.selected} className="w-6 h-6 " type="checkbox" name="" id="" />
          <Image width={100} height={300} src={item.image} alt=""></Image>
        </figure>
        <div>
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">{item.brand}</div>
          </h2>
          <p>Price: ${item.price}</p>
        </div>
      </div>
      <div>
        <div className="card-actions items-center mr-7 gap-10">
          <button
            onClick={handleDelete}
            className="px-4 py-1 bg-red-600 text-white rounded cursor-pointer"
          >
            Delete
          </button>
          <div className="flex items-center gap-5">
            <p
              onClick={() => dispatch(decrementQuantity(item.id))}
              className="text-5xl cursor-pointer"
            >
              -
            </p>
            <p className="text-xl">{item.cartQuantity}</p>
            <p
              onClick={() => dispatch(incrementQuantity(item.id))}
              className=" text-3xl cursor-pointer"
            >
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
