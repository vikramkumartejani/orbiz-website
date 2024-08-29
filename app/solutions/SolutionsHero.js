import Image from 'next/image'
import React from 'react'

const SolutionsHero = () => {
  return (
    <div className='text-white'>
      <div className="mx-auto w-full relative">
        <div className="absolute inset-0 bg-cover opacity-70 bg-bottom" style={{ backgroundImage: "url('/assets/icons/background.png')" }}></div>
        <div className="max-w-[1200px] mx-auto relative text-left flex lg:items-center justify-between lg:flex-row flex-col gap-8 lg:gap-4 z-10 py-12 md:py-16">
          <div className='flex items-start gap-4 flex-col'>
            <div className="shadow-custom border border-[#272835] bg-[#1A1B25] rounded-[1000px] px-3 py-1 max-w-[130px] flex items-center gap-1.5">
              <Image src="/assets/icons/file-text-one.svg" alt="file-text" width={13.33} height={13.33} className='-mt-0.5' />
              <h1 className="text-white text-[13px] leading-[21.7px] font-medium font-custom">SaaS Solution</h1>
            </div>
            <h1 className="text-white text-[48px] sm:text-[66px] sm:leading-[85px] tracking-[-0.01em] font-medium lg:max-w-[702px]">Simplifying Payment Built for SaaS</h1>
            <p className="text-[#666D80] text-[18px] leading-[27.9px] font-normal lg:max-w-[588px] font-custom">Vestibulum velit neque placerat accumsan aliquam lectus elementum sed. Ante dolor dignissim lectus in. Lorem risus nibh in sit. Elementum euismod sodales sed enim vel lorem quis adipiscing.</p>
            <div className="w-full mt-4 flex items-center gap-3 sm:flex-row flex-col">
              <button className="sm:w-[150px] w-full h-[52px] rounded-[1000px] bg-[#5F57FF] shadow-custom text-white text-[16px] font-semibold leading-[24px]">Get Started</button>
              <button className="sm:w-[150px] w-full h-[52px] rounded-[1000px] bg-[#1A1B25] border border-[#272835] shadow-custom text-white text-[16px] font-semibold leading-[24px]">Contact Us</button>
            </div>
            <div className='mt-12 md:block hidden'>
              <p className='text-[#666D80] text-[16px] leading-[25px] font-medium'>Trusted by beloved partner and customer</p>
              <div className='flex items-center gap-8 mt-8'>
                <Image src='/assets/icons/loom.svg' alt='loom' width={90} height={26} />
                <Image src='/assets/icons/retool.svg' alt='loom' width={108} height={24} />
                <Image src='/assets/icons/ramp.svg' alt='loom' width={99} height={26} />
                <Image src='/assets/icons/monzo.svg' alt='loom' width={97} height={26} />
              </div>
            </div>
          </div>
          <div className='bg-custom-bg px-12 py-10 rounded-[20px] max-w-[450px] mx-auto'>
            <Image src='/assets/feature-hero.svg' alt='feature-hero' width={354} height={404} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionsHero