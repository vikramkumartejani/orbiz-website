import Image from "next/image";

const CardData = [
  {
    name: "Dream Big",
    description:
      "Get realtime updates when users start or end subscriptions, or have low funds in their wallet.",
    icon: "/assets/icons/award-icon.svg",
  },
  {
    name: "Inspire Customer Love",
    description:
      "Get realtime updates when users start or end subscriptions, or have low funds in their wallet.",
    icon: "/assets/icons/hearts.svg",
  },
  {
    name: "Growth Mindset",
    description:
      "Get realtime updates when users start or end subscriptions, or have low funds in their wallet.",
    icon: "/assets/icons/zap-fast.svg",
  },
];

export default function Card() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[48px]">
      {CardData.map((item) => (
        <div key={item.name} data-aos="fade-up">
          <div
            className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white border border-[#DFE1E7]"
            style={{
              boxShadow: `0px 1px 2px 0px rgba(13, 13, 18, 0.04), 
                          0px 1px 3px 0px rgba(13, 13, 18, 0.05)`,
            }}
          >
            <Image
              src={item.icon}
              alt="icon"
              className="text-2xl"
              width={20}
              height={20}
            />
          </div>
          <div className="mt-6">
            <h2 className="text-[#0D0D12] text-[24px] leading-[31px] font-medium mb-2">
              {item.name}
            </h2>
            <p className="text-[#666D80] text-[18px] leading-[27px] font-normal">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
