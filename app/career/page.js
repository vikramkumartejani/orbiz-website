import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import AboutOrbiz from "./AboutOrbiz";
import JobOpening from "./JobOpening";

const page = () => {
  return (
    <div className="w-full ">
      <div className="px-4">
        <Navbar />
      </div>
      <div className="">
        <div className="xl:px-0 px-4 relative flex flex-col items-start justify-between py-[48px] lg:py-[64px] bg-white max-w-[1200px] mx-auto">
          <div
            className="absolute inset-0 opacity-70 bg-bottom"
            style={{
              backgroundImage: "url('/assets/icons/background.png')",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex md:flex-row flex-col gap-[20px]">
            <div
              data-aos="fade-up"
              className="md:w-1/2 w-full flex flex-col justify-start gap-[16px]"
            >
              <div
                className="border border-borderColor shadow-custom-one rounded-[1000px] w-[107px] h-[30px] flex items-center justify-center gap-1.5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src="/assets/icons/briefcase.svg"
                  alt="briefcase"
                  width={16}
                  height={16}
                />
                <h4 className="text-btn text-[14px] leading-[21.7px] font-medium">
                  Careers
                </h4>
              </div>
              <h1 className="lg:text-[58px] text-[40px] font-[500] lg:leading-[60px] leading-[50px] text-heading py-[16px]">
                We Dream Big, in Life And at Work
              </h1>
              <p className="text-[18px] font-[400] md:leading-[27.9px] text-secondaryText pb-[38px] md:max-w-[499px]">
                Helping our customers reach their full potential starts with
                helping our team reach theirs.
              </p>
              <Link
                href="/career/#job-opening"
                className="flex items-center justify-center bg-btn shadow-custom px-[24px] py-[13.5px] w-fit rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]"
              >
                See Open Positions
              </Link>
            </div>
            <div
              data-aos="fade-left"
              className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-end"
            >
              <img
                className="md:h-[520px] w-full md:w-[470px] object-cover rounded-[15px]"
                src="/assets/career-img.svg"
              />
            </div>
          </div>
          <div className="relative flex md:flex-row flex-col items-center md:justify-between justify-center w-full md:mt-[56px] mt-[32px]">
            <Card />
          </div>
        </div>
      </div>
      <AboutOrbiz />
      <JobOpening />
    </div>
  );
};

export default page;
