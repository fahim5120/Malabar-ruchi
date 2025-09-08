import React from "react";
import { menu_list } from "../assets/assets";
import FoodDisplay from "../components/FoodDisplay";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="py-8 sm:py-10 bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 text-center mb-3 sm:mb-4">
        Explore Our Menu
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl sm:max-w-2xl mx-auto text-center text-gray-700 text-sm sm:text-base md:text-lg px-4 sm:px-0 mb-8 sm:mb-10">
        Discover the true taste of Kerala. From soft puttu and crispy dosa to
        spicy fish curry, sweet payasam, and refreshing tea – we have something
        for every craving. Enjoy homemade flavors with a touch of tradition.
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-2">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105 w-24 sm:w-28 md:w-32"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 shadow-md transition 
                ${
                  category === item.menu_name
                    ? "border-amber-600 shadow-lg scale-110"
                    : "border-amber-300"
                }`}
            />
            <p
              className={`mt-2 sm:mt-3 text-sm sm:text-base font-medium text-center
                ${
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
      <div className="px-3 sm:px-6 md:px-10">
        <FoodDisplay category={category} />
      </div>
    </div>
  );
}

export default ExploreMenu;
