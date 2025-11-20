"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import { siteData } from "@/app/sitedata";
import { Review } from "@/app/type";
import ReveiwCard from "../ui/ReveiwCard";

const ReveiwCarousel = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {}, [activeIndex]);
  const reviews: Review[] = Object.values(siteData.reviews.content);

  return (
    <div className="slide-container px-5">
        <Swiper
            breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
                prevEl: '.prev-ref',
                nextEl: '.next-ref',
            }}
            pagination={{ clickable: true }}
            className="mySwiper2 slide-inner flex items-center overflow-hidden"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReveiwCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

      <div className="w-full flex justify-between items-center mt-4">
        {/* Navigation buttons */}
        <div className="slide-controllers flex items-center justify-center space-x-3 px-5">
          <button
            type="button"
            ref={prevRef}
            aria-label="Previous Slide"
            className="prev-ref bg-blue-lagoon-500 hover:bg-blue-lagoon-600 rounded-full w-8 h-8 shadow-md text-white -ml-8 cursor-pointer"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            type="button"
            ref={nextRef}
            aria-label="Next Slide"
            className="next-ref bg-blue-lagoon-500 hover:bg-blue-lagoon-600 w-8 h-8 rounded-full -mr-8 shadow-md text-white cursor-pointer"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="slide-indicators flex items-center space-x-1">
            {reviews.map((_, index) => (
                <span
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    activeIndex === index ? "bg-blue-lagoon-500" : "bg-gray-400"
                }`}
                ></span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReveiwCarousel;
