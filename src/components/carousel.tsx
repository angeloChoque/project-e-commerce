"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = {
  default: ["/carousel1.webp", "/carousel2.webp"],
  sm: ["/carousel1_responsive.webp", "/carousel3_responsive.jpg"],
};

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [imageSet, setImageSet] = useState(images.default);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 835) {
        setImageSet(images.sm);
      } else {
        setImageSet(images.default);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full max-w-full overflow-hidden"
      style={{ height: "60vh" }}
    >
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {imageSet.map((src, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        variant="outline"
        size="icon"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        variant="outline"
        size="icon"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </section>
  );
};

export default Carousel;
