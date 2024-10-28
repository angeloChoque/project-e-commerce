"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const images = {
  default: ["/carousel1.webp", "/carousel2.webp"],
  sm: ["/carousel1_responsive.webp", "/carousel3_responsive.jpg"],
};

const Carousel = () => {
  const [screenSize, setScreenSize] = useState(images.default);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth < 735 ? images.sm : images.default);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {screenSize.map((img, index) => (
          <SwiperSlide key={img + index} className="relative w-full h-full">
            <Image
              src={img}
              alt="image Sale"
              width={1920}
              height={1080}
              quality={100}
              style={{ objectFit: "cover" }}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
