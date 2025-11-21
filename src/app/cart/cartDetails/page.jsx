import { decrementQuantity, deleteCart, incrementQuantity } from "@/app/redux/features/CartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const CartDetails = ({item}) => {
  const dispatch = useDispatch();
  
  return (
    <div className=" bg-base-100 mx-auto flex justify-between items-center border border-red-800 shadow-sm mt-10">
      <div>
        <figure>
        <Image width={200} height={300} src={item.image} alt=""></Image>
      </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          <div className="badge badge-secondary">{item.brand}</div>
        </h2>
        <p>Price: ${item.price}</p>
        <div className="card-actions justify-end gap-10">
            <button onClick={()=>dispatch(deleteCart(item.id))} className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
              Delete
            </button>
            <div className="flex items-center gap-5">
              <button onClick={()=>dispatch((decrementQuantity(item.id)))} className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">-</button>
              <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">{item.quantity}</button>
              <button onClick={()=>dispatch(incrementQuantity(item.id))} className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">+</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
