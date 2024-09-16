"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import TabsContent from "../components/TabsContent";
import Dropdown from "../components/Dropdown";
import DropdownTabs from "../components/DropdownTabs";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Link from "next/link";

const Integrations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set your animation duration
      once: true, // Whether animation should happen only once
      // Additional options can be added here
    });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  return (
    <div className="w-full ">
      <div className="px-4">
        <Navbar />
      </div>
      <div className="max-w-[1200px] mx-auto w-full relative px-5">
        <div
          className="absolute inset-0 bg-cover opacity-70 bg-bottom"
          style={{ backgroundImage: "url('/assets/icons/background.png')" }}
        ></div>
        <div
          className="relative text-center flex flex-col gap-4 z-10 py-12 pb-12 sm:pb-20"
          data-aos="fade-up"
        >
          <div
            className="shadow-custom border border-borderColor bg-white rounded-[1000px] px-3 py-1 max-w-[118px] mx-auto flex items-center gap-1.5"
            data-aos="fade-up"
          >
            <Image
              src="/assets/icons/grid.svg"
              alt="grid"
              width={16}
              height={16}
            />
            <h1 className="text-btn text-[14px] leading-[21.7px] font-medium font-custom">
              Integrations
            </h1>
          </div>
          <h1
            className="text-heading text-[48px] sm:text-[68px] sm:leading-[85px] tracking-[-0.01em] font-medium max-w-[865px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Simplify Your Workflow with Orbiz Integrations
          </h1>
          <p
            className="text-secondaryText text-[18px] leading-[27.9px] font-normal max-w-[540px] mx-auto font-custom"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Connect Orbiz to your favorite tools to boost your productivity.
            Over 80 partner tools available. Focus on what matters.
          </p>
          <div
            className="mt-4 flex items-center justify-center gap-3 sm:flex-row flex-col"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="/#get-started"
              className="flex items-center justify-center sm:w-[150px] w-full h-[52px] scale-105 hover:scale-100 transition-all duration-300 rounded-[1000px] bg-btn shadow-custom text-white text-[16px] font-semibold leading-[24px]"
            >
              Get Started
            </Link>
            <Link
              href="/contact-us"
              className="flex items-center justify-center sm:w-[150px] w-full h-[52px] scale-105 hover:scale-100 transition-all duration-300 rounded-[1000px] bg-white border border-borderColor shadow-custom text-heading text-[16px] font-semibold leading-[24px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white max-w-[1200px] w-full mx-auto py-20 px-5">
        <div className="flex items-start md:gap-8 lg:gap-14 w-full">
          <div data-aos="fade-right">
            <Tabs onSelectCategory={handleCategoryChange} requestApp={true} />
          </div>

          <div className="w-full">
            <div
              className="min-w-full mb-8 sm:mb-10 flex items-center justify-between gap-3 sm:gap-2 md:flex-row flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="border border-borderColor shadow-custom w-full md:w-[300px] h-[40px] rounded-lg flex items-center gap-2 px-3">
                <Image
                  src="/assets/icons/search.svg"
                  alt="search"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none bg-transparent text-dropdownFilterText text-[16px] leading-[25px] font-normal"
                />
              </div>
              <div className="w-full md:w-fit flex items-center flex-col justify-between gap-3">
                <div className="w-full block md:hidden">
                  <DropdownTabs onSelectCategory={handleCategorySelection} />
                </div>
                <Dropdown options={options} placeholder="Latest Updated" />
              </div>
            </div>
            <div>
              <TabsContent category={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
