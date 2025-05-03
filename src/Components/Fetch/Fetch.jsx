import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

function Fetch() {
  const fetcher = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetcher,
  });

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl md:text-5xl text-center px-4 text-red-600">
          {error.message || "OOPS! Something went wrong"}
        </h1>
      </div>
    );

  return (
    <div className="w-full flex justify-center py-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {data?.map((product) => (
          <div
            key={product?.id}
            className="bg-white text-black rounded-xl shadow-md overflow-hidden flex flex-col p-4 items-center hover:shadow-lg transition-all duration-300"
          >
            <img
              src={product.image}
              alt="image of product"
              className="w-40 h-40 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-center mb-2">
              {product?.title}
            </p>
            <p className="text-md font-medium mb-2">
              <strong>Price:</strong> ${product?.price}
            </p>
            <p className="text-sm text-gray-600 line-clamp-3 text-center mb-4">
              <strong>Description:</strong> {product?.description}
            </p>
            <button className="mt-auto px-4 py-2 bg-black text-white rounded-md hover:bg-green-500 hover:text-black transition">
              Buy now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fetch;
