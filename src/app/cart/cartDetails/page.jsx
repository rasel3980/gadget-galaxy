import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartDetails = ({item}) => {
  return (
    <div className="card bg-base-100 mx-auto w-96 shadow-sm mt-10">
      <figure>
        <Image width={400} height={500} src={item.image} alt=""></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          <div className="badge badge-secondary">{item.brand}</div>
        </h2>
        <p>{item.description}</p>
        <p>Brand: {item.brand}</p>
        <p>Available: {item.quantity}</p>
        <p>Rating: {item.rating}</p>
        <p>Price: ${item.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${item.id}`}>
            <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
              Buy Now
            </button>
          </Link>
          <Link href={`/products/${item.id}`}>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
