import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartTotal, DeleteItem } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartValues = useSelector((state) => state.CartValue.cartItems);
  const cartTotal = useSelector((state) => state.CartValue);
  const dispatch = useDispatch();

  dispatch(CartTotal());

  return (
    <div className="w-full max-w-md bg-gray-100 m-4 p-4 sm:p-6 shadow-lg rounded-lg mx-auto">
      <h1 className="text-lg font-bold mb-4 text-center">Your Cart</h1>
      {cartValues.length === 0 ? (
        <div className="text-center">
          <p className="text-xl  text-red-500">No Cart Products..😐</p>
          <Link to={"/home"} className="text-sm text-blue-600">
            Continue Shopping 🛒
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Cart Items  */}

          {cartValues.map((value) => (
            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-3">
              <div className="flex items-center gap-4 mb-4 sm:mb-8">
                <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                  <img
                    src={value.image}
                    alt="Image"
                    className="w-16 h-16 object-contain "
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{value.name}</h4>
                  <p className="text-xs text-gray-500">{value.weight}</p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-end">
                <p className="text-green-600 font-semibold">{value.price}₹</p>
                <p
                  onClick={() => {
                    dispatch(DeleteItem(value));
                  }}
                  className="text-red-600 text-lg hover:cursor-pointer"
                >
                  🗑️
                </p>
                <div className=" flex items-center mt-2 border rounded p-1 overflow-hidden">
                  <span>QTY:{value.qunatity}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 pt-4">
            <div className="flex justify-between font-semibold text-lg mb-2">
              <span>Total Products :</span>
              <span>{cartTotal.QunatityTotal}</span>
            </div>
          </div>
          <div className="mt-6 pt-4">
            <div className="flex justify-between font-semibold text-lg mb-2">
              <span>Total Price :</span>
              <span>{cartTotal.PriceTotal}₹</span>
            </div>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-800 transition text-white py-3 rounded-lg font-semibold text-lg">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
