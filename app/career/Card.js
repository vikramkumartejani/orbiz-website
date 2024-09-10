import Image from "next/image";

const CardData = [
  {
    name: "Notion",
    description:
      "Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.",
    icon: "/assets/icons/notion.svg",
  },
  {
    name: "Mailchimps",
    description:
      "Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.",
    icon: "/assets/icons/notion.svg",
  },
  {
    name: "Mailchimps",
    description:
      "Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.",
    icon: "/assets/icons/notion.svg",
  },
];

export default function Card() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[48px]">
      {CardData.map((item) => (
        <div key={item.name} data-aos="fade-up">
          <Image
            src={item.icon}
            alt="icon"
            className="text-2xl"
            width={48}
            height={48}
          />
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
