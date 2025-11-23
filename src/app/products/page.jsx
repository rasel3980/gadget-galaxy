'use client'
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/features/fetchDataSlice";

const Products =  () => {
  const dispatch = useDispatch()
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
  // const search = await searchParams?.search || "";
  // console.log("search", search);

  // const filtered = data.filter((product) =>
  //   product.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">This is products page</h1>
      {/* <SearchBar search={search}></SearchBar> */}
      <div className="grid grid-cols-3 items-center justify-items-center gap-5 my-5">
        {items.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    </div>
  );
};

export default Products;
