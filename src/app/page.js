'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/features/fetchDataSlice";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

export default function Home() {
  const dispatch = useDispatch()
  const {items,loading,error} = useSelector((state)=>state.data)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  const filteredPopular = items.filter((p)=>p.isPopular==true) 

  if (loading) return <h1 className="text-3xl">Loading...</h1>;
  if (error) return <h1 className="text-red-600">{error}</h1>;

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

  console.log("items",items);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center ">Hello world</h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {
        filteredPopular.map((p)=>(
          <div key={p.id} className="card bg-base-100 w-96 h-[520px] shadow-sm">
        <div>
          <Image width={400} height={400} className="h-72" src={p.image} alt=""></Image>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {p.title}
            <div className="badge badge-secondary">{p.brand}</div>
          </h2>
          <p>{p.description}</p>
          <p className="font-bold">Price: ${p.price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer"
            >
              Add to Cart
            </button>
            <Link href={`/products/${p.id}`}>
              <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
        ))
      }
      </div>
    </div>
  );
}
