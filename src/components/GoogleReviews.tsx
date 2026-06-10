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
          {/* LEFT: Google badge - static, on-brand navy */}
          <div className="flex flex-col items-center bg-white z-10 mt-5 lg:ml-0 lg:mt-12 shrink-0">
            {/* Navy Google "G" icon — matches original site's brand-consistent approach */}
            <div className="flex items-center w-[87px] h-[87px]">
              <img
                src="/assets/google/google-icon.svg"
                alt="Google"
                width={87}
                height={87}
              />
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
            {/* Navy "Google" wordmark + arrow — on-brand, matches original */}
            <div className="mt-6 flex items-center gap-2">
              <img
                src="/assets/google/google-wordmark.svg"
                alt=""
                aria-hidden="true"
                width={140}
                height={46}
                className="w-[110px] h-auto"
              />
              <img
                src="/assets/google/google-arrow.svg"
                alt=""
                aria-hidden="true"
                width={17}
                height={19}
                className="w-4 h-[18px] -ml-1"
              />
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
