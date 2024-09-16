import Image from "next/image";
import Link from "next/link";
import React from "react";

const SolutionsHero = () => {
  return (
    <div className="text-white">
      <div className="mx-auto w-full relative">
        <div
          className="absolute inset-0 bg-cover opacity-70 bg-bottom"
          style={{
            backgroundImage: "url('/assets/icons/background.png')",
            backgroundAttachment: "fixed",
          }}
          // data-aos="fade"
        ></div>
        <div className="max-w-[1200px] mx-auto relative text-left flex lg:items-center justify-between lg:flex-row flex-col gap-8 lg:gap-4 z-10 py-12 md:py-16">
          <div className="flex items-start gap-4 flex-col" data-aos="fade-up">
            <div
              className="shadow-custom border border-borderColor2 bg-[#1A1B25] rounded-[1000px] px-3 py-1 max-w-[130px] flex items-center gap-1.5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/assets/icons/saas-solution.svg"
                alt="file-text"
                width={13.33}
                height={13.33}
                className="-mt-0.5"
              />
              <h1 className="text-white text-[13px] leading-[21.7px] font-medium font-custom">
                SaaS Solution
              </h1>
            </div>
            <h1
              className="text-white text-[48px] sm:text-[66px] sm:leading-[85px] tracking-[-0.01em] font-medium lg:max-w-[702px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Simplifying Payment Built for SaaS
            </h1>
            <p
              className="text-secondaryText text-[18px] leading-[27.9px] font-normal lg:max-w-[588px] font-custom"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Vestibulum velit neque placerat accumsan aliquam lectus elementum
              sed. Ante dolor dignissim lectus in. Lorem risus nibh in sit.
              Elementum euismod sodales sed enim vel lorem quis adipiscing.
            </p>
            <div
              className="w-full mt-4 flex items-center gap-3 sm:flex-row flex-col"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                href="/#get-started"
                className="flex items-center justify-center bg-btn shadow-custom w-full sm:w-[150px] h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]"
              >
                Get Started
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center justify-center custom-bg border border-[#FFFFFF26] shadow-custom w-full sm:w-[150px] h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:border-white"
              >
                Contact Us
              </Link>
            </div>
            <div
              className="mt-12 md:block hidden"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-secondaryText text-[16px] leading-[25px] font-medium">
                Trusted by beloved partner and customer
              </p>
              <div className="flex items-center gap-8 mt-8">
                <Image
                  src="/assets/icons/loom.svg"
                  alt="loom"
                  width={90}
                  height={26}
                />
                <Image
                  src="/assets/icons/retool.svg"
                  alt="loom"
                  width={108}
                  height={24}
                />
                <Image
                  src="/assets/icons/ramp.svg"
                  alt="loom"
                  width={99}
                  height={26}
                />
                <Image
                  src="/assets/icons/monzo.svg"
                  alt="loom"
                  width={97}
                  height={26}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-custom-bg px-12 py-10 rounded-[20px] max-w-[450px] mx-auto"
            data-aos="fade-left"
          >
            <Image
              src="/assets/simplifying-payment.svg"
              alt="feature-hero"
              width={354}
              height={404}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsHero;
