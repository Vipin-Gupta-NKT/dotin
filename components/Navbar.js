import React from "react";
import AppLogo from "./AppLogo";
import Link from "next/link";
import { AiFillLock } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
const Navbar = () => {
  return (
    <div>
      <header
        className="text-gray-600 body-font shadow-md px-6"
        style={{
          backgroundColor: "#2455f4",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <AppLogo />
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-red-600">Products</a>
            </Link>
            <Link href="/about">
              <a className="mr-5 hover:text-red-600">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="mr-5 hover:text-red-600">Contact Us</a>
            </Link>
            {/* <Link href="/">
              <a className="mr-5 hover:text-red-600">Neck Band</a>
            </Link> */}
          </nav>
          <div className="flex justify-between align-center " style={{}}>
            <div className="flex justify-center align-center">
              <div className="py-5">
                <AiFillLock />
              </div>
              <div className="py-4 pl-2">
                <Link href="">
                  <a className="hover:text-red-600">Sign Up </a>
                </Link>
                Or
                <Link href="">
                  <a className="hover:text-red-600"> Login </a>
                </Link>
              </div>
            </div>
            <div className="flex ">
              <div className="py-5 pl-4">
                <FiPhoneCall />
              </div>
              <div className="py-4 pl-2">
                Call on:
                <Link href="">
                  <a className="hover:text-red-600"> 011- 42461009 </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
