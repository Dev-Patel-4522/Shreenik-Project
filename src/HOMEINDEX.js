// import React, { useState,useEffect }  from 'react';
import TariSathe from './Images/TariSathe.jpg';
import LoveNiStory from './Images/LoveNiStory.jpg';
import babubhai from './Images/babubhai.jpg';
import aaron from "./Images/aaron.jpg";
import pani from "./Images/pani.jpg";
import firangi from "./Images/firangi.jpg";
import dahavi from "./Images/dahavi.jpg";
import shortcircuit from "./Images/shortcircuit.jpg";
// import anokhee from "./Images/anokhee.jpg";
// import fairlady from "./Images/fairlady.jpg";
// import fikarnot from "./Images/fikarnot.jpg";
// import SHANNISHAN from "./Images/SHANNISHAN.jpg";
// import category from "./IMGDATA.js";
import './App.css';

// import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function HOMEINDEX() {
  return (
    <div>
      {/* Slideshow / Corusal Section */}

      <section>
        <div class="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
          >
            <SwiperSlide>
              <img
                class="object-fill  md:w-screen md:h-screen"
                src={TariSathe}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={LoveNiStory}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={shortcircuit}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={babubhai}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={aaron}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={pani}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={dahavi}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={firangi}
                alt="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Upcomming and Released Button Section */}

      {/* Distribution Section */}

      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              style={{ fontSize: "xxx-large", color: "khaki" }}
            >
              Distribution
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={TariSathe}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={babubhai}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={dahavi}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={firangi}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={pani}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={aaron}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto mb-28 px-5 py-2 lg:px-32 lg:pt-12">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-4 mt-10 text-gray-900"
              style={{ fontSize: "xxx-large", color: "khaki" }}
            >
              Marketing
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={TariSathe}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={LoveNiStory}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={babubhai}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={shortcircuit}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={pani}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={dahavi}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
    </div>
  );
}

export default HOMEINDEX;
