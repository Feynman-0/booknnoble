import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingQuote from "@/components/FloatingQuote";
import Hero from "@/components/sections/Hero";
import StatsMarquee from "@/components/sections/StatsMarquee";
import Services from "@/components/sections/Services";
import SubscribeBanner from "@/components/sections/SubscribeBanner";
import Process from "@/components/sections/Process";
import Impact from "@/components/sections/Impact";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/Portfolio";
import VideoSection from "@/components/sections/VideoSection";
import PagePreview from "@/components/sections/PagePreview";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Professional Book Publishing Services | Book & Noble";
    const desc = "Publish your book with expert Amazon KDP support. Full-service book publishing, writing, formatting, and global distribution for authors.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <>
      <Preloader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsMarquee />
        <Services />
        <SubscribeBanner />
        <Process />
        <Impact />
        <Team />
        <Testimonials />
        <Portfolio />
        <VideoSection />
        <PagePreview />
        <div className="bg-forest h-16 flex items-center border-y border-forest-mid/60">
          <Marquee
            direction="right"
            items={[
              "Book Publishing",
              "Cover Design",
              "Amazon KDP",
              "eBook Conversion",
              "Audiobook Production",
              "ISBN Registration",
              "Editorial Services",
            ]}
            textClassName="text-gold uppercase tracking-[0.25em] text-xs md:text-sm font-medium"
          />
        </div>
        <Blog />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingQuote />
    </>
  );
};

export default Index;
