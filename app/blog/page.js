"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import Dropdown from "../components/Dropdown";
import DropdownTabs from "../components/DropdownTabs";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Blogs from "./Blogs";

const Blog = () => {
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
      <div className="max-w-[1200px] mx-auto w-full relative px-5 md:py-[56px] py-[40px]">
        <h1 className="text-inter md:text-[48px] text-[38px] md:leading-[60px] font-[500] text-[#0D0D12]">
          The Orbiz Blog
        </h1>
      </div>
      <div className="bg-white max-w-[1200px] w-full mx-auto pb-[112px] px-5">
        <div className="flex items-start md:gap-8 lg:gap-14 w-full">
          <div data-aos="fade-right">
            <Tabs onSelectCategory={handleCategoryChange} requestApp={false} />
          </div>

          <div className="w-full">
            <div
              className="min-w-full mb-8 sm:mb-10 flex items-center justify-between gap-3 sm:gap-2 md:flex-row flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="border border-[#DFE1E7] shadow-custom flex-grow w-full md:w-[300px] h-[40px] rounded-lg flex items-center gap-2 px-3">
                <Image
                  src="/assets/icons/search.svg"
                  alt="search"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none bg-transparent text-[#818898] text-[16px] leading-[25px] font-normal w-full flex-grow"
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
              <Blogs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
