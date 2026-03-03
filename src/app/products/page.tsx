'use client'

import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProducts, Product } from "../redux/features/fetchDataSlice"
import type { RootState, AppDispatch } from "../redux/store"

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [search, setSearch] = useState<string>("")
  const { items, loading, error } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <p>Loading.......</p>
  if (error) return <p>{error}</p>

  const filtered: Product[] = items.filter((product: Product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Find the Perfect Gadget for You
      </h1>
      <div className="text-center my-8">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 border rounded w-1/3"
          type="text"
          value={search}
          placeholder="Search here"
        />
      </div>
      <div className="grid md:grid-cols-3 items-center justify-items-center gap-5 my-5">
        {filtered.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products