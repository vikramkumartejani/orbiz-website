import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <div className="border border-[#ECEFF3] rounded-[24px] bg-white shadow-custom px-4 py-6 sm:p-6 lg:p-8">
      <h1 className="text-[#0D0D12] text-[32px] leading-[43px] font-medium mb-6">
        Speak to us
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[#0D0D12] text-[14px] leading-[21.7px] font-medium">
            Full name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="border border-[#DFE1E7] bg-transparent w-full h-[48px] shadow-custom rounded-[10px] outline-none text-[#818898] text-[16px] leading-[25px] font-normal px-3"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[#0D0D12] text-[14px] leading-[21.7px] font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@mail.com"
            className="border border-[#DFE1E7] bg-transparent w-full h-[48px] shadow-custom rounded-[10px] outline-none text-[#818898] text-[16px] leading-[25px] font-normal px-3"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[#0D0D12] text-[14px] leading-[21.7px] font-medium">
            Subject
          </label>
          <input
            type="text"
            placeholder="Create a subject..."
            className="border border-[#DFE1E7] bg-transparent w-full h-[48px] shadow-custom rounded-[10px] outline-none text-[#818898] text-[16px] leading-[25px] font-normal px-3"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[#0D0D12] text-[14px] leading-[21.7px] font-medium">
            Message
          </label>
          <textarea className="border border-[#DFE1E7] bg-transparent w-full h-[150px] resize-none shadow-custom rounded-[10px] outline-none text-[#818898] text-[16px] leading-[25px] font-normal p-3"></textarea>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p className="text-[14px] text-[#666D80] leading-[21.7px] font-normal font-custom">
            For information about how Orbiz handles personal data, see our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#5F57FF] underline underline-offset-4"
            >
              {" "}
              Privacy Policy.
            </Link>
          </p>
        </div>
        <button className="mt-4 bg-[#5F57FF] h-[52px] w-full rounded-[1000px] shadow-custom-one text-[16px] font-custom font-semibold leading-[24.6px] transition-all duration-300 transform hover:scale-[101%] hover:shadow-lg hover:bg-[#6860f7]">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
