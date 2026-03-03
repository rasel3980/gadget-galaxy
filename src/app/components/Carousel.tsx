'use client'

import Image from "next/image"
import React from "react"
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  {
    id: 1,
    title: "Big Friday Sale!",
    subtitle: "Up to 50% discount on all gadgets",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-black-friday-sale-text-emblem-label-banner-background-brush-style-discount-image_413496.jpg",
  },
  {
    id: 2,
    title: "New Tech Arrival",
    subtitle: "Explore the latest smartphones and accessories",
    image: "https://www.wholesalegadgets.com.bd/public/uploads/all/PusihsRJENk5c2c6rsGA2ZLJ3ZhILAdMzeQ6DBmD.jpg",
  },
  {
    id: 3,
    title: "Best Deals for You",
    subtitle: "High quality tech at the best market price",
    image: "https://offerong.com/images/1730015001.jpg",
  },
];

const HomeCarousel: React.FC = () => {
  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="mySwiper rounded-2xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[300px] md:h-[550px]">
             
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-75 transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h2 className="text-3xl md:text-6xl font-black mb-2 animate__animated animate__fadeInDown">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-xl font-medium mb-6 opacity-90">
                  {slide.subtitle}
                </p>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg transform transition active:scale-95">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-white hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity after:text-2xl"></div>
        <div className="swiper-button-next text-white hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity after:text-2xl"></div>
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important; /* blue-600 */
          width: 25px !important;
          border-radius: 5px !important;
          opacity: 1;
        }
        .swiper-button-next, .swiper-button-prev {
           background: rgba(0,0,0,0.2);
           width: 50px !important;
           height: 50px !important;
           border-radius: 50%;
           backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  )
}

export default HomeCarousel