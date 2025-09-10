// src/pages/Orders.jsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Orders() {
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
  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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

  // Helper to render items whether array or object
  const renderItems = (items) => {
    if (Array.isArray(items)) {
      return items.map((i, idx) => (
        <p key={idx}>
          {i.name} x{i.quantity}
        </p>
      ));
    } else if (typeof items === "object" && items !== null) {
      return Object.entries(items).map(([name, quantity], idx) => (
        <p key={idx}>
          {name} x{quantity}
        </p>
      ));
    } else {
      return <p>No items</p>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Customer Orders
      </h2>

      {/* Add Order Form */}
      <form
        onSubmit={addOrder}
        className="bg-white p-6 rounded-lg shadow mb-6 max-w-md mx-auto space-y-4"
      >
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
          placeholder="Items (e.g. Dosa , Tea )"
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
        <button
          type="submit"
          className="w-full bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-2 rounded"
        >
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
              <div
                key={order.id}
                className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 hover:bg-[#f5efe6] transition"
              >
                <p>{order.customerName || order.info?.firstName}</p>
                <div>{renderItems(order.items)}</div>
                <p>₹{order.total || order.info?.total || "N/A"}</p>
                <p>
                  {new Date(order.date || order.info?.date).toLocaleString()}
                </p>
                <button
                  onClick={() => removeOrder(order.id)}
                  className="bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-1 px-3 rounded"
                >
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

export default Orders;
