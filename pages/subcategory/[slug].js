import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import Link from "next/link";

const SubcategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setloading] = useState(true);
  const [items, setItems] = useState([]);
  const [page, setpage] = useState(1);
  const [found, setfound] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    console.log(router.query);
    console.log(router.route);
    let url = `http://157.245.109.102/api/item/getitemssubcat/${page}/${slug}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    let f1 = parsedData.data;
    console.log(f1);
    let g2 = items.concat(f1);
    if (g2.length > 0) {
      setfound(true);
    }
    console.log(g2);
    setloading(false);
    setItems(g2);
  };
  return (
    <div>
      {loading && <Spinner />}
      {!loading && !found && (
        <div>
          <div className="px-40 py-20 bg-white rounded-md shadow-xl">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-blue-600 text-9xl">404</h1>

              <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page not found
              </h6>

              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>

              <Link href="/">
                <a className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
                  Go home
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
      {!loading && found && (
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {items.map((item) => {
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
          </section>
        </div>
      )}
    </div>
  );
};

export default SubcategoryPage;
