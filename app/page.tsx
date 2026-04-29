import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Partners from "../components/sections/Partners";
import LegalGuidance from "../components/sections/LegalGuidance";
import BoardCertified from "../components/sections/BoardCertified";
import Consult from "../components/sections/Consult";
import Testimonials from "../components/sections/Testimonials";
import Locations from "../components/sections/Locations";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LegalGuidance />
      <BoardCertified />
      <Partners />
      <Consult />
      <Testimonials />
      <Locations />
    </>
  );
}
