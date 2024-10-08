import Image from "next/image";
import Link from "next/link";
import React from "react";

const MarqueeSliderOne = ({ images }) => (
  <div
    className="mt-10 md:mt-12 relative overflow-hidden max-w-[600px] mx-auto"
    data-aos="fade-up"
  >
    <div className="marquee-wrapper">
      <div className="marquee-items">
        {images.concat(images).map((image, index) => (
          <div key={index} className="marquee-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MarqueeSliderTwo = ({ images }) => (
  <div
    className="mt-10 md:mt-12 relative overflow-hidden"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div className="marquee-wrapper">
      <div className="marquee-items">
        {images.concat(images).map((image, index) => (
          <div key={index} className="marquee-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MarqueeSliderThree = ({ images }) => (
  <div
    className="mt-10 md:mt-12 relative overflow-hidden max-w-[600px] mx-auto"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div className="marquee-wrapper">
      <div className="marquee-items">
        {images.concat(images).map((image, index) => (
          <div key={index} className="marquee-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Integrations = () => {
  const images1 = [
    { src: "/assets/icons/drive.svg", alt: "drive" },
    { src: "/assets/icons/in.svg", alt: "Loom" },
    { src: "/assets/icons/card-one.svg", alt: "Retool" },
    { src: "/assets/icons/card-two.svg", alt: "Ramp" },
    { src: "/assets/icons/card-three.svg", alt: "Ramp" },
  ];
  const images2 = [
    { src: "/assets/icons/card-four.svg", alt: "" },
    { src: "/assets/icons/card-five.svg", alt: "Loom" },
    { src: "/assets/icons/card-six.svg", alt: "Retool" },
    { src: "/assets/icons/card-seven.svg", alt: "Ramp" },
    { src: "/assets/icons/card-eight.svg", alt: "Ramp" },
    { src: "/assets/icons/card-nine.svg", alt: "Ramp" },
  ];
  const images3 = [
    { src: "/assets/icons/card-ten.svg", alt: "AngelList" },
    { src: "/assets/icons/card-11.svg", alt: "Loom" },
    { src: "/assets/icons/card-12.svg", alt: "Retool" },
    { src: "/assets/icons/card-13.svg", alt: "Ramp" },
    { src: "/assets/icons/card-14.svg", alt: "Ramp" },
  ];

  return (
    <div className="w-full px-2 py-5 md:p-5 overflow-hidden">
      <div className="w-full border border-borderColor rounded-[24px] shadow-custom-one px-4">
        <div className="max-w-[1200px] w-full mx-auto py-12 md:py-[88px]">
          <div
            className="w-full max-w-[686px] mx-auto text-center"
            data-aos="fade-up"
          >
            <div className="border border-borderColor shadow-custom-one rounded-[1000px] w-[124px] h-[30px] mx-auto flex items-center justify-center gap-1.5">
              <Image
                src="/assets/icons/briefcase.svg"
                alt="briefcase"
                width={16}
                height={16}
              />
              <h4 className="text-btn text-[14px] leading-[21.7px] font-medium">
                Integrations
              </h4>
            </div>
            <h1 className="text-heading text-[35px] sm:text-[52px] sm:leading-[65px] font-medium tracking-[-0.01em] mt-2">
              Simplify Your Workflow with Orbiz Integrations
            </h1>
            <p className="text-secondaryText text-[16px] sm:leading-[27.9px] font-normal mt-2">
              Connect over 80+ partner tools available. Focus on what matters.
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
          >
            <div>
              <div className="w-full max-w-[768px] mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-custom-two w-full h-full z-20"></div>
                <div className="flex flex-col items-center gap-3">
                  <MarqueeSliderOne images={images1} />
                  <MarqueeSliderTwo images={images2} />
                  <MarqueeSliderThree images={images3} />
                </div>
              </div>
            </div>
            <Link
              href="/integrations"
              data-aos="fade-up"
              className="w-full sm:w-fit"
            >
              <button className="bg-btn relative mt-10 min-w-full sm:w-[200px] h-[48px] rounded-[1000px] text-white text-[16px] leading-[24.9px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                Explore Integrations
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
