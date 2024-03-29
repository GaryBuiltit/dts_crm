import React from "react";
import "../index.css";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      {/* Mobile NAV */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="">Item 1</a>
            </li>
            <li>
              <a href="">Parent</a>
              <ul className="p-2">
                <li>
                  <a href="">Submenu 1</a>
                </li>
                <li>
                  <a href="">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Large Screen NAV */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="">Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a href="">Submenu 1</a>
                </li>
                <li>
                  <a href="">Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="">Item 3</a>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end avatar navbar-end">
        <div tabIndex={0} class="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
