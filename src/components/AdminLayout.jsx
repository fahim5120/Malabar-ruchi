import React from "react";

import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
