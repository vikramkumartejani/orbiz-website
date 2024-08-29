import PaymentEvolution from "./components/PaymentEvolution";
import GetStarted from "./components/GetStarted";
import OurCustomers from "./components/OurCustomers";
import Integrations from "./components/Integrations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      {/* <Navbar/> */}
      <Hero/>
      <PaymentEvolution/>
      <GetStarted/>
      <Integrations/>
      <OurCustomers/>
    </div>
  );
}
