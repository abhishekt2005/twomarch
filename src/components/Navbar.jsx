import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext";

const Navbar = () => {
  let userStore = useContext(UserContext);
  let login = userStore.user.login;

  const [showSidebar, setShowSidebar] = useState(false);
  let ctx = useContext(CartContext);

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
      <div className="relative w-full flex justify-between items-center px-6 md:px-16 py-4 text-white">
        {/* Logo */}
        <h3 className="font-bold text-2xl">
          <Link to="/">Ecom-Shop</Link>
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-lg">
          {login && <li className="hover:text-green-400"><Link to="/">Home</Link></li>}
          {login && <li className="hover:text-green-400"><Link to="/about">About</Link></li>}
          {login && (
            <li>
              <Link to="/cart" className="flex items-center gap-1 relative">
                <BsCart3 size={25} />
                {ctx.cartArr.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {ctx.cartArr.length}
                  </span>
                )}
              </Link>
            </li>
          )}
          {!login && (
            <li>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-semibold transition"
              >
                Login
              </Link>
            </li>
          )}
          {!login && (
            <li>
              <Link
                to="/signup"
                className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-md text-sm font-semibold transition"
              >
                Signup
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setShowSidebar(true)}>
          <RiMenu3Fill size={28} />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-black shadow-lg transform ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center p-6`}
        >
          <button className="absolute top-4 right-4" onClick={() => setShowSidebar(false)}>
            <RiCloseFill size={28} className="text-white" />
          </button>

          <h3 className="text-2xl font-bold text-white mb-6">Ecom-Shop</h3>

          <ul className="flex flex-col gap-6 text-lg text-white">
            {login && <li><Link to="/" onClick={() => setShowSidebar(false)}>Home</Link></li>}
            {login && <li><Link to="/about" onClick={() => setShowSidebar(false)}>About</Link></li>}
            {login && (
              <li>
                <Link to="/cart" className="flex items-center gap-2" onClick={() => setShowSidebar(false)}>
                  <BsCart3 size={25} />
                  <span>Cart</span>
                  {ctx.cartArr.length > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {ctx.cartArr.length}
                    </span>
                  )}
                </Link>
              </li>
            )}
            {!login && (
              <li>
                <Link to="/login" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-semibold transition" onClick={() => setShowSidebar(false)}>
                  Login
                </Link>
              </li>
            )}
            {!login && (
              <li>
                <Link to="/signup" className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-md text-sm font-semibold transition" onClick={() => setShowSidebar(false)}>
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
