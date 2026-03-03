'use client'

import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProducts, Product } from "../redux/features/fetchDataSlice"
import type { RootState, AppDispatch } from "../redux/store"
import LoadingSpinner from "../loading"

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [search, setSearch] = useState<string>("")
  const { items, loading, error } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    )
  }
  if (error) {
    throw new Error(error);
  }

  const filtered: Product[] = items.filter((product: Product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 my-12">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
          Find the Perfect <span className="text-blue-600">Gadget</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Explore our latest collection of high-quality tech and gadgets tailored just for you.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-md">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            type="text"
            value={search}
            placeholder="Search by product name..."
          />
          <svg
            className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {filtered.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl text-gray-400 font-medium">No gadgets found matching "{search}"</h3>
          <button 
            onClick={() => setSearch("")}
            className="text-blue-600 hover:underline mt-2"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}

export default Products