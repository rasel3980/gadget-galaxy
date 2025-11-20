import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartDetails = ({item}) => {
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
        <div className="card-actions justify-end">
            <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
              Buy Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
