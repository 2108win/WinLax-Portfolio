/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
type Props = {};
const ImageLinks = [
  "/images/About-1.jpg",
  "/images/About-2.jpg",
  "/images/About-3.jpg",
  "/images/About-4.jpg",
  "/images/About-5.jpg",
];
export default function About({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-5 lg:px-6 mx-auto text-center max-w-7xl">
      <h3 className="tracking-[20px] translate-x-[10px] uppercase   text-gray-500 text-2xl">
        About
      </h3>
      <h1 className="absolute top-0 md:right-10 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-[#24242415] dark:text-[#f5f6f115] rotate-[20deg] tracking-[8px] cursor-default z-[1]">
        ##about
      </h1>
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col items-center justify-center gap-5 md:flex-row"
      >
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-[320px] h-[240px] md:w-[400px] md:h-[300px] xl:w-[500px] xl:h-[375px] rounded-2xl dark:border dark:border-[#f5f6f120] shadow-xl shrink-0"
        >
          {ImageLinks.map((link) => {
            return (
              <>
                <SwiperSlide>
                  <img className="object-cover w-full h-full rounded-xl" src={link} alt="" />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <p className="text-lg md:text-xl md:text-left text-[#242424] dark:text-[#f5f6f1]">
          Mình là sinh viên sắp tốt nghiệp, có 4 năm học công nghệ thông tin với định hướng công
          nghệ web. Rất thích những giao diện website đẹp. Sự tỉ mỉ, hoàn thiện trong từng chi tiết
          là điều tôi hướng đến để đạt được mong muốn trở thành một front-end developer và hơn thế
          nữa.
        </p>
      </motion.div>
    </div>
  );
}
