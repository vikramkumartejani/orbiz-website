import { HiOutlineBolt } from "react-icons/hi2";
import React from "react";

const AboutOrbiz = () => {
  return (
    <section className="bg-[#0D0D12] px-4">
      <div className="max-w-[1200px] mx-auto relative text-left flex lg:items-center justify-between flex-col gap-8 lg:gap-4 z-10 py-12 md:py-[88px]">
        <div className="flex items-start gap-4 flex-col">
          <div
            className="shadow-custom border border-[#272835] bg-[#1A1B25] rounded-[1000px] px-[14px] py-1 flex items-center gap-[4px]"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <HiOutlineBolt color="white" />
            <h1 className="text-white text-[14px] leading-[21.7px] font-medium font-custom">
              Orbiz
            </h1>
          </div>
          <h1
            className="text-white text-[28px] sm:text-[34px] md:text-[40px] lg:text-[52px] lg:leading-[65px] md:leading-[55px] tracking-[-0.01em] font-medium "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Orbiz empowers every employee to reach their full potential,
            regardless of race, gender, ethnicity, sexual orientation, or
            background.
          </h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 items-start justify-between md:pt-[80px] pt-[30px] md:gap-6 gap-[40px]">
          <div class="flex flex-col rounded-[16px]">
            <div className="md:h-[340px] sm:h-[300px]">
              <img
                src="/assets/about-orbiz-img1.png"
                alt="Image 1"
                class="rounded-[16px] w-full h-full object-cover"
              />
            </div>
            <p class="text-[18px] text-[#666D80] leading-[27.9px] font-[400] md:mt-[24px] mt-[15px]">
              Create a cohesive culture where backgrounds and experiences are
              better understood and welcomed.
            </p>
          </div>

          <div class="flex flex-col rounded-[16px]">
            <div className="lg:h-[550px] h-[450px] md:mt-[-32px]">
              <img
                src="/assets/about-orbiz-img2.png"
                alt="Image 2"
                class="rounded-[16px] w-full h-full object-cover"
              />
            </div>
            <p class="text-[18px] text-[#666D80] leading-[27.9px] font-[400] md:mt-[24px] mt-[15px]">
              We are increasing awareness of differing experiences through
              Cultural Heritage Months, company events, and comprehensive
              diversity training.
            </p>
          </div>

          <div class="flex flex-col rounded-[16px]">
            <div className="md:h-[340px] sm:h-[300px]">
              <img
                src="/assets/about-orbiz-img3.png"
                alt="Image 3"
                class="rounded-[16px] w-full h-full object-cover"
              />
            </div>
            <p class="text-[18px] text-[#666D80] leading-[27.9px] font-[400] md:mt-[24px] mt-[15px]">
              Simplify global travel and expenses with automation that makes
              compliance easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrbiz;
