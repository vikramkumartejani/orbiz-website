"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Form from "./Form";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set your animation duration
      once: true, // Whether animation should happen only once
      // Additional options can be added here
    });
  }, []);
  return (
    <div className="bg-[#0D0D12] w-full px-5 overflow-x-hidden">
      <Navbar />
      <div className="max-w-[1200px] mx-auto w-full py-10 md:py-14 text-white">
        <div className="w-full flex items-start justify-between md:flex-row flex-col gap-8 lg:gap-14">
          <div
            className="w-full md:max-w-[504px] py-6 lg:py-8"
            data-aos="fade-right"
          >
            <h1 className="text-[#F8FAFB] text-[40px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium">
              Let’s Talk
            </h1>
            <p className="text-[#666D80] text-[17.5px] leading-[27.9px] font-normal font-custom mt-4">
              Vestibulum velit neque placerat accumsan aliquam lectus elementum
              sed. Ante dolor dignissim lectus in. Lorem risus nibh in sit
              elementum euismod.
            </p>
            <div className="mt-6 md:mt-14 flex gap-5 flex-col">
              <div className="flex items-center gap-3" data-aos="fade-up">
                <Image
                  src="/assets/icons/email.svg"
                  alt="email"
                  width={32}
                  height={32}
                />
                <h2 className="text-[#F8FAFB] text-[16px] sm:text-[16px] leading-[25px] font-medium">
                  orbitzfinancial@mail.com
                </h2>
              </div>
              <div
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src="/assets/icons/phone.svg"
                  alt="phone"
                  width={32}
                  height={32}
                />
                <h2 className="text-[#F8FAFB] text-[16px] sm:text-[16px] leading-[25px] font-medium">
                  +1 3245 8907
                </h2>
              </div>
              <div
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <h2 className="text-[#F8FAFB] text-[16px] sm:text-[18px] leading-[25px] font-medium">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[600px]" data-aos="fade-left">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
