"use client";
import Image from "next/image";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const HomeCarousel = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2500 }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide >
          <div className="w-full h-[500px]">
            <Image
            src="https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-black-friday-sale-text-emblem-label-banner-background-brush-style-discount-image_413496.jpg"
            alt="discount"
            width={1250}
            height={200}
            className="object-cover"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[500px]">
            <Image
            src="https://www.wholesalegadgets.com.bd/public/uploads/all/PusihsRJENk5c2c6rsGA2ZLJ3ZhILAdMzeQ6DBmD.jpg"
            className="object-cover"
            width={1250}
            height={200}
            alt="discount"
            
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[500px]">
            <Image
            src="https://daily-gadget.store/cdn/shop/files/blue_gradient_electronic_sales_promotion_banner_6b522ab8-dd7f-4e44-8eaa-51f452862274.png?v=1757864521&width=3840"
            className="object-cover"
            width={1250}
            height={500}
            alt="discount"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[500px]">
            <Image
            src="https://offerong.com/images/1730015001.jpg"
            className="object-cover"
            width={1250}
            height={500}
            alt="discount"
          />
          </div>
        </SwiperSlide>
        ...
      </Swiper>

      
    </div>
  );
};

export default HomeCarousel;
