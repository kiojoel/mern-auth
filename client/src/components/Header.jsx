import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-extrabold">App</h1>
        </Link>

        <ul className="flex gap-4 font-bold">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
