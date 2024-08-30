"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300, // Set your animation duration
      once: true, // Whether animation should happen only once
      // Additional options can be added here
    });
  }, []);

  return (
    <div className="w-full bg-[#0D0D12] h-full">
      <div className="text-white px-5 max-w-[1200px] w-full mx-auto py-12 md:py-20">
        <div
          className="w-full flex md:items-center justify-between md:flex-row flex-col gap-6 pb-12 border-b border-[#272835]"
          data-aos="fade-up"
        >
          <h2 className="text-[#F6F8FA] text-[40px] sm:text-[48px] leading-[54px] sm:leading-[60px] font-medium">
            Let’s Simply Finance.
          </h2>
          <div className="flex items-center md:flex-row flex-col justify-end gap-4 w-full md:w-1/2">
            <Link href="#" data-aos="fade-up" className="md:w-fit w-full">
              <button className="shadow-custom bg-[#5F57FF] w-full md:w-[150px] h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                Get Started
              </button>
            </Link>
            <Link href="/contact-su" className="md:w-fit w-full" data-aos="fade-up">
              <button className="shadow-custom bg-[#1A1B25] border border-[#272835] w-full md:w-[150px] h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold transition-all duration-300 transform hover:scale-105 hover:border-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="my-10 md:my-20 flex justify-between lg:flex-row flex-col w-full gap-10">
          <div className="xl:min-w-[400px]" data-aos="fade-right">
            <Image
              src="/assets/logo-footer.svg"
              alt="Logo"
              width={102}
              height={36}
            />
            <h3 className="mt-6 text-[#666D80] text-[16px] leading-[25.6px] font-normal">
              Orbiz Financial Technologies, LLC 2024
            </h3>
            <div className="mt-8 lg:mt-[96px] flex sm:flex-col flex-row sm:items-start items-center justify-between gap-4">
              <h3 className="sm:mb-4 text-[#666D80] text-[16px] leading-[25.6px] font-normal">
                Follow us on:
              </h3>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="w-[32px] h-[32px] bg-[#272835] rounded-full flex items-center justify-center"
                  data-aos="zoom-in"
                >
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="linkedin"
                    width={16}
                    height={16}
                  />
                </Link>
                <Link
                  href="/"
                  className="w-[32px] h-[32px] bg-[#272835] rounded-full flex items-center justify-center"
                  data-aos="zoom-in"
                >
                  <Image
                    src="/assets/icons/twitter.svg"
                    alt="twitter"
                    width={16}
                    height={16}
                  />
                </Link>
                <Link
                  href="/"
                  className="w-[32px] h-[32px] bg-[#272835] rounded-full flex items-center justify-center"
                  data-aos="zoom-in"
                >
                  <Image
                    src="/assets/icons/youtube.svg"
                    alt="youtube"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:flex lg:justify-around justify-between w-full">
            <ul
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-[#666D80] text-[16px] leading-[25.6px] font-medium mb-1">
                Features
              </h3>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Payment Link
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Recurring Billing
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Invoice Management
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Pricing
                </Link>
              </li>
            </ul>
            <ul
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-[#666D80] text-[16px] leading-[25.6px] font-medium mb-1">
                Solutions
              </h3>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Finance Automation
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Crypto
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Global Business
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Marketplaces
                </Link>
              </li>
            </ul>
            <ul
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-[#666D80] text-[16px] leading-[25.6px] font-medium mb-1">
                Resources
              </h3>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-[#666D80] text-[16px] leading-[25.6px] font-medium mb-1">
                About
              </h3>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-[#F6F8FA] text-[16px] leading-[25.6px] font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-14 justify-between sm:justify-center">
          <Link
            href="/"
            className="text-[#666D80] text-[14px] sm:text-[16px] sm:leading-[25.6px] font-normal"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-[#666D80] text-[14px] sm:text-[16px] sm:leading-[25.6px] font-normal"
          >
            Cookies
          </Link>
          <Link
            href="/"
            className="text-[#666D80] text-[14px] sm:text-[16px] sm:leading-[25.6px] font-normal"
          >
            Security
          </Link>
          <Link
            href="/"
            className="text-[#666D80] text-[14px] sm:text-[16px] sm:leading-[25.6px] font-normal"
          >
            Legal Document
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
