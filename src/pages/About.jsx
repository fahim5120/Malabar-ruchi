// src/pages/About.jsx
import React from "react";
import { assets, menu_list } from "../assets/assets";
import { Link } from "react-router-dom";

function About() {
  const branches = [
    { name: "Malabar Ruchi - Calicut", image: assets.branch1 },
    { name: "Malabar Ruchi - Kochi", image: assets.branch2 },
    { name: "Malabar Ruchi - Trivandrum", image: assets.branch3 },
    { name: "Malabar Ruchi - Kozhikode Beach", image: assets.branch4 },
    { name: "Malabar Ruchi - Thrissur", image: assets.branch5 },
    { name: "Malabar Ruchi - Kannur", image: assets.branch6 },
  ];

  return (
    <div className="min-h-screen bg-[#f9f5f0] text-[#5a4634]">
      {/* Header Section */}
      <div
        className="relative w-full h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.headerImg})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Malabar Ruchi
          </h1>
          <p className="text-white mt-2 md:text-lg">
            Bringing the authentic taste of Kerala’s Malabar region to you!
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold mb-6 text-[#4b3829]">Our Story</h2>
        <p className="text-md md:text-lg leading-8 text-justify">
          Malabar Ruchi started with a simple mission: to bring the authentic flavors of Kerala’s Malabar region to everyone. From our first outlet in Calicut to now operating 10 premium hotels across Kerala, we pride ourselves in serving fresh, high-quality food. Our menu is inspired by traditional recipes and local ingredients, offering a unique culinary experience to all our guests.
        </p>
      </section>

      {/* Branches Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#f5efe6]">
        <h2 className="text-3xl font-bold mb-10 text-[#4b3829] text-center">
          Our Branches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition transform"
            >
              <img
                src={branch.image}
                alt={branch.name}
                className="w-full h-32 object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold text-center">{branch.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Our Menu Preview */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold mb-10 text-[#4b3829] text-center">
          Featured Menu Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menu_list.map((menu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition transform"
            >
              <img
                src={menu.menu_image}
                alt={menu.menu_name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold text-lg text-center">{menu.menu_name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#f5efe6]">
        <h2 className="text-3xl font-bold mb-10 text-[#4b3829] text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[assets.person1, assets.person2, assets.person3].map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={person}
                alt={`Team member ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Chef {index + 1}</h3>
                <p className="text-sm text-gray-600">Master of Flavors</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#4b3829]">
          Visit Us Today!
        </h2>
        <p className="mb-6">
          Experience the authentic Malabar cuisine at any of our 6 branches across Kerala.
        </p>
        <Link to="/menu">
    <button className="bg-[#8b5e34] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6b4423] transition">
      Explore Menu
    </button>
  </Link>
      </section>
    </div>
  );
}

export default About;
