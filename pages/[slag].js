import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const CategoryProduct = () => {
  const router = useRouter();
  const { slag } = router.query;
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Link href={"/product/done"}>
                <div className="lg:w-1/5 md:w-1/2  w-full cursor-pointer shadow-lg m-3">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                      src="http://157.245.109.102/static/images/1648125080510.png"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
              </Link>
              <Link href={"/product/done"}>
                <div className="lg:w-1/5 md:w-1/2  w-full cursor-pointer shadow-lg m-3 ">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                      src="http://157.245.109.102/static/images/1648125080510.png"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
              </Link>
              <Link href={"/product/done"}>
                <div className="lg:w-1/5 md:w-1/2  w-full cursor-pointer shadow-lg m-3 ">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                      src="http://157.245.109.102/static/images/1648125080510.png"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
              </Link>
              <Link href={"/product/done"}>
                <div className="lg:w-1/5 md:w-1/2  w-full cursor-pointer shadow-lg m-3 ">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                      src="http://157.245.109.102/static/images/1648125080510.png"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
              </Link>
              <Link href={"/product/done"}>
                <div className="lg:w-1/5 md:w-1/2  w-full cursor-pointer shadow-lg m-3 ">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                      src="http://157.245.109.102/static/images/1648125080510.png"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryProduct;

/**
 * Display product as per category
 */
