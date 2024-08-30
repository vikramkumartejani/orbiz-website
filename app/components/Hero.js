import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full px-2 md:px-5 py-2 md:py-5">
      <div className="bg-[#0D0D12] text-white w-full rounded-[24px] pb-10 lg:pb-24 px-4">
        <Navbar />
        <div className="pt-10 md:pt-24 w-full px-5">
          <div className="max-w-[1200px] mx-auto w-full flex lg:items-start items-center lg:justify-between lg:flex-row flex-col lg:gap-0 gap-10">
            <div className="lg:max-w-[646px] lg:text-left text-center">
              <div
                className="custom-border lg:grid justify-items-center max-w-[250px] mx-auto lg:mx-0"
                data-aos="fade-down"
              >
                <h3 className="gradient-text text-[14px] leading-[21.7px] font-normal">
                  Announcing our $1.4M Fundraise
                </h3>
              </div>
              <h1
                className="my-4 text-[48px] sm:text-[55px] xl:text-[68px] lg:leading-[85px] tracking-[-0.01em] text-[#F8FAFB] font-medium"
                data-aos="fade-up"
              >
                Simplifying Payment for Growing Business
              </h1>
              <p
                className="text-[#666D80] text-[16px] sm:leading-[25.9px] font-normal lg:max-w-[588px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Vestibulum velit neque placerat accumsan aliquam lectus
                elementum sed. Ante dolor dignissim lectus in. Lorem risus nibh
                in sit. Elementum euismod sodales sed enim vel lorem quis
                adipiscing.
              </p>
              <div
                className="mt-8 sm:mt-10 flex items-center gap-4 lg:justify-start justify-center sm:flex-row flex-col"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button className="bg-[#5F57FF] shadow-custom w-full sm:w-[150px] h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                  Get Started
                </button>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center custom-bg border border-[#FFFFFF26] shadow-custom w-full sm:w-[150px] h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:border-white"
                >
                  Contact Us
                </Link>
              </div>

              <p
                className="text-[#666D80] text-[16px] leading-[25.6px] font-medium mt-14 mb-8 lg:block hidden"
                data-aos="fade-up"
              >
                Trusted by beloved partner and customer
              </p>
              <Image
                src="/assets/logos.svg"
                alt="Logos"
                width={495}
                height={26.79}
                className="lg:block hidden no-select"
                data-aos="fade-up"
              />
            </div>

            <div
              className="flex items-end justify-end flex-col gap-14"
              data-aos="fade-left"
            >
              <Image
                src="/assets/Illustration.svg"
                alt="Illustration"
                width={474}
                height={288}
                className="w-full no-select"
              />
              <Image
                src="/assets/graph.svg"
                alt="graph"
                width={649}
                height={314}
                className="w-full no-select"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
