import Carousel from "@/components/carousel";
import ListProducts from "@/components/listProducts";
import FooterPage from "@/components/footerPage";

export default function Home() {
  return (
    <div>
      <main>
        <Carousel />
        <ListProducts />
      </main>
      <FooterPage />
    </div>
  );
}
