// // src/pages/Orders.jsx
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Orders() {
//   const [orders, setOrders] = useState([]);

//   // Load orders from localStorage
//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(storedOrders);
//   }, []);

//   // Remove an order
//   const removeOrder = (orderId) => {
//     const updatedOrders = orders.filter((order) => order.id !== orderId);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//     setOrders(updatedOrders);
//     toast.success("Order removed successfully");
//   };

//   return (
//     <div className="min-h-screen bg-[#f9f5f0] py-8 px-4 sm:px-8">
//       <h2 className="text-2xl md:text-3xl font-bold text-center text-[#5a4634] mb-6">
//         All Orders
//       </h2>

//       <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-[#e6dcd0]">
//         {/* Table header */}
//         <div className="hidden md:grid grid-cols-5 bg-[#d9c7b1] text-white font-semibold p-4 rounded-t-xl">
//           <p>Customer</p>
//           <p>Items</p>
//           <p>Total Price</p>
//           <p>Date</p>
//           <p>Action</p>
//         </div>

//         {/* Table rows */}
//         <div className="divide-y divide-[#e6dcd0]">
//           {orders.length === 0 ? (
//             <p className="text-center py-6 text-gray-500">No orders found.</p>
//           ) : (
//             orders.map((order, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 hover:bg-[#f5efe6] transition"
//               >
//                 {/* Customer */}
//                 <p className="text-[#5a4634] font-medium text-center md:text-left">
//                   {order.customerName}
//                 </p>

//                 {/* Items */}
//                 <div className="text-gray-600 text-center md:text-left">
//                   {order.items.map((item, i) => (
//                     <p key={i}>
//                       {item.name} x {item.quantity}
//                     </p>
//                   ))}
//                 </div>

//                 {/* Total Price */}
//                 <p className="text-[#8b5e3c] font-semibold text-center md:text-left">
//                   ₹{order.total}
//                 </p>

//                 {/* Date */}
//                 <p className="text-gray-600 text-center md:text-left">
//                   {new Date(order.date).toLocaleString()}
//                 </p>

//                 {/* Action */}
//                 <div className="flex justify-center md:justify-start">
//                   <button
//                     onClick={() => removeOrder(order.id)}
//                     className="bg-[#d9c7b1] hover:bg-[#cbb29c] text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Orders;






import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function orders() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    customerName: "",
    items: "",
    total: ""
  });

  // Load orders from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // Handle input changes
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Add new order
  const addOrder = (e) => {
    e.preventDefault();
    if (!form.customerName || !form.items || !form.total) {
      toast.error("Please fill all fields");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customerName: form.customerName,
      items: form.items
        .split(",")
        .map((item) => {
          const [name, quantity] = item.trim().split("x");
          return { name: name.trim(), quantity: Number(quantity) || 1 };
        }),
      total: Number(form.total),
      date: new Date().toISOString()
    };

    const updatedOrders = [...orders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    toast.success("Order added!");
    setForm({ customerName: "", items: "", total: "" });
  };

  // Delete order
  const removeOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    toast.success("Order deleted!");
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Customer Orders</h2>

      {/* Add Order Form */}
      <form onSubmit={addOrder} className="bg-white p-6 rounded-lg shadow mb-6 max-w-md mx-auto space-y-4">
        <input
          name="customerName"
          value={form.customerName}
          onChange={onChange}
          placeholder="Customer Name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          name="items"
          value={form.items}
          onChange={onChange}
          placeholder="Items (e.g. Dosa x2, Tea x1)"
          className="w-full border rounded px-3 py-2"
        />
        <input
          name="total"
          value={form.total}
          onChange={onChange}
          placeholder="Total Price"
          type="number"
          className="w-full border rounded px-3 py-2"
        />
        <button type="submit" className="w-full bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-2 rounded">
          Add Order
        </button>
      </form>

      {/* Orders List */}
      <div className="overflow-x-auto bg-white shadow rounded-xl border border-[#e6dcd0]">
        <div className="hidden md:grid grid-cols-5 bg-[#d9c7b1] text-white font-semibold p-4 rounded-t-xl">
          <p>Customer</p>
          <p>Items</p>
          <p>Total</p>
          <p>Date</p>
          <p>Action</p>
        </div>

        <div className="divide-y divide-[#e6dcd0]">
          {orders.length === 0 ? (
            <p className="text-center py-6 text-gray-500">No orders</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 hover:bg-[#f5efe6] transition">
                <p>{order.customerName}</p>
                <div>{order.items.map((i, idx) => <p key={idx}>{i.name} x{i.quantity}</p>)}</div>
                <p>₹{order.total}</p>
                <p>{new Date(order.date).toLocaleString()}</p>
                <button onClick={() => removeOrder(order.id)} className="bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-1 px-3 rounded">
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default orders;
