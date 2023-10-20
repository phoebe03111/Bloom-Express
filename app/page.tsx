import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
