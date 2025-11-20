'use client'
import Image from "next/image";
import Link from "next/link";
import data from "@/app/data/products.json";
import SearchBar from "./components/SearchBar";
import { addToCart } from "../redux/features/CartSlice";
import { useDispatch } from "react-redux";

const Products = ({ searchParams }) => {
  const search = searchParams?.search || "";
  console.log("search", search);

  const filtered = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">This is products page</h1>
      <SearchBar search={search}></SearchBar>
      <div className="grid grid-cols-3 items-center justify-items-center gap-5 my-5">
        {filtered.map((product) => {
          return (
            <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <Image
                  width={400}
                  height={500}
                  src={product.image}
                  alt=""
                ></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.title}
                  <div className="badge badge-secondary">{product.brand}</div>
                </h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  <Link href={`/products/${product.id}`}>
                    <button className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
