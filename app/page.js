"use client";
import PaymentEvolution from "./components/PaymentEvolution";
import GetStarted from "./components/GetStarted";
import OurCustomers from "./components/OurCustomers";
import Integrations from "./components/Integrations";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  
      once: false, 
      loop: true,
    });
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <PaymentEvolution />
      <GetStarted />
      <Integrations />
      <OurCustomers />
    </div>
  );
}
