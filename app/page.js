import PaymentEvolution from "./components/PaymentEvolution";
import GetStarted from "./components/GetStarted";
import OurCustomers from "./components/OurCustomers";
import Integrations from "./components/Integrations";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero/>
      <PaymentEvolution/>
      <GetStarted/>
      <Integrations/>
      <OurCustomers/>
    </div>
  );
}
