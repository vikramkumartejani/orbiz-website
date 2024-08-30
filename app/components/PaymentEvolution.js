import Image from "next/image";
import React from "react";

const PaymentEvolution = () => {
  return (
    <div className="w-full px-2 md:px-5 pb-5 overflow-hidden">
      <div
        className="w-full border border-[#DFE1E7] rounded-[24px] shadow-custom-one px-4"
        data-aos="fade-up"
      >
        <div className="max-w-[1200px] w-full mx-auto py-12 md:py-[88px]">
          <div className="w-full max-w-[550px] mx-auto text-center">
            <div
              className="border border-[#DFE1E7] shadow-custom-one rounded-[1000px] w-[107px] h-[30px] mx-auto flex items-center justify-center gap-1.5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/assets/icons/briefcase.svg"
                alt="briefcase"
                width={16}
                height={16}
              />
              <h4 className="text-[#5F57FF] text-[14px] leading-[21.7px] font-medium">
                Use Case
              </h4>
            </div>
            <h1
              className="text-[#0D0D12] text-[35px] sm:text-[52px] sm:leading-[65px] font-medium tracking-[-0.01em] mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Payment Evolution for Any Industry
            </h1>
            <p
              className="text-[#666D80] text-[18px] sm:leading-[27.9px] font-normal mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Easily create a quick payment link for your products or services,
              sell within clicks, and get paid quickly.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="400">
              <Image
                src="/assets/saas-solution.svg"
                alt="saas-solution"
                width={378}
                height={200}
                className="mb-6 w-full"
              />
              <h2 className="text-[#0D0D12] text-[20px] md:text-[24px] leading-[31.4px] font-medium mb-2">
                SaaS Solution
              </h2>
              <p className="text-[#666D80] text-[16px] md:leading-[27.9px] font-normal">
                Get the only complete financial stack designed to help start and
                scale your business.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <Image
                src="/assets/e-commerce.svg"
                alt="e-commerce"
                width={378}
                height={200}
                className="mb-6 w-full"
              />
              <h2 className="text-[#0D0D12] text-[20px] md:text-[24px] leading-[31.4px] font-medium mb-2">
                E-commerce
              </h2>
              <p className="text-[#666D80] text-[16px] md:leading-[27.9px] font-normal">
                Spend smarter worldwide with AI-powered budgets, expenses,
                payments, and travel.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <Image
                src="/assets/online-business.svg"
                alt="online-business"
                width={378}
                height={200}
                className="mb-6 w-full"
              />
              <h2 className="text-[#0D0D12] text-[20px] md:text-[24px] leading-[31.4px] font-medium mb-2">
                Online Business
              </h2>
              <p className="text-[#666D80] text-[16px] md:leading-[27.9px] font-normal">
                Simplify global travel and expenses with automation that makes
                compliance easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentEvolution;
