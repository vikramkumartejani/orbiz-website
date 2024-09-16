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
    AOS.init({ duration: 1200 });
  }, []);
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-[1200px] w-full mx-auto px-5 py-10 md:py-20">
      <div className="text-center flex flex-col gap-4">
        <div
          className="shadow-custom border border-borderColor bg-white rounded-[1000px] mx-auto px-3 py-1 max-w-[81px] flex items-center gap-1.5"
          data-aos="fade-up"
        >
          <Image
            src="/assets/icons/file-text.svg"
            alt="file-text"
            width={13.33}
            height={13.33}
            className="-mt-0.5"
          />
          <h1 className="text-btn text-[13px] leading-[21.7px] font-medium font-custom">
            FAQs
          </h1>
        </div>
        <h1
          className="text-heading text-[40px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h1>
        <p
          className="text-secondaryText text-[16px] sm:text-[18px] sm:leading-[27px] font-normal max-w-[630px] mx-auto"
          data-aos="fade-up"
        >
          Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas
          montes mauris. Auctor vitae neque urna nam nunc pellentesque.
        </p>
      </div>

      {/* FAQ */}
      <div
        className="mt-8 md:mt-14 max-w-[901px] w-full mx-auto flex flex-col gap-4"
        data-aos="fade-up"
      >
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-borderColor rounded-[12px] shadow-custom px-3.5 py-6 md:p-6"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-heading text-[16px] md:text-[22px] md:leading-[31px] font-medium">
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
                  alt="icon"
                  width={24}
                  height={24}
                  className="min-h-[24px] min-w-[24px]"
                />
              </button>
            </div>
            <div
              className={`faq-content ${
                openIndex === index ? "open" : ""
              } transition-all duration-500 ease`}
            >
              <p className="mt-2 md:mt-4 text-secondaryText text-[14px] md:text-[17px] md:leading-[27px] font-normal">
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
