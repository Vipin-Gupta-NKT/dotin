import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Link from "next/link";
const Items = () => {
  const [loading, setloading] = useState(true);
  const [images, setcategories] = useState([]);
  let getData = async () => {
    let url = `http://157.245.109.102/api/item/getTopItems`;
    let data = await fetch(url);
    let parsedData = await data.json();
    let f1 = parsedData.data;
    console.log(f1);
    let g2 = images.concat(f1);
    setloading(false);
    setcategories(g2);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <div>
          <div className="bg-blue-600 px-10 py-2 text-white font-bold rounded-t-lg w-48 pl-14 ml-4">
            Top Picks
          </div>
          <div className="container px-5 py-2 ">
            <div className="flex flex-wrap -m-4 ">
              {images.map((item) => {
                return (
                  <div key={item.id}>
                    <Link href={`/product/${item.id}`}>
                      <div className="w-[20] cursor-pointer shadow-lg m-3 ">
                        <a className="block relative rounded overflow-hidden">
                          <img
                            alt="item image"
                            className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                            src={item.imgId}
                          />
                        </a>
                        <div className="mt-4 text-center">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            {item.name}
                          </h3>
                          <h2 className="text-gray-900 title-font text-lg font-medium">
                            {item.shortDesc.length > 15
                              ? `${String(item.shortDesc).slice(0, 15)} ...`
                              : item.shortDesc}
                          </h2>
                          <p className="mt-1">₹ {item.mrp}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
