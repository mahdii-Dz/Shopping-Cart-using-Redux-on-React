import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store/slices/CartSlice";
function ProductItem({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  function handleAddToCart() {
    dispatch(AddToCart(item));
  }

  return (
    <>
      <div className="w-70 flex flex-col bg-white shadow-[0px_0px_10px_0px] shadow-gray-300 rounded-lg p-4">
        <div className="w-full h-52 overflow-hidden rounded-lg shadow shadow-gray-400 flex justify-center items-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold">
          {item.title.length > 35
            ? item.title.slice(0, 35) + "..."
            : item.title}
        </h1>
        <p className="text-gray-500">
          {item.description.length > 50
            ? item.description.slice(0, 50) + "..."
            : item.description}
        </p>
        <p className="text-lg font-bold">${item.price}</p>
        <div className="grow"></div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded font-semibold cursor-pointer"
        >
          {
            cart && cart.length > 0 && cart.findIndex((i) => i.id === item.id) !== -1
              ? "Remove From Cart"
              : "Add to Cart"
          }
        </button>
      </div>
    </>
  );
}

export default ProductItem;
