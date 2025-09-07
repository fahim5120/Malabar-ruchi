import React, { useContext } from 'react'
import { StoreContext } from '../components/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartItems, foods, removeFromCart,getTotalCartAmount } = useContext(StoreContext)
  const navigate=useNavigate()

  return (
    <div className="min-h-screen bg-[#f9f5f0] py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* cart-items-title */}
        <div className="grid grid-cols-7 font-semibold text-[#5a4634] border-b-2 border-[#d6c0b3] pb-3 mb-3">
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
              <div
                key={index}
                className="grid grid-cols-7 items-center gap-4 py-3 border-b border-[#d6c0b3] hover:bg-[#fdfaf7] transition"
              >
                {/* Item image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                {/* Title */}
                <p className="col-span-2 font-medium text-gray-800">
                  {item.name}
                </p>

                {/* Price */}
                <p className="text-gray-700">₹{item.price}</p>

                {/* Quantity */}
                <p className="text-gray-700">{cartItems[item.id]}</p>

                {/* Total */}
                <p className="text-[#5a4634] font-semibold">
                  ₹{item.price * cartItems[item.id]}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-bold hover:scale-110 transition"
                >
                  ✕
                </button>
              </div>
            )
          }
          return null
        })}
      </div>
      {/* cart-bottom */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Cart Totals */}
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
        <p className="font-medium">₹{getTotalCartAmount()===0?0:2}</p>
      </div>
      <hr className="border-[#d6c0b3]" />

      {/* Total */}
      <div className="flex justify-between text-lg font-bold text-[#5a4634]">
        <b>Total</b>
        <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
      </div>
    </div>

    {/* Checkout Button */}
    <button className="w-full mt-6 bg-[#a37c5b] hover:bg-[#8c6748] text-white font-semibold py-3 rounded-xl transition" onClick={()=>navigate('/order')}>
      PROCEED TO CHECKOUT
    </button>
  </div>

  {/* Promo Code Section */}
  <div className="bg-[#fdfaf7] shadow-md rounded-2xl p-6 border border-[#e6dcd0]">
    <p className="text-[#5a4634] font-medium mb-3">
      If you have a promo code, enter it here
    </p>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Promo code"
        className="flex-1 px-4 py-2 border border-[#d6c0b3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a37c5b]"
      />
      <button className="bg-[#a37c5b] hover:bg-[#8c6748] text-white px-5 py-2 rounded-xl font-semibold transition">
        Submit
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cart
