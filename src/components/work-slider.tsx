"use client";

import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { workSlides } from "@/mocks/work-slides";

export const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[65vw] sm:h-[26rem] md:h-[30rem] lg:h-[36rem] xl:h-[30rem] 
      2xl:h-[36rem]"
    >
      {workSlides.slides.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="grid cursor-pointer grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, i) => {
                return (
                  <div
                    key={i}
                    className="group relative flex items-center justify-center
                    overflow-hidden rounded-lg"
                  >
                    <picture
                      className="group relative flex items-center 
                      justify-center overflow-hidden"
                    >
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        quality={100}
                        sizes="100vw"
                        className="h-auto w-full"
                        alt="project images"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-l
                        from-transparent via-[#E838CC] to-[#4A22BD] 
                        opacity-0 transition-all duration-700 
                        group-hover:opacity-80"
                      ></div>

                      <div
                        className="absolute bottom-0 translate-y-full 
                        transition-all duration-300 group-hover:-translate-y-10
                        group-hover:xl:-translate-y-20
                      "
                      >
                        <div
                          className="flex items-center gap-x-2 text-[0.813rem] 
                          tracking-[0.2em]"
                        >
                          <span className="delay-100">LIVE</span>
                          <span
                            className="translate-y-[500%] transition-all
                            delay-150 duration-300 group-hover:translate-y-0"
                          >
                            PROJECT
                          </span>
                          <div
                            className="translate-y-[500%] text-xl transition-all 
                            delay-200 duration-300 group-hover:translate-y-0"
                          >
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </picture>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
