"use client";

import React from "react";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/features/CartSlice";
import Swal from "sweetalert2";
import { stockReduce, Product } from "@/app/redux/features/fetchDataSlice";
import type { RootState, AppDispatch } from "@/app/redux/store";
import { FiStar, FiPackage } from "react-icons/fi";

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.data,
  );

  const resolvedParams = React.use(params);
  const id = resolvedParams.id;

  const product = items.find((p: Product) => String(p.id) === String(id));
  const currentStock = product
    ? (items.find((p) => String(p.id) === String(product.id))?.quantity ?? 0)
    : 0;

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );

  if (error)
    return <p className="text-center mt-10 text-red-500 font-bold">{error}</p>;

  const handleAddToCart = () => {
    if (currentStock <= 0) {
      Swal.fire({
        title: "Out of Stock 😞",
        text: "Keep an eye out for restock!",
        icon: "warning",
        confirmButtonColor: "#3b82f6",
      });
      return;
    }

    dispatch(addToCart(product as any));
    dispatch(stockReduce(product!.id));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Cart 😉",
      showConfirmButton: false,
      timer: 1200,
      toast: true,
    });
  };

  if (!product) return <NotFoundPage />;

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-400 mb-8 uppercase tracking-widest font-bold">
          Products / <span className="text-blue-600">{product.category}</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 flex justify-center items-center overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px] transform hover:scale-105 transition-transform duration-500">
              <Image
                fill
                src={product.image}
                alt={product.title}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                {product.brand}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight tracking-tighter uppercase italic">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center text-yellow-500 font-bold bg-yellow-50 px-3 py-1 rounded-lg">
                  <FiStar className="mr-1 fill-current" /> {product.rating}
                </div>
                <span className="text-gray-400 text-sm font-medium">|</span>
                <div
                  className={`flex items-center font-bold text-sm ${currentStock > 0 ? "text-green-600" : "text-red-500"}`}
                >
                  <FiPackage className="mr-1" />{" "}
                  {currentStock > 0
                    ? `${currentStock} Units Available`
                    : "Sold Out"}
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="border-y border-gray-100 py-6">
              <p className="text-4xl font-black text-blue-700 tracking-tighter">
                ${product.price}
              </p>
              <p className="text-gray-400 text-xs mt-1 font-bold uppercase tracking-widest">
                + Free Global Shipping
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={currentStock <= 0}
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-tr-xl rounded-bl-xl shadow-lg active:scale-95 ${
                  currentStock > 0
                    ? "bg-blue-600 hover:bg-blue-800 text-white shadow-blue-100"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                }`}
              >
                Add to Cart
              </button>

              <button className="flex-1 py-4 bg-gray-800 hover:bg-black text-white rounded-tr-xl rounded-bl-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95">
                Buy Now
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">
                  Warranty
                </p>
                <p className="text-sm font-bold text-gray-700">
                  1 Year Official
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">
                  Return
                </p>
                <p className="text-sm font-bold text-gray-700">30 Day Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
