import React, { useContext, useState } from "react";
import { StoreContext } from "../components/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function PlaceOrder() {
  const { cartItems, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const [showGpay, setShowGpay] = useState(false);

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!info.firstName || !info.street || !info.phone) {
      alert("⚠️ Please fill required delivery details");
      return;
    }
    setShowGpay(true);
  };

  const confirmOrder = () => {
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      info,
      status: "processing",
      date: new Date().toISOString(),
    };
    localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));
    setShowGpay(false);

    // Navigate to admin orders
    navigate("/admin/orders");
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* LEFT: Delivery Info */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#e6dcd0]">
          <p className="text-2xl font-bold text-[#5a4634] mb-6">
            Delivery Information
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={onChange}
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={onChange}
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={onChange}
            className="w-full px-4 py-2 mb-4 border border-[#d6c0b3] rounded-lg focus:outline-none"
          />

          <input
            type="text"
            name="street"
            placeholder="Street"
            onChange={onChange}
            className="w-full px-4 py-2 mb-4 border border-[#d6c0b3] rounded-lg focus:outline-none"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={onChange}
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={onChange}
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="zip"
              placeholder="Zip code"
              onChange={onChange}
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={onChange}
              className="w-full px-4 py-2 border border-[#d6c0b3] rounded-lg focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={onChange}
            className="w-full px-4 py-2 mb-4 border border-[#d6c0b3] rounded-lg focus:outline-none"
          />
        </div>

        {/* RIGHT: Cart Totals */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#e6dcd0]">
          <h2 className="text-xl font-bold text-[#5a4634] mb-4">Cart Totals</h2>

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

            <div className="flex justify-between text-lg font-bold text-[#5a4634]">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-[#8b5e34] text-white py-3 rounded-xl font-semibold hover:bg-[#6b4423] transition"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>

      {/* GPay Popup */}
      {showGpay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
            <h3 className="text-lg font-bold mb-2">Pay with GPay</h3>
            <img src={assets.GPay} alt="GPay" className="w-40 mx-auto mb-4" />

            <p className="text-sm mb-2">
              <b>Name:</b> {info.firstName} {info.lastName}
            </p>
            <p className="text-sm mb-2">
              <b>Address:</b> {info.street}, {info.city}, {info.state}
            </p>
            <p className="text-sm mb-2">
              <b>Phone:</b> {info.phone}
            </p>

            <button
              onClick={confirmOrder}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaceOrder;
