import React from "react";

const ComparisonPlan = () => {
  return (
    <div className="px-4 overflow-hidden">
      <div className="flex flex-col items-center pt-[100px] max-w-[1200px] mx-auto">
        <h1
          data-aos="fade-up"
          className="md:text-[48px] text-[40px] font-[500] leading-[60px] text-center text-heading mb-[16px] max-w-[711px]"
        >
          Comparison Plan
        </h1>
        <p
          data-aos="fade-right"
          className="md:text-[18px] text-[16px] text-secondaryText leading-[28.8px] text-center md:mb-[64px] mb-[30px] max-w-[711px]"
        >
          Nisl tincidunt sed felis sed. Viverra purus dis nam ac auctor. Arcu
          dolor adipiscing lectus consectetur vestibulum quis eleifend cursus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-end  w-full gap-[20px]">
          <div></div>
          <div
            data-aos="fade-up"
            className="border border-borderColor rounded-[16px] w-full shadow-md p-[20px]"
          >
            <h2 className="text-btn text-[16px] font-[500] leading-[25.6px]">
              Starter
            </h2>
            <p className="text-[24px] font-[500] text-heading leading-[31.2px] mt-[4px] flex gap-[6px] items-end">
              $49<span className="text-base font-normal"> per month</span>
            </p>
            <p className="text-secondaryText text-[14px] leading-[21.7px] font-[400]">
              Access a complete payments platform with simple, pay-as-you-go
              pricing.
            </p>
            <button className="bg-btn text-white text-[16px] font-[600] py-[11.6px] px-4 rounded-full mt-[24px] w-full hover:bg-purple-700 transition duration-300">
              Start Free Trial
            </button>
          </div>

          <div
            data-aos="fade-left"
            className="border border-borderColor rounded-[16px] w-full shadow-md p-[20px]"
          >
            <h2 className="text-[16px] font-[500] leading-[25.6px] text-heading">
              Custom plan
            </h2>
            <p className="text-[24px] font-[500] text-heading leading-[31.2px] mt-[4px]">
              Get in Touch
            </p>
            <p className="text-secondaryText text-[13px] leading-[21.7px] font-[400]">
              Design a custom package available for businesses with large
              payments volume or unique business models.
            </p>
            <button className="bg-white border border-borderColor text-btn font-borderColor py-[11.5px] px-4 rounded-full mt-[24px] w-full hover:bg-purple-100 transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPlan;
