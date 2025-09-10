import React, { useState, useContext } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ExploreMenu from "./pages/ExploreMenu";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import AdminLayout from "./components/AdminLayout";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [category, setCategory] = useState("All");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <RequireAuthRedirect /> }, // default redirect based on login
        { path: "home", element: <ProtectedRoute><Home /></ProtectedRoute> }, // Home only if logged in
        { path: "contact", element: <Contact /> },
        { path: "menu", element: <ExploreMenu category={category} setCategory={setCategory} /> },
        { path: "cart", element: <Cart /> },
        { path: "order", element: <PlaceOrder /> },
      ],
    },
    // Guest routes
    { path: "/login", element: <GuestRoute><Login /></GuestRoute> },
    { path: "/register", element: <GuestRoute><Register /></GuestRoute> },
    // Admin routes
    {
      path: "/admin",
      element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
      children: [
        { path: "add", element: <Add /> },
        { path: "list", element: <List /> },
        { path: "orders", element: <Orders /> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </AuthProvider>
  );
}

export default App;

// Helper component to redirect based on login state
function RequireAuthRedirect() {
  const { user } = useContext(AuthContext);
  if (user) return <Navigate to="/home" replace />; // logged in → Home
  return <Navigate to="/register" replace />; // not logged in → Register
}
