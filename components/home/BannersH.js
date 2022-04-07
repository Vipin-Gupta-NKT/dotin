import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
const BannersH = () => {
  const [loading, setloading] = useState(true);
  const [images, setcategories] = useState([]);
  let getData = async () => {
    let url = `http://157.245.109.102/api/bannerh/getwithoutfilter/1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    let f1 = parsedData.data;
    console.log(f1);
    let g2 = images.concat(f1);
    if (g2.length > 2) {
      g2 = g2.slice(0, 2);
    }
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
          {images.map((img) => {
            return (
              <div key={img.id}>
                <div className="absolute">
                  <img
                    alt="banner image"
                    className="m-auto block"
                    src={img.imgId}
                  />
                  <div className="absolute top-1/2 left-10 text-white">
                    {img.name}
                  </div>
                  <div className="absolute top-2/3 left-10 text-white">
                    Starting from ₹{img.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BannersH;
