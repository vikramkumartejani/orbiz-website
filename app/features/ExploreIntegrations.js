import Image from "next/image";
import Link from "next/link";
import React from "react";

const MarqueeSliderOne = ({ images }) => (
    <div
        className="mt-10 md:mt-12 relative overflow-hidden max-w-[600px] mx-auto"
        data-aos="fade-up"
    >
        <div className="marquee-wrapper">
            <div className="marquee-items">
                {images.concat(images).map((image, index) => (
                    <div key={index} className="marquee-item">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const MarqueeSliderTwo = ({ images }) => (
    <div
        className="mt-10 md:mt-12 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
    >
        <div className="marquee-wrapper">
            <div className="marquee-items">
                {images.concat(images).map((image, index) => (
                    <div key={index} className="marquee-item">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const MarqueeSliderThree = ({ images }) => (
    <div
        className="mt-10 md:mt-12 relative overflow-hidden max-w-[600px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
    >
        <div className="marquee-wrapper">
            <div className="marquee-items">
                {images.concat(images).map((image, index) => (
                    <div key={index} className="marquee-item">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ExploreIntegrations = () => {
    const images1 = [
        { src: "/assets/icons/card.svg", alt: "AngelList" },
        { src: "/assets/icons/card.svg", alt: "Loom" },
        { src: "/assets/icons/card.svg", alt: "Retool" },
        { src: "/assets/icons/card.svg", alt: "Ramp" },
        { src: "/assets/icons/card.svg", alt: "Ramp" },
    ];
    const images2 = [
        { src: "/assets/icons/card.svg", alt: "AngelList" },
        { src: "/assets/icons/card.svg", alt: "Loom" },
        { src: "/assets/icons/card.svg", alt: "Retool" },
        { src: "/assets/icons/card.svg", alt: "Ramp" },
        { src: "/assets/icons/card.svg", alt: "Ramp" },
    ];
    const images3 = [
        { src: "/assets/icons/card.svg", alt: "AngelList" },
        { src: "/assets/icons/card.svg", alt: "Loom" },
        { src: "/assets/icons/card.svg", alt: "Retool" },
        { src: "/assets/icons/card.svg", alt: "Ramp" },
        { src: "/assets/icons/card.svg", alt: "Ramp" },
    ];

    return (
        <div className="w-full md:pt-14 py-10 md:pb-20 flex md:flex-col flex-col-reverse">
            <div className="w-full max-w-[768px] mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-custom-two w-full h-full z-20"></div>
                <div className="flex flex-col items-center gap-3">
                    <MarqueeSliderOne images={images1} />
                    <MarqueeSliderTwo images={images2} />
                    <MarqueeSliderThree images={images3} />
                </div>
            </div>

            <div className="md:mt-10 flex flex-col gap-4 items-center text-center px-5">
                <div
                    className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] mx-auto px-3 py-1 max-w-[118px] flex items-center gap-1.5"
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
                        Integrations
                    </h1>
                </div>
                <h1
                    className="text-[#0D0D12] text-[35px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium max-w-[668px]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Simplify Your Workflow with Orbiz Integrations
                </h1>
                <p
                    className="text-[#666D80] text-[16px] sm:text-[18px] sm:leading-[27.9px] font-normal"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Connect over 80+ partner tools available. Focus on what matters.
                </p>
                <Link href="/integrations" data-aos="fade-up" data-aos-delay="300">
                    <button className="mt-4 bg-[#5F57FF] px-6 w-full sm:w-[210px] h-[48px] rounded-[1000px] text-white text-[16px] leading-[24px] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#6860f7]">
                        Explore Integrations
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ExploreIntegrations;
