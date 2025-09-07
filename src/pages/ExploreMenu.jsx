import React from "react";
import { menu_list } from "../assets/assets";
import FoodDisplay from "../components/FoodDisplay";
function ExploreMenu({ category, setCategory }) {
  return (
    <div className="py-10 bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Title */}
      <h1 className="text-3xl font-bold text-amber-800 text-center mb-4">
        Explore Our Menu
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
        Discover the true taste of Kerala. From soft puttu and crispy dosa to
        spicy fish curry, sweet payasam, and refreshing tea – we have something
        for every craving. Enjoy homemade flavors with a touch of tradition.
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-28 h-28 rounded-full object-cover border-4 shadow-md transition 
                ${
                  category === item.menu_name
                    ? "border-amber-600 shadow-lg scale-110"
                    : "border-amber-300"
                }`}
            />
            <p
              className={`mt-3 font-medium ${
                category === item.menu_name
                  ? "text-amber-700 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      {/* Food list */}
      <FoodDisplay category={category}/>
    </div>
  );
}

export default ExploreMenu;
