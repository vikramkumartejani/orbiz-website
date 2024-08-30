"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const faqItems = [
  {
    question: "How to Send one-time or recurring invoices to customers",
    answer:
      "Non ac commodo bibendum et ultrices turpis risus tempus viverra. Sit massa nunc donec eget quisque elit quam faucibus elementum. Amet libero malesuada aenean commodo amet enim. Mauris eget pulvinar vel aenean pellentesque amet elit. Amet egestas tempus venenatis nam. Pulvinar pretium morbi orci parturient nulla scelerisque et neque. Ultrices adipiscing sollicitudin ante fermentum ultricies.",
  },
  {
    question: "How to create and send an invoice using Orbiz Billing",
    answer:
      "Non ac commodo bibendum et ultrices turpis risus tempus viverra. Sit massa nunc donec eget quisque elit quam faucibus elementum. Amet libero malesuada aenean commodo amet enim. Mauris eget pulvinar vel aenean pellentesque amet elit. Amet egestas tempus venenatis nam. Pulvinar pretium morbi orci parturient nulla scelerisque et neque. Ultrices adipiscing sollicitudin ante fermentum ultricies.",
  },
  {
    question: "How to marking an Invoice Paid Out of Band",
    answer:
      "Non ac commodo bibendum et ultrices turpis risus tempus viverra. Sit massa nunc donec eget quisque elit quam faucibus elementum. Amet libero malesuada aenean commodo amet enim. Mauris eget pulvinar vel aenean pellentesque amet elit. Amet egestas tempus venenatis nam. Pulvinar pretium morbi orci parturient nulla scelerisque et neque. Ultrices adipiscing sollicitudin ante fermentum ultricies.",
  },
  {
    question: "How to calculating trial conversion rate in Billing",
    answer:
      "Non ac commodo bibendum et ultrices turpis risus tempus viverra. Sit massa nunc donec eget quisque elit quam faucibus elementum. Amet libero malesuada aenean commodo amet enim. Mauris eget pulvinar vel aenean pellentesque amet elit. Amet egestas tempus venenatis nam. Pulvinar pretium morbi orci parturient nulla scelerisque et neque. Ultrices adipiscing sollicitudin ante fermentum ultricies.",
  },
];
const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // You can adjust the duration or other settings here
  }, []);
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-[1200px] w-full mx-auto px-5 py-10 md:py-20">
      <div className="text-center flex flex-col gap-4">
        <div
          className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] mx-auto px-3 py-1 max-w-[81px] flex items-center gap-1.5"
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
            FAQs
          </h1>
        </div>
        <h1
          className="text-[#0D0D12] text-[40px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Frequently Asked Questions
        </h1>
        <p
          className="text-[#666D80] text-[16px] sm:text-[18px] sm:leading-[27px] font-normal max-w-[630px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas
          montes mauris. Auctor vitae neque urna nam nunc pellentesque.
        </p>
      </div>

      {/* FAQ */}
      <div
        className="mt-8 md:mt-14 max-w-[901px] w-full mx-auto flex flex-col gap-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#DFE1E7] rounded-[12px] shadow-custom px-3.5 py-6 md:p-6"
            data-aos="fade-up"
            data-aos-delay={`${400 + index * 100}`} // Staggered effect
          >
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-[#0D0D12] text-[16px] md:text-[22px] md:leading-[31px] font-medium">
                {item.question}
              </h1>
              <button
                onClick={() => handleToggle(index)}
                className="focus:outline-none"
              >
                <Image
                  src={`/assets/icons/${
                    openIndex === index ? "minus" : "plus"
                  }-circle.svg`}
                  width={24}
                  height={24}
                  className="min-h-[24px] min-w-[24px]"
                />
              </button>
            </div>
            <div
              className={`faq-content ${
                openIndex === index ? "open" : ""
              } transition-all duration-300 ease-out`}
            >
              <p className="mt-2 md:mt-4 text-[#666D80] text-[14px] md:text-[17px] md:leading-[27px] font-normal">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
