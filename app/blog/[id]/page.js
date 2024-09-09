import Navbar from "@/app/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="w-full ">
      <div className="px-4">
        <Navbar />
      </div>
      <div className="flex flex-col items-start justify-between px-6 py-8 lg:py-[64px] lg:px-24 bg-white">
        <div className="flex md:flex-row flex-col xl:gap-[64px] lg:gap-[50px] gap-[30px]">
          <div className="md:w-1/2 w-full flex flex-col justify-start gap-[16px]">
            <p className="text-[16px] font-[500] md:leading-[25.6px] text-[#666D80]">
              Finance
            </p>
            <h1 className="text-[48px] font-[500] md:leading-[60px] text-[#0D0D12]">
              Step-by-Step Expense Forecasting: A Guide For SaaS
            </h1>
            <p className="text-[18px] font-[400] md:leading-[27.9px] text-[#666D80]">
              How long is your cash going to last? It’s a critical question for
              any finance leader to answer for the business. But you don’t just
              need an answer that’s a snapshot in time — you need to project
              forward based on your plans. Here’s how to forecast expenses
              effectively to better understand your cash burn.
            </p>
          </div>
          <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-end">
            <img
              className="max-h-[450px] w-full object-cover rounded-[15px]"
              src="/assets/blog-detail.svg"
            />
          </div>
        </div>
        <div className="flex justify-between w-full items-center mt-[56px]">
          <p className="text-[16px] font-[400] text-[#666D80] leading-[25.6px]">
            by Mileana Vanessa
          </p>
          <div className="flex gap-1">
            <p className="text-[16px] font-[400] text-[#666D80] leading-[25.6px]">
              Published on January 11, 2024
            </p>
            <p className="text-[16px] font-[400] text-[#666D80] leading-[25.6px]">
              • 11 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
