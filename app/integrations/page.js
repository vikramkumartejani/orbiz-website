'use client'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import Tabs from './Tabs';
import TabsContent from './TabsContent';
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from './Dropdown';
import DropdownTabs from './DropdownTabs';


const Integrations = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];



  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    console.log('Selected Category:', category);
  };

  return (
    <div className="w-full">
      <Navbar />
        <div className="max-w-[1200px] mx-auto w-full relative px-5">
            <div className="absolute inset-0 bg-cover opacity-70 bg-bottom" style={{ backgroundImage: "url('/assets/icons/background.png')" }}></div>
            <div className="relative text-center flex flex-col gap-4 z-10 py-12 pb-12 sm:pb-20">
                <div className="shadow-custom border border-[#DFE1E7] bg-white rounded-[1000px] px-3 py-1 max-w-[118px] mx-auto flex items-center gap-1.5">
                    <Image src="/assets/icons/grid.svg" alt="grid" width={16} height={16} />
                    <h1 className="text-[#5F57FF] text-[14px] leading-[21.7px] font-medium font-custom">Integrations</h1>
                </div>
                <h1 className="text-[#0D0D12] text-[48px] sm:text-[68px] sm:leading-[85px] tracking-[-0.01em] font-medium max-w-[865px] mx-auto">Simplify Your Workflow with Orbiz Integrations</h1>
                <p className="text-[#666D80] text-[18px] leading-[27.9px] font-normal max-w-[540px] mx-auto font-custom">Connect Orbiz to your favorite tools to boost your productivity. Over 80 partner tools available. Focus on what matters.</p>
                <div className="mt-4 flex items-center justify-center gap-3 sm:flex-row flex-col">
                    <button className="sm:w-[150px] w-full h-[52px] rounded-[1000px] bg-[#5F57FF] shadow-custom text-white text-[16px] font-semibold leading-[24px]">Get Started</button>
                    <button className="sm:w-[150px] w-full h-[52px] rounded-[1000px] bg-white border border-[#DFE1E7] shadow-custom text-[#0D0D12] text-[16px] font-semibold leading-[24px]">Contact Us</button>
                </div>
            </div>
        </div>
        <div className='bg-white max-w-[1200px] w-full mx-auto py-20 px-5'>
            <div className='flex items-start md:gap-8 lg:gap-14 w-full'>
                <div>
                    <Tabs onSelectCategory={handleCategoryChange} />
                </div>

                <div className='w-full'>
                    <div className='min-w-full mb-8 sm:mb-10 flex items-center justify-between gap-3 sm:gap-2 md:flex-row flex-col'>
                        <div className='border border-[#DFE1E7] shadow-custom w-full md:w-[300px] h-[40px] rounded-lg flex items-center gap-2 px-3'>
                            <Image src='/assets/icons/search.svg' alt='search' width={20} height={20} />
                            <input type='text' placeholder='Search' className='border-none outline-none bg-transparent text-[#818898] text-[16px] leading-[25px] font-normal' />
                        </div>
                        <div className='w-full md:w-fit flex items-center flex-col justify-between gap-3'>
                            <div className='w-full block md:hidden'>
                                <DropdownTabs onSelectCategory={handleCategorySelection} />
                            </div>
                            <Dropdown options={options} placeholder="Latest Updated" />
                        </div>
                    </div>
                    <TabsContent category={selectedCategory} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Integrations;
