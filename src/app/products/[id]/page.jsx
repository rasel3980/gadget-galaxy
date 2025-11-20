'use client'
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import data from "@/app/data/products.json"
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/features/CartSlice";

// export async function generateMetadata({ params} ) {
//     const id = (await params).id
//   const product = data.find((p) => p.id == id);
 
//   return {
//     title: product.title,
//     description: product.description,
//   }
// }

const ProductDetails = ({ params }) => {
  const { id } = use(params);
  const dispatch = useDispatch()

  const product = data.find((p) => p.id == id);
  if(product){
    return (
    <div>
      <h1 className="text-2xl font-bold text-center">Details page</h1>
      <div className="card bg-base-100 mx-auto w-96 shadow-sm mt-10">
        <figure>
          <Image width={400} height={500} src={product.image} alt=""></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.title}
            <div className="badge badge-secondary">{product.brand}</div>
          </h2>
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Available: {product.quantity}</p>
          <p>Rating: {product.rating}</p>
          <p>Price: ${product.price}</p>
          <div className="card-actions justify-end">
              <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
                Buy Now
              </button>
              <button onClick={()=>dispatch(addToCart(product))} className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
  }
  else{
    return(
        <NotFoundPage></NotFoundPage>
    )
  }
  
};

export default ProductDetails;
