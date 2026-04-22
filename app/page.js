import Hero from "./sections/Hero";
import Lead from "./sections/Lead";
import WhatWeDo from "./sections/WhatWeDo";
import Pricing from "./sections/Pricing";
import WhyUs from "./sections/WhyUs";
import FAQs from "./sections/FAQs";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Lead />
      <Marquee theme="dark" />
      <WhatWeDo />
      <Pricing />
      <Marquee theme="light" />
      <WhyUs />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}
