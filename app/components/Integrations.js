import Image from 'next/image'
import React from 'react'

const Integrations = () => {
    return (
        <div className='w-full px-2 py-5 md:p-5'>
            <div className='w-full border border-[#DFE1E7] rounded-[24px] shadow-custom-one px-4'>
                <div className='max-w-[1200px] w-full mx-auto py-12 md:py-[88px]'>
                    <div className='w-full max-w-[686px] mx-auto text-center'>
                        <div className='border border-[#DFE1E7] shadow-custom-one rounded-[1000px] w-[124px] h-[30px] mx-auto flex items-center justify-center gap-1.5'>
                            <Image src='/assets/icons/briefcase.svg' alt='briefcase' width={16} height={16} />
                            <h4 className='text-[#5F57FF] text-[14px] leading-[21.7px] font-medium'>Integrations</h4>
                        </div>
                        <h1 className='text-[#0D0D12] text-[35px] sm:text-[52px] sm:leading-[65px] font-medium tracking-[-0.01em] mt-2'>Simplify Your Workflow with Orbiz Integrations</h1>
                        <p className='text-[#666D80] text-[16px] sm:leading-[27.9px] font-normal mt-2'>Connect over 80+ partner tools available. Focus on what matters.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <Image src='/assets/integrations.svg' alt='integrations' width={768} height={320} className='py-10' />
                        <button className='bg-[#5F57FF] w-full sm:w-[200px] h-[48px] rounded-[1000px] text-white text-[16px] leading-[24.9px] font-semibold'>Explore Integrations</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrations