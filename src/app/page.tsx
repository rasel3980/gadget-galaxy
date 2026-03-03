'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, Product } from "./redux/features/fetchDataSlice";
import PopularProducts from "./components/PopularProducts";
import HomeCarousel from "./components/Carousel";
import type { RootState, AppDispatch } from "./redux/store";

export default function Home() {

  const dispatch = useDispatch<AppDispatch>();


  const { items, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredPopular: Product[] = items.filter(
    (p: Product) => p.isPopular === true
  );

  if (loading) return <h1 className="text-3xl">Loading...</h1>;
  if (error) return <h1 className="text-red-600">{error}</h1>;

  return (
    <div>
      <HomeCarousel />
      <div className="grid md:grid-cols-3 justify-items-center gap-5 my-10">
        {filteredPopular.map((p: Product) => (
          <PopularProducts key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}