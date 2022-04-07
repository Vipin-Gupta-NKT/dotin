import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
function Slider() {
  const [loading, setloading] = useState(true);
  const [images, setcategories] = useState([]);

  let mh;

  let getData = async () => {
    if (window.matchMedia("(max-width:1040px)").matches) {
      console.log("conditonasdasdads");
      mh = "30vh";
    } else {
      mh = "60vh";
    }
    let url = `http://157.245.109.102/api/banner/getwithoutfilter/1`;
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

  let styleOf = {
    maxHeight: "100%",
    minHeight: mh,
  };
  return (
    <div>
      {loading && <Spinner />}{" "}
      {/* {!loading && (
        // <div>
        //   <div
        //     id="carouselExampleCaptions"
        //     className="carousel slide relative"
        //     data-bs-ride="carousel"
        //   >
        //     <div className="carousel-inner relative w-full overflow-hidden">
        //       <div className="carousel-item active relative float-left w-full">
        //         <img
        //           src="http://157.245.109.102/static/images/1648113085076.png"
        //           className="block w-full"
        //           alt="..."
        //         />
        //         <div className="carousel-caption hidden md:block absolute text-center">
        //           <h5 className="text-xl">First slide label</h5>
        //           <p>
        //             Some representative placeholder content for the first slide.
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        </div>
      )} */}
    </div>
  );
}

export default Slider;
