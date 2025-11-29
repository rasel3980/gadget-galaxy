'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/features/fetchDataSlice";
import PopularProducts from "./popularProducts/page";
import HomeCarousel from "./components/carousel/page";

export default function Home() {
  const dispatch = useDispatch()
  const {items,loading,error} = useSelector((state)=>state.data)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  const filteredPopular = items.filter((p)=>p.isPopular==true) 

  if (loading) return <h1 className="text-3xl">Loading...</h1>;
  if (error) return <h1 className="text-red-600">{error}</h1>;

  

  console.log("items",items);
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className="grid md:grid-cols-3 justify-items-center gap-5 my-10">
        {
        filteredPopular.map((p)=><PopularProducts key={p.id} product={p}></PopularProducts>)
      }
      </div>
    </div>
  );
}
