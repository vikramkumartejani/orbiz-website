import Image from "next/image";
import React from "react";
import blogs from "../../public/assets/blogsData";

const Blogs = () => {
  return (
    <div className="w-full sm:px-5">
      <div className="grid grid-cols-1 gap-[32px]">
        {blogs.map((article) => (
          <div
            className="flex md:flex-row flex-col xl:gap-[48px] lg:gap-[28px] gap-[18px] border-b border-b-[#DFE1E7] pb-[32px]"
            key={article.id}
            data-aos="fade-up"
          >
            <img
              src={article.imageSrc}
              alt={article.altText}
              className="lg:w-[320px] md:w-[220px] object-cover rounded-[15px] h-[200px]"
            />
            <div className="flex flex-col gap-2 justify-center">
              <h4 className="text-[#666D80] text-[16px] leading-[25px] font-medium">
                {article.title}
              </h4>
              <h2 className="text-[#0D0D12] text-[24px] leading-[30px] font-medium">
                {article.headline}
              </h2>
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="text-[#666D80] text-[16px] leading-[25px]">
                  {article.date}
                </h3>

                <span className="sm:hidden flex text-[#666D80] text-[16px]">
                  -
                </span>
                <Image
                  src="/assets/icons/dot.svg"
                  alt="dot"
                  width={6}
                  height={6}
                  className="sm:flex hidden"
                />
                <h3 className="text-[#666D80] text-[16px] leading-[25px]">
                  {article.author}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
