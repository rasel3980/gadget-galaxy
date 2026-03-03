'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, Product } from "./redux/features/fetchDataSlice";
import PopularProducts from "./components/PopularProducts";
import HomeCarousel from "./components/Carousel";
import LoadingSpinner from "./loading"; 
import type { RootState, AppDispatch } from "./redux/store";
import Link from "next/link";
import Features from "./components/Features";
import NewsLetter from "./components/NewsLetter";
import CategorySlider from "./components/CategorySlider";

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
      <Features></Features>
      <CategorySlider></CategorySlider>
      <div className="grid md:grid-cols-3 justify-items-center gap-5 my-10 px-4">
        {filteredPopular.map((p: Product) => (
          <PopularProducts key={p.id} product={p} />
        ))}
      </div>
      <div className="mt-8 mb-4 flex justify-center ">
        <Link href="/products">
          <button className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md active:scale-95">
            See More Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
}