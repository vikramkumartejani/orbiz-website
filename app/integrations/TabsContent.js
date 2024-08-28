import Image from "next/image";

const contentData = {
    'All Categories': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Mailchimps', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Accounting': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Business & Payments': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Data & Analytics': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Ecommerce': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Finance': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Marketing & Sales': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Productivity': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Support': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
    'Text': [
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
        { name: 'Notion', description: 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.', icon: '/assets/icons/notion.svg' },
    ],
};

export default function TabsContent({ category }) {
    const content = contentData[category] || [];

    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {content.map((item) => (
                <div key={item.name} className='border border-[#DFE1E7] p-6 rounded-lg shadow-md bg-white hover:border-[#5F57FF] hover:shadow-custom transition duration-300 '>
                    <Image src={item.icon} className='text-2xl' width={48} height={48} />
                    <div className="mt-6">
                        <h2 className='text-[#0D0D12] text-[24px] leading-[31px] font-medium mb-2'>{item.name}</h2>
                        <p className='text-[#666D80] text-[18px] leading-[27px] font-normal'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
