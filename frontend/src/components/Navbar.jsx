import React, { useState } from "react";
import { Link } from "react-router";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import avatarImg from "../assets/avatar.png";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Order",
    href: "/order",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Check Out",
    href: "/checkout",
  },
];
const Navbar = () => {
  const currentUser = true;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/*left section  */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>

          <div className="relative sm:w-72 w-40 space-x-2">
            <CiSearch className="absolute inline-block left-3 inset-y-2 " />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/*right section  */}

        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/*Drpop Down */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md z-40 shadow-lg">
                    <ul>
                      {navigation.map((items) => (
                        <li key={items.name}>
                          <Link
                            to={items.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {items.name}
                          </Link>
                        </li>
                      ))}
                    </ul>{" "}
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block ">
            <Link to="/login">
              <FaRegHeart className="size-6" />
            </Link>
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6  px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
