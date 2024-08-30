"use client";
import PaymentEvolution from "./components/PaymentEvolution";
import GetStarted from "./components/GetStarted";
import OurCustomers from "./components/OurCustomers";
import Integrations from "./components/Integrations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set your animation duration
      once: true, // Whether animation should happen only once
      // Additional options can be added here
    });
  }, []);
  return (
    <div className="w-full">
      {/* <Navbar/> */}
      <Hero />
      <PaymentEvolution />
      <GetStarted />
      <Integrations />
      <OurCustomers />
    </div>
  );
}
