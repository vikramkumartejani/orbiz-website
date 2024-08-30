import Image from 'next/image'
import React from 'react'

const Blogs = () => {
    const articles = [
        {
            id: 1,
            imageSrc: '/assets/finance.svg',
            altText: 'finance',
            title: 'Finance',
            headline: 'Finance AI trends: filtering the hype to find the value',
            date: 'January 11, 2024',
            author: 'Mileana Vanessa',
        },
        {
            id: 2,
            imageSrc: '/assets/marketing-sales.svg',
            altText: 'finance',
            title: 'Finance',
            headline: 'Finance AI trends: filtering the hype to find the value',
            date: 'January 11, 2024',
            author: 'Mileana Vanessa',
        },
        {
            id: 3,
            imageSrc: '/assets/finance-one.svg',
            altText: 'finance',
            title: 'Finance',
            headline: 'Finance AI trends: filtering the hype to find the value',
            date: 'January 11, 2024',
            author: 'Mileana Vanessa',
        },
    ];

    return (
        <div className='w-full px-5'>
            <div className='py-10 md:py-20 max-w-[1160px] w-full mx-auto'>
                <div className="flex flex-col text-center gap-4" data-aos="fade-up">
                    <div className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] mx-auto px-3 py-1 max-w-[82px] flex items-center gap-1.5" data-aos="fade-up">
                        <Image
                            src="/assets/icons/file-text.svg"
                            alt="file-text"
                            width={13.33}
                            height={13.33}
                            className="-mt-0.5"
                        />
                        <h1 className="text-[#5F57FF] text-[13px] leading-[21.7px] font-medium font-custom">Blogs</h1>
                    </div>
                    <h1 className="max-w-[621px] mx-auto text-[#0D0D12] text-[40px] sm:text-[52px] sm:leading-[65px] tracking-[-0.01em] font-medium" data-aos="fade-up">Our Articles For Company Creators</h1>
                    <p className="text-[#666D80] text-[16px] sm:text-[16px] sm:leading-[27px] font-normal" data-aos="fade-up">Here are all our essential tips for getting your business project off the ground.</p>
                </div>

                <div className='mt-10 md:mt-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8'>
                    {articles.map((article) => (
                        <div key={article.id} data-aos="fade-up">
                            <Image src={article.imageSrc} alt={article.altText} width={365} height={200} className='w-full' />
                            <div className='mt-4 md:mt-6 flex flex-col gap-2'>
                                <h4 className='text-[#666D80] text-[16px] leading-[25px] font-medium'>{article.title}</h4>
                                <h2 className='text-[#0D0D12] text-[24px] leading-[30px] font-medium'>{article.headline}</h2>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-[#666D80] text-[16px] leading-[25px]'>{article.date}</h3>
                                    <Image src='/assets/icons/dot.svg' alt='dot' width={6} height={6} />
                                    <h3 className='text-[#666D80] text-[16px] leading-[25px]'>{article.author}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs