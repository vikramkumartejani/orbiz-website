import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <div className="mb-5 w-full px-5">
      <div className="max-w-[1200px] w-full mx-auto py-[48px] md:py-[88px]">
        <div className="grid grid-cols-1 gap-10 md:gap-[112px]">
          <div className="grid md:grid-cols-2 items-center gap-10 md:gap-12 xl:gap-24">
            <Image
              src="/assets/embrace-and-enhance-payment-globally.svg"
              alt="embrace-and-enhance-payment-globally"
              width={552}
              height={430}
              className="w-full md:order-first order-last"
              data-aos="fade-right"
            />
            <div
              className="flex flex-col items-start gap-4 sm:gap-2 lg:gap-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="border border-[#DFE1E7] shadow-custom-one rounded-[1000px] w-[115px] h-[30px] flex items-center justify-center gap-1.5">
                <Image
                  src="/assets/icons/credit-card.svg"
                  alt="credit-card"
                  width={16}
                  height={16}
                />
                <h4 className="text-[#5F57FF] text-[14px] leading-[21.7px] font-medium">
                  Payment
                </h4>
              </div>
              <h1 className="text-[#0D0D12] text-[30px] lg:text-[52px] lg:leading-[65px] tracking-[-0.01em] font-medium">
                Embrace and Enhance Payment Globally
              </h1>
              <p className="text-[#666D80] text-[16px] sm:text-[18px] sm:leading-[27.9px] font-normal">
                Increase authorization rates, optimize your checkout conversion,
                and offer local payment methods in every market.
              </p>
              <button className="text-white mt-1 xl:mt-[26px] bg-[#5F57FF] shadow-custom-one w-full sm:w-[150px] h-[52px] sm:h-[40px] lg:h-[52px] rounded-[1000px] text-[16px] leading-[24.8px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                Get Started
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:gap-12 xl:gap-24">
            <div
              className="flex flex-col items-start gap-4 sm:gap-2 lg:gap-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="border border-[#DFE1E7] shadow-custom-one rounded-[1000px] w-[115px] h-[30px] flex items-center justify-center gap-1.5">
                <Image
                  src="/assets/icons/file-text.svg"
                  alt="file-text"
                  width={16}
                  height={16}
                />
                <h4 className="text-[#5F57FF] text-[14px] leading-[21.7px] font-medium">
                  Invoices
                </h4>
              </div>
              <h1 className="text-[#0D0D12] text-[30px] lg:text-[52px] lg:leading-[65px] tracking-[-0.01em] font-medium">
                Converting Invoices That Get You Paid Fast
              </h1>
              <p className="text-[#666D80] text-[16px] sm:text-[18px] sm:leading-[27.9px] font-normal">
                Hendrerit fames metus leo ut orci pretium. Sit vitae montes
                egestas montes mauris. Auctor vitae neque urna nam nunc
                pellentesque.
              </p>
              <button className="text-white mt-1 xl:mt-[26px] bg-[#5F57FF] shadow-custom-one w-full sm:w-[150px] h-[52px] sm:h-[40px] lg:h-[52px] rounded-[1000px] text-[16px] leading-[24.8px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                Get Started
              </button>
            </div>
            <Image
              src="/assets/converting-invoices.svg"
              alt="converting-invoices.svg"
              width={552}
              height={430}
              className="w-full"
              data-aos="fade-left"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
