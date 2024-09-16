import Image from "next/image";
import React from "react";

const OurCustomers = () => {
  // Testimonial data stored in an array
  const testimonials = [
    {
      quote:
        "For a freelancer, traditional banks are really archaic. With Earney, I know exactly how much I pay for every service I need.",
      name: "Soós Annamária",
      role: "Operations and Supply Chain Management",
      imageSrc: "/assets/profile.png",
    },
    // Duplicate or add more testimonials if necessary
    {
      quote:
        "For a freelancer, traditional banks are really archaic. With Earney, I know exactly how much I pay for every service I need.",
      name: "Soós Annamária",
      role: "Operations and Supply Chain Management",
      imageSrc: "/assets/profile.png",
    },
    {
      quote:
        "For a freelancer, traditional banks are really archaic. With Earney, I know exactly how much I pay for every service I need.",
      name: "Soós Annamária",
      role: "Operations and Supply Chain Management",
      imageSrc: "/assets/profile.png",
    },
    {
      quote:
        "For a freelancer, traditional banks are really archaic. With Earney, I know exactly how much I pay for every service I need.",
      name: "Soós Annamária",
      role: "Operations and Supply Chain Management",
      imageSrc: "/assets/profile.png",
    },
    {
      quote:
        "For a freelancer, traditional banks are really archaic. With Earney, I know exactly how much I pay for every service I need.",
      name: "Soós Annamária",
      role: "Operations and Supply Chain Management",
      imageSrc: "/assets/profile.png",
    },
    {
      quote:
        "For a freelancer, traditional banks are really archaic. With Earney, I know exactly how much I pay for every service I need.",
      name: "Soós Annamária",
      role: "Operations and Supply Chain Management",
      imageSrc: "/assets/profile.png",
    },
  ];

  return (
    <div className="px-5 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto py-12 md:py-[88px]">
        <div className="flex lg:items-end lg:flex-row flex-col justify-between gap-4 w-full">
          <div data-aos="fade-right">
            <div className="border border-borderColor shadow-custom-one rounded-[1000px] w-[141px] h-[30px] flex items-center justify-center gap-1.5">
              <Image
                src="/assets/icons/briefcase.svg"
                alt="briefcase"
                width={16}
                height={16}
              />
              <h4 className="text-btn text-[14px] leading-[21.7px] font-medium">
                Our Customers
              </h4>
            </div>
            <h1 className="mt-4 max-w-[369px] text-heading text-[52px] leading-[65px] tracking-[-0.01em] font-medium">
              You’re in a Good Company
            </h1>
          </div>
          <div
            className="flex flex-col gap-4 max-w-[550px]"
            data-aos="fade-left"
          >
            <p className="text-secondaryText text-[16px] leading-[27.9px] font-normal">
              Hendrerit fames metus leo ut orci pretium. Sit vitae montes
              egestas montes mauris. Auctor vitae neque urna nam nunc
              pellentesque.
            </p>
            <p className="text-secondaryText text-[16px] leading-[27.9px] font-normal">
              Hendrerit fames metus leo ut orci pretium. Sit vitae montes
              egestas montes mauris. Auctor vitae neque urna nam nunc
              pellentesque.
            </p>
          </div>
        </div>

        <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
          {/* Mapping over the testimonial array */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-whitish border border-[#ECEFF3] rounded-[16px] p-5 md:p-4 xl:p-6"
              data-aos="fade-up"
            >
              <p className="text-heading text-[19px] leading-[28px] font-medium mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={testimonial.imageSrc}
                  alt="profile"
                  width={40}
                  height={40}
                />
                <div>
                  <h1 className="text-heading text-[15px] leading-[25.6px] font-medium">
                    {testimonial.name}
                  </h1>
                  <h3 className="text-secondaryText text-[14px] leading-[21.7px] font-normal">
                    {testimonial.role}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
