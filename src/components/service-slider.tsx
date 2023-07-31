"use client";

import { RxArrowTopRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { serviceData } from "@/mocks/service-slider";

export const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[15rem] sm:h-[21.25rem]"
    >
      {serviceData.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <div
              className="group flex h-max cursor-pointer gap-x-6 rounded-lg 
              bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-colors
              duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:flex-col 
              sm:gap-x-0"
            >
              <div className="mb-4 text-4xl text-accent">{item.icon}</div>
              <div className="mb-8">
                <span className="mb-2 text-lg">{item.title}</span>
                <p
                  className="max-w-[21.875rem] leading-normal sm:min-h-[8rem] 
                  md:min-h-max lg:min-h-[5rem] xl:min-h-max"
                >
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight
                  className="transition-all duration-300 group-hover:rotate-45
                  group-hover:text-accent"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
