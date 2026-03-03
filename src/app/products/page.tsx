'use client'

import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProducts, Product } from "../redux/features/fetchDataSlice"
import type { RootState, AppDispatch } from "../redux/store"
import LoadingSpinner from "../loading"
import { FiSearch, FiX } from "react-icons/fi"; 

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
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase">
          Find Your <span className="text-blue-600">Gadget</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto font-medium text-sm md:text-base">
          Explore our professional collection of high-tech gear and accessories.
        </p>
      </div>
      <div className="flex justify-center mb-16 px-2">
        <div className="relative w-full max-w-2xl group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative flex items-center">
            <FiSearch className="absolute left-5 text-gray-400 text-xl group-hover:text-blue-600 transition-colors" />
            
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white px-14 py-5 rounded-2xl shadow-xl border border-gray-100 outline-none text-gray-800 font-bold placeholder:text-gray-400 placeholder:font-normal focus:ring-2 focus:ring-blue-500/20 transition-all text-lg"
              type="text"
              value={search}
              placeholder="Search gadgets..."
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute right-5 p-2 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-xl transition-all active:scale-90"
              >
                <FiX className="text-xl" />
              </button>
            )}
          </div>
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {filtered.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl text-gray-800 font-black tracking-tighter uppercase">No gadgets found</h3>
          <p className="text-gray-500 mt-2">Sorry, we couldnt find anything matching <span className="font-bold text-blue-600">{search}</span></p>
          <button 
            onClick={() => setSearch("")}
            className="mt-6 px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all active:scale-95"
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  )
}

export default Products