import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "../Spinner";
const Category = () => {
  const [loading, setloading] = useState(true);
  const [categories, setcategories] = useState([]);

  const [subcategories, setsubcategories] = useState([]);

  let getData = async () => {
    let url = `http://157.245.109.102/api/category/getcategories/1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    let f1 = parsedData.data;
    console.log(f1);
    let g2 = categories.concat(f1);

    let l1 = [];
    let indexes = [];
    for (let i = 0; i < g2.length; i++) {
      l1.push([]);
      indexes.push(g2[i].id);
    }
    let url2 = `http://157.245.109.102/api/subcategory/getAllSubcats`;
    let d2 = await fetch(url2);
    let p1 = await d2.json();
    let f2 = p1.data;

    for (let i = 0; i < f2.length; i++) {
      const ele = f2[i];
      l1[indexes.indexOf(ele.catId)].push(ele);
    }
    setloading(false);
    setcategories(g2);
    setsubcategories(l1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="border-solid border-x border-y border-white p-4 shadow-lg ">
      {loading && <Spinner/>}
      {!loading && (
        <div>
          {categories.map((category) => {
            let index = categories.indexOf(category);
            return (
              <Link key={category.id} href={`category/${category.id}`}>
                <div className="flex py-1 items-center dropdown  relative justify-between">
                  <div className="flex">
                    <img
                      src={category.imgId}
                      alt="category image"
                      className="h-[30px] w-[30px]"
                    />
                    <div className=" pl-4 text-sm">{category.name}</div>
                  </div>

                  {subcategories.length > 0 &&
                    subcategories[index].length > 0 && (
                      <div className=" flex  items-center text-gray-500">
                        {">"}
                      </div>
                    )}
                  {subcategories.length > 0 && subcategories[index].length > 0 && (
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 pl-[235px]">
                      {subcategories[index].map((cat) => {
                        return (
                          <Link key={cat.id} href={`/subcategory/${cat.id}`}>
                            <li className="">
                              <a
                                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block w-auto"
                                href="#"
                              >
                                {cat.name}
                              </a>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Category;

/**
 * <div class="p-10">

  <div class="dropdown inline-block relative">
    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">Dropdown</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
    </ul>
  </div>

</div>
 */
