'use client'
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/features/CartSlice";
import Swal from "sweetalert2";

// export async function generateMetadata({ params} ) {
//     const id = (await params).id
//   const product = data.find((p) => p.id == id);
 
//   return {
//     title: product.title,
//     description: product.description,
//   }
// }

const ProductDetails = ({ params }) => {
  const {items,loading,error} = useSelector((state)=>state.data);
  const dispatch = useDispatch()

  if(loading){
    return <p>Loading.......</p>
  }
  if(error){
    return <p>{error}</p>
  }

  const handleAddToCart = () =>{
      dispatch(addToCart(product))
      Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Product added to Cart 😉",
    showConfirmButton: false,
    timer: 1200
  });
    }

  const { id } = use(params);

  const product = items.find((p) => p.id == id);
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
              <button onClick={handleAddToCart} className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
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
