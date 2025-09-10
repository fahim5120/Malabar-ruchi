import React, { useEffect, useState } from "react";
 import {  toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'

function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);
  const removeFood=async(foodId)=>{
console.log(foodId)
const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

  const updatedProducts = storedProducts.filter((item) => item.id !== foodId);


  localStorage.setItem("products", JSON.stringify(updatedProducts));


  setProducts(updatedProducts);
  toast.success("Food Removed")
  }

  return (
    <div className="min-h-screen bg-[#f9f5f0] py-8 px-4 sm:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#5a4634] mb-6">
        All Foods List
      </h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-[#e6dcd0]">
        {/* Table header */}
        <div className="hidden md:grid grid-cols-5 bg-[#d9c7b1] text-white font-semibold p-4 rounded-t-xl">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {/* Table rows */}
        <div className="divide-y divide-[#e6dcd0]">
          {products.length === 0 ? (
            <p className="text-center py-6 text-gray-500">No products found.</p>
          ) : (
            products.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 hover:bg-[#f5efe6] transition"
              >
                {/* Image */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border border-[#d9c7b1]"
                  />
                </div>

                {/* Name */}
                <p className="text-[#5a4634] font-medium text-center md:text-left">
                  {item.name}
                </p>

                {/* Category */}
                <p className="text-gray-600 text-center md:text-left">
                  {item.category}
                </p>

                {/* Price */}
                <p className="text-[#8b5e3c] font-semibold text-center md:text-left">
                  ₹{item.price}
                </p>

                {/* Action */}
                <div className="flex justify-center md:justify-start">
                  <button onClick={()=>removeFood(item.id)} className="bg-[#d9c7b1] hover:bg-[#cbb29c] text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default List;
