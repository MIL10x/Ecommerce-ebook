import { Link } from "react-router-dom";
import Photo from "../../../assets/Pic001.jpg";
const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 w-full border-2 rounded-2xl p-3 m-5">
      <div className="flex flex-col gap-8 p-6 order-2 md:order-1">
        <p className="font-semibold text-3xl">Hero Section</p>
        <p className="font-pop ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          iure corporis. Deleniti, quos praesentium veniam maxime odio nihil
          temporibus ad! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Tenetur, corporis doloremque? Incidunt officia sunt beatae
          adipisci exercitationem eligendi. Quaerat, illum?
        </p>
        <div>
          <Link
            to="/productlist"
            className="bg-blue-400 p-3 rounded-xl dark:bg-blue-950 dark:text-white"
          >
            Explore Ebooks &gt;
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src={Photo} className="rounded-xl" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
