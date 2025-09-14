import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Curriculum from "@/components/Curriculum";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Instructor />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
