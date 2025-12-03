'use client'
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/features/fetchDataSlice";

const Products =  () => {
  const dispatch = useDispatch()
  const [search,setSearch] = useState("")
  const {items,loading,error} = useSelector((state)=>state.data)
  console.log('products',items);

  useEffect(()=>{
        dispatch(fetchProducts())
  },[dispatch])

  if(loading){
    return <p>Loading.......</p>
  }
  if(error){
    return <p>{error}</p>
  }
  console.log("search", search);

  const filtered = items.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center text-blue-700">Find the Perfect Gadget for You</h1>
      <div className="text-center my-8">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="px-3  border rounded w-1/3"
        type="text"
        value={search}
        placeholder="Search here"
      />
    </div>
      <div className="grid md:grid-cols-3 items-center justify-items-center gap-5 my-5">
        {filtered.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    </div>
  );
};

export default Products;
