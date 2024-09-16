"use client";
import React from "react";
import Image from "next/image";

const FiveImageSlider = ({ images }) => (
  <div className="mt-12 relative overflow-hidden" data-aos="fade-up">
    <div className="marquee-container flex">
      <div className="marquee-content flex">
        {images.concat(images).map((image, index) => (
          <div key={index} className="marquee-slide flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ThreeImageSlider = ({ images }) => (
  <div className="mt-10 md:mt-12 relative overflow-hidden" data-aos="fade-up">
    <div className="marquee-container-one flex">
      <div className="marquee-content flex">
        {images.concat(images).map((image, index) => (
          <div key={index} className="marquee-slide flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Trusted = () => {
  const images1 = [
    { src: "/assets/icons/angellist.svg", alt: "AngelList" },
    { src: "/assets/icons/loom.svg", alt: "Loom" },
    { src: "/assets/icons/retool.svg", alt: "Retool" },
    { src: "/assets/icons/ramp.svg", alt: "Ramp" },
    { src: "/assets/icons/monzo.svg", alt: "Ramp" },
  ];

  const images2 = [
    { src: "/assets/icons/agicap.svg", alt: "Monzo" },
    { src: "/assets/icons/humaans.svg", alt: "humaans" },
    { src: "/assets/icons/zapier.svg", alt: "zapier" },
  ];

  return (
    <div
      className="max-w-[950px] w-full mx-auto py-12 md:py-20"
      data-aos="fade-up"
    >
      <h3
        className="text-center text-dropdownFilterText text-[18px] sm:text-[20px] leading-[28px] font-medium"
        data-aos="fade-up"
      >
        Trusted by beloved partner and customer
      </h3>
      <div className="mt-6 md:mt-12">
        <FiveImageSlider images={images1} />
        <ThreeImageSlider images={images2} />
      </div>
    </div>
  );
};

export default Trusted;
