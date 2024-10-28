import HeroSection from "./components/HeroSection";
import FeatureProduct from "./components/FeatureProduct";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import usetitle from "../../hooks/usetitle";
import { usecart } from "../../context/index";
const HomePage = () => {
  const { productList } = usecart();
  console.log(productList);
  usetitle("Ecommerce application - Home page ");
  return (
    <>
      <HeroSection />
      <FeatureProduct />
      <Testimonial />
      <FAQ />
    </>
  );
};

export default HomePage;
