import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-w-full w-full h-dvh text-3xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="container w-full min-w-full flex justify-center">
        <div className="products grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
          {data && data.length > 0 ? (
            data.map((item, index) => <ProductItem key={index} item={item} />)
          ) : (
            <div className="col-span-full flex justify-center items-center min-w-full w-full h-dvh">
              <h1 className="text-3xl font-bold">No Products Found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
