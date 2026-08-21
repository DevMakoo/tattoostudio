import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Styles from "@/components/Styles/Styles";
import Portfolio from "@/components/Portfolio";
import Artists from "@/components/Artists";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Styles />
      <Portfolio />
      <Artists />
      <Testimonials />
      <Contact />
    </>
  );
}
