"use client";

import { bestSellingHomes } from "../data";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

const MyComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      {bestSellingHomes.map((home) => (
        <swiper-slide key={home.id}>
          <div className="w-48 h-40 bg-[#FFFFFF]  shadow-xl rounded lg px-4">
            <div id="image" className="h"></div>
            <div id="content" className="mt-4">
              <h4>{home.price}</h4>
              <p>{home.type}</p>
              <p>{home.location}</p>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default MyComponent;
