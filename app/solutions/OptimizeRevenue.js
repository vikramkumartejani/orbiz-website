import Image from "next/image";
import React from "react";

const OptimizeRevenue = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="bg-[#F8FAFB] py-14 md:py-20 rounded-[24px] border border-[#ECEFF3]">
        <div className="flex flex-col text-center gap-4 px-5">
          <div
            className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] mx-auto px-3 py-1 max-w-[113px] flex items-center gap-1.5"
            data-aos="fade-up"
          >
            <Image
              src="/assets/icons/file-text.svg"
              alt="file-text"
              width={13.33}
              height={13.33}
              className="-mt-0.5"
            />
            <h1 className="text-[#5F57FF] text-[13px] leading-[21.7px] font-medium font-custom">
              Why Orbiz
            </h1>
          </div>
          <h1
            className="max-w-[627px] mx-auto text-[#0D0D12] text-[40px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Optimize Revenue with The Power of The Platform
          </h1>
          <p
            className="text-[#666D80] text-[16px] sm:text-[16px] sm:leading-[27px] font-normal max-w-[530px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Easily create a quick payment link for your products or services,
            sell within clicks, and get paid quickly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1160px] mx-auto w-full px-4">
          <div
            className="bg-[#FFFFFF] rounded-[16px] p-4 py-6 md:p-8"
            data-aos="fade-up"          >
            <Image
              src="/assets/icons/instant-payouts.svg"
              alt="instant-payouts"
              width={52}
              height={52}
            />
            <h1 className="text-[#0D0D12] text-[24px] leading-[31px] font-medium mt-6 pb-3">
              Instant Payouts
            </h1>
            <p className="text-[#666D80] text-[16px] leading-[27px] font-normal">
              Id suspendisse sed neque sed ut. Eu nunc vel augue pretium cursus
              tempor eget. Vitae dolor elit fermentum lacus.
            </p>
          </div>
          <div
            className="bg-[#FFFFFF] rounded-[16px] p-4 py-6 md:p-8"
            data-aos="fade-up" 
          >
            <Image
              src="/assets/icons/free-transfer.svg"
              alt="free-transfer"
              width={52}
              height={52}
            />
            <h1 className="text-[#0D0D12] text-[24px] leading-[31px] font-medium mt-6 pb-3">
              Free Transfer
            </h1>
            <p className="text-[#666D80] text-[16px] leading-[27px] font-normal">
              Arcu libero consequat lectus turpis nec magna commodo quam in.
              Ornare at massa tortor etiam amet adipiscing.
            </p>
          </div>
          <div
            className="bg-[#FFFFFF] rounded-[16px] p-4 py-6 md:p-8"
            data-aos="fade-up" 
          >
            <Image
              src="/assets/icons/business.svg"
              alt="business"
              width={52}
              height={52}
            />
            <h1 className="text-[#0D0D12] text-[24px] leading-[31px] font-medium mt-6 pb-3">
              For Business of All Sizes
            </h1>
            <p className="text-[#666D80] text-[16px] leading-[27px] font-normal">
              Pharetra vel cursus consequat montes ut vulputate risus turpis.
              Pellentesque ante nisl ipsum nisl vitae. Metus placerat.
            </p>
          </div>
          <div
            className="bg-[#FFFFFF] rounded-[16px] p-4 py-6 md:p-8"
            data-aos="fade-up" 
          >
            <Image
              src="/assets/icons/access-to-capital.svg"
              alt="access-to-capital"
              width={52}
              height={52}
            />
            <h1 className="text-[#0D0D12] text-[24px] leading-[31px] font-medium mt-6 pb-3">
              Access to Capital
            </h1>
            <p className="text-[#666D80] text-[16px] leading-[27px] font-normal">
              Hendrerit diam dolor arcu potenti morbi vestibulum magna. Faucibus
              sed cursus pellentesque at enim leo. Convallis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizeRevenue;
