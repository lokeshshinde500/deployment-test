import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="flex space-bw align-center p-2">
        <div className="logo">
          <h3>LOGO</h3>
        </div>
        <nav>
          <ul className="flex gap">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>CART</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
