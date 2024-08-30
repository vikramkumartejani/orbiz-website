"use client";
import React, { useEffect } from "react";
import FeatureHero from "./FeatureHero";
import Navbar from "../components/Navbar";
import Trusted from "../components/Trusted";
import Image from "next/image";
import FAQ from "./FAQ";
import OurCustomer from "../components/OurCustomer";
import ExploreIntegrations from "./ExploreIntegrations";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  
      once: true,  
     });
  }, []);
  return (
    <div className="w-full ">
      <div className="bg-[#0D0D12] w-full ">
        <div className="px-4">
          <Navbar />
        </div>
        <FeatureHero />
      </div>
      <Trusted />
      <div className="max-w-[1200px] mx-auto w-full px-5">
        <div className="py-[64px]">
          <div
            className="flex items-start lg:items-center gap-10 lg:gap-5 justify-between lg:flex-row flex-col-reverse"
            data-aos="fade-up"
          >
            <Image
              src="/assets/create-invoices.svg"
              alt="create-invoices"
              width={532}
              height={430}
              className="w-full lg:w-[532px]"
            />
            <div className="flex flex-col gap-4">
              <div
                className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] px-3 py-1 max-w-[175px] flex items-center gap-1.5"
                data-aos="fade-right"
              >
                <Image
                  src="/assets/icons/file-text.svg"
                  alt="file-text"
                  width={13.33}
                  height={13.33}
                  className="-mt-0.5"
                />
                <h1 className="text-[#5F57FF] text-[13px] leading-[21.7px] font-medium font-custom">
                  Create Invoices
                </h1>
              </div>
              <h1
                className="lg:max-w-[464px] text-[#0D0D12] text-[35px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
                data-aos="fade-up"
              >
                Simplify Create Your Invoices in Seconds
              </h1>
              <p
                className="text-[#666D80] text-[16px] leading-[27.9px] font-normal lg:max-w-[470px]"
                data-aos="fade-up"
              >
                Get your instant online store just by creating Orbiz account.
                Add products, and start selling!
              </p>
              <span data-aos="fade-up">
                <button className="sm:mt-[24px] bg-[#5F57FF] w-full sm:w-[194px] h-[52px] rounded-[1000px] shadow-custom text-white text-[15px] leading-[24px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                  Create your Invoices
                </button>
              </span>
            </div>
          </div>
          <div
            className="mt-10 md:mt-28 flex items-center gap-5 justify-between lg:flex-row flex-col"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-4">
              <div
                className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] px-3 py-1 max-w-[110px] flex items-center gap-1.5"
                data-aos="fade-left"
              >
                <Image
                  src="/assets/icons/file-text.svg"
                  alt="file-text"
                  width={13.33}
                  height={13.33}
                  className="-mt-0.5"
                />
                <h1 className="text-[#5F57FF] text-[13px] leading-[21.7px] font-medium font-custom">
                  Operations
                </h1>
              </div>
              <h1
                className="lg:max-w-[464px] text-[#0D0D12] text-[35px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
                data-aos="fade-up"
              >
                Simplifies Invoice Operations Easily
              </h1>
              <p
                className="text-[#666D80] text-[16px] leading-[27.9px] font-normal lg:max-w-[470px]"
                data-aos="fade-up"
              >
                Hendrerit fames metus leo ut orci pretium. Sit vitae montes
                egestas montes mauris. Auctor vitae neque urna nam nunc
                pellentesque.
              </p>
              <span data-aos="fade-up">
                <button className="md:mt-[24px] bg-[#5F57FF] w-full sm:w-[194px] h-[52px] rounded-[1000px] shadow-custom text-white text-[15px] leading-[24px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                  Create your Invoices
                </button>
              </span>
            </div>
            <Image
              src="/assets/operations.svg"
              alt="operations"
              width={532}
              height={430}
              className="w-full lg:w-[532px]"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
      <ExploreIntegrations />
      <OurCustomer />
      <FAQ />
    </div>
  );
};

export default Features;
