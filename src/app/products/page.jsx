
import data from "@/app/data/products.json";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

const Products = async ({ searchParams }) => {
  const search = await searchParams?.search || "";
  console.log("search", search);

  const filtered = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">This is products page</h1>
      <SearchBar search={search}></SearchBar>
      <div className="grid grid-cols-3 items-center justify-items-center gap-5 my-5">
        {filtered.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    </div>
  );
};

export default Products;
