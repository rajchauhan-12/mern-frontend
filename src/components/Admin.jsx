import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Admin() {
  return (
    <div>
      <Link to="/admin">Users</Link>-
      <Link to="/admin/products">Products</Link>-
      <Link to="/admin/orders">Orders</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
