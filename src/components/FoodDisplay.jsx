

// import React, { useEffect, useState } from "react";
// import { fetchFoods } from "../API/API";
// import FoodItem from "./FoodItem";

// function FoodDisplay({category}) {
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getFoods = async () => {
//       const data = await fetchFoods();
//       console.log(data);

//       if (Array.isArray(data)) {
//         setFoods(data);
//       } else {
//         setFoods([]);
//       }

//       setLoading(false);
//     };

//     getFoods();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-6 text-lg text-gray-600">Loading foods...</p>;
//   }

//   if (foods.length === 0) {
//     return <p className="text-center mt-6 text-lg text-gray-600">No foods available.</p>;
//   }

//   return  (
//   <div className="min-h-screen bg-[#f9f5f0] py-10 px-6">
//     <h2 className="text-3xl font-bold text-center text-[#5a4634] mb-10">
//       🛍️ Top dishes near you
//     </h2>

//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {foods.map((item, index) => {
//     if(category==="All" || category===item.category){
//  return (
//           <FoodItem
//             key={index}
//             id={item.id}
//             name={item.name}
//             description={item.description}
//             price={item.price}
//             image={item.image}
//             rating={item.rating}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
//           />
//         );
//         }
       
//       })}
//     </div>
//   </div>
// );

// }

// export default FoodDisplay;

import React, { useEffect, useState } from "react";
import { fetchFoods } from "../API/API";
import FoodItem from "./FoodItem";

function FoodDisplay({ category }) {
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
        🛍️ Top dishes near you
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods
          .filter(item => category === "All" || item.category === category)
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
      </div>
    </div>
  );
}

export default FoodDisplay;

