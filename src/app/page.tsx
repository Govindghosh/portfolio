
import Project from "@/components/Project";
import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";
import Technological from "@/components/Technological";
import Approach from "@/components/Approach";
import About from "@/components/About";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0F172A] text-[#f8f8f2] ">
      <HeroSection />
      <About />
      <Technological />
      <Project />
      <Approach />
      <Footer />
    </main>
  );
}
