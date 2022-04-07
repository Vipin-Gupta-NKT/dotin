import React from "react";
import { useRouter } from "next/router";
import Spinner from "../../components/Spinner";
import NotFound from "../../components/NotFound";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
const Slug = ({cart,addToCart,subTotal}) => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setloading] = useState(true);
  const [items, setItems] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let url = `http://157.245.109.102/api/item/getItemById/${slug}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    let f1 = parsedData.data;
    console.log(f1);
    setloading(false);
    if (slug !== undefined) {
      setItems(f1);
    }
  };
  return (
    <div>
      {loading && <Spinner />}
      {!loading && items === null && <NotFound />}
      {!loading && items !== null && (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto  object-cover object-top rounded"
                src={items.imgId}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-600 tracking-widest">
                  {"DOTIN INDIA"}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {items.name}
                </h1>
                <div className="flex mb-4 flex-row">
                  <Rating
                    className="flex flex-row"
                    size={15}
                    emptyColor="transparent"
                    readonly={true}
                    style={{ display: "flex", flexDirection: "row" }}
                    fullStyle={{ display: "flex", flexDirection: "row" }}
                    emptyStyle={{ display: "flex", flexDirection: "row" }}
                    initialValue={items.rating}
                  ></Rating>
                </div>
                <p className="leading-relaxed mb-4">{items.shortDesc}</p>
                {items.specification.map((data) => {
                  return (
                    <div
                      key={data.name}
                      className="flex border-t border-gray-200 py-2"
                    >
                      <span className="text-gray-500">{data.name}</span>
                      <span className="ml-auto text-gray-900">
                        {data.value}
                      </span>
                    </div>
                  );
                })}
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹ 58.00
                  </span>
                  <button onClick={addToCart} className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded font-semibold">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Slug;
