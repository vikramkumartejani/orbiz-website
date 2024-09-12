import React from "react";
import Image from "next/image";
import { IoArrowUpOutline } from "react-icons/io5";
import Link from "next/link";

const JobOpening = () => {
  return (
    <section className="px-4 md:py-[88px] py-[50px]">
      <div className="flex flex-col gap-[56px] max-w-[1200px] mx-auto">
        <div
          data-aos="fade-up"
          className="w-full flex flex-col justify-start gap-[16px]"
        >
          <div
            className="border border-[#DFE1E7] shadow-custom-one rounded-[1000px] w-[107px] h-[30px] flex items-center justify-center gap-1.5"
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
              Our Jobs
            </h4>
          </div>
          <h1 className="lg:text-[48px] text-[38px] font-[500] lg:leading-[60px] leading-[50px] text-[#0D0D12] py-[16px]">
            Jobs Opening
          </h1>
          <p className="text-[18px] font-[400] md:leading-[27.9px] text-[#666D80] md:max-w-[601px]">
            Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas
            montes mauris. Auctor vitae neque urna nam nunc pellentesque.
          </p>
        </div>
        <div className="">
          <Link
            href="/career"
            className="gap-6 flex justify-between w-full items-center border-y border-y-[#DFE1E7] py-[24px]"
          >
            <span className="flex flex-col gap-[12px]">
              <h3 className="md:text-[24px] text-[22px] font-[500] leading-[31.2px] text-[#0D0D12]">
                Product Designer
              </h3>
              <p className="text-[#666D80] text-[16px] font-[400] leading-[25.6px]">
                Full-time <span className="text-[#DFE1E7]">•</span> Remote
              </p>
            </span>
            <span className="rotate-[45deg] min-w-[24px] min-h-[24px]">
              <IoArrowUpOutline color="#818898" size={24} />
            </span>
          </Link>
          <Link
            href="/career"
            className="gap-6 flex justify-between w-full items-center border-y border-y-[#DFE1E7] py-[24px]"
          >
            <span className="flex flex-col gap-[12px]">
              <h3 className="md:text-[24px] text-[22px] font-[500] leading-[31.2px] text-[#0D0D12]">
                Backend Engineer
              </h3>
              <p className="text-[#666D80] text-[16px] font-[400] leading-[25.6px]">
                Full-time <span className="text-[#DFE1E7]">•</span> Remote
              </p>
            </span>
            <span className="rotate-[45deg] min-w-[24px] min-h-[24px]">
              <IoArrowUpOutline color="#818898" size={24} />
            </span>
          </Link>
          <Link
            href="/career"
            className="gap-6 flex justify-between w-full items-center border-y border-y-[#DFE1E7] py-[24px]"
          >
            <span className="flex flex-col gap-[12px]">
              <h3 className="md:text-[24px] text-[22px] font-[500] leading-[31.2px] text-[#0D0D12]">
                Data Analyst
              </h3>
              <p className="text-[#666D80] text-[16px] font-[400] leading-[25.6px]">
                Full-time <span className="text-[#DFE1E7]">•</span> Remote
              </p>
            </span>
            <span className="rotate-[45deg] min-w-[24px] min-h-[24px]">
              <IoArrowUpOutline color="#818898" size={24} />
            </span>
          </Link>
        </div>
        <p className="text-[18px] font-[400] leading-[27.9px] text-[#666D80]">
          Don’s see opportunity that suits you?{" "}
          <a href="#" className="underline text-[#5F57FF]">
            {" "}
            Get notified when new roles added
          </a>
        </p>
      </div>
    </section>
  );
};

export default JobOpening;
