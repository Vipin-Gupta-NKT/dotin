import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
const HomeTop = ({ cart }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("mr-10");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("mr-10");
      ref.current.classList.remove("translate-x-0");
    }
  };

  const ref = useRef();

  return (
    <div>
      <div className="flex justify-between ">
        <header
          className="text-gray-600 body-font shadow-md w-full px-6"
          style={{
            backgroundColor: "#2455f4",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center md:justify-between w-full ">
            <div className="px-12 py-2 bg-yellow-400 rounded-t-lg">
              Categories
            </div>
            <div className="flex  w-1/2" align="center" align-items="center">
              <input
                className="w-11/12 p-2 rounded-l-lg"
                type="text"
                placeholder="Search the product"
              />
              <div className="bg-yellow-400 rounded-r-lg">
                <AiOutlineSearch className="h-1/2 my-2 mx-2 text-xl " />
              </div>
            </div>
            <div
              onClick={toggleCart}
              className="cart rounded-full p-3 bg-yellow-400"
            >
              <BsFillCartFill className="text-lg" />
            </div>
            <div
              ref={ref}
              className="border-solid border-x border-y border-slate-500 sidebar absolute top-32 right-0 bg-white text-black transform transition-transform translate-x-full "
            >
              {Object.keys(cart).length === 0 && (
                <div className="float text-xl font-bold text-green py-2">
                  No items in the cart
                </div>
              )}
              <ol>
                {Object.keys(cart).map((k) => {
                  return (
                    <Link key={k} href={"/"}>
                      <div className="w-full cursor-pointer ">
                        <div className="flex items-center  p-4">
                          <a className="block relative rounded overflow-hidden">
                            <img
                              // style={{ height: "40px" }}
                              className="h-[80px] w-[80px]"
                              alt="ecommerce"
                              src={cart[k].imgId}
                            />
                          </a>
                          <div className="mt-4 text-start ml-5">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                              {cart[k].name}
                            </h3>
                            {/* <h2 className="text-gray-900 title-font text-lg font-medium">
                          The Catalyzer
                        </h2> */}
                            <p className="mt-1">₹ {cart[k].price}</p>
                          </div>
                        </div>
                        <div className="border-solid border-t border-slate-500 flex justify-evenly py-2">
                          <div className="border-solid border-x border-y p-2 border-black font-medium text-sm hover:text-white hover:bg-red-500 hover:border-red-500">
                            <Link href="">
                              <a>CHECK OUT NOW</a>
                            </Link>
                          </div>
                          <div className="border-solid border-x border-y p-2 border-black font-medium text-sm hover:text-white hover:bg-red-500 hover:border-red-500">
                            <Link href="">
                              <a>VIEW CART</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </ol>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomeTop;
