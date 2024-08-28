import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';



const MobileMenu = ({ isIntegrationsPage }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown((prevState) => (prevState === dropdown ? null : dropdown));
    };

    return (
        <>
            <div className='py-6'>
                <ul className='flex flex-col gap-3'>
                    <li className='relative'>
                        <div
                            className='flex items-center justify-between gap-1 text-base font-medium cursor-pointer'
                            onClick={() => handleDropdownToggle('solutions')}
                        >
                            Solutions
                            <IoIosArrowDown className='text-[20px]' />
                        </div>
                        {activeDropdown === 'solutions' && (
                            <div className='w-full px-0 py-2'>
                                <Link href='/solutions/solution1' className='block py-1'>Solution 1</Link>
                                <Link href='/solutions/solution2' className='block py-1'>Solution 2</Link>
                                <Link href='/solutions/solution3' className='block py-1'>Solution 3</Link>
                                <Link href='/solutions/solution4' className='block py-1'>Solution 4</Link>
                            </div>
                        )}
                    </li>
                    <li className='relative'>
                        <div
                            className='flex items-center justify-between gap-1 text-base font-medium cursor-pointer'
                            onClick={() => handleDropdownToggle('features')}
                        >
                            Features
                            <IoIosArrowDown className='text-[20px]' />
                        </div>
                        {activeDropdown === 'features' && (
                            <div className='w-full px-0 py-2'>
                                <Link href='/features/feature1' className='block py-1'>Feature 1</Link>
                                <Link href='/features/feature2' className='block py-1'>Feature 2</Link>
                                <Link href='/features/feature3' className='block py-1'>Feature 3</Link>
                                <Link href='/features/feature4' className='block py-1'>Feature 4</Link>
                            </div>
                        )}
                    </li>
                    <li className='relative'>
                        <div
                            className='flex items-center justify-between gap-1 text-base font-medium cursor-pointer'
                            onClick={() => handleDropdownToggle('more')}
                        >
                            More
                            <IoIosArrowDown className='text-[20px]' />
                        </div>
                        {activeDropdown === 'more' && (
                            <div className='w-full px-0 py-2'>
                                <Link href='/more/option1' className='block py-1'>Option 1</Link>
                                <Link href='/more/option2' className='block py-1'>Option 2</Link>
                                <Link href='/more/option3' className='block py-1'>Option 3</Link>
                                <Link href='/more/option4' className='block py-1'>Option 4</Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link href='/pricing' className='block text-base font-semibold'>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href='/customers' className='block text-base font-semibold'>
                            Customers
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center flex-col gap-2'>
                <button className='bg-[#1A1B25] border border-[#272835] text-white px-5 w-full h-[40px] rounded-[1000px] text-[14px] leading-[21.7px] font-semibold'>
                    Login
                </button>
                <button className='bg-[#5F57FF] px-4 h-[40px] w-full rounded-[1000px] text-white text-[14px] leading-[21.7px] font-semibold'>
                    Get Started
                </button>
            </div>
        </>
    );
};

export default MobileMenu;

