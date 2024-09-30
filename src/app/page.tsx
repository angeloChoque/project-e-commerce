import Carousel from "@/components/carousel";
import Header from "@/components/header";
import ListProducts from "@/components/listProducts";
import FooterPage from "@/components/footerPage";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <ListProducts />
      </main>
      <FooterPage />
    </>
  );
}
