'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, Product } from "./redux/features/fetchDataSlice";
import PopularProducts from "./components/PopularProducts";
import HomeCarousel from "./components/Carousel";
import LoadingSpinner from "./loading"; 
import type { RootState, AppDispatch } from "./redux/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    throw new Error(error); 
  }

  const filteredPopular: Product[] = items.filter(
    (p: Product) => p.isPopular === true
  );

  return (
    <div>
      <HomeCarousel />
      <div className="grid md:grid-cols-3 justify-items-center gap-5 my-10 px-4">
        {filteredPopular.map((p: Product) => (
          <PopularProducts key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}