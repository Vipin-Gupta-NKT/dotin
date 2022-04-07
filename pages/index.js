
import BannersH from "../components/home/BannersH";
import BannersV from "../components/home/BannersV";
import Category from "../components/home/Category";
import Items from "../components/home/Items";
import Slider from "../components/home/Slider";

export default function Home() {
  return (
    <div>
      
      <div className="container">
        <div className="flex px-8 ">
          <div className="md:w-[250px]">
            <Category />
          </div>

          <div className="w-7/12 mx-5">
            <Slider />
          </div>
          <BannersH />
        </div>
        <div className="flex px-8 pt-10">
          <div className="md:w-[250px]">
            <BannersV />
          </div>
          <div className="mx-2 pl-16">
            <Items />
          </div>
        </div>
      </div>
    </div>
  );
}
