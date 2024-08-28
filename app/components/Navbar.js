"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const isIntegrationsPage = pathname === '/integrations';

  const [openDropdown, setOpenDropdown] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownTriggerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !dropdownTriggerRef.current.contains(event.target)
      ) {
        setHovered(false);
        setTimeout(() => {
          if (!hovered) {
            setOpenDropdown(null);
          }
        }, 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [hovered]);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTimeout(() => {
      if (!hovered) {
        setOpenDropdown(null);
      }
    }, 300);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  // Menu data
  const menuData = {
    features: {
      title: 'Features',
      items: [
        { icon: '/path/to/icon1.svg', label: 'Data structure & sources', link: '/data-structure' },
        { icon: '/path/to/icon2.svg', label: 'Automations', link: '/automations' },
        { icon: '/path/to/icon3.svg', label: 'Work & collaboration', link: '/work-collaboration' },
        { icon: '/path/to/icon4.svg', label: 'Reporting', link: '/reporting' },
        { icon: '/path/to/icon5.svg', label: 'Changelog', link: '/changelog' },
      ],
    },
    solutions: {
      title: 'Solutions',
      items: [
        { icon: '/path/to/icon1.svg', label: 'Data structure & sources', link: '/data-structure' },
        { icon: '/path/to/icon2.svg', label: 'Automations', link: '/automations' },
        { icon: '/path/to/icon3.svg', label: 'Work & collaboration', link: '/work-collaboration' },
        { icon: '/path/to/icon4.svg', label: 'Reporting', link: '/reporting' },
        { icon: '/path/to/icon5.svg', label: 'Changelog', link: '/changelog' },
      ],
    },
    resources: {
      title: 'Resources',
      items: [
        { icon: '/path/to/icon1.svg', label: 'Documentation', link: '/documentation' },
        { icon: '/path/to/icon2.svg', label: 'API Reference', link: '/api-reference' },
        { icon: '/path/to/icon3.svg', label: 'Guides', link: '/guides' },
        { icon: '/path/to/icon4.svg', label: 'Tutorials', link: '/tutorials' },
      ],
    }
  };



  return (
    <div className='w-full max-w-[1200px] m-auto'>
      <div className='flex items-center justify-between py-[24px] px-5'>
        <div>
          <Image
            src={isIntegrationsPage ? '/assets/black-logo.svg' : '/assets/logo-footer.svg'}
            alt='logo'
            width={102}
            height={36}
          />
        </div>
        <ul className={`lg:flex hidden items-center gap-5 ${isIntegrationsPage ? 'text-black' : 'text-white'}`}>
          {Object.entries(menuData).map(([key, menu]) => (
            <li
              key={key}
              className='relative'
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              ref={dropdownTriggerRef}
            >
              <Link href={`/${key}`} className='flex items-center gap-1 text-[15px] leading-[25.6px] font-medium'>
                {menu.title}
                <IoIosArrowDown className='text-[16px]' />
              </Link>
              {openDropdown === key && (
                <div
                  ref={dropdownRef}
                  className='absolute top-10 left-0 z-30 w-[300px] bg-white border rounded-lg text-black shadow-lg flex flex-wrap transition-opacity duration-300 opacity-100'
                >
                  <div className='p-4'>
                    <h3 className='text-[16px] font-semibold mb-2'>{menu.title}</h3>
                    <ul className='space-y-2'>
                      {menu.items.map((item, index) => (
                        <li key={index} className='flex items-center gap-2 text-[14px] font-medium'>
                          <Link href={item.link}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li><Link href='/customers' className='text-[15px] leading-[25.6px] font-medium'>Customers</Link></li>
          <li><Link href='/pricing' className='text-[15px] leading-[25.6px] font-medium'>Pricing</Link></li>
        </ul>
        <div className='lg:flex hidden items-center gap-2'>
          <button className='bg-[#1A1B25] border border-[#272835] text-white px-5 h-[40px] rounded-[1000px] text-[14px] leading-[21.7px] font-semibold'>Login</button>
          <button className='bg-[#5F57FF] px-4 h-[40px] rounded-[1000px] text-white text-[14px] leading-[21.7px] font-semibold'>Get Started</button>
        </div>
        <button
          className='lg:hidden block'
          onClick={handleMobileMenuToggle}
        >
          <Image src='/assets/icons/menu.svg' alt='menu' width={24} height={24} className='mt-[-4px]' />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className='fixed top-0 right-0 left-0 w-full h-full bg-black text-white shadow-lg z-50 overflow-scroll py-6 px-5'
        >
          <div>
            <div className='flex items-center justify-between '>
              <Link href='/'>
                <Image
                  src={isIntegrationsPage ? '/assets/black-logo.svg' : '/assets/logo-footer.svg'}
                  alt='logo'
                  width={102}
                  height={36}
                  className='ml-[-5px]'
                />
              </Link>
              <button onClick={handleMobileMenuToggle}>
                <RxCross2 className='text-[24px]' />
              </button>
            </div>
            <MobileMenu />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
