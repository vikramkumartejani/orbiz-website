"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const isIntegrationsPage =
    pathname === "/integrations" ||
    pathname.startsWith("/blog") ||
    pathname === "/career";

  const [openDropdown, setOpenDropdown] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const dropdownRef = useRef(null);
  const dropdownTriggerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [hovered]);

  useEffect(() => {
    return () => {
      // Clean up timeout when component unmounts
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
      }
    };
  }, [leaveTimeout]);

  const handleMouseEnter = (menu) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout); // Clear the timeout if mouse re-enters within 1000ms
      setLeaveTimeout(null);
    }
    setOpenDropdown(menu); // Open the dropdown
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null); // Close the dropdown after 1000ms if mouse doesn't re-enter
    }, 300);
    setLeaveTimeout(timeout); // Save the timeout ID so it can be cleared if needed
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const menuData = {
    features: {
      title: "Features",
      mainTitle: "Features",
      items: [
        {
          title: "Payment Link",
          description: "Learn more about Attio's features.",
          icon: "/assets/icons/resources-help.svg",
          link: "/payment-link",
        },
        {
          title: "Recurring Billing",
          description: "Quick start guides and tutorials.",
          icon: "/assets/icons/resources-help.svg",
          link: "/recurring-billing",
        },
        {
          title: "Invoice Management",
          description: "Help to accelerate your GTM motion.",
          icon: "/assets/icons/resources-help.svg",
          link: "/invoice-management",
        },
        {
          title: "Checkout",
          description: "Learn more about Attio, CRM, and GTM.",
          icon: "/assets/icons/resources-help.svg",
          link: "/checkout",
        },
        {
          title: "Integrations",
          description: "API setup and endpoint references.",
          icon: "/assets/icons/resources-help.svg",
          link: "/integrations",
        },
        {
          title: "Pricing",
          description: "API setup and endpoint references.",
          icon: "/assets/icons/resources-help.svg",
          link: "/pricing",
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
          title: "eCommerce",
          description: "Learn more about Attio's features.",
          icon: "/assets/icons/resources-help.svg",
          link: "/ecommerce",
        },
        {
          title: "Finance Automation",
          description: "Quick start guides and tutorials.",
          icon: "/assets/icons/resources-help.svg",
          link: "/finance-automation",
        },
        {
          title: "Crypto",
          description: "Help to accelerate your GTM motion.",
          icon: "/assets/icons/resources-help.svg",
          link: "/crypto",
        },
        {
          title: "Global Business",
          description: "Learn more about Attio, CRM, and GTM.",
          icon: "/assets/icons/resources-help.svg",
          link: "/global-business",
        },
        {
          title: "Marketplaces",
          description: "API setup and endpoint references.",
          icon: "/assets/icons/resources-help.svg",
          link: "/marketplaces",
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
          title: "Tutorials",
          description: "Learn more about Attio's features.",
          icon: "/assets/icons/resources-help.svg",
          link: "/tutorials",
        },
        {
          title: "Blog",
          description: "Quick start guides and tutorials.",
          icon: "/assets/icons/resources-help.svg",
          link: "/blog",
        },
        {
          title: "Community",
          description: "Help to accelerate your GTM motion.",
          icon: "/assets/icons/resources-help.svg",
          link: "/community",
        },
        {
          title: "Privacy Policy",
          description: "Learn more about Attio, CRM, and GTM.",
          icon: "/assets/icons/resources-help.svg",
          link: "/privacy-policy",
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

  return (
    <div className=" w-full ">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between py-[24px]">
          <div>
            <Link href="/">
              <Image
                src={
                  isIntegrationsPage
                    ? "/assets/black-logo.svg"
                    : "/assets/logo-footer.svg"
                }
                alt="logo"
                width={102}
                height={36}
              />
            </Link>
          </div>
          <ul
            className={`lg:flex hidden items-center gap-5 ${
              isIntegrationsPage ? "text-black" : "text-white"
            }`}
          >
            {Object.entries(menuData).map(([key, menu]) => (
              <li
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave} // Close on leave from the trigger or dropdown
                ref={dropdownTriggerRef}
              >
                <Link
                  href={`/${key}`}
                  className="flex items-center gap-1 text-[15px] leading-[25.6px] font-medium"
                >
                  {menu.title}
                  <IoIosArrowDown className="text-[16px]" />
                </Link>
                {openDropdown === key && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-10 left-0 w-[650px] z-30 bg-white border rounded-lg text-black shadow-lg flex transition-opacity duration-300 opacity-100"
                    onMouseLeave={handleMouseLeave} // Close when mouse leaves the dropdown
                  >
                    <div className="px-4 flex">
                      <div className="border-r py-4 pr-4">
                        <h1 className="text-[16px] font-semibold mb-3">
                          {menu.mainTitle}
                        </h1>
                        {menu.items.map((item, index) => (
                          <div key={index}>
                            <Link
                              href={`/${item.title
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className="flex items-center gap-3 rounded-md p-2 hover:bg-[#2f2d2d83]"
                            >
                              <div className="border min-w-[40px] min-h-[40px] rounded-lg flex items-center justify-center">
                                <Image
                                  src={item.icon}
                                  alt={item.title}
                                  width={35}
                                  height={35}
                                />
                              </div>
                              <div>
                                <h1 className="text-[13px] font-medium">
                                  {item.title}
                                </h1>
                                <p className="text-[13px] opacity-70">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 flex flex-col gap-3">
                        {menu.additionalSection.map((section, index) => (
                          <div key={index}>
                            <h1 className="text-[13px] font-medium opacity-85">
                              {section.title}
                            </h1>
                            <p className="text-[13px] opacity-70">
                              {section.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/customers"
                className="text-[15px] leading-[25.6px] font-medium"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-[15px] leading-[25.6px] font-medium"
              >
                Pricing
              </Link>
            </li>
          </ul>

          <div className="lg:flex hidden items-center gap-4">
            <Link
              href="/login"
              className={`hover:border-white flex items-center justify-center ${
                isIntegrationsPage
                  ? "bg-white text-black border-borderColor"
                  : "bg-[#1A1B25] text-white border-borderColor2"
              } w-[83px] border px-5 h-[40px] rounded-[1000px] hover:scale-100 scale-105 transition-all duration-300 text-[14px] leading-[21.7px] font-semibold`}
            >
              Login
            </Link>
            <Link
              href="/#get-started"
              className="flex items-center justify-center bg-btn w-[120px] h-[40px] rounded-[1000px] text-white text-[14px] leading-[21.7px] hover:scale-100 scale-105 transition-all duration-300 font-semibold"
            >
              Get Started
            </Link>
          </div>
          <button className="lg:hidden block" onClick={handleMobileMenuToggle}>
            <Image
              src={
                isIntegrationsPage
                  ? "/assets/icons/menu-black.svg"
                  : "/assets/icons/menu.svg"
              }
              alt="menu"
              width={24}
              height={24}
              className="mt-[-4px]"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 left-0 w-full h-full bg-black text-white shadow-lg z-50 overflow-scroll py-6 px-5"
          >
            <div>
              <div className="flex items-center justify-between ">
                <Link href="/">
                  <Image
                    src={
                      isIntegrationsPage
                        ? "/assets/black-logo.svg"
                        : "/assets/logo-footer.svg"
                    }
                    alt="logo"
                    width={102}
                    height={36}
                    className="ml-[-5px]"
                  />
                </Link>
                <button onClick={handleMobileMenuToggle}>
                  <RxCross2 className="text-[24px]" />
                </button>
              </div>
              <MobileMenu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
