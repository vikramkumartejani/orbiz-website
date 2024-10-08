"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const cardsData = [
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accenture’s financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accentures financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accentures financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accentures financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accentures financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accentures financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accentures financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
  {
    rating: "4.8",
    review:
      "“Payments are the main interaction point between Accentures financial services clients and their customers, and are core to our relationships beyond that sector too.”",
    profileImg: "/assets/icons/profile-rating.png",
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
  },
];

const OurCustomer = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      if (showAll) {
        setVisibleCards(cardsData);
      } else {
        const width = window.innerWidth;
        if (width < 640) {
          setVisibleCards(cardsData.slice(0, 2)); // Show 2 cards for screens less than 640px
        } else if (width < 1024) {
          setVisibleCards(cardsData.slice(0, 4)); // Show 4 cards for screens less than 1024px
        } else {
          setVisibleCards(cardsData.slice(0, 6)); // Show 6 cards for screens 1024px and above
        }
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [showAll]);
  return (
    <div className="bg-whitish w-full py-20 px-5">
      <div className="w-full">
        <div className="flex flex-col text-center gap-4">
          <div
            className="shadow-custom border border-borderColor bg-white rounded-[1000px] mx-auto px-3 py-1 max-w-[141px] flex items-center gap-1.5"
            data-aos="fade-up"
          >
            <Image
              src="/assets/icons/users.svg"
              alt="file-text"
              width={16}
              height={16}
              className="-mt-0.5"
            />
            <h1 className="text-btn text-[13px] leading-[21.7px] font-medium font-custom">
              Our Customers
            </h1>
          </div>
          <h1
            className="max-w-[607px] mx-auto text-heading text-[40px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium"
            data-aos="fade-up"
          >
            See What Our Customers Are Saying
          </h1>
          <p
            className="text-secondaryText text-[16px] sm:text-[18px] sm:leading-[27px] font-normal max-w-[630px] mx-auto"
            data-aos="fade-up"
          >
            Heres what some of our customers say about our platform.
          </p>
        </div>
        <div className="mt-14 relative">
          <div className="absolute bottom-0 h-[300px] w-full bg-custom-bg-one z-[20]"></div>
          <div className="w-full max-w-[1160px] mx-auto">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCards.map((card, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="bg-white px-3.5 py-5 lg:p-6 rounded-[16px]"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/icons/star.svg"
                      alt="star"
                      width={108}
                      height={20}
                    />
                    <span className="text-secondaryText text-[16px] leading-[25px] font-medium mt-1">
                      {card.rating}
                    </span>
                  </div>
                  <p className="mt-4 text-heading text-[18px] font-medium leading-[27px]">
                    {card.review}
                  </p>
                  <div className="mt-10 flex items-center gap-3">
                    <Image
                      src={card.profileImg}
                      alt="profile"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h3 className="text-[#0E1012] font-medium text-[16px] leading-[25px]">
                        {card.name}
                      </h3>
                      <p className="text-[#566171] text-[14px] font-normal leading-[21px]">
                        {card.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full sm:w-fit absolute z-40 left-1/2 -bottom-5 transform -translate-x-1/2">
              <div data-aos="fade-up">
                {!showAll ? (
                  <button
                    onClick={handleShowAll}
                    className="bg-btn shadow-custom-one sm:w-fit w-full px-5 h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition transform hover:shadow-lg  duration-300  hover:scale-105  hover:bg-[#6860f7]"
                  >
                    See All Customer Stories
                  </button>
                ) : (
                  <button
                    onClick={handleShowLess}
                    className="bg-btn shadow-custom-one sm:w-fit w-full px-5 h-[52px] rounded-[1000px] text-[16px] leading-[24px] font-semibold text-white transition transform hover:shadow-lg duration-300  hover:scale-105 hover:bg-[#6860f7]"
                  >
                    See Less Customer Stories
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
