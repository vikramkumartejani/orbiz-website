"use client";
import React, { useEffect } from "react";
import SolutionsHero from "./SolutionsHero";
import Trusted from "../components/Trusted";
import OurCustomer from "../components/OurCustomer";
import ExploreIntegrations from "../features/ExploreIntegrations";
import Image from "next/image";
import Navbar from "../components/Navbar";
import OptimizeRevenue from "./OptimizeRevenue";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Blogs from "./Blogs";

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set your animation duration
      once: true, // Whether animation should happen only once
      // Additional options can be added here
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#0D0D12] px-4 md:px-5">
        <Navbar />
        <SolutionsHero />
      </div>
      <Trusted />
      <div className="max-w-[1200px] mx-auto w-full px-5">
        <div className="py-10">
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
                className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] px-3 py-1 max-w-[101px] flex items-center gap-1.5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src="/assets/icons/file-text.svg"
                  alt="file-text"
                  width={13.33}
                  height={13.33}
                  className="-mt-0.5"
                />
                <h1 className="text-[#5F57FF] text-[13px] leading-[21.7px] font-medium font-custom">
                  Revenue
                </h1>
              </div>
              <h1
                className="lg:max-w-[464px] text-[#0D0D12] text-[35px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Power Any Billing Model with Orbiz
              </h1>
              <p
                className="text-[#666D80] text-[16px] leading-[27.9px] font-normal lg:max-w-[470px]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get your instant online store just by creating Orbiz account.
                Add products, and start selling!
              </p>
              <span data-aos="fade-up" data-aos-delay="400">
                <button className="sm:mt-[24px] bg-[#5F57FF] w-full sm:w-[146px] h-[52px] rounded-[1000px] shadow-custom text-white text-[15px] leading-[24px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                  Get Started
                </button>
              </span>
            </div>
          </div>
          <div
            className="mt-10 md:mt-28 flex items-center gap-5 justify-between lg:flex-row flex-col"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col gap-4">
              <div
                className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] px-3 py-1 max-w-[100px] flex items-center gap-1.5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image
                  src="/assets/icons/file-text.svg"
                  alt="file-text"
                  width={13.33}
                  height={13.33}
                  className="-mt-0.5"
                />
                <h1 className="text-[#5F57FF] text-[13px] leading-[21.7px] font-medium font-custom">
                  Get Paid
                </h1>
              </div>
              <h1
                className="lg:max-w-[464px] text-[#0D0D12] text-[35px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get Paid with Prebuilt Invoices
              </h1>
              <p
                className="text-[#666D80] text-[16px] leading-[27.9px] font-normal lg:max-w-[470px]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get your instant online store just by creating Orbiz account.
                Add products, and start selling!
              </p>
              <span data-aos="fade-up" data-aos-delay="300">
                <button className="md:mt-[24px] bg-[#5F57FF] w-full sm:w-[146px] h-[52px] rounded-[1000px] shadow-custom text-white text-[15px] leading-[24px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                  Get Started
                </button>
              </span>
            </div>
            <Image
              src="/assets/operations.svg"
              alt="operations"
              width={532}
              height={430}
              className="w-full lg:w-[532px]"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
      <OptimizeRevenue />
      <ExploreIntegrations />
      <OurCustomer />
      <Blogs/>
    </div>
  );
};

export default Solutions;
