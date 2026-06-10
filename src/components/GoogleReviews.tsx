"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviews = [
  {
    rating: "4.9",
    name: "AMMAR AHMED",
    text: "Outstanding service provided by Akeeb Yakoob and Usama had the firm deal with my case that had been ongoing for 2 years and finally got the NFA result wanted would definitely recommend.",
  },
  {
    rating: "4.3",
    name: "AUGUSTINE IHEH",
    text: "Mr Tabby my solicitor and Mr Jaz Ifran the best Barrister are the number one team for anyone, the support and assistance I was given during my case was incredible. They know their job to the core and never gave up on the case until they got the best verdict. I owe them my freedom and peace of mind til.",
  },
  {
    rating: "4.5",
    name: "SULEMAN HUSSAIN",
    text: "Mariam has been absolutely brilliant and always kept me in touch regarding the case. Maurice Andrew Solicitors are very lucky to have a fantastic solicitor in Mariam. Her service is beyond exceptional.",
  },
];

function StarRating({ rating }: { rating: string }) {
  const num = parseFloat(rating);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill =
          num >= star ? "100%" : num >= star - 0.5 ? "50%" : "0%";
        return (
          <svg key={star} width="25" height="24" viewBox="0 0 306 306">
            <defs>
              <linearGradient id={`gr-${star}-${rating}`}>
                <stop offset={fill} stopColor="#F59E0B" />
                <stop offset={fill} stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#gr-${star}-${rating})`}
              d="M153 230.775l-94.755 49.822 18.1-105.508L0 99.162l105.922-15.39L153 0l47.078 83.772L306 99.162l-76.345 65.927 18.1 105.508z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="bg-white px-4 py-14">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT: Google badge - static */}
          <div className="flex flex-col items-center bg-white z-10 mt-5 lg:ml-0 lg:mt-12 shrink-0">
            <div className="flex items-center w-[87px] h-[87px]">
              <svg
                width="87"
                height="87"
                viewBox="0 0 87 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="43.5" cy="43.5" r="43.5" fill="white" />
                <path
                  d="M43.5 18.5C35.4 18.5 27.9 22.2 22.8 28.1L30.2 33.8C33.5 29.9 38.3 27.5 43.5 27.5C49.8 27.5 55.3 30.7 58.7 35.5L66.7 29.2C61.4 22.7 52.8 18.5 43.5 18.5Z"
                  fill="#EA4335"
                />
                <path
                  d="M68.5 43.5C68.5 42.1 68.4 40.8 68.2 39.5H43.5V48.5H57.5C56.9 51.5 55.2 54 52.8 55.7L60.5 61.7C65.6 57 68.5 50.6 68.5 43.5Z"
                  fill="#4285F4"
                />
                <path
                  d="M30.2 53.2C33.4 58.2 38.1 61.5 43.5 61.5C49.8 61.5 55.3 58.7 58.7 53.5L52.8 55.7C50.1 57.4 46.9 58.5 43.5 58.5C38.3 58.5 33.5 56.1 30.2 52.3L22.8 58C27.8 64.8 35.1 68.5 43.5 68.5C52.2 68.5 60.6 64.1 65.7 57L57.9 50.9C55.1 53.3 49.5 55.5 43.5 55.5C38.1 55.5 33.4 53.7 30.2 49.8L22.8 55.5C27.9 61.4 35.4 65.1 43.5 65.1C49.5 65.1 54.9 62.5 58.7 58.7L66.7 64.9C61.3 71.5 52.5 75.5 43.5 75.5C32.6 75.5 22.7 69.9 17 61.7L24.7 55.7C22.3 54 20.6 51.5 20 48.5H43.5V39.5H68.2C66.9 48.1 64.1 55.5 60.5 61.7L68.2 67.9C63.3 73.2 56.7 76 43.5 76C32.3 76 22.2 70.6 16.5 62.5L24.3 56.5C27.4 60.2 31.9 62.5 36.8 62.5C42.6 62.5 47.5 58.6 47.5 52.5C47.5 46.4 42.6 42.5 36.8 42.5H20C19.8 43.8 19.7 45.1 19.7 46.5C19.7 55.1 23.4 62.9 29.7 68.5L22 74.9C16.8 69.8 13.5 62.7 13.5 54.5C13.5 46.3 16.8 39.2 22 34.1L29.7 29.7C23.4 24.1 19.7 16.3 19.7 7.7C19.7 6.3 19.8 4.9 20 3.5H36.8C42.6 3.5 47.5 7.4 47.5 13.5C47.5 19.6 42.6 23.5 36.8 23.5H24.3C27.4 19.8 31.9 17.5 36.8 17.5C42.6 17.5 47.5 21.4 47.5 27.5C47.5 33.6 42.6 37.5 36.8 37.5H20C19.8 38.8 19.7 40.1 19.7 41.5"
                  fill="#34A853"
                />
              </svg>
            </div>
            <div className="px-7 text-center">
              <p className="text-3xl text-start mb-2 font-bold text-primary">
                4.4
              </p>
              <span className="flex justify-center item-center mt-3">
                <p className="font-medium text-primary">85 </p>
                <p className="px-2 font-medium text-primary">+</p>
                <p className="font-medium text-primary">reviews</p>
              </span>
            </div>
          </div>

          {/* RIGHT: Review slider */}
          <div className="w-full max-w-[900px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              role="region"
              aria-roledescription="carousel"
              aria-label="Customer reviews"
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
            >
              {reviews.map((review, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-[#E8F1FE] flex flex-col justify-between gap-5 overflow-hidden cursor-pointer p-3 h-[460px]">
                    <div className="mx-7 mt-9 mb-8">
                      <div className="flex gap-5 items-center">
                        <h3 className="text-[#000000] text-start font-bold text-3xl">
                          {review.rating}
                        </h3>
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[#333] px-7 flex-1">
                      {review.text}
                    </p>
                    <p className="text-xs font-bold text-primary px-7 pb-8">
                      {review.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
