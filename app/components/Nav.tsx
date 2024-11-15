import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between p-5 border-b border-gray-700">
      <Link
        href="/"
        className="text-xl relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-xl relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
      >
        About
      </Link>
    </nav>
  );
};

export default Nav;
