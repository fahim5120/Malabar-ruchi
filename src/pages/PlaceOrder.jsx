import React, { useContext } from "react";
import { StoreContext } from "../components/StoreContext";
function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="min-h-screen bg-[#f9f5f0] py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Delivery Info */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#e6dcd0]">
          <p className="text-2xl font-bold text-[#5a4634] mb-6">
            Delivery Information
          </p>

          {/* Multi Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </div>

          <input
            type="text"
            placeholder="Email address"
            className="w-full px-4 py-2 mb-4 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
          />

          <input
            type="text"
            placeholder="Street"
            className="w-full px-4 py-2 mb-4 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Zip code"
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </div>

          <input
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-2 mb-4 border border-[#d6c0b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
          />
        </div>

        {/* Right: Cart Totals */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#e6dcd0]">
          <h2 className="text-xl font-bold text-[#5a4634] mb-4">Cart Totals</h2>

          <div className="space-y-3 text-gray-700">
            {/* Subtotal */}
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-medium">₹{getTotalCartAmount()}</p>
            </div>
            <hr className="border-[#d6c0b3]" />

            {/* Delivery Fee */}
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p className="font-medium">
                ₹{getTotalCartAmount() === 0 ? 0 : 2}
              </p>
            </div>
            <hr className="border-[#d6c0b3]" />

            {/* Total */}
            <div className="flex justify-between text-lg font-bold text-[#5a4634]">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-[#8b5e34] text-white py-3 rounded-xl font-semibold hover:bg-[#6b4423] transition"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
