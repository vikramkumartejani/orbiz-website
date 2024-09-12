import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import ComparisonPlan from "./ComparisonPlan";
import { GoPlusCircle } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import FAQ from "../components/FAQ";
import PaymentDropdown from "./PaymentDropdown";
import InvoiceManagement from "./InvoiceManagement";
import Checkout from "./Checkout";
import RecurringBilling from "./RecurringBilling";

const Pricing = () => {
  return (
    <div className="w-full bg-[]">
      <div className="px-4 bg-[#0D0D12]">
        <Navbar />
      </div>
      <div className="bg-[#0D0D12] px-4">
        <div className="relative text-left flex lg:items-center justify-between flex-col gap-8 lg:gap-4 z-10 pt-12 md:pt-[56] mb-[130px]">
          <div
            className="absolute inset-0 opacity-70 bottom-0  bg-bottom z-[5]"
            style={{
              backgroundImage: "url('/assets/background-dark.png')",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="relatieve z-[6] max-w-[1200px] mx-auto flex flex-col items-center gap-4 flex-col">
            <div
              className="overflow-hidden shadow-custom border border-[#272835] bg-[#1A1B25] rounded-[1000px] px-[14px] py-1 flex items-center gap-[4px]"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Image
                src="/assets/icons/file-text-one.svg"
                alt="file-text"
                width={13.33}
                height={13.33}
                className="-mt-0.5"
              />
              <h1 className="text-white text-[14px] leading-[21.7px] font-medium font-custom">
                Pricing
              </h1>
            </div>
            <h1
              className="overflow-hidden text-white text-center text-[28px] sm:text-[34px] md:text-[40px] lg:text-[52px] lg:leading-[65px] md:leading-[55px] tracking-[-0.01em] font-medium "
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Simple and Flexible Pricing
            </h1>
            <p
              data-aos="fade-up"
              className="text-[18px] text-center font-[400] md:leading-[27.9px] text-[#666D80] pb-[64px] md:max-w-[666px]"
            >
              Vestibulum velit neque placerat accumsan aliquam lectus elementum
              sed. Ante dolor dignissim lectus in. Lorem risus nibh in sit
              elementum euismod.
            </p>
          </div>
          <div class="flex md:flex-row flex-col justify-center gap-[32px] relative z-[6] md:max-w-[1000px] mx-auto mb-[-130px]">
            <div
              data-aos="fade-right"
              class="bg-white rounded-[24px] lg:px-[32px] py-[32px] md:px-[24px] px-[14px] md:w-1/2 border border-[#DFE1E7]"
              style={{
                boxShadow: `0px 4px 8px -1px rgba(13, 13, 18, 0.05), 
                          0px 5px 10px -2px rgba(13, 13, 18, 0.10)`,
              }}
            >
              <h2 class="md:text-[24px] text-[18px] font-[500] text-[#5F57FF]">
                Starter
              </h2>
              <div class="flex md:gap-[10px] gap-[6px] mt-[12px] md:text-[52px] text-[40px] font-[500] md:leading-[65px] leading-[42px] tracking-[-1%]">
                $49{" "}
                <p class="md:text-[16px] text-[14px] text-[#666D80] font-[400] leading-[25.6px] mt-auto">
                  per month
                </p>
              </div>
              <p class="md:text-[16px] text-[15px] text-[#666D80] font-[400] leading-[25.6px] mt-1">
                Access a complete payments platform with simple, pay-as-you-go
                pricing.
              </p>
              <button class="bg-[#5F57FF] text-white rounded-full py-[13.5px] px-4 md:mt-[32px] mt-[20px] w-full">
                Start Free Trial
              </button>

              <div className="flex w-full min-h-[1px] border border-dashed border-t-[#DFE1E7]  md:my-[32px] my-[20px]"></div>

              <p class="text-[#0D0D12] font-[500]">This Plan Includes:</p>
              <ul class="mt-[16px] flex flex-col gap-[16px]">
                <li class="flex items-center gap-[12px] text-[#666D80]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <IoIosCheckmarkCircleOutline color="#40C4AA" size={20} />
                  </span>
                  Business Accounts
                </li>
                <li class="flex items-center gap-[12px] text-[#666D80]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <IoIosCheckmarkCircleOutline color="#40C4AA" size={20} />
                  </span>
                  Embeddable Checkout
                </li>
                <li class="flex items-center gap-[12px] text-[#666D80]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <IoIosCheckmarkCircleOutline color="#40C4AA" size={20} />
                  </span>
                  Custom UI Tool
                </li>
                <li class="flex items-center gap-[12px] text-[#666D80]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <IoIosCheckmarkCircleOutline color="#40C4AA" size={20} />
                  </span>
                  Invoice Support
                </li>
                <li class="flex items-center gap-[12px] text-[#666D80]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <IoIosCheckmarkCircleOutline color="#40C4AA" size={20} />
                  </span>
                  Global Support
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-left"
              class="rounded-[24px] lg:px-[32px] py-[32px] md:px-[24px] px-[14px] md:w-1/2 text-white border-2 border-[#322CA0]"
              style={{
                background: `linear-gradient(0deg, #5F57FF, #5F57FF), 
                             linear-gradient(217.75deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)`,
                boxShadow: `0px 4px 8px -1px rgba(13, 13, 18, 0.05), 
                            0px 5px 10px -2px rgba(13, 13, 18, 0.10)`,
              }}
            >
              <h2 class="md:text-[24px] text-[18px] font-[500]">Custom plan</h2>
              <div class="mt-[12px] md:text-[48px] text-[40px] font-[500] leading-[65px] tracking-[-1px] text-white">
                Get in Touch
              </div>
              <p class="text-[15px] text-[#E5E4FB] font-[400] leading-[25.6px] mt-1">
                Design a custom package—available for businesses with large
                payments volume or unique business models.
              </p>
              <button class="bg-white text-[#536DFE] rounded-full py-[13.5px] px-4 md:mt-[32px] mt-[20px] w-full">
                Contact Sales
              </button>

              <div className="flex w-full min-h-[1px] border border-dashed border-t-[#A19DF1] md:my-[32px] my-[20px]"></div>

              <p class="text-white font-[500]">Everything in Starter Plus:</p>
              <ul class="mt-[16px] flex flex-col gap-[16px]">
                <li class="flex items-center gap-[12px] text-[#E5E4FB]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <GoPlusCircle size={20} />
                  </span>
                  150+ Currencies
                </li>
                <li class="flex items-center gap-[12px] text-[#E5E4FB]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <GoPlusCircle size={20} />
                  </span>
                  Control Payout Timing
                </li>
                <li class="flex items-center gap-[12px] text-[#E5E4FB]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <GoPlusCircle size={20} />
                  </span>
                  Unified Payouts
                </li>
                <li class="flex items-center gap-[12px] text-[#E5E4FB]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <GoPlusCircle size={20} />
                  </span>
                  Subsidiary Support
                </li>
                <li class="flex items-center gap-[12px] text-[#E5E4FB]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <GoPlusCircle size={20} />
                  </span>
                  Secure Dashboard Access
                </li>
                <li class="flex items-center gap-[12px] text-[#E5E4FB]">
                  <span className="min-w-[20px] min-h-[20px]">
                    <GoPlusCircle size={20} />
                  </span>
                  Developer Dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ComparisonPlan />
      </div>
      <div className="px-4 pt-[24px] overflow-hidden">
        <InvoiceManagement />
        <PaymentDropdown />
        <Checkout />
        <RecurringBilling />
      </div>
      <FAQ />
    </div>
  );
};

export default Pricing;
