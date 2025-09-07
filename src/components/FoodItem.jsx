import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./StoreContext";

function FoodItem({ id, name, price, description, image, rating }) {
 
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Food Image */}
      <div className="w-full h-48 relative overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        

        {/* Add / Counter Buttons */}
        {!cartItems[id] ? (
          <img
            src={assets.addIconWhite}
            alt="addIconWhite"
            onClick={() => addToCart(id)}
            className="absolute bottom-3 right-3 w-10 h-10 cursor-pointer bg-[#5a4634] p-2 rounded-full shadow-md hover:scale-110 transition-transform"
          />
        ) : (
          <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white rounded-full shadow-md px-3 py-1">
            <img
              src={assets.removeIconRed}
              alt="removeIconRed"
              onClick={() => removeFromCart(id)}
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
            <p className="text-sm font-semibold">{cartItems[id]}</p>
            <img
              src={assets.addIconGreen}
              alt="addItemGreen"
              onClick={() =>addToCart(id)}
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        )}
      </div>

      {/* Food Info */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <div className="flex items-center gap-1">
            <img src={assets.ratingStar} alt="ratingStar" className="w-5 h-5" />
            <span>{rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <p className="text-[#5a4634] font-bold text-lg">₹{price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
