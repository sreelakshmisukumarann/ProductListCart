import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logoimg.png";
import { useCart } from "../contextAPI/CartContext";

function Header() {
  const { totalItems, setSearchTerm } = useCart();
  return (
    <header className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center p-4 shadow-md bg-white z-50">
      <Link to="/" className="navbar-brand">
        <img src={logoImg} alt="Logo" className="h-10 w-auto" />
      </Link>

      {/* Search bar */}
      <div className="flex-1 flex justify-center px-4 min-w-[150px]">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-50 px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#5b3d81]"
        />
      </div>

      <div className="flex items-center gap-6 mt-2 md:mt-0 md:mr-40 font-medium">
        <nav className="flex gap-15">
          <Link
            to="/"
            className="hover:text-[#5b3d81]"
            style={{ textDecoration: "none", color: "#5b3d81" }}
          >
            Home
          </Link>
          <Link
            to="/product"
            className="hover:text-[#5b3d81]"
            style={{ textDecoration: "none", color: "#5b3d81" }}
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-blue-500"
            style={{ color: "#5b3d81" }}
          >
            <i className="fas fa-shopping-cart text-xl"></i>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
