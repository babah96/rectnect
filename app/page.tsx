import Image from "next/image";
import HeaderTop from "./components/HeaderTop";
import Herro from "./components/Herro";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
<main>
  <Herro />
  <NewProducts />
  <Testimonial />
</main>
      
  );
}
