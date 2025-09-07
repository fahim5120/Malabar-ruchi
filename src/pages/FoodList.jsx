// import React, { useEffect, useState } from "react"
// import { fetchFoods } from "../API/API";


// function FoodList() {
//   const [foods, setFoods] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//   const getFoods = async () => {
//     const data = await fetchFoods();
//     console.log(data)

//     if (Array.isArray(data)) {
//       setFoods(data);   
//     } else {
//       setFoods([]);     
//     }

//     setLoading(false);
//   };

//   getFoods();
// }, []);


//   if (loading) {
//     return <p>Loading foods...</p>;
//   }

//   if (foods.length === 0) {
//     return <p>No foods available.</p>;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
//       {foods.map((food) => (
//         <div
//           key={food.id}
//           className="border p-4 rounded shadow hover:shadow-lg transition"
//         >
//           <img src={food.image} alt={food.name} className="w-full h-40 object-cover mb-2 rounded" />
//           <h3 className="font-bold text-lg">{food.name}</h3>
//           <p className="text-gray-700">{food.description}</p>
//           <p className="mt-2 font-semibold">₹{food.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FoodList;



import React, { useEffect, useState } from "react";
import { fetchFoods } from "../API/API";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFoods = async () => {
      const data = await fetchFoods();
      console.log(data);

      if (Array.isArray(data)) {
        setFoods(data);
      } else {
        setFoods([]);
      }

      setLoading(false);
    };

    getFoods();
  }, []);

  if (loading) {
    return <p className="text-center mt-6 text-lg text-gray-600">Loading foods...</p>;
  }

  if (foods.length === 0) {
    return <p className="text-center mt-6 text-lg text-gray-600">No foods available.</p>;
  }

  return (
    <div className="min-h-screen bg-[#f9f5f0] py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-[#5a4634] mb-10">
        🛍️ Our Food Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white border border-[#e6dcd0] rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Food Image */}
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            {/* Card Body */}
            <div className="p-5">
              <h3 className="font-bold text-xl text-[#5a4634] truncate">{food.name}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{food.description}</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold text-[#7a5c3c]">₹{food.price}</p>
                <button className="px-4 py-2 bg-[#c6a582] text-white text-sm rounded-lg shadow hover:bg-[#b08d68] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;
