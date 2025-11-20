"use client"
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = ({search}) => {
    const router = useRouter();
  return (
    <div className="text-center mt-5">
      <input
        onChange={(e) => router.push(`?search=${e.target.value}`)}
        className="px-3  border rounded w-1/3"
        type="text"
        value={search}
        placeholder="Search here"
      />
    </div>
  );
};

export default SearchBar;
