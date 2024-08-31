'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

const MobileMenu = ({ isIntegrationsPage }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown((prevState) => (prevState === dropdown ? null : dropdown));
    };

    const menuData = {
        features: {
            title: "Features",
            mainTitle: "Features",
            items: [
                {
                    title: "Help center",
                    description: "Learn more about Attio's features.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Getting started",
                    description: "Quick start guides and tutorials.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Templates",
                    description: "Help to accelerate your GTM motion.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Blog",
                    description: "Learn more about Attio, CRM, and GTM.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Developers",
                    description: "API setup and endpoint references.",
                    icon: "/assets/icons/resources-help.svg",
                },
            ],
            additionalSection: [
                {
                    title: "Managing your data",
                    description: "Manage your data in Attio.",
                },
                {
                    title: "Email and calendar",
                    description: "How we sync email and calendars.",
                },
                {
                    title: "Imports and exports",
                    description: "Import and export your data.",
                },
                {
                    title: "Productivity and collaborating",
                    description: "Collaborate with your team in real-time.",
                },
                {
                    title: "Integrations and automations",
                    description: "Connect Attio to your favorite apps.",
                },
            ],
        },
        solutions: {
            title: "Solutions",
            mainTitle: "Solutions",
            items: [
                {
                    title: "Help center",
                    description: "Learn more about Attio's features.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Getting started",
                    description: "Quick start guides and tutorials.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Templates",
                    description: "Help to accelerate your GTM motion.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Blog",
                    description: "Learn more about Attio, CRM, and GTM.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Developers",
                    description: "API setup and endpoint references.",
                    icon: "/assets/icons/resources-help.svg",
                },
            ],
            additionalSection: [
                {
                    title: "Managing your data",
                    description: "Manage your data in Attio.",
                },
                {
                    title: "Email and calendar",
                    description: "How we sync email and calendars.",
                },
                {
                    title: "Imports and exports",
                    description: "Import and export your data.",
                },
                {
                    title: "Productivity and collaborating",
                    description: "Collaborate with your team in real-time.",
                },
                {
                    title: "Integrations and automations",
                    description: "Connect Attio to your favorite apps.",
                },
            ],
        },
        resources: {
            title: "Resources",
            mainTitle: "References",
            items: [
                {
                    title: "Help center",
                    description: "Learn more about Attio's features.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Getting started",
                    description: "Quick start guides and tutorials.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Templates",
                    description: "Help to accelerate your GTM motion.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Blog",
                    description: "Learn more about Attio, CRM, and GTM.",
                    icon: "/assets/icons/resources-help.svg",
                },
                {
                    title: "Developers",
                    description: "API setup and endpoint references.",
                    icon: "/assets/icons/resources-help.svg",
                },
            ],
            additionalSection: [
                {
                    title: "Managing your data",
                    description: "Manage your data in Attio.",
                },
                {
                    title: "Email and calendar",
                    description: "How we sync email and calendars.",
                },
                {
                    title: "Imports and exports",
                    description: "Import and export your data.",
                },
                {
                    title: "Productivity and collaborating",
                    description: "Collaborate with your team in real-time.",
                },
                {
                    title: "Integrations and automations",
                    description: "Connect Attio to your favorite apps.",
                },
            ],
        },
    };

    const renderDropdownItems = (menuKey) => {
        const menu = menuData[menuKey];
        return (
            <div className="flex flex-col">
                <div className="py-2">
                    {menu.items.map((item, index) => (
                        <div>
                            <Link href='/' key={index} className="flex items-center gap-3 rounded-md p-2 hover:bg-[#2f2d2d83]">
                                <div className="border min-w-[40px] min-h-[40px] rounded-lg flex items-center justify-center">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={35}
                                        height={35}
                                    />
                                </div>
                                <div>
                                    <h1 className="text-[13px] font-medium">{item.title}</h1>
                                    <p className="text-[13px] opacity-70">{item.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="p-3 flex flex-col gap-3">
                    {menu.additionalSection.map((section, index) => (
                        <div key={index}>
                            <h1 className="text-[13px] font-medium opacity-85">{section.title}</h1>
                            <p className="text-[13px] opacity-70">{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='py-6'>
                <ul className='flex flex-col gap-5'>
                    <li className='relative'>
                        <div
                            className='flex items-center justify-between gap-1 text-base font-medium cursor-pointer'
                            onClick={() => handleDropdownToggle('solutions')}
                        >
                            {menuData.solutions.mainTitle}
                            <IoIosArrowDown className='text-[20px]' />
                        </div>
                        {activeDropdown === 'solutions' && renderDropdownItems('solutions')}
                    </li>
                    <li className='relative'>
                        <div
                            className='flex items-center justify-between gap-1 text-base font-medium cursor-pointer'
                            onClick={() => handleDropdownToggle('features')}
                        >
                            {menuData.features.mainTitle}
                            <IoIosArrowDown className='text-[20px]' />
                        </div>
                        {activeDropdown === 'features' && renderDropdownItems('features')}
                    </li>
                    <li className='relative'>
                        <div
                            className='flex items-center justify-between gap-1 text-base font-medium cursor-pointer'
                            onClick={() => handleDropdownToggle('resources')}
                        >
                            {menuData.resources.mainTitle}
                            <IoIosArrowDown className='text-[20px]' />
                        </div>
                        {activeDropdown === 'resources' && renderDropdownItems('resources')}
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
