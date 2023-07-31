"use client";

import { FaQuoteLeft } from "react-icons/fa";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import testimonialData from "@/mocks/testimonial-data.json";

export const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[30rem]"
    >
      {testimonialData.map((person, i) => {
        return (
          <SwiperSlide key={i}>
            <div
              className="flex h-full flex-col items-center gap-x-8 px-16
              md:flex-row"
            >
              <div
                className="relative mx-auto flex w-full max-w-[18.75rem] 
                flex-col items-center xl:mx-0 xl:justify-center"
              >
                <div className="flex flex-col justify-center text-center">
                  <figure className="mx-auto mb-2">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      quality={100}
                      sizes="100vw"
                      alt="image of the person who gave a testimonial"
                    />
                  </figure>
                  <span className="text-lg">{person.name}</span>
                  <span
                    className="text-[0.75rem] font-extralight uppercase 
                    tracking-widest"
                  >
                    {person.position}
                  </span>
                </div>
              </div>
              <div
                className="relative flex flex-1 flex-col justify-center 
                before:w-[0.063rem] xl:pl-20 xl:before:absolute xl:before:left-0
                xl:before:h-[12.5rem] xl:before:bg-white/20"
              >
                <div className="mb-4">
                  <FaQuoteLeft
                    className="mx-auto text-4xl text-white/20 md:mx-0 
                    xl:text-6xl"
                  />
                  <p className="text-center md:text-left xl:text-lg">
                    {person.message}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
