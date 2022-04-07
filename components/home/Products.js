import React from "react";

const Products = () => {
  const [loading, setloading] = useState(true);
  const [images, setcategories] = useState([]);
  let getData = async () => {
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

  return <div>Products</div>;
};

export default Products;
