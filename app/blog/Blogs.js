import Image from "next/image";
import React from "react";
import blogs from "../../public/assets/blogsData";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="w-full sm:px-5">
      <div className="grid grid-cols-1 gap-[32px]">
        {blogs.map((blog) => (
          <div
            className="flex md:flex-row flex-col xl:gap-[48px] lg:gap-[28px] gap-[18px] border-b border-b-[#DFE1E7] pb-[32px]"
            key={blog.id}
            data-aos="fade-up"
          >
            <Link href={`/blog/${blog.id}`}>
              <img
                src={blog.imageSrc}
                alt={blog.altText}
                className="lg:w-[320px] md:w-[220px] object-cover rounded-[15px] h-[200px]"
              />
            </Link>
            <div className="flex flex-col gap-2 justify-center">
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
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="text-[#666D80] text-[16px] leading-[25px]">
                  {blog.date}
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
                  {blog.author}
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
