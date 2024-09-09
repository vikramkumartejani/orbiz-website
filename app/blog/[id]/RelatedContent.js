import React from "react";
import blogs from "@/public/assets/blogsData";
import Image from "next/image";

const RelatedContent = () => {
  return (
    <section className="">
      <h3
        data-aos="fade-left"
        className="text-[40px] font-[500] text-[#0D0D12]"
      >
        Related Content
      </h3>
      <div className="mt-10 md:mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {blogs.slice(0, 3).map((article) => (
          <div key={article.id} data-aos="fade-up">
            <Image
              src={article.imageSrc}
              alt={article.altText}
              width={365}
              height={200}
              className="w-full"
            />
            <div className="mt-4 md:mt-6 flex flex-col gap-2">
              <h4 className="text-[#666D80] text-[16px] leading-[25px] font-medium">
                {article.title}
              </h4>
              <h2 className="text-[#0D0D12] text-[24px] leading-[30px] font-medium">
                {article.headline}
              </h2>
              <div className="flex items-center gap-2">
                <h3 className="text-[#666D80] text-[16px] leading-[25px]">
                  {article.date}
                </h3>
                <Image
                  src="/assets/icons/dot.svg"
                  alt="dot"
                  width={6}
                  height={6}
                />
                <h3 className="text-[#666D80] text-[16px] leading-[25px]">
                  {article.author}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedContent;
