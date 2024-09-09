import Image from "next/image";
import React from "react";
import blogs from "@/public/assets/blogsData";

const Blogs = () => {
  return (
    <div className="w-full px-5">
      <div className="py-10 md:py-20 max-w-[1160px] w-full mx-auto">
        <div className="flex flex-col text-center gap-4" data-aos="fade-up">
          <div
            className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] mx-auto px-3 py-1 max-w-[82px] flex items-center gap-1.5"
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
              Blogs
            </h1>
          </div>
          <h1
            className="max-w-[621px] mx-auto text-[#0D0D12] text-[40px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
            data-aos="fade-up"
          >
            Our Articles For Company Creators
          </h1>
          <p
            className="text-[#666D80] text-[16px] sm:text-[16px] sm:leading-[27px] font-normal"
            data-aos="fade-up"
          >
            Here are all our essential tips for getting your business project
            off the ground.
          </p>
        </div>

        <div className="mt-10 md:mt-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog.id} data-aos="fade-up">
              <Link href={`/blog/${blog.id}`}>
                <Image
                  src={blog.imageSrc}
                  alt={blog.altText}
                  width={365}
                  height={200}
                  className="w-full"
                />
              </Link>
              <div className="mt-4 md:mt-6 flex flex-col gap-2">
                <Link href={`/blog/${blog.id}`}>
                  <h4 className="text-[#666D80] text-[16px] leading-[25px] font-medium">
                    {blog.title}
                  </h4>
                </Link>
                <Link href={`/blog/${blog.id}`}>
                  <h2 className="text-[#0D0D12] text-[24px] leading-[30px] font-medium">
                    {blog.headline}
                  </h2>
                </Link>
                <div className="flex items-center gap-2">
                  <h3 className="text-[#666D80] text-[16px] leading-[25px]">
                    {blog.date}
                  </h3>
                  <Image
                    src="/assets/icons/dot.svg"
                    alt="dot"
                    width={6}
                    height={6}
                  />
                  <h3 className="text-[#666D80] text-[16px] leading-[25px]">
                    {blog.author}
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

export default Blogs;
