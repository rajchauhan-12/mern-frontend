// import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import App, { AppContext } from "../App";
// export default function Header() {
//   const { user } = useContext(AppContext);
//   return (
//     <div className="navbar">
//       <h1>MERN Frontend</h1>
//       <div className="nav-links">
//       <Link to="/">Home</Link>-<Link to="/cart">MyCart</Link>-
//       <Link to="/order">MyOrder</Link>

//       {/* <Link to="/admin">Admin</Link> */}

//       -{user?.role === "admin" && <Link to="/admin">Admin</Link>}
      
//       {user?.token ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link> }

//     </div>
//     </div>
//   );
// }


import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../App";

export default function Header() {
  const { user } = useContext(AppContext);
  const location = useLocation();

  // Detect if current route is login or register
  const isLightPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={`navbar ${isLightPage ? "navbar-light" : "navbar-transparent"}`}>
      <h1 className={`logo ${isLightPage ? "dark" : "light"}`}>☕ Café</h1>
      <div className="nav-links">
        <Link to="/">Home</Link> -
        <Link to="/cart">MyCart</Link> -
        <Link to="/order">MyOrder</Link>
        -
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {user?.token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
