import Carousel from "@/components/carousel";
import Header from "@/components/header";
import ListProducts from "@/components/listProducts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <ListProducts />
      </main>
      <footer className="mt-96">asd</footer>
    </>
  );
}
