import React, { useContext } from "react";
import { StoreContext } from "../components/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, foods, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f5f0] py-6 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-7 font-semibold text-[#5a4634] border-b-2 border-[#d6c0b3] pb-3 mb-3">
          <p>Item</p>
          <p className="col-span-2">Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {foods.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                {/* Desktop Row */}
                <div className="hidden md:grid grid-cols-7 items-center gap-4 py-3 border-b border-[#d6c0b3] hover:bg-[#fdfaf7] transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <p className="col-span-2 font-medium text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-gray-700">₹{item.price}</p>
                  <p className="text-gray-700">{cartItems[item.id]}</p>
                  <p className="text-[#5a4634] font-semibold">
                    ₹{item.price * cartItems[item.id]}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-bold hover:scale-110 transition"
                  >
                    ✕
                  </button>
                </div>

                {/* Mobile Card */}
                <div className="md:hidden flex items-center gap-4 py-3 border-b border-[#d6c0b3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Price: ₹{item.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Qty: {cartItems[item.id]}
                    </p>
                    <p className="text-sm font-semibold text-[#5a4634]">
                      Total: ₹{item.price * cartItems[item.id]}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-bold hover:scale-110 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {/* Cart Totals */}
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 border border-[#e6dcd0]">
          <h2 className="text-lg sm:text-xl font-bold text-[#5a4634] mb-4">
            Cart Totals
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-medium">₹{getTotalCartAmount()}</p>
            </div>
            <hr className="border-[#d6c0b3]" />

            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p className="font-medium">
                ₹{getTotalCartAmount() === 0 ? 0 : 2}
              </p>
            </div>
            <hr className="border-[#d6c0b3]" />

            <div className="flex justify-between text-base sm:text-lg font-bold text-[#5a4634]">
              <b>Total</b>
              <b>
                ₹
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>

          <button
            className="w-full mt-6 bg-[#a37c5b] hover:bg-[#8c6748] text-white font-semibold py-3 rounded-xl transition"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="bg-[#fdfaf7] shadow-md rounded-2xl p-4 sm:p-6 border border-[#e6dcd0]">
          <p className="text-[#5a4634] font-medium mb-3">
            If you have a promo code, enter it here
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 px-4 py-2 border border-[#d6c0b3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a37c5b] w-full"
            />
            <button className="bg-[#a37c5b] hover:bg-[#8c6748] text-white px-5 py-2 rounded-xl font-semibold transition w-full sm:w-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
