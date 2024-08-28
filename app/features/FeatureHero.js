import Image from 'next/image'
import React from 'react'

const FeatureHero = () => {
    return (
        <div className='w-full'>
            <div className="mx-auto w-full relative">
                <div className="absolute inset-0 bg-cover opacity-70 bg-bottom" style={{ backgroundImage: "url('/assets/icons/background.png')" }}></div>
                <div className="max-w-[1200px] mx-auto relative text-left flex lg:items-center justify-between lg:flex-row flex-col gap-8 lg:gap-4 px-5 z-10 py-12 md:py-20">
                    <div className='flex items-start gap-4 flex-col'>
                        <div className="shadow-custom border border-[#272835] bg-[#1A1B25] rounded-[1000px] px-3 py-1 max-w-[175px] flex items-center gap-1.5">
                            <Image src="/assets/icons/file-text-one.svg" alt="file-text" width={13.33} height={13.33} className='-mt-0.5' />
                            <h1 className="text-white text-[13px] leading-[21.7px] font-medium font-custom">Invoice Management</h1>
                        </div>
                        <h1 className="text-white text-[48px] sm:text-[66px] sm:leading-[85px] tracking-[-0.01em] font-medium lg:max-w-[702px]">Easily Manage Your Invoice with Orbiz</h1>
                        <p className="text-[#666D80] text-[18px] leading-[27.9px] font-normal lg:max-w-[540px] font-custom">Get paid faster with Orbiz invoicing tool and save precious time on your supplier invoice management.</p>
                        <div className="w-full mt-4 flex items-center gap-3 sm:flex-row flex-col">
                            <button className="sm:w-[150px] w-full h-[52px] rounded-[1000px] bg-[#5F57FF] shadow-custom text-white text-[16px] font-semibold leading-[24px]">Get Started</button>
                            <button className="sm:w-[150px] w-full h-[52px] rounded-[1000px] bg-[#1A1B25] border border-[#272835] shadow-custom text-white text-[16px] font-semibold leading-[24px]">Contact Us</button>
                        </div>
                    </div>
                    <div className='bg-custom-bg px-12 py-10 rounded-[20px] max-w-[450px] mx-auto'>
                        <Image src='/assets/feature-hero.svg' alt='feature-hero' width={354} height={404} />
                    </div>
                </div>
                <div className='w-full max-w-[1200px] mx-auto pb-12 md:pb-20 px-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='flex flex-col items-start text-[#F8FAFB]'>
                            <Image src='/assets/icons/collect-more-revenue.svg' alt='collect-more-revenue' width={44} height={44} />
                            <h3 className='mt-5 text-[18px] leading-[27px] font-medium'>Collect More Revenue</h3>
                            <p className='mt-2 text-[#666D80] text-[16px] leading-[25px] font-normal'>Get realtime updates when users start or end subscriptions, or have low funds in their wallet.</p>
                        </div>
                        <div className='flex flex-col items-start text-[#F8FAFB]'>
                            <Image src='/assets/icons/collect-more-revenue.svg' alt='collect-more-revenue' width={44} height={44} />
                            <h3 className='mt-5 text-[18px] leading-[27px] font-medium'>Realtime Notifications</h3>
                            <p className='mt-2 text-[#666D80] text-[16px] leading-[25px] font-normal'>Get realtime updates when users start or end subscriptions, or have low funds in their wallet.</p>
                        </div>
                        <div className='flex flex-col items-start text-[#F8FAFB]'>
                            <Image src='/assets/icons/collect-more-revenue.svg' alt='collect-more-revenue' width={44} height={44} />
                            <h3 className='mt-5 text-[18px] leading-[27px] font-medium'>Easy Management</h3>
                            <p className='mt-2 text-[#666D80] text-[16px] leading-[25px] font-normal'>Get realtime updates when users start or end subscriptions, or have low funds in their wallet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureHero