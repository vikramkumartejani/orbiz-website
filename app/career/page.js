import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const page = () => {
  return (
    <div className="w-full ">
      <div className="px-4">
        <Navbar />
      </div>
      <div className="px-4">
        <div className="relative flex flex-col items-start justify-between py-[48px] lg:py-[64px] bg-white max-w-[1200px] mx-auto">
          <div
            className="absolute inset-0 opacity-70 bg-bottom"
            style={{ backgroundImage: "url('/assets/icons/background.png')" }}
          ></div>
          <div className="flex md:flex-row flex-col xl:gap-[64px] lg:gap-[50px] gap-[32px]">
            <div
              data-aos="fade-up"
              className="md:w-1/2 w-full flex flex-col justify-start gap-[16px]"
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
                  Careers
                </h4>
              </div>
              <h1 className="text-[48px] font-[500] md:leading-[60px] text-[#0D0D12]">
                We Dream Big, in Life And at Work
              </h1>
              <p className="text-[18px] font-[400] md:leading-[27.9px] text-[#666D80]">
                Helping our customers reach their full potential starts with
                helping our team reach theirs.
              </p>
              <Link
                href="/career/#job-opening"
                className="flex items-center justify-center bg-[#5F57FF] shadow-custom px-[24px] py-[13.5px] w-fit rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]"
              >
                See Open Positions
              </Link>
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
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
