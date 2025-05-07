import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="container w-full min-w-full flex justify-center">
        <div className="products grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
          {cart && cart.length > 0 ? (
            cart.map((item) => <ProductItem key={item.id} item={item} />)
            
          ) : (
            <div className="col-span-full flex justify-center items-center min-w-full w-full h-dvh">
              <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
