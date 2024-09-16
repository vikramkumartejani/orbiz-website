import Navbar from "@/app/components/Navbar";
import React from "react";
import SubscribeSection from "./SubscriptionSection";
import RelatedContent from "./RelatedContent";
import BlogDetails from "./BlogDetails";

const page = () => {
  return (
    <div className="w-full ">
      <div className="px-4">
        <Navbar />
      </div>
      <div className="px-4">
        <div className="flex flex-col items-start justify-between py-[48px] lg:py-[64px] bg-white max-w-[1200px] mx-auto">
          <div className="flex md:flex-row flex-col xl:gap-[64px] lg:gap-[50px] gap-[32px]">
            <div
              data-aos="fade-up"
              className="md:w-1/2 w-full flex flex-col justify-start gap-[16px]"
            >
              <p className="text-[16px] font-[500] md:leading-[25.6px] text-secondaryText">
                Finance
              </p>
              <h1 className="text-[48px] font-[500] md:leading-[60px] text-heading">
                Step-by-Step Expense Forecasting: A Guide For SaaS
              </h1>
              <p className="text-[18px] font-[400] md:leading-[27.9px] text-secondaryText">
                How long is your cash going to last? It’s a critical question
                for any finance leader to answer for the business. But you don’t
                just need an answer that’s a snapshot in time — you need to
                project forward based on your plans. Here’s how to forecast
                expenses effectively to better understand your cash burn.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-end"
            >
              <img
                className="max-h-[450px] w-full object-cover rounded-[15px]"
                src="/assets/blog-detail.svg"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:justify-between justify-center w-full md:mt-[56px] mt-[32px]">
            <p
              data-aos="fade-right"
              className="text-[16px] font-[400] text-secondaryText leading-[25.6px]"
            >
              by Mileana Vanessa
            </p>
            <div data-aos="fade-left" className="flex gap-1">
              <p className="text-[16px] font-[400] text-secondaryText leading-[25.6px]">
                Published on January 11, 2024
              </p>
              <p className="text-[16px] font-[400] text-secondaryText leading-[25.6px]">
                • 11 min read
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white max-w-[1200px] w-full mx-auto pt-[64px] md:pb-[112px] pb-[56px]">
          <div className="flex md:flex-row flex-col items-start md:gap-8 lg:gap-14 w-full">
            <div
              className="md:w-auto w-full md:order-1 order-2 flex"
              data-aos="fade-right"
            >
              <SubscribeSection />
            </div>

            <div className="w-full md:order-2 order-1 flex">
              <BlogDetails />
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] w-full mx-auto md:py-[88px] py-[64px]">
          <RelatedContent />
        </div>
      </div>
    </div>
  );
};

export default page;
